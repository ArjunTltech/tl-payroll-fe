import React from 'react';
import { Users, DollarSign, Activity } from 'lucide-react';

const SummaryCards = ({ totalEmployees, monthlyPayroll, avgAttendance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Team Members Card */}
      <div className="card flex flex-col bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Users className="text-indigo-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Total Team Members</h3>
        </div>
        <div className="text-3xl font-bold">{totalEmployees}</div>
        <div className="text-sm text-gray-500">Across all departments</div>
      </div>

      {/* Monthly Payroll Card */}
      <div className="card flex flex-col bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <DollarSign className="text-green-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Monthly Payroll</h3>
        </div>
        <div className="text-3xl font-bold">${monthlyPayroll.toLocaleString()}</div>
        <div className="text-sm text-gray-500">Current month total</div>
      </div>

      {/* Average Attendance Card */}
      <div className="card flex flex-col bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Activity className="text-blue-600 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Avg Attendance</h3>
        </div>
        <div className="text-3xl font-bold">{avgAttendance}%</div>
        <div className="text-sm text-gray-500">Current month</div>
      </div>
    </div>
  );
};

export default SummaryCards;
