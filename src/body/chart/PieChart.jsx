import { Legend, PieChart, Pie, Cell, Label } from "recharts";

export default function Chart({ data, averageUsability, titleColor }) {
  const selectionColor = titleColor ?? "#FFBB28";
  const COLORS = ["#F5F6F8", selectionColor, "#FFBB28", "#FF8042", "#AF19FF"];

  const pieData = [
    {
      name: "Apple",
      value: data
        ? data.openDeviceCount
        : averageUsability
        ? averageUsability.averageUsability
        : 54.85,
    },
    {
      name: "Samsung",
      value: data
        ? data.totalDeviceCount
        : averageUsability
        ? 100 - averageUsability.averageUsability
        : 47.91,
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
        outerRadius={120}
        innerRadius={90}
        fill="#F5F6F8"
      >
        <Label
          className="labelChart"
          value={
            data
              ? data.openDeviceCount + "/" + data.totalDeviceCount
              : averageUsability
              ? averageUsability.averageUsability + "%"
              : "15/20"
          }
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
