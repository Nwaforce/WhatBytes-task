import Image from "next/image";
import logo from "../components/images/pngegg.png";

interface TestSummaryProps {
  title: string;
  questions: number;
  duration: string;
  submittedOn: string;
  onUpdateClick: () => void;
}

export default function TestSummary({ title, questions, duration, submittedOn, onUpdateClick }: TestSummaryProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200 shadow-sm">
      {/* Left Section - HTML Logo & Details */}
      <div className="flex items-center gap-4">
        {/* HTML5 Logo */}
        <Image src={logo} alt="HTML5 Logo" width={40} height={40} />

        {/* Text Content */}
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Questions:</span> {questions.toString().padStart(2, "0")} |
            <span className="font-medium"> Duration:</span> {duration} |
            <span className="font-medium"> Submitted on</span> {submittedOn}
          </p>
        </div>
      </div>

      {/* Right Section - Update Button */}
      <button 
        onClick={onUpdateClick} 
        className="px-5 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Update
      </button>
    </div>
  );
}
