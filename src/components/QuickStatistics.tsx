import { Trophy, Clipboard, CheckCircle } from "lucide-react";

interface QuickStatisticsProps {
  rank: number;
  percentile: number;
  correctAnswers: number;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({
  rank,
  percentile,
  correctAnswers,
}) => {
  return (
    <div className="bg-white  rounded-lg p-5 mt-4 border border-gray-200">
      <h3 className="font-bold text-lg mb-4">Quick Statistics</h3>
      <div className="flex justify-between items-center text-center">
        {/* Rank */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3">
            <Trophy className="text-yellow-500 w-8 h-8" />
          </div>
          <p className="text-xl font-bold mt-2">{rank}</p>
          <span className="text-gray-900 font-semibold text-sm">
            Rank: {rank}
          </span>
        </div>

        <div className="h-16 w-px bg-gray-300"></div>

        {/* Percentile */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3">
            <Clipboard className="text-gray-500 w-8 h-8" />
          </div>
          <p className="text-xl font-bold mt-2">{percentile}%</p>
          <span className="text-gray-900 font-semibold text-sm">
            Percentile: {percentile}%
          </span>
        </div>

        {/* Divider */}
        <div className="h-16 w-px bg-gray-300"></div>

        {/* Correct Answers */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3">
            <CheckCircle className="text-green-500 w-8 h-8" />
          </div>
          <p className="text-xl font-bold mt-2">{correctAnswers}/15</p>
          <span className="text-gray-900 font-semibold text-sm">
            Correct Answers: {correctAnswers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
