import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { BarChart3 } from 'lucide-react';

const PayrollTrendsChart = ({ data }) => {
  const [viewMode, setViewMode] = useState('overview'); // 'overview' or 'detailed'

  const overviewData = [
    ['Month', 'Total Amount'],
    ...data.map(([month, total]) => [month, total]),
  ];

  const detailedData = [
    ['Month', 'Base Salary', 'Bonuses', 'Incentives'],
    ...data.map(([month, total, avg]) => [
      month,
      total * 0.7, // Base Salary (70%)
      total * 0.2, // Bonuses (20%)
      total * 0.1, // Incentives (10%)
    ]),
  ];

  return (
    <div className="card ">
      <div className="card-header flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <BarChart3 className="text-indigo-500" />
          <h3 className="text-lg font-semibold">Payroll Trends</h3>
        </div>
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="overview">Overview</option>
          <option value="detailed">Detailed View</option>
        </select>
      </div>
      <div className="card-content">
        <Chart
          width="100%"
          height="350px"
          chartType={viewMode === 'overview' ? 'BarChart' : 'ColumnChart'}
          data={viewMode === 'overview' ? overviewData : detailedData}
          options={{
            colors: viewMode === 'overview' ? ['#4f46e5'] : ['#6366f1', '#22c55e', '#f97316'],
            legend: { position: 'bottom', alignment: 'center' },
            chartArea: { width: '85%', height: '75%' },
            tooltip: { textStyle: { fontSize: 12 } },
            vAxis: {
              title: 'Amount ($)',
              format: '$#,###',
            },
            hAxis: {
              title: 'Month',
            },
          }}
        />
      </div>
    </div>
  );
};

export default PayrollTrendsChart;
