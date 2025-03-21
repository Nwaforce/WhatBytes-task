import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ComparisonGraph from "@/components/ComparisonGraph"; // Replaces SkillChart
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import ProgressBar from "@/components/ProgressBar";
import TestSummary from "@/components/TestSummary";
import UpdateScoresModal from "@/components/UpdateScoresModal";

export default function Home() {
  // State for statistics (used in QuickStatistics, TestSummary & Graph)
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(90);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to update statistics from the modal
  const updateStatistics = (updatedData: { rank?: number; percentile?: number; correctAnswers?: number }) => {
    if (updatedData.rank !== undefined) setRank(updatedData.rank);
    if (updatedData.percentile !== undefined) setPercentile(updatedData.percentile);
    if (updatedData.correctAnswers !== undefined) setCorrectAnswers(updatedData.correctAnswers);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-gray-600 font-normal mb-10 mt-20">Skill Test</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* Test Summary (Pass the update function) */}
              <div className="bg-white rounded-lg p-6 flex items-center justify-between shadow-md">
                <div className="flex items-center">
                  <img src="/html5-logo.png" alt="HTML5 Logo" className="w-16 h-16 mr-4" />
                  <div>
                    <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
                    <p className="text-sm text-gray-600">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="px-5 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                  Update
                </button>
              </div>

              {/* Quick Statistics (Updates when the modal saves new data) */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <QuickStatistics rank={rank} percentile={percentile} correctAnswers={correctAnswers} />
              </div>

              {/* Comparison Graph (Dynamic percentile update) */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ComparisonGraph percentile={percentile} />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Progress Bars */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ProgressBar label="HTML Tools, Forms, History" percentage={80} color="blue" />
                <ProgressBar label="Tags & References in HTML" percentage={60} color="orange" />
                <ProgressBar label="Tables & References in HTML" percentage={24} color="red" />
                <ProgressBar label="Tables & CSS Basics" percentage={96} color="green" />
              </div>

              {/* Question Analysis */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <QuestionAnalysis correct={correctAnswers} total={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Scores Modal */}
      {isModalOpen && (
        <UpdateScoresModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onSave={updateStatistics} 
          initialRank={rank}
          initialPercentile={percentile}
          initialCorrectAnswers={correctAnswers}
        />
      )}
    </div>
  );
}
