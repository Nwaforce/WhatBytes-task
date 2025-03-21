import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface QuestionAnalysisProps {
  correct: number;
  total: number;
}

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({
  correct,
  total,
}) => {
  const percentage = (correct / total) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Title & Score Alignment */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Question Analysis</h3>
        <span className="text-blue-600 font-bold text-sm">
          {correct}/{total}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">
        You scored <strong>{correct} questions correct</strong> out of {total}.
        However, it still needs some improvements.
      </p>

      {/* Circular Progress Chart */}
      <div className="w-32 h-32 mx-auto mt-4">
        <CircularProgressbar
          value={percentage}
          text={`${correct}/${total}`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: `#3B82F6`,
            textColor: "#3B82F6",
            trailColor: "#E5E7EB",
          })}
        />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
