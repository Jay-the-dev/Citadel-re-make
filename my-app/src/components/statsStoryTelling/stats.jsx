import React from 'react'
import './stats.css'; // Import the CSS file for styling

const stats = (props) => {
  return (
    <>
        <div className="w-1/3 section pl-7 pr-12 ">
            <h1 className="sectionFigure text-7xl mb-20 font-bold text-[#082d86]">{props.num}</h1>
            <p className="sectionText">{props.text}</p><br /><br />
            <p className="sectionText">{props.paragraph}</p>
        </div>
    </>
  )
};

export default stats;