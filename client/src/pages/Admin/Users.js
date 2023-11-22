import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  //getall users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/get-users");
      setUsers(data.user);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(users)

  return (
      <div className="container-fluid m-3 p-3">
        <div className="row ">
          
          <div className="col-md-9">
            <h1>All Users</h1>
            <div className="container mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((u) => (
                      <tr key={u._id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                        <td>{u._id}</td>
                        {/* <td><button className=" btn-primary btn"><Link to={`/admin/user-detail`} style={{textDecoration:'none', color:'white'}} >Edit</Link></button></td> */}
                        <td><button className=" btn-primary btn"><Link to={`/dashboard/admin/user-detail/${u._id}`} style={{textDecoration:'none', color:'white'}} >Edit</Link></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Users;
