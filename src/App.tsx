import './App.css'
import InputColor from './components/InputColor'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />

      <div className='max-w-2xl px-6 mx-auto mt-1 md:mt-2 md:mb-2 mb-2'>
        <div className='rounded-full mt-8 h-10 bg-yellow-300 text-yellow-700 flex md:flex justify-center cursor-pointer'>
          <span className='m-auto'>under development!</span>
        </div>

        <div className='text-center'>
          <h1 className='mt-8 text-5xl font-bold'>
            Color Generator
          </h1>
          <p className='mt-4 font-base text-lg text-gray-500'>
            Press spacebar, enter a hexcode or change the<br/>
            HSL values to create a custom color scale.
          </p>
        </div>

        <InputColor />

        {/* <div className="relative inline-block w-7 h-7">
          <input type="color" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"/>
          <div className="w-full h-full rounded-full border border-gray-300"></div>
        </div> */}

      </div>  
    </div>
  )
}
