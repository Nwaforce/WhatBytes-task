import SummaryCard from "@/components/SummaryCard";
import QuickStatistics from "@/components/QuickStatistics";
import SkillChart from "@/components/SkillChart";
import ProgressBar from "@/components/ProgressBar";
import QuestionAnalysis from "@/components/QuestionAnalysis";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* Section 1: Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <SummaryCard title="Hyper Text Markup Language" />
        </div>

        {/* Section 2: Quick Statistics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <QuickStatistics />
        </div>

        {/* Section 3: Skill Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <SkillChart />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Section 1: Syllabus Analysis */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <ProgressBar label="HTML Tools, Forms, History" percentage={80} color="blue" />
          <ProgressBar label="Tags & References in HTML" percentage={60} color="orange" />
          <ProgressBar label="Tables & References in HTML" percentage={24} color="red" />
        </div>

        {/* Section 2: Question Analysis */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <QuestionAnalysis correct={12} total={15} />
          <ProgressBar label="Tables & CSS Basics" percentage={96} color="green" />
        </div>
      </div>
    </div>
  );
}
