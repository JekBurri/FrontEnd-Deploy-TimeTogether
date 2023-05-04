import React, { useState, useContext } from "react";
import { elastic as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { GroupContext } from "../context/group-context.js";

// import 'bootstrap/dist/css/bootstrap.min.css';
const Burger = ({currentGroup}) => {
  const [group, setGroup] = useContext(GroupContext);
  const [groups, setGroups] = useState([]);

  const showSettings = (event) => {
    event.preventDefault();
  }
  
  axios.get(`http://localhost:3000/getAllGroups`)
    .then((data) => {
      // clearTiles()
      setGroups(data.data);
    })
    .catch((e) => console.log(e))

  // setGroup(groups[0]);
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <FontAwesomeIcon className="settings-icon" icon={faCog} />
      <div className="top-burger">
        <img className="burger-pfp" src="https://images.unsplash.com/photo-1627796795540-18e2db6d3908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvbmdlYm9ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
        <h3 className="username">Patrick Star</h3>
      </div>
      <div className="calendar-views">
        <h3>{currentGroup}</h3>
        <h4>Views</h4>

        <div>
          <div className="burger-block-buttons"> {/*This is default*/}
            <h3>Yearly</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="burger-block-buttons">
            <h3>Weekly</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="burger-block-buttons">
            <h3>Monthly</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="burger-block-buttons">
            <h3>List View</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="your-calendars">
        <div className="flex1by2">
          <h4>My Groups</h4>
          <h3 className="burger-block-buttons managebtn">Manage Groups</h3>
        </div>
        {/* For each calendar you're in display a block */}
        {groups.map((el, i) => {
          return (
            <div className="burger-block-buttons" key={i}>
              <h4 onClick={() => setGroup(el)}>{el.Name}</h4>
            </div>
          );
        })}
      </div>
    </Menu>
  );
}

export default Burger;