import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";
// import { brown } from '@mui/material/colors';

const Faq = () => {
  return (
    <div className="faq-com">
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: " #35a9af" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: " rgba(0, 0, 0, .03);" }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: " #35a9af" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: " rgba(0, 0, 0, .03);" }}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: " #35a9af" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: " rgba(0, 0, 0, .03);" }}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: " #35a9af" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: " rgba(0, 0, 0, .03);" }}
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: " #35a9af" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: " rgba(0, 0, 0, .03);" }}
        >
          <Typography>Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
