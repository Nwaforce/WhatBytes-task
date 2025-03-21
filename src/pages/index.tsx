import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SkillChart from "@/components/SkillChart";
import SummaryCard from "@/components/SummaryCard";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-gray-600 font-normal mb-10 mt-20 ">Skill Test</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column (3 Sections) */}
            <div className="flex flex-col gap-6">
              <div className="bg-white  rounded-lg p-6">
                <SummaryCard title="Hyper Text Markup Language" 
                questions="08"
                duration="15 mins"
                submittedOn="on 5 June 2021"
                />
                
              </div>
              <div className="bg-white rounded-lg p-6">
                <QuickStatistics 
                rank={1}
                percentile={30}
                correctAnswers="10/15"
                />
              </div>
              <div className="bg-white  rounded-lg p-6">
                <SkillChart />
              </div>
            </div>

            {/* Right Column (2 Sections) */}
            <div className="flex flex-col gap-6">
              {/* Progress Bars Section */}
              <div className="bg-white rounded-lg p-6">
                <ProgressBar label="HTML Tools, Forms, History" percentage={80} color="blue" />
                <ProgressBar label="Tags & References in HTML" percentage={60} color="orange" />
                <ProgressBar label="Tables & References in HTML" percentage={24} color="red" />
                <ProgressBar label="Tables & CSS Basics" percentage={96} color="green" />
              </div>

              {/* Question Analysis Section */}
              <div className="bg-white rounded-lg p-6">
                <QuestionAnalysis correct={12} total={15} />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
