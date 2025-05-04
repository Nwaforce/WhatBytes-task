import { useState } from "react";

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    rank: number;
    percentile: number;
    correctAnswers: number;
  }) => void;
  initialRank: number;
  initialPercentile: number;
  initialCorrectAnswers: number;
}

export default function UpdateScoresModal({
  isOpen,
  onClose,
  onSave,
  initialRank,
  initialPercentile,
  initialCorrectAnswers,
}: UpdateScoresModalProps) {
  const [rank, setRank] = useState<number | "">(initialRank);
  const [percentile, setPercentile] = useState<number | "">(initialPercentile);
  const [correctAnswers, setCorrectAnswers] = useState<number | "">(
    initialCorrectAnswers
  );
  const [errors, setErrors] = useState<{
    rank?: string;
    percentile?: string;
    correctAnswers?: string;
  }>({});

  if (!isOpen) return null;

  const validateAndSubmit = () => {
    const newErrors: {
      rank?: string;
      percentile?: string;
      correctAnswers?: string;
    } = {};

    if (rank === "" || rank <= 0) {
      newErrors.rank = "Rank is required and must be a positive number.";
    }

    if (percentile === "" || percentile < 0 || percentile > 100) {
      newErrors.percentile = "Percentile must be between 0 and 100.";
    }

    if (correctAnswers === "" || correctAnswers < 0 || correctAnswers > 15) {
      newErrors.correctAnswers = "Correct Answers must be between 0 and 15.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      rank: Number(rank),
      percentile: Number(percentile),
      correctAnswers: Number(correctAnswers),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">Update Scores</h2>
        <div className="mt-4 space-y-4">
          {/* Rank Input */}
          <div>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">
                1
              </span>
              <span>Update your</span>{" "}
              <span className="font-bold ml-1">Rank</span>
              <input
                type="number"
                className="border ml-auto p-2 w-20 rounded-md"
                value={rank}
                onChange={(e) =>
                  setRank(e.target.value === "" ? "" : parseInt(e.target.value))
                }
                min={1}
              />
            </div>
            {errors.rank && (
              <p className="text-red-500 text-sm">{errors.rank}</p>
            )}
          </div>

          {/* Percentile Input */}
          <div>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">
                2
              </span>
              <span>Update your</span>{" "}
              <span className="font-bold ml-1">Percentile</span>
              <input
                type="number"
                className="border ml-auto p-2 w-20 rounded-md"
                value={percentile}
                onChange={(e) =>
                  setPercentile(
                    e.target.value === "" ? "" : parseInt(e.target.value)
                  )
                }
                min={0}
                max={100}
              />
            </div>
            {errors.percentile && (
              <p className="text-red-500 text-sm">{errors.percentile}</p>
            )}
          </div>

          {/* Correct Answers Input */}
          <div>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">
                3
              </span>
              <span>Update your</span>{" "}
              <span className="font-bold ml-1">
                Correct Answers (out of 15)
              </span>
              <input
                type="number"
                className="border ml-auto p-2 w-20 rounded-md"
                value={correctAnswers}
                onChange={(e) =>
                  setCorrectAnswers(
                    e.target.value === "" ? "" : parseInt(e.target.value)
                  )
                }
                min={0}
                max={15}
              />
            </div>
            {errors.correctAnswers && (
              <p className="text-red-500 text-sm">{errors.correctAnswers}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer"
            onClick={validateAndSubmit}
          >
            Save →
          </button>
        </div>
      </div>
    </div>
  );
}
