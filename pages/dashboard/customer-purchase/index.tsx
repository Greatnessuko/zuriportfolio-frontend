// Define a type for the data
type PurchaseData = {
  id: number;
  item: string;
  orderID: string;
  price: string;
  date: string;
  sellerName: string;
  status: string;
};

const MyPage: React.FC = () => {
  const data: PurchaseData[] = [
    {
      id: 1,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Mark Essien',
      status: 'Successful',
    },
    {
      id: 2,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Mark Essien',
      status: 'Pending',
    },
    {
      id: 3,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Ekomobong Enang',
      status: 'Failed',
    },
    {
      id: 4,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Mark Essien',
      status: 'Pending',
    },
    {
      id: 5,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Solomon Edem',
      status: 'Successful',
    },
    {
      id: 6,
      item: 'Webinar & Course Slide',
      orderID: '643D73U90',
      price: '$100.00',
      date: '25 March 2023',
      sellerName: 'Solomon Edem',
      status: 'Successful',
    },
    // Add more data items as needed
  ];

  // Function to determine the background color based on status
  const getStatusBackgroundColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'successful':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="px-16">
      <div className="mt-9 mb-12">
        <div className="flex items-center">
          <p className="text-base text-brand-green-primary">Settings</p>
          <span></span>
          <p className="text-base text-gray-100">Dashboard</p>
        </div>
      </div>
      <h3 className="font-semibold text-3xl">Customer Purchase Dashboard</h3>

      <div className="flex align-center justify-between w-3/4 mt-9">
        <div className="h-[2.8rem] w-[12.5rem] flex items-center justify-center border-b-2 border-solid border-brand-green-primary">
          <p className="text-base text-brand-green-primary">All Purchases</p>
        </div>
        <div className="h-[2.8rem] w-[12.5rem] flex items-center justify-center hover:border-b-2 border-brand-green-primary">
          <p className="text-base">Pending Purchases</p>
        </div>
        <div className="h-[2.8rem] w-[12.5rem] flex items-center justify-center hover:border-b-2 border-brand-green-primary">
          <p className="text-base">Completed Purchases</p>
        </div>
        <div className="h-[2.8rem] w-[12.5rem] flex items-center justify-center hover:border-b-2 border-brand-green-primary">
          <p className="text-base">All Purchases</p>
        </div>
      </div>

      <div className="flex items-center justify-between h-[2.5rem] mt-[4.375rem]">
        <input
          className="border border-solid border-gray-100 w-[62.5rem] h-[2.5rem] p-[1rem] rounded"
          placeholder="Search by items, status, seller etc"
        />
        <div className="h-[2.5rem] flex items-center justify-center border border-solid border-gray-100 w-[6.25rem] rounded">
          <p className="text-[0.87rem]">Filters</p>
        </div>
        <div className="h-[2.5rem] flex items-center justify-center border border-solid border-gray-100 w-[6.25rem] rounded">
          <p className="text-[0.87rem]">Delete</p>
        </div>
      </div>

      <table className="w-full mt-6 mb-[2rem]">
        <thead className="h-[3rem]">
          <tr className="bg-gray-100 ">
            <th className="text-left px-4 py-2 text-[0.75rem]">Items</th>
            <th className="text-left px-4 py-2 text-[0.75rem]">Order ID</th>
            <th className="text-left px-4 py-2 text-[0.75rem]">Price</th>
            <th className="text-left px-4 py-2 text-[0.75rem]">Date</th>
            <th className="text-left px-4 py-2 text-[0.75rem]">Sellers Name</th>
            <th className="text-left px-4 py-2 text-[0.75rem]">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 border-solid border-1 h-[3.75rem]">
              <td className="text-[0.75rem] px-4 py-2">{item.item}</td>
              <td className="text-[0.75rem] px-4 py-2">{item.orderID}</td>
              <td className="text-[0.75rem] px-4 py-2">{item.price}</td>
              <td className="text-[0.75rem] px-4 py-2">{item.date}</td>
              <td className="text-[0.75rem] px-4 py-2">{item.sellerName}</td>
              {/* Move the span inside the 'Status' td */}
              <td className="text-[0.75rem] px-4 py-2">
                <span
                  className={`flex items-center justify-center h-[28px] w-[90px] rounded-xl ${getStatusBackgroundColor(
                    item.status,
                  )}`}
                >
                  <p className="text-[0.75rem]">{item.status}</p>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPage;
