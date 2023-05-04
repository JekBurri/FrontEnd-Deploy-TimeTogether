import React, { useEffect, useState, useContext } from "react";
import Calendar from "../components/calendar"
import UpcomingEvents from "../components/upcoming-events";
import "../styles/style.css"
import "../styles/burgermenuStyle.css"
import { GroupContext } from "../context/group-context.js"

// import 'bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => {
  const [group, setGroup] = useState({"Name":"foo"});


  return (
    <GroupContext.Provider value={[group, setGroup]}>
      <main>
        <Calendar />
        <UpcomingEvents events={""} />
      </main>
    </GroupContext.Provider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
