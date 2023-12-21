import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

import { useAuth } from '../../context/auth';

const Sidebar = ({setTitle}) => {
    const [auth] = useAuth
    const [role, setRole] = useState('true')

    return (
        <div>
            <div className="sideBrand">
                <div className="sideBrnIcon">
                    {/* <FontAwesomeIcon icon={faBuffer}/> */}
                    </div>
                <h2>Easy <span className="navHighlight">Consulting</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>    
                        <li>
                            <NavLink onClick={() => setTitle('Profile')} activeclassname="activePage" exact to="/admin">
                                {/* <FontAwesomeIcon icon={faUserCircle} className="iconC"/>  */}
                                Profile
                            </NavLink>
                        </li>
                    {role  ? 
                        <>
                           
                            <li>
                                <NavLink onClick={() => setTitle('Add Service')} activeclassname="activePage" to="/admin/create-product">
                                    {/* <FontAwesomeIcon icon={faFileMedical} className="iconC"/>  */}
                                    Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Plans')} activeclassname="activePage" to="/admin/products">
                                    {/* <FontAwesomeIcon icon={faUserPlus} className="iconC"/>  */}
                                    Plans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Manage Services')} activeclassname="activePage" to="/dashboard/manageServices">
                                    {/* <FontAwesomeIcon icon={faCog} className="iconC"/> */}
                                     Manage Services
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink onClick={() => setTitle('Book')} activeclassname="activePage" exact to="/dashboard/book">
                                    {/* <FontAwesomeIcon icon={faShoppingCart} className="iconC"/>  */}
                                    Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Booking List')} activeclassname="activePage" to="/dashboard/booking">
                                    {/* <FontAwesomeIcon icon={faList} className="iconC"/>  */}
                                    Booking List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setTitle('Review')} activeclassname="activePage" to="/dashboard/review">
                                    {/* <FontAwesomeIcon icon={faCommentAlt} className="iconC"/> */}
                                     Review
                                </NavLink>
                            </li>
                        </>
                     } 
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
