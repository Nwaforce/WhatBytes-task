interface ProgressBarProps {
  label: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, color }) => {
  return (
    <div className="mb-6"> {/* Increased bottom margin for spacing */}
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-800">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className="h-full rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
