import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const AdminTicket = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [reply, setReply] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the single ticket data when the component mounts
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`/api/v1/tickets/ticket-detail/${ticketId}`);
        setTicket(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ticket:', error);
        setLoading(false);
      }
    };

    fetchTicket();
  }, [ticketId]);

  const handleUpdate = async () => {
    try {
      // Send the admin's reply and status update to the backend
      const response = await axios.put(`/api/v1/tickets/ticket-update/${ticketId}`, {
        reply: reply, // Make sure 'reply' is being sent correctly
        status: newStatus, // Make sure 'newStatus' is being sent correctly
      });
  
      // Reload the ticket data
      setTicket(response.data);
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  const downloadFile = async (ticketId, fileName) => {
    try {
      const response = await axios.get(`/api/v1/tickets/download-ticket-file/${ticketId}`, {
        responseType: 'blob', // Important: Set responseType to 'blob' to handle binary data
      });
  
      // Create a temporary URL for the blob data
      const url = window.URL.createObjectURL(new Blob([response.data]));
  
      // Create a link element and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
  
      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2>Ticket Details</h2>
      <div>
        <strong>Department:</strong> {ticket.department}
      </div>
      <div>
        <strong>Subject:</strong> {ticket.subject}
      </div>
      <div>
        <strong>Message:</strong> {ticket.message}
      </div>
      <div>
        <strong>Related Service:</strong> {ticket.relatedService}
      </div>
      <Button onClick={() => downloadFile(ticket._id, ticket.fileName)}>Download File</Button>
      <div>
        <strong>Buyer:</strong> {ticket.buyer.name} {/* Assuming you have a "name" field in your user schema */}
      </div>
      <div>
        <strong>Status:</strong> {ticket.status}
      </div>

      {/* Reply form */}
      <h3>Admin Reply</h3>
      <textarea
        rows="4"
        cols="50"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Enter your reply here"
      ></textarea>
      <br />
      <button onClick={handleUpdate}>Reply</button>

      {/* Status update form */}
      <h3>Update Status</h3>
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="Open">Open</option>
        <option value="Answered">Answered</option>
        <option value="Closed">Closed</option>
      </select>
      <button
  onClick={handleUpdate}
  disabled={!newStatus || newStatus === ticket.status}
>
  Update Status
</button>
    </div>
  );
};

export default AdminTicket;
