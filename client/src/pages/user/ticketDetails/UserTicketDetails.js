import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UserTicketDetails = () => {
    const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [userReply, setUserReply] = useState('');
  const [replies, setReplies] = useState([]);
  
  const fetchTicket = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint
      const response = await axios.get(`/api/v1/tickets/ticket-detail/${ticketId}`);
      setTicket(response.data);
      setReplies(response.data.replies || []); // Assuming replies are stored in the ticket data
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };

  const sendReply = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual API endpoint
      await axios.put(`/api/v1/tickets/ticket-reply/${ticketId}`, {
         userReply: userReply, 
        });
      // Fetch ticket details again to get updated replies
      fetchTicket();
      // Clear the reply input
      setUserReply('');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, [ticketId]);
  console.log(ticket)
  console.log(ticketId)

  return (
    <div>
      {ticket ? (
        <div>
          <h2>Ticket Details</h2>
          <div>
            <strong>Department:</strong> {ticket.department}
          </div>
          <div>
            <strong>Subject:</strong> {ticket.subject}
          </div>
          {/* ... (other ticket details) */}
          <div>
            <strong>Status:</strong> {ticket.status}
          </div>

          <h3>Admin Replies</h3>
          <p>{ticket.reply}</p>
          {/* <ul>
            {replies.map((reply, index) => (
              <li key={index}>{reply}</li>
            ))}
          </ul> */}

          <h3>Your Reply</h3>
          <textarea
            rows="4"
            cols="50"
            value={userReply}
            onChange={(e) => setUserReply(e.target.value)}
            placeholder="Enter your reply here "
          ></textarea>
          <br />
          <button onClick={sendReply}>Send Reply</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserTicketDetails;
