import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dropdowns from "./dropdown/Dropdowns";
import Charts from "./chart/Charts";
import Carts from "./cart/Carts";

const HeaderItem = styled(Box)(({ theme }) => ({
  backgroundColor: " #0054A5",
  marginLeft: "-8px",
  color: "#FFFFFF",
}));

export default function Body() {
  const [state, setstate] = useState(null);
  const [deviceList, setdeviceList] = useState(null);

  useEffect(() => {
    if (!state) {
      fetch("http://3.68.248.79:1004/summary")
        .then((response) => response.json())
        .then((data) => setstate(data));
    }
    if (!deviceList) {
      fetch("http://3.68.248.79:1004/deviceList")
        .then((response) => response.json())
        .then((data) => setdeviceList(data));
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} m={5} style={{ backgroundColor: "white" }}>
          <Dropdowns deviceList={deviceList} setdeviceList={setdeviceList}  />
          <Charts state={state}   deviceList={deviceList}/>
          <HeaderItem px={4} py={2}>
            <span
              style={{ fontWeight: 600, fontSize: "24px", lineHeight: "30px" }}
            >
              Makineler
            </span>
          </HeaderItem>
          <Carts deviceList={deviceList} setdeviceList={setdeviceList} />
        </Grid>
      </Grid>
    </Box>
  );
}
