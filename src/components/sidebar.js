import {NavLink} from "react-router-dom";
import logo from "../assets/pegasus_logo.png"; 

// import 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileLines,
    faUserGroup,
    faPeopleGroup,
    faShield,
    faCommentDots,
    faCaretRight,
    faLock,
    faBell,
    faGear,
    faBagShopping,
    faImage
}from '@fortawesome/free-solid-svg-icons'

// 
function Sidebar(props){
    
    return(
    <>
    
     <div className="sidebar-class">
        <span class="top-sidebar">

            <img src={logo}></img>
            {/* <span id="heading">PEGASUS</span> */}
            
        </span>
            
      

        <div className="menu-items ">
            <span id="heading">MENU</span>
           <div className="side-items">
           
            <FontAwesomeIcon className="side-icons" icon={faFileLines} />
            <NavLink  className= "side_links"to="/products">Products</NavLink>
            </div>
       
           <div className="side-items">
           <NavLink  className= "side_links"to="/vendors">
            <FontAwesomeIcon className="side-icons" icon={faUserGroup} />      
            <span>Vendors</span> </NavLink></div>
          <div className="side-items"> <FontAwesomeIcon className="side-icons" icon={faPeopleGroup} />
          <NavLink  className= "side_links"to="/inventory">Inventory</NavLink>
            </div>
           <div className="side-items">
           <FontAwesomeIcon className="side-icons" icon={faShield} />
           <NavLink  className= "side_links"to="/sellers">Sellers</NavLink>
             </div>
           
           
            <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faBagShopping} />
            <span>Shop  </span>

            </div>
        </div>
       <div className="sidebar-footer">
       <FontAwesomeIcon icon={faLock}className="footer-icons" />
       <FontAwesomeIcon icon={faBell} className="footer-icons"/>
       <FontAwesomeIcon icon={faGear} className="footer-icons"/>
       <FontAwesomeIcon icon={faUserGroup}className="footer-icons" />
       </div>

     </div>
</>
    );
};


export default Sidebar; 
