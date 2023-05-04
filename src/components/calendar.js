import React, { useEffect, useState, useContext } from "react";
import Header from "./header";
import { GroupContext } from "../context/group-context.js";
import axios from 'axios'
import datejs from "datejs";
import CalendarTile from "./calendar-tile";

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const Calendar = () => {
    const [group, setGroup] = useContext(GroupContext);
    const currentDay = new Date();
    const date = currentDay.getDate();
    const [events, setEvents] = useState([]);
    const [currentDate, setCurrentDate] = useState(currentDay);

    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay());

    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let numOfDays = daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());
    useEffect(() => {
        const dayElements = document.querySelectorAll('.daynum');
        dayElements.forEach((dayElement) => {
            const day = parseInt(dayElement.innerHTML);
            if (day === date) {
                dayElement.classList.add("todaysDate")
            }
        });
    }, []);

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.addMonths(1)));
        setFirstDayOfMonth(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay())
    }

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.addMonths(-1)));
        setFirstDayOfMonth(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay())
    }
    let groupName = group && group.Name;



    // useEffect(()=>{
    group && group.Events && group.Events.forEach((event) => {
        // console.log(event)
        axios.post(`http://localhost:3000/getEventById`, { id: event })
            .then((data) => {
                // console.log(data.data);
                setEvents([...events, data.data]);
            })
            .catch((e) => console.log(e))

    })

    //!TEMP
    function foo(i) {
        let dayEvents = []
        let d = i + 1
        let m = currentDate.getMonth() + 1
        dayEvents = events.map((event) => {
            d = ((i + 1) < 10)
                ? "0" + (i + 1)
                : (i + 1);
            m = (currentDate.getMonth() + 1 < 10)
                ? "0" + (currentDate.getMonth() + 1)
                : currentDate.getMonth() + 1;

            if (event.Date === `${currentDate.getFullYear()}-${m}-${d}`) {
                return event
            }
        }).filter(el => el !== undefined);
        return dayEvents
    }

    return (<>
        <Header groupName={groupName} />
        <section id="calendar">
            <div className="arrowcontainer">
                <i className="leftarrow" onClick={prevMonth}>&#8592; </i>
                <h1 className="monthname">{monthsList[currentDate.getMonth()]} <span className="yearname">{currentDate.getFullYear()}</span></h1>
                <i className="rightarrow" onClick={nextMonth}>&#8594;</i>
            </div>
            <div className="calendar">
                <div>
                    <div className="calendar-row">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                </div>
                <div>

                    <div className="calendar-row">
                        {[...Array(firstDayOfMonth)].map((x, i) => {
                            return (
                                <CalendarTile key={i} />
                            )
                        }
                        )}
                        {[...Array(numOfDays)].map((x, i) => {
                            
                            // dayEvents && console.log(dayEvents);
                            return (
                                <CalendarTile key={i} propEvents={foo(i)} propDate={i+1} />
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Calendar;