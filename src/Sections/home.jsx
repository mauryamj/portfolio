import '../App.css';
import { FaChevronCircleDown, FaGithub, FaLinkedin, FaSuitcase } from 'react-icons/fa';
import { FaCircleChevronUp, FaThreads } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import Projects from './projects';

function Home() {
  const handleDownload = () =>{
  const link = document.createElement('a');
  link.href='/Resume.pdf';
  link.download='Abhishek_Resume_FroentendDeveloper.pdf';
  link.click();
}
  return (
    
    <>
          <h1 className='text-black-600 text-2xl font-bold p-4  font-winkey-rough'>{`</> My Portfolio`}</h1>

    <div className='flex gap-0'>
    <div className='items-stretch'>

    </div>
    <div className='xl:pl-40 md:pl-20 xl:pt-20 pl-5 pt-5'>
      <h1 className='font-bold text-6xl '>Hi, I'm Abhishek <br/> Maurya</h1>
      <h6 className='font-semibold text-3xl pt-3'>Frontend Developer</h6>
      <p className='pt-6 text-sm md:text-base font-semibold md:max-w-md max-w-xs'>I build modern ,responsive web design with clean UI and smooth UX with a clean code to create experience that feel intuitive ,fast and delightful to use. </p>
      <div className=' flex  items-center text-2xl flex-nowrap gap-4 pt-6' ><h3 className='text-sm'>follow me on</h3>
        <button ><FaGithub onClick={() => (window.location.href = 'https://github.com/mauryamj')} className='text-3xl hover:text-blue-700'/></button>
        <button><FaLinkedin onClick={() => (window.location.href = 'https://www.linkedin.com/in/mauryamj')}className='text-3xl hover:text-blue-700'/></button>
        <button><FaThreads onClick={() => (window.location.href = 'https://www.threads.com/@mauryamj_')}className='text-3xl hover:text-blue-700'/></button></div>
      <div className='pt-6 flex  items-center'>
        <div><button className='rounded-md bg-gray-900 text-white p-2 hover:bg-gray-300 hover:text-black active:bg-blue-900 active:text-white'
        onClick={
          ()=> 
            {const section = document.getElementById('ps')
            if(section){
              section.scrollIntoView({ behavior: "smooth" });
            }}
        }>Explore My Projects</button></div>
        <div className='pl-5'><button className='rounded-md bg-white text-black p-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white' onClick={handleDownload}>Download Resume</button></div>
      </div>
      <div className='pt-5'>
        <h6>Quick Stats:</h6>
        <div className='pt-6 flex items-center gap-4  '>
          <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1 '><div className=' pl-3 pt-3'><FaSuitcase/></div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold '>Fresher</p>experience</h5></div>
          <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiJavascriptFill/></div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold'>JavaScript</p>Main Language</h5></div>
          <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-2'>{`</>`}</div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold'>2+ project</p>Total Project</h5></div>

        </div>
      </div>
    </div>
    <img src='/logo.svg' className='pl-10 pr-40 hidden xl:block '/>
    </div>
    </>
  )
}

export default Home