import React from "react";

const LogComponent = ({ logs }) => {
  const { postType, details, date } = logs;


  const year = date.slice(0,4);
  const month = date.slice(5,7);
  const day = date.slice(8,10);
  console.log(date)
  let hour = date.slice(11,13);
  const minute = date.slice(14,16);
  let timeOfDay = 'am'
  Number(hour);

  if (hour > 12) {
    timeOfDay = 'pm'
    hour -= 12
  }

  const newTime = `${hour}:${minute}`
  const newDate = `${month}/${day}/${year}`;
  

  return (
    <div className="logcomponent">
      <img className="notesIcon" src="https://www.computerhope.com/jargon/n/notes.png"></img>
      <div className="loginfo">
        <span className="activity">{postType}</span>
        <span className="details">{details}</span>
        <span className="time">{`${newDate} at ${newTime}${timeOfDay}`}</span>
      </div>
    </div>
  );
};

export default LogComponent;
