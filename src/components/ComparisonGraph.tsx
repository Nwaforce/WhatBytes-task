import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1", percentile: 10 },
  { name: "2", percentile: 25 },
  { name: "3", percentile: 30 }, // Your percentile
  { name: "4", percentile: 50 },
  { name: "5", percentile: 72 }, // Average
  { name: "6", percentile: 90 },
];

const ComparisonGraph = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Comparison Graph</h3>
      <p className="text-sm text-gray-500">
        You scored <strong>30% percentile</strong>, which is lower than the average 72%.
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="percentile" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
