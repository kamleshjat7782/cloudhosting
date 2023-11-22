import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Snackbar,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const CreateTicket = () => {
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [relatedService, setRelatedService] = useState('');
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Perform file format and size validation here
      const allowedFormats = ['jpg', 'pdf', 'png', 'txt', 'doc', 'docx'];
      const maxFileSize = 1024 * 1024; // 1 MB

      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      const fileSize = selectedFile.size;

      if (
        allowedFormats.includes(fileExtension) &&
        fileSize <= maxFileSize
      ) {
        setFile(selectedFile);
      } else {
        // Display an error message or notification for invalid file
        toast.error('Invalid file format or size. Please choose a valid file.');
      }
    }
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      // Display a message or notification for unchecked checkbox
      toast.error('Please check the checkbox to submit.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('department', department);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('relatedService', relatedService);
      if (file) {
        formData.append('file', file);
      }

      await axios.post('/api/v1/tickets/create-ticket', formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      );

      setDepartment('');
      setSubject('');
      setMessage('');
      setRelatedService('');
      setFile(null);
      setIsChecked(false);
      setOpenSnackbar(true);

      // Handle success or show a notification
      toast.success('Ticket Created Successfully');
      Navigate('/');
    } catch (error) {
      // Handle error or show an error notification
      toast.error('Something went wrong');
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div className="supportdiv">
          <Typography variant="h4" gutterBottom>
            Support Ticket Form
          </Typography>
          <form onSubmit={handleCreateTicket}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Department</InputLabel>
              <Select
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                fullWidth
              >
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="technical">Technical</MenuItem>
                <MenuItem value="billing">Billing</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Subject"
              fullWidth
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <TextField
              label="Message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Related Service</InputLabel>
              <Select
                value={relatedService}
                label="Related Service"
                onChange={(e) => setRelatedService(e.target.value)}
                required
              >
                <MenuItem value="service1">Service 1</MenuItem>
                <MenuItem value="service2">Service 2</MenuItem>
                <MenuItem value="service3">Service 3</MenuItem>
              </Select>
            </FormControl>

            <input
              type="file"
              accept=".jpg, .pdf, .png, .txt, .doc, .docx"
              onChange={handleFileChange}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              }
              label="I agree to the terms and conditions"
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            message="Support ticket submitted successfully!"
          />
        </div>
      </Container>
    </div>
  );
};

export default CreateTicket;
