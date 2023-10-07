import MainLayout from '../../components/Layout/MainLayout';
import NavDashBoard from '../../modules/dashboard/component/Navbar';
import OrderHistory from '../../modules/dashboard/component/order/OrderHistory/OrderHistory';
// import withAuth from '../helpers/withAuth';

const Orders: React.FC = () => {
  return (
    <>
      <MainLayout activePage="orders" showDashboardSidebar={true} showTopbar={true}>
        <div className="w-full">
          <OrderHistory />
        </div>
      </MainLayout>
    </>
  );
};

export default Orders;
