import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import './PopOver.css';
import toast from 'react-hot-toast';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useAuth } from '../../../context/auth';
import { NavLink } from 'react-router-dom';


const PopOver = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    // const [auth] = useAuth();
    const [auth, setAuth] = useAuth();
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
      };

    // const signOut = () => {
    //     const loading = toast.loading('Please wait...');
    //     handleSignOut()
    //     .then(res => {
    //         toast.dismiss(loading);
    //         console.log(res);
    //         dispatch({type: SET_USER, payload: res})
    //         toast.error('Logged Out!');
    //     })
    // }
    return (
        <div >
            {/* <img src={img} alt="" onClick={handleClick} className="popImg"/> */}
            {/* <Button onClick={handleClick} className="popImg" >profile</Button> */}
            <Stack direction="row" spacing={2} onClick={handleClick}>
            <Avatar  className = 'user-icon' sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

            </Stack>
             <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <div className="text-center">
                        {/* <img src={img} alt="" className="popUserImg"/> */}
                        <p className="userName">{auth?.user?.name}</p>
                        {/* <p className="userEmail">{auth?.user?.email}</p> */}
                        <Button variant="outline-danger" size="sm" >
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                        </Button>
                    </div>
                 </Popover> 
            </Overlay> 
        </div>
    );
};

export default PopOver;