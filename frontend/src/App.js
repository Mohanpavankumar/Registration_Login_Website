import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './EndPoints/index';
import Context from './context';

function App() {

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

        if(dataApi.success){
          
        }

        console.log("data-user", dataApi);
    } catch (error) {
        console.error("Error in fetchUserDetails:", error);
    }
};


  useEffect(() =>{
    /* User Details */
    fetchUserDetails()
  },[])
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
