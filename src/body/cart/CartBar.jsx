import { useState, useEffect } from "react";
import { BarChart, Bar } from "recharts";

export default function CartBar({ item }) {
  const [colorState, setcolorState] = useState("#FFBB28");
  useEffect(() => {
    if (item.status === 1) {
      setcolorState("#2AD587");
    } else {
      setcolorState("#EE564B");
    }
  }, [item]);
  return (
    <BarChart width={330} height={55} data={item.deviceHourlyData}>
      <Bar dataKey="uv" fill={colorState} />
    </BarChart>
  );
}
