import React, { useState } from 'react';
import SummaryApi from '../EndPoints/index';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    setFormData({ name: '', email: '', message: '' });

    const dataResponse = await fetch(SummaryApi.Contact.url,{
        method : SummaryApi.Contact.method,
        credentials : "include",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(formData)
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
        <div className='grid'>
            <label>Name :</label>
            <div className='bg-slate-100 p-2'>
                <input type='text' 
                placeholder='enter name'
                name= 'name'
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                required 
                className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>
        <div>
            <label>Message :</label>
            <div className='bg-slate-100 p-2'>
                <input type='text' 
                placeholder='enter message'
                name= 'text'
                value={formData.message}
                onChange={handleChange}
                className='w-full h-full outline-none bg-transparent'/>
            </div>
        </div>
        <button type='submit' className='bg-blue-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-blue-800 transition-all mx-auto block mt-8'>Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  )
}

export default Contact;