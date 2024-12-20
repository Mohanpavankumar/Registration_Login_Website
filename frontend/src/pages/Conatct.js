import React from 'react'

const Conatct = () => {
  return (
    <div>
      <form className='p-5 flex flex-col gap-2' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label>Email :</label>
                    <div className='bg-slate-100 p-2'>
                        <input type='email' 
                        placeholder='enter email'
                        name= 'email'
                        value={data.email}
                        onChange={handleOnChange}
                        required 
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>
                </div>

                <div>
                    <label>Password :</label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type={showPassword ? "password" : "text"}
                        placeholder='enter password'
                        name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        required 
                        className='w-full h-full outline-none bg-transparent'/>
                    </div>
                    <Link to={'/forgot-Password'} className='block w-fit ml-auto hover:underline hover:text-blue-600 '>
                        Submit
                    </Link>
                </div>

                <button className='bg-blue-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-blue-800 transition-all mx-auto block mt-8'>Login</button>
            </form>
    </div>
  )
}

export default Conatct;