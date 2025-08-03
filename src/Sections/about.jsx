import { FaIdCard, FaLightbulb, FaMailBulk, FaMailchimp, FaPhone, FaSchool, FaSearch, FaVoicemail } from 'react-icons/fa';
import '../App.css';
import { FaLocationPin, FaMapLocation } from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Abhishek_Resume_FroentendDeveloper.pdf';
        link.click();
    }
    const ref = useRef(null);
    const isVisible = useInView(ref, { amount: 1.0, once: true })
    return (
        <>
            <motion.h1
            ref = {ref}
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
               
                transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex justify-center text-5xl font-bold pt-40 pb-2'>About Me</motion.h1>
            <motion.p
            ref = {ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
               
                transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex justify-center text-1xl font-thin'>know more about me and Discover my journey</motion.p>
            <motion.div
            className='flex  md:pl-20'>
                <motion.img 
                ref = {ref}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
               
                transition={{ duration: 0.6, ease: "easeOut" }}
                src='/logo2.svg' className='pl-40 h-96 hidden xl:block' />
                <div className=' pt-20 md:pr-40 pl-5 md:pl-0 md:pb-10 md:flex md:w-screen justify-end'>

                    <div className='md:flex-0'>
                        <motion.div 
                        ref = {ref}
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                
                transition={{ duration: 0.6, ease: "easeOut" }}
                        className='md:pt-6 md:flex  gap-10 items-center'>
                            <div>
                                <h1 className=' flex gap-1 text-2xl font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaSearch /></div>Who am I</h1>
                                <p className='max-w-xs'>I am a Frontend Developer who crafts responsive,interactive and clean UI.with Certification on Responsive web developer</p>
                            </div>
                            <div className='pt-5 md:pt-0'>
                                <h1 className='flex gap-1 text-2xl font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaLightbulb /></div>My Approach</h1>
                                <p className='max-w-xs'>I focus on user centered design with the minset and point on view throught customer</p>
                            </div>


                        </motion.div>
                        <motion.div 
                        ref = {ref}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
             
                transition={{ duration: 0.6, ease: "easeOut" }}
                        className='pt-5'>
                            <h1 className='text-3xl font-bold'>Personal Info</h1>
                            <div className='mf:flex  gap-10 items-center'>
                                <div className='max-w-sm'>
                                    <h6 className='flex pt-3 gap-2 items-center font-bold'> <div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaIdCard /></div>Name:<p className='font-thin'>Abhishek Maurya</p></h6>
                                    <h6 className='flex pt-3 gap-2 items-center font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaMapLocation /></div>Place:<p className='font-thin'>Pune,Maharashtra</p></h6>
                                    <h6 className='flex pt-3 gap-2 items-center font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaPhone /></div>phone:<p className='font-thin'>+91 73877 40036</p></h6>
                                </div>
                                <div className='max-w-sm'>
                                    <h6 className='flex pt-3 gap-2 items-center font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaMailBulk /></div>Email:<p className='font-thin'>mauryamj322gmail.com</p></h6>
                                    <h6 className='flex pt-3 gap-2 items-center font-bold'><div className='bg-gray-900 text-white h-9 w-9 text-base rounded-xl border p-2'><FaSchool /></div>Education:<p className='font-thin'>Marathwada Mitra mandal College of Commerce</p></h6>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                        ref = {ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
           
                transition={{ duration: 0.6, ease: "easeOut" }}
                        className='pt-5'>
                            <button className='rounded-md bg-white text-black p-2 border border-black hover:bg-black hover:text-white hover:border-black active:bg-blue-900 active:text-white' onClick={handleDownload}>Download Resume</button></motion.div>
                    </div>
                </div>

            </motion.div>
        </>

    )

}
export default About