import React from "react";
import "./Charts.css";
import Grid from "@mui/material/Grid";
import PieChart from "./PieChart";
import PieChartOee from "./PieChartOee";

export default function Charts({ state, deviceList }) {
  return (
    <Grid container spacing={1} p={4} style={{ overflow: "hidden" }}>
      <Grid item xs={12} md={6} lg={3}>
        <div className="chartHeader">
          <span className="chartTitle">Toplam Cihaz Durumu (Açık)</span>
          <PieChart data={state} titleColor={"#C1C4D6"} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <div className="chartHeader">
          <span className="chartTitle">Toplam Ortalama Kullanılabilirlik</span>
          <PieChart averageUsability={state} titleColor={"#2AD587"} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <div className="chartHeader">
          <span className="chartTitle">Toplam Ortalama Üretim Kalitesi</span>
          <PieChart titleColor={"#2AD587"} />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <div className="chartHeader">
          <span className="chartTitle">Toplam Ekipman Etkinliği OEE</span>
          <PieChartOee   deviceList={deviceList} titleColor={"#FFA95A"} />
        </div>
      </Grid>
    </Grid>
  );
}
