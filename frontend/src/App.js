import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './EndPoints/index';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';


function App() {
  const dispatch = useDispatch(); // Initialize dispatch

  //Fetching user details
  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      if (!dataResponse.ok) {
        console.error("Error fetching user details:", dataResponse.status, dataResponse.statusText);
        return;
      }

      const dataApi = await dataResponse.json();

      if (dataApi.success && dataApi.data) {
        console.log("Fetched user data:", dataApi.data);
        dispatch(setUserDetails(dataApi.data)); // Update Redux store
      } else {
        console.error("Error in API response:", dataApi.message);
      }
    } catch (error) {
      console.error("Error in fetchUserDetails:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails  //fetching user details
      }}>
        <ToastContainer />
        <Header/>
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet/>
        </main>
        <Footer/>

      </Context.Provider>
    </>
  );
}

export default App;
