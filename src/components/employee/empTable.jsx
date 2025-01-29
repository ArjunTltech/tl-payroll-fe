import { Edit } from 'lucide-react';
import React from 'react'

function EmpTable() {
    const employees = [
        {
          id: 1,
          name: "John Doe",
          avatar: "/api/placeholder/100/100",
          salary: "$5,000",
          paymentDate: "Wed 3:00pm",
          status: "paid",
          paymentMethod: "Direct Deposit",
          accountNumber: "****1234",
        },
        {
          id: 2,
          name: "Jane Smith",
          avatar: "/api/placeholder/100/100",
          salary: "$4,500",
          paymentDate: "Wed 1:00pm",
          status: "pending",
          paymentMethod: "Bank Transfer",
          accountNumber: "****5678",
        },
        {
          id: 3,
          name: "Mike Johnson",
          avatar: "/api/placeholder/100/100",
          salary: "$6,000",
          paymentDate: "Mon 7:40pm",
          status: "paid",
          paymentMethod: "Direct Deposit",
          accountNumber: "****9012",
        }
      ];
    
      const getStatusStyle = (status) => {
        switch (status) {
          case 'paid':
            return 'bg-green-500/20 text-green-900';
          case 'pending':
            return 'bg-amber-500/20 text-amber-900';
          case 'cancelled':
            return 'bg-red-500/20 text-red-900';
          default:
            return 'bg-gray-500/20 text-gray-900';
        }
      };
  return (
    <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
    <div class="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
      <div>
        <h5
          class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Recent Transactions
        </h5>
        <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          These are details about the last transactions
        </p>
      </div>
      <div class="flex w-full gap-2 shrink-0 md:w-max">
        <div class="w-full md:w-72">
          <div class="relative h-10 w-full min-w-[200px]">
            <div
              class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </div>
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" " />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
        </div>
        <button
          class="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            aria-hidden="true" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
            </path>
          </svg>
          Download
        </button>
      </div>
    </div>
  </div>
  <div class="p-6 px-0 overflow-scroll">
  <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Employee</th>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Salary</th>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Payment Date</th>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Status</th>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Payment Method</th>
            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="p-4 border-b border-blue-gray-50">
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
                  {employee.salary}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="font-sans text-sm text-blue-gray-900">
                  {employee.paymentDate}
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
                <div className="flex flex-col">
                  <p className="font-sans text-sm text-blue-gray-900">
                    {employee.paymentMethod}
                  </p>
                  <p className="font-sans text-sm text-blue-gray-900 opacity-70">
                    {employee.accountNumber}
                  </p>
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
  <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <button
      class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Previous
    </button>
    <div class="flex items-center gap-2">
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          1
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          2
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          3
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          ...
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          8
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          9
        </span>
      </button>
      <button
        class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          10
        </span>
      </button>
    </div>
    <button
      class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Next
    </button>
  </div>
</div>
  )
}

export default EmpTable