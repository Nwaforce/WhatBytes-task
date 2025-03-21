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
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center gap-4 py-8">
        <Image src={logo} alt={`${title} Logo`} width={50} height={50} />
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-gray-600 text-sm">
            Questions: {questions} | Duration: {duration} | Submitted on {submittedOn}
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-900 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 "
      >
        Update
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TestSummary;
