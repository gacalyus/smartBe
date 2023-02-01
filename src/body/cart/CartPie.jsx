import { useState } from "react";
import { useEffect } from "react";
import { Legend, PieChart, Pie, Cell, Label } from "recharts";

export default function CartPie({ item }) {
  const [state, setstate] = useState("#FFBB28");
  useEffect(() => {
    if (item.status === 1) {
      setstate("#2AD587");
    } else {
      setstate("#EE564B");
    }
  }, [item]);
  const COLORS = ["#FFFFFF", state, "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
      name: "Apple",
      value: 250,
    },
    {
      name: "Samsung",
      value: item.oeeValue,
    },
  ];

  return (
    <PieChart width={730} height={300}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={96}
        innerRadius={72}
        fill="#8884d8"
      >
        <Label
          className="labelChart"
          value={item.oeeValue + "%"}
          color="red"
          position="center"
          fill="black"
        />
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}
