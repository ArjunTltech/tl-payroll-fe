import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["SL.NO", "Name", "Phone", "Date", "Amount", "Payment Method", "Transaction ID", , "Status"];

const TABLE_ROWS = [
  {
    transactionId: "TX123456",
    name: "John Doe",
    phone: "8457515485",
    date: "2023-10-01",
    amount: "$150.00",
    status: "Completed",
    paymentMethod: "Bank Transfer",
  },
  {
    transactionId: "TX123457",
    name: "Jane Smith",
    phone: "9845547127",
    date: "2023-10-02",
    amount: "$200.00",
    status: "Pending",
    paymentMethod: "UPI Transfer",
  },
  {
    transactionId: "TX123458",
    name: "Sarah Wilson",
    phone: "9566321004",
    date: "2023-10-03",
    amount: "$75.00",
    status: "Failed",
    paymentMethod: "Bank Transfer",
  },
  {
    transactionId: "TX123459",
    name: "Richard Gran",
    phone: "9844643412",
    date: "2023-10-04",
    amount: "$300.00",
    status: "Completed",
    paymentMethod: "UPI Transfer",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/20 text-green-900';
    case 'Pending':
      return 'bg-amber-500/20 text-amber-900';
    case 'Failed':
      return 'bg-red-500/20 text-red-900';
    default:
      return 'bg-gray-500/20 text-gray-900';
  }
};


const PaymentTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  };

  // Filter employees by name
  const filteredRows = TABLE_ROWS.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm) // Match phone numbers directly
  );
  return (

    <Card className="h-full w-full overflow-scroll px-6">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Payment History
            </h5>
            {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Complete list of employees with their details
            </p> */}
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
                  placeholder="Search by name or phone..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-gray-300 pb-4 pt-10 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.length > 0 ? (
            filteredRows.map(({ transactionId, name, phone, date, amount, status, paymentMethod }, index) => {
              const isLast = index === filteredRows.length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

              return (
                <tr key={transactionId} className="hover:bg-gray-50">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-center"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-center"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-center"
                    >
                      {phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-center"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-center"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-center"
                    >
                      {paymentMethod}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600 text-center"
                    >
                      {transactionId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-full flex justify-center">
                      <Typography
                        variant="small"
                        className={`px-2 py-1 rounded-md text-xs font-bold uppercase ${getStatusStyle(status)} text-center`}
                      >
                        {status}
                      </Typography>
                    </div>
                  </td>

                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={TABLE_HEAD.length} className="py-4 text-center text-gray-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
export default PaymentTable;