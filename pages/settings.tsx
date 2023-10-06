import Button from '@ui/Button';
import AccountManagement from '../components/AccountManagement';
import DeleteAccount from '../components/DeleteAccount';
import MainLayout from '../components/Layout/MainLayout';

function Settings() {
  return (
    <MainLayout activePage="settings" showTopbar showDashboardSidebar={false}>
      <div className="w-full flex flex-col border-b border-[#C4C7C6]">
        <div className="flex lg:flex-row flex-col w-full ">
          <div className="lg:w-[27rem] w-full lg:h-[7.25rem] lg:border-y border-[#C4C7C6] lg:border-r">
            <div className="flex mt-7 lg:mt-[4.625rem] ml-10 lg:ml-[5rem] lg:pr-[2rem] gap-x-[2rem]">
              <button className=" font-manropeEB text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#009254] underline underline-offset-[10px]">
                Settings
              </button>
              <button className="font-manropeEB text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#737876]">
                Invite a friend
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="hidden w-full lg:flex items-end h-[7.25rem] lg:border-y border-[#C4C7C6]">
              <h3 className="text-[1.5rem] text-[#2E3130] leading-[2rem] font-manropeB ml-[3.25rem] ">Settings</h3>
            </div>
          </div>
        </div>
        <div className="w-full lg:h-[690px] h-[478px] flex flex-col lg:border-b border-[#C4C7C6]">
          <div className="w-full h-full flex lg:flex-row flex-col">
            <div className="lg:w-[27rem] h-full lg:border-r border-[#C4C7C6]">
              <div className="w-full px-6 lg:px-0 divide-y sm:divide-none divide-[#E1E3E2] flex flex-col mt-[24px]">
                <button className="w-full text-start lg:text-center lg:bg-[#E6F5EA] py-[16px] lg:py-[12px] font-manropeB lg:font-manropeEB text-[1rem] leading-[1.25rem] lg:leading-[1.5rem] text-[#2E3130]">
                  Account Management
                </button>
                <button className="w-full text-start lg:text-center py-[16px] lg:py-[12px] font-manropeB lg:font-manropeEB text-[1rem] leading-[1.25rem] lg:leading-[1.5rem] text-[#444846]">
                  Notification Setting
                </button>
                <button className="w-full text-start lg:text-center py-[16px] lg:py-[12px] font-manropeB lg:font-manropeEB text-[1rem] leading-[1.25rem] lg:leading-[1.5rem] text-[#444846]">
                  Delete Account
                </button>
                <p className=""> </p>
              </div>
            </div>
            <div className="w-full lg:h-full lg:flex flex-col">
              <div className="flex flex-col mx-[24px] gap-[2rem] lg:m-[46px] lg:gap-y-[2.5rem]">
                <AccountManagement />
                {/* <DeleteAccount/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end ">
          <Button
            size="md"
            intent="secondary"
            className="hidden lg:block mt-[46px] rounded-[0.5rem] py-[0.75rem] px-[1.25rem] lg:mr-[100px] mr-6 my-[45px] "
          >
            Save & Close
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Settings;
