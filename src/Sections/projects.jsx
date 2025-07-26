import { FaReact } from 'react-icons/fa';
import '../App.css';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
function Projects() {
    return (
        <>
            <h1 className='flex justify-center text-5xl font-bold pt-40 pb-2' id='ps'>Projects</h1>
            <p className='flex justify-center text-1xl font-thin'>See what I Do, am Doing and can DO</p>
            <div className='md:pl-40 pl-5 md:pr-40 pt-20  pb-10 md:flex gap-10'>
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
                    <div className='p-6 flex items-center md:gap-4 gap-1'>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-3 pt-3'><FaReact /></div><h5 className=' md:text-sm md:p-2  p-3 text-xs font-bold'>React.js</h5></div>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiJavascriptFill /></div><h5 className=' md:text-sm text-xs md:p-2  p-3 font-bold'>JavaScript</h5></div>
                        <div className='rounded-full w-32 h-10 text-center bg-gray-900 text-white flex gap-1'><div className=' pl-1 pt-3'><RiTailwindCssFill/></div><h5 className=' md:text-sm text-xs md:p-2  px-3 pt-2 font-bold'>Tailwind CSS</h5></div>

                    </div>
                    <div className='flex gap-4 md:pl-36 pl-7'>
                        <div className='pl-5'><button className='rounded-3xl bg-white text-black px-6 py-2 border border-black' onClick={() => (window.location.href = 'https://github.com/mauryamj/Personalized-Poem')}>GitHub</button></div>
                        <div className='pl-5'><button className='rounded-3xl bg-white text-black px-6 py-2 border border-black' onClick={() => (window.location.href = 'https://personalisedpoetry.netlify.app/')}>Netlify</button></div>
                    </div>
                </div>



            </div>
        </>

    )

}
export default Projects