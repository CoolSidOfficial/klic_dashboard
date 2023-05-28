import React from "react";
//Using font awesome individual import  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUserGroup,faEnvelope,faBell,faBagShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar(props){
return (
  
  <nav className="navclass">
    <ul  className="nav-items">
       <li><a href="">{props.first}</a> </li>
       <li><a href="">{props.second}</a></li>
       <li><a href="">{props.third}</a></li>
       <li><a href="">{props.fourth}</a></li>
       <li><a href="">{props.fifth}</a></li>
       <li><a href="">{props.sixth}</a></li>
       

    </ul>
    <ul class="right-nav">
    {/* <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li> */}
       {/* <li><img id="sun-nav-logo"src={Sun} /></li> */}
       <li><FontAwesomeIcon icon={faUserGroup} /></li>
       <li><FontAwesomeIcon icon={faEnvelope} /></li>
       <li><FontAwesomeIcon icon={faBell} /></li>
       <li><FontAwesomeIcon icon={faBagShopping} /></li>
    </ul>
       <img id="profile-logo"src={props.profile}/>
  </nav>

  
    )
};
export default Navbar;