import { Trophy, Clipboard, CheckCircle } from "lucide-react";

interface QuickStatisticsProps {
  rank: number;
  percentile: number;
  correctAnswers: string;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({ rank, percentile, correctAnswers }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h3 className="font-semibold text-lg mb-3">Quick Statistics</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Rank */}
        <div className="flex flex-col items-center">
          <Trophy className="text-yellow-500 w-8 h-8" />
          <p className="text-xl font-bold">{rank}</p>
          <span className="text-gray-500 text-sm">YOUR RANK</span>
        </div>

        {/* Percentile */}
        <div className="flex flex-col items-center">
          <Clipboard className="text-gray-500 w-8 h-8" />
          <p className="text-xl font-bold">{percentile}%</p>
          <span className="text-gray-500 text-sm">PERCENTILE</span>
        </div>

        {/* Correct Answers */}
        <div className="flex flex-col items-center">
          <CheckCircle className="text-green-500 w-8 h-8" />
          <p className="text-xl font-bold">{correctAnswers}</p>
          <span className="text-gray-500 text-sm">CORRECT ANSWERS</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
