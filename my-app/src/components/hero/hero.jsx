import React from 'react'
import video from '../../assets/video/BackgroundVideo.mp4' // Import the video file
import './style.css'; // Import the CSS file for styling

const hero = () => {
  return (
    <>
       {/* Video container */}
      <div className="relative w-full h-screen overflow-hidden p-[32px_10px_32px_64px] z-0">
        <video autoPlay muted loop className="mt-16">
          <source src={video} type="video/mp4" />Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>
            {/* <span>
              Together, we <br />
              Turn Ambition <br />
              into Action.
            </span> */}
            </h1>
        </div>
      </div>

      {/* Hero section */}
      <section className="hero bg-gray-100 me-16 relative bottom-40 h-11/12 pb-[104px]">
        <div className="sectionHeader mb-20 ps-16 w-full ">
          <div className="bg-sky-800 block">
            <h1 className='text-white p-14 w-[70%]'>For more than three decades, we’ve captured undiscovered market opportunities by empowering extraordinary people to pursue their best and boldest ideas.</h1>
          </div>
        </div>
        <div className="sectionContent p-[10px_10px_10px_64px]">
          <div className="flex space-x-4">
            <div className="w-1/4 p-4">
              <p className='text-[#144aa5]'>Who we are</p>
            </div>
            <div className="w-3/4 p-[16px_16px_16px_32px] vertical">
              <h1 className='text-3xl font-semibold mb-16 text-[#112e61]'>Our ambition is to be the most successful investment firm of all time. We strive to identify the highest and best uses of capital to generate superior long-term returns for the world’s preeminent public and private institutions.</h1>
              <a href='#' className="bg-[#144aa5] text-white p-4 mt-5 cursor-pointer transition-all ease-in-out duration-200 hover:bg-amber-300 hover:text-black">
                Explore who we are
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* I'll come back for the complete styling  */}
    </>
  );
};

export default hero;