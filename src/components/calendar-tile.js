import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const CalendarTile = ({ propEvents, propDate }) => {
    const [events, setEvents] = useState(propEvents);
    const [date, setDate] = useState(propDate)
    let grayoutClass = !propDate ? "grayout numofday" : "numofday";
    // propEvents
    // propEvents
    return (
        <div
            className={grayoutClass}

            onClick={() => console.log('s')}>
            <span className="daynum">
                {date}
                {!!propEvents && !!propEvents.length &&
                    <div className="current"><FontAwesomeIcon className="column messageIcon eventtiledot" icon={faDotCircle} /><p className="small">{propEvents[0].Name} </p></div>
                    // propEvents.map((event,i)=>{
                    //     return 

                    // })
                }
            </span>
        </div>)
}
export default CalendarTile;