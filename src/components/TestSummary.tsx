import Image from "next/image";

interface TestSummaryProps {
  logo: string;
  title: string;
  questions: number;
  duration: string;
  submittedOn: string;
}

const TestSummary: React.FC<TestSummaryProps> = ({ logo, title, questions, duration, submittedOn }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center gap-4">
        <Image src={logo} alt={`${title} Logo`} width={50} height={50} />
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-gray-600 text-sm">
            Questions: {questions} | Duration: {duration} | Submitted on {submittedOn}
          </p>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
        Update
      </button>
    </div>
  );
};

export default TestSummary;
