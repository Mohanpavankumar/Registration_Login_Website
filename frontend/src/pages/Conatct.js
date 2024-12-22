import React from 'react'
import { toast } from 'react-toastify';

const Conatct = () => {

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url,{
        method : SummaryApi.signIn.method,
        credentials : "include",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })

  const dataApi = await dataResponse.json();

  //toast messages
  if(dataApi.success){
      toast.success(dataApi.message);
  }
  if(dataApi.error){
      toast.error(dataApi.message);
  }
  }

  return (
    <div>
      <form className='p-5 flex flex-col gap-2' onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <div className='bg-slate-100 p-2 flex'>
              <input 
              type='name'
              placeholder='enter name'
              name='name'
              value={data.name}
              required 
              className='w-full h-full outline-none bg-transparent'/>
        </div>
        </div>
        <div className='grid'>
            <label>Email :</label>
            <div className='bg-slate-100 p-2'>
                <input type='email' 
                placeholder='enter email'
                name='email'
                value={data.email}
                required 
                className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>
        <div>
            <label>Description :</label>
            <div className='bg-slate-100 p-2'>
                <input type='text' 
                placeholder='enter description'
                name= 'text'
                required 
                className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>
        <button className='bg-blue-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-blue-800 transition-all mx-auto block mt-8'>Send</button>
      </form>
    </div>
  )
}

export default Conatct;