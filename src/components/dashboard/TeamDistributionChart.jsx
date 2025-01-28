import React from 'react';
import { Chart } from 'react-google-charts';
import { PieChart } from 'lucide-react';

const TeamDistributionChart = ({ data }) => {
  const chartData = [
    ['Department', 'Number of Members'],
    ...data,
  ];

  return (
    <div className="card">
      <div className="card-header flex items-center gap-2">
        <PieChart className="text-indigo-500" />
        <h3 className="text-lg font-semibold">Team Distribution</h3>
      </div>
      <div className="card-content">
        <Chart
          width="100%"
          height="300px"
          chartType="PieChart"
          data={chartData}
          options={{
            pieHole: 0.4,
            colors: [
              '#1f77b4', // Blue for Developers
              '#ff7f0e', // Orange for Testers
              '#2ca02c', // Green for Designers
              '#d62728', // Red for Marketing
              '#9467bd', // Purple for Management
              '#8c564b', // Brown for HR
            ],
            legend: { position: 'bottom', alignment: 'center' },
            fontName: 'Roboto',
            fontSize: 14,
            chartArea: { width: '85%', height: '75%' },
            tooltip: { textStyle: { fontSize: 12 } },
          }}
        />
      </div>
    </div>
  );
};

export default TeamDistributionChart;
