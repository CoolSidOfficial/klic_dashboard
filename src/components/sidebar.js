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
            <span>Products</span> 
            </div>
       
           <div className="side-items">
            <FontAwesomeIcon className="side-icons" icon={faUserGroup} />      
            <span>Vendors</span> </div>
          <div className="side-items"> <FontAwesomeIcon className="side-icons" icon={faPeopleGroup} />
           <span>Inventory</span>
            </div>
           <div className="side-items">
           <FontAwesomeIcon className="side-icons" icon={faShield} />
            <span>Sellers</span>
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
