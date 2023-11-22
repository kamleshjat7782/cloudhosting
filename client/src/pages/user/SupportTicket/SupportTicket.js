import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import "./index.css";
import Layout from "../../../components/Layout/Layout";
import CreateTickets from "../../../components/CreateTickets";
import UserMenu from "../../../components/Layout/UserMenu";

import axios from "axios";
import { useAuth } from "../../../context/auth";
import { Link } from "react-router-dom";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
  },
}));

const SupportTicket = () => {
  const [value, setValue] = useState("all"); // Set the default tab to "all"
  const [showForm, setShowForm] = useState(false);

  const [tickets, setTickets] = useState([]);
  const [auth, setAuth] = useAuth();
  
  const getTickets = async () => {
    try {
      const { data } = await axios.get("/api/v1/tickets/get-tickets");
      setTickets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getTickets();
  }, [auth?.token]);

  console.log(tickets)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(false); // Hide the form when switching to another tab
  };

  const showCreateForm = () => {
    setValue("one"); // Set the value to a default value (e.g., "one") to hide the table
    setShowForm(true);
  };

  const backToTable = () => {
    setShowForm(false);
  };

  const renderTableHeadings = () => {
    return (
      <TableRow>
        <StyledTableCell>Ticket</StyledTableCell>
        <StyledTableCell align="right">Subject</StyledTableCell>
        <StyledTableCell align="right">Status</StyledTableCell>
        <StyledTableCell align="right">Department</StyledTableCell>
        <StyledTableCell align="right">Date</StyledTableCell>
      </TableRow>
    );
  };

  return (
    <>
   
    {/* <div className="row dashboard"> */}
      
        
      <Box m="1.5rem 2.5rem">
        <div className='Manage'> Support Tickets</div>
        <div className='question'>
          Do you have a question or problem? The support ticket system allows us to respond to your inquiries. Submit a ticket and we will get back to you.
        </div>
        <Box sx={{ width: "100%" }}>
          {showForm ? (
            <Button variant="contained" onClick={backToTable}>
              Back to Table
            </Button>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab label="All" value="all" />
              <Tab label="Open" value="open" />
              <Tab label="Answered" value="answered" />

              <div className="div1">
              <Button variant="contained" onClick={showCreateForm}>
                Create New
              </Button>
              </div>
            </Tabs>
          )}
        </Box>
        {showForm ? (
          <CreateTickets />
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                {renderTableHeadings()}
              </TableHead>
              <TableBody>
                {/* Conditionally render table rows based on the selected tab */}
                {tickets && tickets.map((t, i) => (
                  <StyledTableRow key={i}>
                    <Link to={`/dashboard/user/user-ticket-detail/${t._id}`}>
                    
                    <StyledTableCell component="tr" scope="row"> {t._id} </StyledTableCell>
                    </Link>
                    <StyledTableCell align="right">{t?.subject}</StyledTableCell>
                    <StyledTableCell align="right">{t?.status}</StyledTableCell>
                    <StyledTableCell align="right">{t?.department}</StyledTableCell>
                    <StyledTableCell align="right">{t?.createdAt}</StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* Show "Nothing to display" when the "Open" tab is clicked */}
                {value === "open" && (
                  <TableRow>
                    <StyledTableCell colSpan={5} align="center">
                      Nothing to display
                    </StyledTableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {/* </div> */}
     
    </>
  );
};

export default SupportTicket;
