import React from "react";
// import hamburgerMenuIcon from "../images/menu.png"
import searchIcon from "../images/magnifier.png"
import Burger from "./burger-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
// import addEventIcon from "../images/addevent.svg"
// import chatIcon from "../images/chatIcon.svg"
// import profileIcon from "../images/profileIcon.svg"

const Header = ({groupName}) => {
    return (<>
        <div className="header">
            <div className="top-row">
                <Burger className="column" currentGroup={groupName} />
                {/* <div>empty</div> */}
                <div className="column">
                    {/* <img className="header-icon hamburger"src={hamburgerMenuIcon} alt="hamburger menu" /> */}
                    <p><img className="header-icon" src={searchIcon}></img><input type="text" className="searchbar" placeholder="search your event"></input></p>
                    {/* <img className="header-icon profile" src={prosfileIcon} alt="profile"> </img>
                    <img className="header-icon chat" src={chatIcon} alt="chat"></img> */}
                </div>
            </div>
            <div className="bottom-row">
                <h2 className="column">{ groupName }</h2>
                {/* <FontAwesomeIcon className="column" icon={faPerson} /> */}
                <FontAwesomeIcon className="column messageIcon" icon={faMessage} />
            </div>
            
        </div>
    </>
    )
}

export default Header;