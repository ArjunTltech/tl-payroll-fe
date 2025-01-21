import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { LineChart } from 'lucide-react';

const AttendanceTrendsChart = ({ data }) => {
  const [timeRange, setTimeRange] = useState('6m'); // Default to 6 months

  const filteredData = timeRange === '6m' ? data.slice(-6) : data;

  const chartData = [
    ['Month', 'Average Attendance %'],
    ...filteredData,
  ];

  return (
    <div className="card md:col-span-2">
      <div className="card-header flex justify-between items-center">
        <div className="flex items-center gap-2">
          <LineChart className="text-indigo-500" />
          <h3 className="text-lg font-semibold">Attendance Trends</h3>
        </div>
        <div>
          <select
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="6m">Last 6 Months</option>
            <option value="1y">Last 1 Year</option>
          </select>
        </div>
      </div>
      <div className="card-content">
        <Chart
          width="100%"
          height="350px"
          chartType="LineChart"
          data={chartData}
          options={{
            curveType: 'function',
            colors: ['#22c55e'],
            legend: { position: 'bottom' },
            chartArea: { width: '85%', height: '75%' },
            vAxis: {
              title: 'Attendance (%)',
              viewWindow: { min: 80, max: 100 },
              format: '#\'%\'',
              textStyle: { fontSize: 12 },
            },
            hAxis: {
              title: 'Month',
              textStyle: { fontSize: 12 },
            },
            tooltip: { isHtml: true },
          }}
        />
      </div>
    </div>
  );
};

export default AttendanceTrendsChart;
