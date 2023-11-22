import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography, Grid, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"


const Reg = () => {
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      company: "",
      pan: "",
      address: "",
      state: "",
      city: "",
      pin: "",
      answer: "",
      country: "",
      currency: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters"),
      cpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      phone: Yup.string().required("Required"),
      company: Yup.string().required("Required"),
      pan: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      pin: Yup.string().required("Required"),
      answer: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      currency: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      if (!recaptchaValue) {
        toast.error("Please complete the reCAPTCHA verification.");
        return;
      }


      try {
        const res = await axios.post("/api/v1/auth/register", values);
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      }
    },
  });

  const countries = [
    "Select Country",
    "USA",
    "Canada",
    "UK",
    "Australia",
    // Add more countries as needed
  ];

  const currency = [
    "Select currency",
    "INR",
    "USD",
   
    // Add more countries as needed
  ];

  return (
    <Layout title="Register - Ecommer App" sx={{backgroundColor: 'gray'}} >
      <div style={{backgroundColor: '#ffdee9', backgroundImage: 'linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)',padding: '50px',}}>
      <Container sx={{ padding:'50px',background:'white', borderRadius:'20px' }}  >
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
            REGISTER FORM
          </Typography>

          <Grid container spacing={2}>
            {/* First row */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required
              />
            </Grid>

            {/* Second row */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="normal"
                id="cpassword"
                name="cpassword"
                label="Confirm Password"
                type="password"
                value={formik.values.cpassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.cpassword && Boolean(formik.errors.cpassword)
                }
                helperText={formik.touched.cpassword && formik.errors.cpassword}
                required
              />
            </Grid>

            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            required
          />
            </Grid>
            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="company"
            name="company"
            label="Company Name"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
            required
          />
            </Grid>

            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="pan"
            name="pan"
            label="Pan"
            value={formik.values.pan}
            onChange={formik.handleChange}
            error={formik.touched.pan && Boolean(formik.errors.pan)}
            helperText={formik.touched.pan && formik.errors.pan}
            required
          />
            </Grid>
            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            required
          />
            </Grid>

            <Grid item xs={6}>
            <TextField
                  fullWidth
                  margin="normal"
                  id="country"
                  name="country"
                  label="Country"
                  select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={formik.touched.country && Boolean(formik.errors.country)}
                  helperText={formik.touched.country && formik.errors.country}
                  required
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </TextField>
            </Grid>

            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="state"
            name="state"
            label="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            required
          />
            </Grid>
            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="city"
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            required
          />
            </Grid>

            <Grid item xs={6}>
            <TextField
            fullWidth
            margin="normal"
            id="pin"
            name="pin"
            label="Zip Code"
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
            required
          />
            </Grid>

            {/* Last row */}
            
            
            <Grid item xs={6}>
            <TextField
                  fullWidth
                  margin="normal"
                  id="currency"
                  name="currency"
                  label="Choose Currency"
                  select
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  error={formik.touched.currency && Boolean(formik.errors.currency)}
                  helperText={formik.touched.currency && formik.errors.currency}
                  required
                >
                  {currency.map((currency, index) => (
                    <MenuItem key={index} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
                </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                margin="normal"
                id="answer"
                name="answer"
                label="What is Your Favorite Sports?"
                value={formik.values.answer}
                onChange={formik.handleChange}
                error={formik.touched.answer && Boolean(formik.errors.answer)}
                helperText={formik.touched.answer && formik.errors.answer}
                required
              />
            </Grid>
            {/* No field for the 'address' in this row */}
          </Grid>
          <div style={{margin: 'auto'}} >
          <ReCAPTCHA
              
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your reCAPTCHA site key
              onChange={(value) => setRecaptchaValue(value)}
            />
            </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled ={!recaptchaValue}
            style={{ marginTop: "16px" }}
          >
            REGISTER
          </Button>
        </form>
      </Container>
      </div>
    </Layout>
  );
};

export default Reg;
