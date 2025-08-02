import '../App.css';
import { FaChevronCircleDown, FaGithub, FaLinkedin, FaSuitcase } from 'react-icons/fa';
import { FaCircleChevronUp, FaThreads } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import Projects from './projects';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Abhishek_Resume_FroentendDeveloper.pdf';
    link.click();
  }
  const ref = useRef(null);
  const isVisible = useInView(ref, { amount: 0.1, once: false })
  return (

    <>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-black-600 text-2xl font-bold p-4  font-winkey-rough'>{`</> My Portfolio`}</motion.h1>

      <div className='flex gap-0'>
        <div className='items-stretch'>

        </div>
        <motion.div

          className='xl:pl-40 md:pl-20 xl:pt-20 pl-5 pt-5'>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='font-bold text-6xl '>Hi, I'm Abhishek <br /> Maurya</motion.h1>
          <motion.h6
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='font-semibold text-3xl pt-3'>
            <span
            >
              <Typewriter
                words={['Frontend', 'Full-Stack', 'Web', 'MERN']}
                loop={0}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{' '}
            Developer
          </motion.h6>

          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='pt-6 text-sm md:text-base font-semibold md:max-w-md max-w-xs'>I build modern ,responsive web design with clean UI and smooth UX with a clean code to create experience that feel intuitive ,fast and delightful to use. </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=' flex  items-center text-2xl flex-nowrap gap-4 pt-6' ><h3 className='text-sm'>follow me on</h3>
            <button ><FaGithub onClick={() => (window.location.href = 'https://github.com/mauryamj')} className='text-3xl hover:text-blue-700' /></button>
            <button><FaLinkedin onClick={() => (window.location.href = 'https://www.linkedin.com/in/mauryamj')} className='text-3xl hover:text-blue-700' /></button>
            <button><FaThreads onClick={() => (window.location.href = 'https://www.threads.com/@mauryamj_')} className='text-3xl hover:text-blue-700' /></button></motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='pt-6 flex  items-center'>
            <div><button className='rounded-md bg-gray-900 text-white p-2 hover:bg-gray-300 hover:text-black active:bg-blue-900 active:text-white'
              onClick={
                () => {
                  const section = document.getElementById('ps')
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }>Explore My Projects</button></div>
            <div className='pl-5'><button className='rounded-md bg-white text-black p-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white' onClick={handleDownload}>Download Resume</button></div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='pt-5'>
            <h6>Quick Stats:</h6>
            <div className='pt-6 flex items-center gap-4  '>
              <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1 '><div className=' pl-3 pt-3'><FaSuitcase /></div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold '>Fresher</p>experience</h5></div>
              <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiJavascriptFill /></div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold'>JavaScript</p>Main Language</h5></div>
              <div className='rounded-full md:w-32 h-10 w-24 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-2'>{`</>`}</div><h5 className='text-[8px] md:text-xs p-2 md:p-1'><p className='font-bold'>2+ project</p>Total Project</h5></div>

            </div>
          </motion.div>
        </motion.div>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}

          src='/logo.svg' className='pl-10 pr-40 hidden xl:block ' />
      </div>
    </>
  )
}

export default Home