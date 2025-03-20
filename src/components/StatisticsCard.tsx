interface StatsProps {
    rank: number;
    percentile: number;
    correctAnswers: string;
  }
  
  const StatisticsCard: React.FC<StatsProps> = ({ rank, percentile, correctAnswers }) => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-md">
        {/* Rank */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{rank}</span>
          <span className="text-gray-500">YOUR RANK</span>
        </div>
  
        {/* Percentile */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{percentile}%</span>
          <span className="text-gray-500">PERCENTILE</span>
        </div>
  
        {/* Correct Answers */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{correctAnswers}</span>
          <span className="text-gray-500">CORRECT ANSWERS</span>
        </div>
      </div>
    );
  };
  
  export default StatisticsCard;
  