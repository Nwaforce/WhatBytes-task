import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SkillChart from "@/components/SkillChart";
// import QuestionChart from "@/components/QuestionAnalysis.tsx";
import SummaryCard from "@/components/SummaryCard";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import { FiBarChart, FiUsers } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex">
       <Navbar />
      <Sidebar />
      <div className="flex-1 p-6 py-2 m-2">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <h3 className="py-2 m-2 text-gray-600 font-normal">Skill Test</h3>
        <div>
          <SummaryCard title="Total Users" value="500" icon={<FiUsers />} />
          </div>
          <SummaryCard title="Average Score" icon={<FiBarChart />} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SkillChart />
          <QuestionAnalysis correct={12} total={15} />
        </div>
      </div>
    </div>
  );
}
