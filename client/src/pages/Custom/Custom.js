import React, { useState, useEffect } from "react";
import "./Custom.css";
import Fade from 'react-reveal/Fade';
import {
  TextField,
  Autocomplete,
  Button,
  Box,
  Switch,
  styled,
} from "@mui/material";

const Custom = () => {
  const initialCores = cores.find((core) => core.label === "1");
  const [selectedcores, setSelectedcores] = useState(null);
  const [coresInputValue, setcoresInputValue] = useState(initialCores.label);

  const initialRam = 1;
  const [selectedram, setSelectedram] = useState(null);
  const [ramInputValue, setramInputValue] = useState(initialRam);

  const initialStorage = 10;
  const [selectedstorage, setSelectedstorage] = useState(null);
  const [storageInputValue, setstorageInputValue] = useState(initialStorage);

  const initialPanel = "cPanel";
  const [selectedpanel, setSelectedpanel] = useState(null);
  const [panelInputValue, setpanelInputValue] = useState(initialPanel);

  const initialLocation = "India";
  const [selectedlocation, setSelectedlocation] = useState(null);
  const [locationInputValue, setlocationInputValue] = useState(initialLocation);

  const initialSQL = "MSSQL ";
  const [selectedSQL, setSelectedSQL] = useState(null);
  const [SQLInputValue, setSQLInputValue] = useState(initialSQL);

  const [isWindows, setIsWindows] = useState(true);

  const [currency, setCurrency] = useState("INR"); // Default currency is INR
  const [currencyRate, setCurrencyRate] = useState(1); // Default rate is 1 (1:1 for INR)
  const [price, setPrice] = useState(3456);

  useEffect(() => {
    const coresPrice = selectedcores
      ? parseInt(selectedcores.label) * 100
      : 100;
    const ramPrice = selectedram ? parseInt(selectedram.label) * 50 : 50;
    const storagePrice = selectedstorage
      ? parseInt(selectedstorage.label) * 100
      : 100;
    const panelPrice = selectedpanel ? 1000 : 1000;
    const locationPrice = selectedlocation ? 1000 : 1000;
    const SQLPrice = selectedSQL ? 500 : 500;
    const OSPrice = isWindows ? 200 : 200;

    setPrice(
      coresPrice +
        ramPrice +
        storagePrice +
        locationPrice +
        SQLPrice +
        panelPrice +
        OSPrice
    );
  }, [
    selectedcores,
    selectedram,
    selectedstorage,
    selectedlocation,
    selectedSQL,
    selectedpanel,
    isWindows,
  ]);

  const handleButtonClick = () => {
    const selectedData = {
      cores: +coresInputValue,
      ram: +ramInputValue,
      storage: +storageInputValue,
      panel: panelInputValue,
      location: locationInputValue,
      SQL: SQLInputValue,
      OS: isWindows ? "Windows" : "Linux",
      Price: currency === "INR" ? price : Math.ceil(price / currencyRate),
      Currency: currency === "INR" ? "INR" : "USD",
    };
    console.log(selectedData);
  };

  const handleSwitchChange = (event) => {
    setIsWindows(event.target.checked);
  };

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-thumb": {
      backgroundColor: isWindows
        ? theme.palette.warning.main
        : theme.palette.warning.main,
    },
    "& .MuiSwitch-track": {
      backgroundColor: isWindows
        ? theme.palette.warning.main
        : theme.palette.warning.main,
    },
  }));

  useEffect(() => {
    const fetchCurrencyRate = async () => {
      try {
        const apiKey = "7a6d58df8a24c6964fabc4a1"; // Replace with your actual API key from exchangerate-api.com
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/7a6d58df8a24c6964fabc4a1/latest/USD`
        );
        const data = await response.json();
        setCurrencyRate(data.conversion_rates.INR);
      } catch (error) {
        console.error("Error fetching currency rate:", error);
      }
    };

    fetchCurrencyRate();
  }, []);

  // Rest of the useEffect and other functions...

  const handleCurrencyToggle = () => {
    setCurrency(currency === "INR" ? "USD" : "INR");
    const convertedPrice =
      currency === "INR" ? price : Math.ceil(price / currencyRate);
    console.log("Converted Price:", convertedPrice);
  };

  return (
    <>
      <div>
        <div>
          <h2 className="Plan-title">Custom Plan</h2>
        </div>

        <div className="plan-editor">
        <Fade duration={2000}  left>
          <div className="plan-form">
            <div className="plan-form-inner">
              <div className="plan-form-title">
                Linux{" "}
                <CustomSwitch
                  defaultChecked={isWindows}
                  color="warning"
                  onChange={handleSwitchChange}
                />{" "}
                Windows
              </div>
              <div className="plan-main">
                <div className="main-div-inner">
                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      options={cores}
                      sx={{ width: "100%" }}
                      defaultValue={initialCores} // Set the default value to the object with label "1"
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newcores) => {
                        setSelectedcores(newcores);
                      }}
                      inputValue={coresInputValue}
                      onInputChange={(event, newcoresInputValue) => {
                        setcoresInputValue(newcoresInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Cores:" />
                      )}
                    />
                  </div>

                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={ram}
                      sx={{ width: "100%" }}
                      defaultValue={{ label: "1 " }}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newram) => {
                        setSelectedram(newram);
                      }}
                      inputValue={ramInputValue}
                      onInputChange={(event, newramInputValue) => {
                        setramInputValue(newramInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="RAM:" />
                      )}
                    />
                  </div>

                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={storage}
                      sx={{ width: "100%" }}
                      defaultValue={{ label: "10 " }}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newstorage) => {
                        setSelectedstorage(newstorage);
                      }}
                      inputValue={storageInputValue}
                      onInputChange={(event, newstorageInputValue) => {
                        setstorageInputValue(newstorageInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Storage:" />
                      )}
                    />
                  </div>
                </div>

                <div className="main-div-inner">
                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      id="combo"
                      options={panel}
                      sx={{ width: "100%" }}
                      defaultValue={{ label: "Choose Panel" }}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newpanel) => {
                        setSelectedpanel(newpanel);
                      }}
                      inputValue={panelInputValue}
                      onInputChange={(event, newpanelInputValue) => {
                        setpanelInputValue(newpanelInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Panel:" />
                      )}
                    />
                  </div>
                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={location}
                      sx={{ width: "100%" }}
                      defaultValue={{ label: "Choose Country" }}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newlocation) => {
                        setSelectedlocation(newlocation);
                      }}
                      inputValue={locationInputValue}
                      onInputChange={(event, newlocationInputValue) => {
                        setlocationInputValue(newlocationInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Location:" />
                      )}
                    />
                  </div>
                  <div className="main-inner">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={SQL}
                      sx={{ width: "100%" }}
                      defaultValue={{ label: "Choose Database" }}
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.label}
                        </Box>
                      )}
                      onChange={(event, newSQL) => {
                        setSelectedSQL(newSQL);
                      }}
                      inputValue={SQLInputValue}
                      onInputChange={(event, newSQLInputValue) => {
                        setSQLInputValue(newSQLInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label=" Database:" />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="service-btn-custom" style={{ margin: 0 }}>
                <Button
                  style={{ margin: 0 }}
                  variant="contained"
                  className="btn"
                  onClick={handleCurrencyToggle}
                >
                  {currency === "INR" ? "USD" : "INR"}
                </Button>
              </div>
            </div>
          </div>
          </Fade>
          <Fade duration={2000} right>

          <div className="custom-plan">
            <div className="plan-container-custom">
              <div className="custom-plan-head">
                <div className="plan-head">
                  <h1>Personal</h1>
                </div>
                <div className="plan-top-container-custom">
                  <div className="Custom-price-container">
                    <div className="plan-currency">
                      {currency === "INR" ? "₹" : "$"}
                    </div>
                    <div className="Custom-price-box">
                      <div className="plan-price">
                        <span>
                          {currency === "INR"
                            ? price
                            : Math.ceil(price / currencyRate).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="plan-period">
                      <p>/month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="plan-content-custom">
                <ul>
                  <li>
                    <b>
                      {selectedcores?.label || initialCores.label}
                      {" CPU "}
                    </b>
                    Cores
                  </li>
                  <li>
                    <b>
                      {selectedram ? `${selectedram?.label}` : initialRam}
                      {" GB "}
                    </b>
                    RAM
                  </li>
                  <li>
                    <b>
                      {selectedstorage
                        ? `${selectedstorage?.label}`
                        : initialStorage}
                      {" GB "}
                    </b>
                    Storage
                  </li>
                  <li>
                    <b>
                      {selectedpanel ? `${selectedpanel?.label}` : initialPanel}
                    </b>{" "}
                    Panel
                  </li>
                  <li>
                    <b>
                      {selectedlocation
                        ? `${selectedlocation?.label}`
                        : initialLocation}
                    </b>{" "}
                    Location
                  </li>
                  <li>
                    <b>{selectedSQL ? `${selectedSQL?.label}` : initialSQL}</b>
                    Database
                  </li>
                  <li>
                    <b>1 TB</b> Bandwidth
                  </li>
                  <li>
                    <b>1 IP</b> Addresses
                  </li>
                </ul>
              </div>
              <div className="service-btn-custom">
                <Button
                  variant="contained"
                  className="btn"
                  onClick={handleButtonClick}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

const panel = [ { label: "Choose Panel" }, { label: "cPanel" }, { label: "Plesk" }];
const location = [
  { label: "Choose Country" },
  { label: "India" },
  { label: "USA" },
  { label: "UK" },
  { label: "Germany" },
  { label: "France" },
  { label: "Phillipines" },
];
const SQL = [ { label: "Choose Database " }, { label: "MSSQL " }, { label: "MySQL " }];
const cores = [...Array(24).keys()].map((num) => ({ label: `${num + 1}` }));
const ram = [...Array(96).keys()].map((num) => ({ label: `${num + 1}` }));
const storage = [...Array(50).keys()].map((num) => ({
  label: `${(num + 1) * 10}`,
}));

export default Custom;
