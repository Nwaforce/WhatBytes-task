// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "React", value: 40 },
//   { name: "Next.js", value: 30 },
//   { name: "Tailwind CSS", value: 20 },
//   { name: "TypeScript", value: 10 }
// ];

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// const SkillChart: React.FC = () => {
//   return (
//     <div className="p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-semibold text-gray-800">Skill-wise Analysis</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SkillChart;
