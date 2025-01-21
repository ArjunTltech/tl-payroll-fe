import React from 'react';
import SummaryCards from './SummaryCards';
import TeamDistributionChart from './TeamDistributionChart';
import PayrollTrendsChart from './PayrollTrendsChart';
import AttendanceTrendsChart from './AttendanceTrendsChart';

const Dashboard = () => {
  const teamDistribution = [
    ['Developers', 5],
    ['Tester', 2],
    ['Designers', 1],
    ['Marketing', 2],
    ['Management', 3],
    ['HR', 1],
  ];

  const payrollTrends = [
    ['Jan', 85000, 2578],
    ['Feb', 87000, 2636],
    ['Mar', 88500, 2681],
    ['Apr', 90000, 2727],
    ['May', 91500, 2772],
    ['Jun', 92000, 2787],
  ];

  const attendanceTrends = [
    ['Jan', 92],
    ['Feb', 86],
    ['Mar', 91],
    ['Apr', 85],
    ['May', 93],
    ['Jun', 96],
  ];

  return (
    <div className="p-6 space-y-6">
      <SummaryCards 
        totalEmployees={33}
        monthlyPayroll={92000}
        avgAttendance={96}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamDistributionChart data={teamDistribution} />
        <PayrollTrendsChart data={payrollTrends} />
        <AttendanceTrendsChart data={attendanceTrends} />
      </div>
    </div>
  );
};

export default Dashboard;
