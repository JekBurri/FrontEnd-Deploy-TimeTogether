import React from "react";

const UpcomingEvents = ({ events }) => {
    return (<>
        <div className="UpcomingEvents">
            <h2>Today's Events</h2>
            {events
                &&
                events.map((event, index) => {
                    return <div key={index}>
                        <img src="https://www.pngfind.com/pngs/m/269-2698936_green-dot-icon-png-green-online-icon-png.png" height="10px"></img> 
                        {event.name} - {event.date}<br></br>
                    </div>
                })
            }
            <p>it looks like you have nothing planned today.</p>
        </div>
    </>
    )
}

export default UpcomingEvents;