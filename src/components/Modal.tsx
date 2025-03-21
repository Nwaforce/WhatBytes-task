import { useState } from "react";
import SummaryCard from "@/components/SummaryCard";

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpdateScoresModal({ isOpen, onClose }: UpdateScoresModalProps) {
  const [showSummary, setShowSummary] = useState(false);
  const [rank, setRank] = useState<number | "">("");
  const [percentile, setPercentile] = useState<number | "">("");
  const [errors, setErrors] = useState<{ rank?: string; percentile?: string }>({});

  if (!isOpen) return null; // Prevents rendering when the modal is closed

  const validateAndSubmit = () => {
    let newErrors: { rank?: string; percentile?: string } = {};

    if (rank === "" || rank <= 0) {
      newErrors.rank = "Rank is required and must be a positive number.";
    }

    if (percentile === "" || percentile < 0 || percentile > 100) {
      newErrors.percentile = "Percentile must be between 0 and 100.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowSummary(true);
  };

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
              {/* Rank Input */}
              <div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">1</span>
                  <span>Update your</span> <span className="font-bold ml-1">Rank</span>
                  <input 
                    type="number"
                    className="border ml-auto p-2 w-20 rounded-md"
                    value={rank}
                    onChange={(e) => setRank(e.target.value === "" ? "" : parseInt(e.target.value))}
                    required
                    min={1}
                  />
                </div>
                {errors.rank && <p className="text-red-500 text-sm">{errors.rank}</p>}
              </div>

              {/* Percentile Input */}
              <div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">2</span>
                  <span>Update your</span> <span className="font-bold ml-1">Percentile</span>
                  <input 
                    type="number"
                    className="border ml-auto p-2 w-20 rounded-md"
                    value={percentile}
                    onChange={(e) => setPercentile(e.target.value === "" ? "" : parseInt(e.target.value))}
                    required
                    min={0}
                    max={100}
                  />
                </div>
                {errors.percentile && <p className="text-red-500 text-sm">{errors.percentile}</p>}
              </div>

              {/* Current Score Input */}
              <div className="flex items-center">
                <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">3</span>
                <span>Update your</span> <span className="font-bold ml-1">Current Score (out of 15)</span>
                <input type="number" className="border ml-auto p-2 w-20 rounded-md" defaultValue="10" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-end gap-2 mt-4">
              <div className="flex gap-4">
                <button 
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg" 
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700" 
                  onClick={validateAndSubmit}
                >
                  Save →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
