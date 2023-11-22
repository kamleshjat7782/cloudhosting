import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PopOver from '../../components/Shared/PopOver/PopOver';
// import AdminDashboard from '../AdminDashboard/AdminDashboard';
// import Sidebar from '../Sidebar/Sidebar';
// import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';
import './Dashboard.css';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SET_ADMIN, useAppContext } from '../../../context';
import { useAuth } from '../../context/auth';
// import Sidebar from '../Sidebar/Sidebar';
import AdminDashboard from '../MainDashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../MainDashboard/UserDashboard/UserDashboard';
import Sidebar from '../Sidebar/Sidebar';
import Helloside from '../Sidebar/Helloside';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Dashboard = () => {
    const [auth] = useAuth();
    // const { state: { user, admin }, dispatch } = useAppContext()
    const [sideToggle, setSideToggle] = useState(false)
    const [title, setTitle] = useState('Easy Consulting')
    const [role, setRole] = useState('true')

    // useEffect(() => {
    //     axios.get(`https://immense-river-40491.herokuapp.com/admin?email=${user.email}`)
    //     .then(res => {
    //         if(res.data.length > 0){
    //             dispatch({type: SET_ADMIN, payload: true})
    //         }
    //     })
    // },[dispatch, user.email])

    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <div className="sidebarContent">
                    <Helloside setTitle={setTitle} />
                    <div className="backBtnBox">
                        <Link to="/">
                            <button className="backBtn"> 
                            {/* <FontAwesomeIcon icon={faSignOutAlt}/> */}
                             back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
                        <div id="nav-icon"
                        className={sideToggle ? "menu-btn" : "menu-btn open"}
                        onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <div  className="d-flex align-items-center" >
                    <NotificationsIcon className="iconC" sx={{color: '#7254F6'}} />
                    <PopOver/> 
                    </div>
                </div>

                {
                   auth?.user?.role === 1  ? <AdminDashboard/> : <UserDashboard/>
                } 
            </div>
        </div>
    )
}

export default Dashboard;
