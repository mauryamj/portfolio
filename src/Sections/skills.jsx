import { FaCss3, FaGit, FaGithub, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import '../App.css';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaFlutter } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DiPostgresql } from 'react-icons/di';

function Skills() {
    const ref = useRef(null);
    const isVisible = useInView(ref, { amount: 0.1, once: true })
    return (
        <>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-center text-5xl font-bold pt-40 pb-2' id='ps'>Skills</motion.h1>
            <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-center text-1xl font-thin'>The Path to Fullstack</motion.p>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='xl:p-40 p-5'>
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
                    <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><DiPostgresql /></div><h5 className=' text-sm p-2 font-bold'>PostgreSQL</h5></div>
                                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaPython /></div><h5 className=' text-sm p-2 font-bold'>Python</h5></div>

                    <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-2'>C</div><h5 className=' text-sm p-2 font-bold'>C</h5></div>
                </div>
            </motion.div>

        </>

    )

}
export default Skills