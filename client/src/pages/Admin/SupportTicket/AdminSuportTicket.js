import React, { useEffect,useState } from "react";
import { Box} from "@mui/material";
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
import { useAuth } from "../../../context/auth";


import "./index.css";

import axios from "axios";
import { toast } from "react-hot-toast";
import { Select } from "antd";
import { Link } from "react-router-dom";
const { Option } = Select;


function createData(name, calories, fat, carbs, protein) {
  const status = fat === "Answered" ? "Answer" : "Answer";
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData('#552061', 'hthn5yh5', 'Answered', 'General Support', '01/07/2023 04:05:15'),
  createData('#552062', 'hthn5yh5', 'Answered', 'General Support', '01/07/2023 02:17:27'),
  createData('#552063', 'hthn5yh5', 'Answered', 'General Support', '01/07/2023 07:08:35'),
  createData('#552064', 'hthn5yh5', 'Answered', 'General Support', '01/07/2023 11:12:15'),
  createData('#552065', 'hthn5yh5', 'Answered', 'General Support', '01/07/2023 12:03:54'),
];

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

const AdminSupportTicket = () => {
  const [status, setStatus] = useState([
    "Open",
    "Answered",
    "Closed",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [value, setValue] = useState("all"); // Set the default tab to "all"
  const [showForm, setShowForm] = useState(false);

  const [tickets, setTickets] = useState([]);
  // const [auth, setAuth] = useAuth();


  //getall products
  const getAllTickets = async () => {
    try {
      const { data } = await axios.get("/api/v1/tickets/all-tickets");
      setTickets(data.tickets);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
     getAllTickets();
  }, []);

  console.log(tickets)


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowForm(false); // Hide the form when switching to another tab
  };

  const handleChangeStatus = async (ticketId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/tickets/ticket-status/${ticketId}`, {
        status: value,
      });
      getAllTickets();
    } catch (error) {
      console.log(error);
    }
  };


  const renderTableHeadings = () => {
    return (
      <TableRow>
        <StyledTableCell>Ticket</StyledTableCell>
        <StyledTableCell align="right">Status</StyledTableCell>
        <StyledTableCell align="right">Subject</StyledTableCell>
        <StyledTableCell align="right">Department</StyledTableCell>
        <StyledTableCell align="right">Date</StyledTableCell>
      </TableRow>
    );
  };

  return (
    <>
    <div className="row ">
       
        <div className="col-md-9">
      <Box m="1.5rem 2.5rem">
        <div className='Manage'> Support Tickets</div>
        <div className='question'>
          Do you have a question or problem? The support ticket system allows us to respond to your inquiries. Submit a ticket and we will get back to you.
        </div>
        <Box sx={{ width: "100%" }}>
         
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

            </Tabs>
          
        </Box>
       
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                {renderTableHeadings()}
              </TableHead>
              <TableBody>
                {/* Conditionally render table rows based on the selected tab */}
                {value !== "open" && tickets.map((t, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="tr" scope="row">
                      <Link to={`/dashboard/admin/ticket-detail/${t?._id}`}>
                      {t?._id}
                      </Link>
                    </StyledTableCell>
                    
                    <StyledTableCell align="right">
                    <Select
                          bordered={false}
                          onChange={(value) => handleChangeStatus(t._id, value)}
                          defaultValue={t?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </StyledTableCell>
                    <StyledTableCell align="right">{t?.message}</StyledTableCell>
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
      
      </Box>
      </div>
      </div>
    </>
  );
};

export default AdminSupportTicket;
