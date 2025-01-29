import React from 'react'
import EmpTable from '../../components/employee/empTable'
import { useNavigate } from 'react-router-dom'

const Employees = () => {
  const nav= useNavigate()
  return (
    <div>
      <div className="w-full flex justify-between items-center">

      <h1 className='text-2xl font-bold '>Employee Table </h1>
      <button onClick={() => { nav('/add-employee')}} className='bg-green-500 px-4 py-2 text-white rounded-md'>Add Employee</button>
      </div>
      <EmpTable />
    </div>
  )
}

export default Employees