import { FaCss3, FaGit, FaGithub, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import '../App.css';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaFlutter } from 'react-icons/fa6';
function Skills() {
    return (
        <>
            <h1 className='flex justify-center text-5xl font-bold pt-40 pb-2' id='ps'>Skills</h1>
            <p className='flex justify-center text-1xl font-thin'>The Path to Fullstack</p>
            <div className='xl:p-40 p-5'>
            <div className='p-6 flex flex-wrap xl:items-center  gap-4 xl:pl-60 xl:pr-40 ' >
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaReact /></div><h5 className=' text-sm p-2 font-bold'>React.js</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiJavascriptFill /></div><h5 className=' text-sm p-2 font-bold'>JavaScript</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiTailwindCssFill /></div><h5 className=' text-sm p-2 font-bold'>Tailwind CSS</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaHtml5 /></div><h5 className=' text-sm p-2 font-bold'>Html</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaCss3 /></div><h5 className=' text-sm p-2 font-bold'>CSS</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaFlutter /></div><h5 className=' text-sm p-2 font-bold'>Flutter</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaPython /></div><h5 className=' text-sm p-2 font-bold'>Python</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaGit /></div><h5 className=' text-sm p-2 font-bold'>Git</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaGithub /></div><h5 className=' text-sm p-2 font-bold'>GitHub</h5></div>
                <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-2'>C</div><h5 className=' text-sm p-2 font-bold'>C</h5></div>
            </div>
            </div>

        </>

    )

}
export default Skills