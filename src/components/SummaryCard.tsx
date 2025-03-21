import { useState } from "react";
import Image from "next/image";
import logo from "../components/images/pngegg.png";
import Modal from "./Modal";

interface TestSummaryProps {
  title: string;
  questions: number;
  duration: string;
  submittedOn: string;
}

const TestSummary: React.FC<TestSummaryProps> = ({ title, questions, duration, submittedOn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 px-6">
      <div className="flex items-center gap-1 -mx-6">
        <Image src={logo} alt={`${title} Logo`} width={60} height={0} />
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-gray-500 text-sm ">
            Questions: {questions} | Duration: {duration} | Submitted on {submittedOn}
          </p>
        </div>
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-900 text-white px-5 py-2 -mt-9 rounded-lg shadow-md hover:bg-blue-700 -mx-7"
      >
        Update
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TestSummary;
