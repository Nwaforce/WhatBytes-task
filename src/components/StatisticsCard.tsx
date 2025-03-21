interface StatisticsCardProps {
  title: string;
  value: string | number;
}

export default function StatisticsCard({ title, value }: StatisticsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
