import React from "react";

const LogComponent = ({ logs }) => {
  const { postType, details, date } = logs;

  let formatDate = date.substring(0,10)
  formatDate = formatDate.split('-'); 
  formatDate = formatDate.reverse().join('/')

  let formatTime = date.substring(11, 16)

  return (
    <div className="logcomponent">
      <img className="notesIcon" src="https://www.computerhope.com/jargon/n/notes.png"></img>
      {/* <h3 className="logname">Oil Rig Placeholder</h3> */}
      <div className="loginfo">
        <span className="activity">{postType}</span>
        <span className="details">{details}</span>
        <span className="time">{`${formatDate} at ${formatTime}`}</span>
      </div>
      
    </div>
  );
};

export default LogComponent;
