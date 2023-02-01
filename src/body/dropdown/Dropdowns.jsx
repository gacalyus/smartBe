import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Dropdowns.css";

const deviceType = [
  { label: "Hepsi", value: "all" },
  { label: "CNC", value: "cnc" },
  { label: "Plastik Enjeksiyon", value: "pe" },
  { label: "EDM", value: "edm" },
];
const status = [
  { label: "Hepsi", value: -1 },
  { label: "Açık", value: 1 },
  { label: "Kapalı", value: 0 },
];
const useStyles = makeStyles({
  paper: {
    border: "15px solid red",
  },
});
export default function Dropdowns({ deviceList, setdeviceList }) {
  const [formState, setformState] = useState({
    deviceType: "all",
    status: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setdeviceList(null);
    fetch(
      `http://3.68.248.79:1004/deviceList?deviceType=${formState.deviceType}&status=${formState.status}&shift=08-20`
    )
      .then((response) => response.json())
      .then((data) => setdeviceList(data));
  };
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={1} p={4}>
        <Grid item xs={12} md={4} lg={3}>
          <span className="machine-type">Makine Türü</span>
          <Autocomplete
            disablePortal
            disableClearable
            id="combo-box-demo"
            options={deviceType}
            sx={{ width: 241, marginTop: 1 }}
            size="small"
            onChange={(e, data) =>
              setformState({ ...formState, deviceType: data.value })
            }
            renderInput={(params) => (
              <TextField {...params} InputLabelProps={{ shrink: false }} />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <span className="machine-type">Çalışma Durumu</span>
          <Autocomplete
            disablePortal
            disableClearable
            id="combo-box-demo"
            options={status}
            sx={{ width: 241, marginTop: 1 }}
            size="small"
            onChange={(e, data) =>
              setformState({ ...formState, status: data.value })
            }
            renderInput={(params) => (
              <TextField {...params} InputLabelProps={{ shrink: false }} />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3} display="flex">
          <Button
            style={{ marginTop: "auto" }}
            variant="contained"
            type="submit"
            size="medium"
            color="primary"
          >
            Sorgula
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
