import { useState } from "react";
import SummaryCard from "@/components/SummaryCard";

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpdateScoresModal({ isOpen, onClose }: UpdateScoresModalProps) {
  const [showSummary, setShowSummary] = useState(false);

  if (!isOpen) return null; // Prevents rendering when the modal is closed

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {showSummary ? (
          <SummaryCard 
            title="Hyper Text Markup Language" 
            questions={8}
            duration="15 mins"
            submittedOn="5 June 2021"
          />
        ) : (
          <>
            <h2 className="text-2xl font-bold">Update Scores</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">1</span>
                <label className="font-bold">Update your Rank</label>
                <input type="number" className="border ml-auto p-2 w-20 rounded-md" defaultValue="1" />
              </div>

              <div className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">2</span>
                <label className="font-bold">Update your Percentile</label>
                <input type="number" className="border ml-auto p-2 w-20 rounded-md" defaultValue="30" />
              </div>

              <div className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">3</span>
                <label className="font-bold">Update your Current Score (out of 15)</label>
                <input type="number" className="border ml-auto p-2 w-20 rounded-md" defaultValue="10" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button 
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg" 
                onClick={onClose} // Close modal when clicking cancel
              >
                Cancel
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700" 
                onClick={() => setShowSummary(true)}
              >
                Save →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
