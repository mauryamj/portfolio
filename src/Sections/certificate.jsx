import { FaCss3, FaExternalLinkAlt, FaHtml5, FaReact } from 'react-icons/fa';
import '../App.css';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function Certificates() {
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
                className='flex justify-center text-5xl font-bold pt-40 pb-2' id='ps'>Certificates</motion.h1>
            <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex justify-center text-1xl font-thin'>Look what i know </motion.p>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='xl:pl-40 md:pl-20 pl-5 xl:pr-40 pt-20  pb-10 flex gap-10'>
                <div>
                    <h1 className='text-2xl font-bold'>Responsive Web Design</h1>
                    <h3 className='text-1xl font-semibold'>FreeCodeCamp</h3>
                    <ul className='list-disc max-w-xl p-10 space-y-3'>
                        <li>Completed freeCodeCamp's 300-hour Responsive Web Design certification with project-based learning.</li>
                        <li>Built responsive layouts using HTML5, CSS3, Flexbox, and Grid, following mobile-first principles.</li>
                        <li>Created multiple real-world web pages: portfolio, landing page, survey form, and technical documentation.</li>
                        <li>Applied accessibility, semantic HTML, and modern UI practices to ensure cross-device compatibility.</li>
                        <li>Improved frontend design skills through hands-on CSS styling and layout problem-solving.</li>

                    </ul>
                    <div className='p-6 flex items-center xl:gap-4 gap-1'>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaHtml5 /></div><h5 className=' md:text-sm md:p-2  p-3 text-xs font-bold'>Html</h5></div>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><FaCss3 /></div><h5 className=' md:text-sm text-xs md:p-2  p-3 font-bold'>CSS</h5></div>

                    </div>
                    <div className='flex items-center gap-4 xl:pl-36 pl-7'>
                        <div className='pl-5 '><button className='rounded-3xl bg-white text-black px-6 py-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white flex gap-1' onClick={() => (window.location.href = 'https://www.freecodecamp.org/certification/mauryamj/responsive-web-design')}>Show credential<FaExternalLinkAlt/></button></div>
                    </div>
                </div>



            </motion.div>
        </>

    )

}
export default Certificates