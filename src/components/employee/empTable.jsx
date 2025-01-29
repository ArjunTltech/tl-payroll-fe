import { Edit } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const employees = [
  {
    id: "EMP-001",
    name: "John Doe",
    avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    position: "Senior Developer",
    department: "Development",
    salary: 5000,
    currency: "USD",
    employmentType: "Full-time",
    hireDate: "2020-03-15",
    status: "active"
  },
  {
    id: "EMP-002",
    name: "Jane Smith",
    avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    position: "Project Manager",
    department: "Management",
    salary: 6000,
    currency: "USD",
    employmentType: "Full-time",
    hireDate: "2019-06-20",
    status: "active"
  },
  {
    id: "EMP-003",
    name: "Mike Johnson",
    avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    position: "UI Designer",
    department: "Design",
    salary: 4500,
    currency: "USD",
    employmentType: "Contract",
    hireDate: "2021-01-10",
    status: "pending"
  },
  {
    id: "EMP-004",
    name: "Sarah Wilson",
    avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    position: "QA Engineer",
    department: "Quality Assurance",
    salary: 4800,
    currency: "USD",
    employmentType: "Full-time",
    hireDate: "2020-09-05",
    status: "active"
  },
  {
    id: "EMP-005",
    name: "Richard Gran",
    avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    position: "DevOps Engineer",
    department: "Operations",
    salary: 5500,
    currency: "USD",
    employmentType: "Full-time",
    hireDate: "2020-11-15",
    status: "active"
  }
];

function EmpTable() {

  const getStatusStyle = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-900';
      case 'pending':
        return 'bg-amber-500/20 text-amber-900';
      case 'inactive':
        return 'bg-red-500/20 text-red-900';
      default:
        return 'bg-gray-500/20 text-gray-900';
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const nav= useNavigate()

  const itemsPerPage = 4;

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  // Filter employees by name
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleIndex=(index)=>{

  }
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Employee List
            </h5>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Complete list of employees with their details
            </p>
          </div>

          <div className="flex w-full gap-2 shrink-0 md:w-max">
            <div className="w-full md:w-72">
            <div className="relative h-10 w-full min-w-[200px]">
                <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            {/* <button className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                aria-hidden="true" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
                </path>
              </svg>
              Download
            </button> */}
                  <button onClick={() => { nav('/add-employee')}} className='bg-green-500 px-4 py-2 text-white rounded-md'>Add Employee</button>

          </div>
        </div>
      </div>

      {/* Table container with horizontal scroll */}
      <div className="relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Employee</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Position</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Department</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Salary</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Work Type</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Hire Date</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Status</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td className="sticky left-0 z-10 p-4 border-b border-blue-gray-50 bg-white">
                    <div className="flex items-center gap-3">
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-12 h-12 rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-cover"
                      />
                      <p className="font-sans text-sm font-bold text-blue-gray-900">
                        {employee.name}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-sans text-sm text-blue-gray-900">
                      {employee.position}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-sans text-sm text-blue-gray-900">
                      {employee.department}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-sans text-sm text-blue-gray-900">
                      {employee.currency} {employee.salary.toLocaleString()}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-sans text-sm text-blue-gray-900">
                      {employee.employmentType}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-sans text-sm text-blue-gray-900">
                      {new Date(employee.hireDate).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-max">
                      <div className={`px-2 py-1 rounded-md text-xs font-bold uppercase ${getStatusStyle(employee.status)}`}>
                        {employee.status}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <button className="w-10 h-10 rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center justify-center">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 border rounded-lg disabled:opacity-50">Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-lg disabled:opacity-50">Next</button>
      </div>
    </div>
  )
}

export default EmpTable