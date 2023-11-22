import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

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
    }),
    onSubmit: async (values) => {
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

  return (
    <Layout title="Register - Ecommer App">
      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h4" gutterBottom>
            REGISTER FORM
          </Typography>
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
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="cpassword"
            name="cpassword"
            label="Confirm Password"
            type="password"
            value={formik.values.cpassword}
            onChange={formik.handleChange}
            error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
            helperText={formik.touched.cpassword && formik.errors.cpassword}
            required
          />
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
          <TextField
            fullWidth
            margin="normal"
            id="company"
            name="company"
            label="Company"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
            required
          />
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
          <TextField
            fullWidth
            margin="normal"
            id="pin"
            name="pin"
            label="Pin"
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
            required
          />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            REGISTER
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default Register;
