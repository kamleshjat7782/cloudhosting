import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import './Sidebar.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import FormatListBulletedSharp from '@mui/icons-material/FormatListBulletedSharp';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';

const Helloside = ({setTitle}) => {

    // const [admin, setAdmin] = useState(false);
    const [auth] = useAuth();

  return (
    <div>
            <div className="sideBrand">
                <div className="sideBrnIcon">
                    {/* <FontAwesomeIcon icon={faBuffer}/> */}
                    </div>
                <h2>Site <span className="navHighlight">Engeiners</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>
                    {/* <li>
                        <NavLink onClick={() => setTitle('Admin')}   to= 'admin' activeclassname="activePage"> Create Category</NavLink>
                    </li> */}

                    {auth?.user?.role === 1 ?
                    <>
                     <li>
                        <NavLink onClick={() => setTitle('Dashboard')}   to= 'admin/' activeclassname="activePage"> 
                        <DashboardIcon className="iconC" sx={{color: '#7254F6'}} />
                        Dashboard</NavLink>
                    </li>
                    
                    <li>
                        <NavLink onClick={() => setTitle('Create Product')}   to= 'admin/create-product' activeclassname="activePage">
                            <NoteAddSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                             Create Product</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setTitle('Plans')}   to= 'admin/products' activeclassname="activePage">
                            <FormatListBulletedSharp  className="iconC" sx={{color: '#7254F6'}} />
                             Plans</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setTitle('Orders')}   to= 'admin/orders' activeclassname="activePage"> 
                        <ShoppingCartSharpIcon  className="iconC" sx={{color: '#7254F6'}} />
                        Orders</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setTitle('Users')}   to= 'admin/users' activeclassname="activePage">
                        <AccountCircleSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                             Users </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setTitle('Support Tickets')}   to= 'admin/admin-suport-ticket' activeclassname="activePage"> 
                        <ChatBubbleSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                        Support Tickets</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setTitle('Envoice')}   to= 'admin/envoice' activeclassname="activePage"> 
                        <ReceiptIcon className="iconC" sx={{color: '#7254F6'}} />
                        Envoice</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Server ')}   to= 'admin/server' activeclassname="activePage">
                            <StorageIcon className="iconC" sx={{color: '#7254F6'}} />
                             Server  </NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Setting')}   to= 'admin/Setting' activeclassname="activePage"> 
                        <SettingsIcon className="iconC" sx={{color: '#7254F6'}} />
                        Setting </NavLink>
                    </li>
                    </>
                    :
                    <>
                     <li>
                        <NavLink onClick={() => setTitle('Dashboard')}   to= 'user/Dashboard' activeclassname="activePage"> 
                        <DashboardIcon className="iconC" sx={{color: '#7254F6'}} />
                        Dashboard</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('User')}   to= 'user/' activeclassname="activePage">
                        <AccountCircleSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                             User</NavLink>
                    </li>
                     
                     <li>
                        <NavLink onClick={() => setTitle('Order')}   to= 'user/orders' activeclassname="activePage"> 
                        <ShoppingCartSharpIcon  className="iconC" sx={{color: '#7254F6'}} />
                        Orders</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Profile')}   to= 'user/profile' activeclassname="activePage"> 
                        <AccountCircleSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                        Profile</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Tickets')}   to= 'user/suport-ticket' activeclassname="activePage">
                        <ChatBubbleSharpIcon className="iconC" sx={{color: '#7254F6'}} />
                             Tickets</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Billing')}   to= 'user/Billing' activeclassname="activePage"> 
                        <ReceiptIcon className="iconC" sx={{color: '#7254F6'}} />
                        Billing</NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Server Status')}   to= 'user/server-status' activeclassname="activePage">
                            <StorageIcon className="iconC" sx={{color: '#7254F6'}} />
                             Server Status </NavLink>
                    </li>
                     <li>
                        <NavLink onClick={() => setTitle('Setting')}   to= 'user/Setting' activeclassname="activePage"> 
                        <SettingsIcon className="iconC" sx={{color: '#7254F6'}} />
                        Setting </NavLink>
                    </li>
                    </>
}
                    
                </ul>
            </nav>
   

    </div>
  )
}

export default Helloside