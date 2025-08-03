import { FaReact } from 'react-icons/fa';
import '../App.css';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function Projects() {
    const ref = useRef(null);
    const isVisible = useInView(ref, { amount: 0.1, once: true })
    return (
        <>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-center text-5xl font-bold pt-40 pb-2' id='ps'>Projects</motion.h1>
            <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-center text-1xl font-thin'>See what I Do, am Doing and can DO</motion.p>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='xl:pl-40 md:pl-20 pl-5 xl:pr-40 pt-20  pb-10 xl:flex gap-10'>
                <div>
                    <h1 className='text-2xl font-bold'>Library website(in progress)</h1>
                    <ul className='list-disc max-w-xl p-10'>
                        <li>This project is in Progress and will get update when atleast 40% of the project is complete</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Personalized Poetry (Mobile Website)</h1>
                    <ul className='list-disc max-w-xl p-10 space-y-3'>
                        <li>Developed a dynamic web app that generates poetic lines for each letter in a user’s name using a structured JSONdataset.</li>
                        <li>Enabled random theme switching using CSS variables and useState, with smooth UI transitions.</li>
                        <li>Deployed via GitHub → Netlify CI/CD for automatic updates.</li>
                        <li>Strengthened skills in React hooks, UI design patterns, and real-time user interaction</li>
                    </ul>
                    <div className='p-6 flex items-center xl:gap-4 gap-1'>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaReact /></div><h5 className=' md:text-sm md:p-2  p-3 text-xs font-bold'>React.js</h5></div>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiJavascriptFill /></div><h5 className=' md:text-sm text-xs md:p-2  p-3 font-bold'>JavaScript</h5></div>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiTailwindCssFill /></div><h5 className=' md:text-sm text-xs md:p-2  px-3 pt-2 font-bold'>Tailwind CSS</h5></div>

                    </div>
                    <div className='flex gap-4 xl:pl-36 pl-7'>
                        <div className='pl-5'><button className='rounded-3xl bg-white text-black px-6 py-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white' onClick={() => (window.location.href = 'https://github.com/mauryamj/Personalized-Poem')}>GitHub</button></div>
                        <div className='pl-5'><button className='rounded-3xl bg-white text-black px-6 py-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white' onClick={() => (window.location.href = 'https://personalisedpoetry.netlify.app/')}>Netlify</button></div>
                    </div>
                </div>



            </motion.div>
        </>

    )

}
export default Projects