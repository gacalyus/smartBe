import React from "react";
import "./Carts.css";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import CartPie from "./CartPie";
import CartBar from "./CartBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import up from "../../logos/up.svg";
import vector from "../../logos/Vector.svg";

export default function Carts({ deviceList }) {
  const cartHeaderStyle = (item) => {
    if (item.status === 1) {
      return "statusStyle1";
    } else {
      return "statusStyle2";
    }
  };
  const cartBodyStyle = (item) => {
    if (item.status === 1) {
      return "statusStyleBody1";
    } else {
      return "statusStyleBody2";
    }
  };
  const minuteAccount = (incomingMinute) => {
    let hour = 0;
    let minute = 0;
    hour = incomingMinute % 60;
    minute = incomingMinute / 60;
    return hour.toFixed() + " saat " + minute.toFixed() + " dk  aktif";
  };
  return (
    <Grid container spacing={1} p={4} style={{ overflow: "hidden" }}>
      {deviceList ? (
        deviceList.length > 0 ? (
          deviceList.map((item) => (
            <Grid
              item
              xs={12}
              md={12 / 2}
              lg={12 / 3}
              xl={12 / 5}
              key={item.name}
            >
              <div className="cartDiv">
                <div className={"cartHeader" + " " + cartHeaderStyle(item)}>
                  <div className="cartHeader-left">
                    <span className="cartTitle">{item.name}</span>
                    <span>{minuteAccount(item.activeMinutes)} </span>
                  </div>
                  <div className="cartHeader-right">
                    <Chip
                      style={{
                        borderRadius: "5px",
                        textTransform: "uppercase",
                        fontSize: "14px",
                        letterSpacing: "0.8px",
                        color: "#11C968;",
                      }}
                      size="small"
                      label={item.status === 1 ? "Çalışıyor" : "Kapalı"}
                      color={item.status === 1 ? "success" : "error"}
                    />
                  </div>
                </div>
                <div className={"cartBody" + " " + cartBodyStyle(item)}>
                  <CartPie item={item} />
                  <div className="carBodyInfo">
                    <div>
                      <span className="carBodyInfoSpan">24</span>
                      <img src={item.status === 1 ? up : vector} />
                      <span>Parça</span>
                    </div>
                    <div>
                      <span className="carBodyInfoSpan">243</span>
                      <span>Parça</span>
                    </div>
                  </div>
                </div>
                <div className="cartFooter">
                  <CartBar
                    item={item}
                    deviceHourlyData={item.deviceHourlyData}
                  />
                </div>
                <div className="cartFooterLine">
                  <div style={{ paddingLeft: "8px" }}>6:00 am</div>
                  <div style={{ paddingRight: "8px" }}>6:00 pm</div>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <Box m={5} sx={{ display: "flex", marginLeft: "50%" }}>
            <span className="noData">Veri Bulunmuyor !</span>
          </Box>
        )
      ) : (
        <Box m={5} sx={{ display: "flex", marginLeft: "50%" }}>
          <CircularProgress />
        </Box>
      )}
    </Grid>
  );
}
