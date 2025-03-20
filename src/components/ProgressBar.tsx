interface ProgressBarProps {
    label: string;
    percentage: number;
    color: string;
  }
  
  const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, color }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm font-medium">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
          <div
            className="h-full rounded-full"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  