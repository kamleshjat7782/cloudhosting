import * as React from "react";
import Button from "@mui/material/Button";

import "./index.css";
export default function BasicButtonGroup() {
  return (
    <>
    <div className="Server"> Server Status</div>
      <div className="server1">
        {" "}
        <h1> Welcome</h1>
      </div>
      <div className="server2">
        <Button
          variant="contained"
          aria-label="outlined primary button group"
          className="button1"
        >
          Place new order
        </Button>

        <Button
          variant="contained"
          aria-label="outlined primary button group"
          className="button1"
        >
          Client Area
        </Button>

        <Button
          variant="contained"
          aria-label="outlined primary button group"
          className="button1"
        >
          Support
        </Button>
      </div>
    </>
  );
}
