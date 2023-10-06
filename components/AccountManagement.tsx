import Button from '@ui/Button';

function AccountManagement() {
  return (
    <>
      <div className="flex flex-col gap-y-[1rem]">
        <h3 className=" font-manropeEB lg:font-manropeB text-[1rem] lg:text-[1.375rem] text-[#2E3130] leading-[1.5rem] lg:leading-[1.75rem]">
          Account Management
        </h3>
        <form className="flex flex-col gap-y-[2rem]">
          <div className="flex flex-col gap-y-[0.5rem]">
            <label
              htmlFor="email"
              className=" font-manropeEB text-[0.875rem] lg:text-[1rem] leading-[1.25rem] lg:leading-[1.5rem] text-[#344054]"
            >
              Email
            </label>
            <div className="flex flex-col gap-y-[0.375rem]">
              <p className=" font-manropeB text-[0.875rem] leading-[1.25rem] text-[#344054]">Current Email Address</p>
              <input
                name="email"
                type="email"
                placeholder="yourname@gmail.com"
                className="border py-[0.625rem] px-[0.875rem] rounded-[0.5rem] lg:w-[35rem] font-manropeL text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#667085]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[0.5rem]">
            <label
              htmlFor="currentPassword"
              className=" font-manropeEB text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#344054]"
            >
              Change Password
            </label>
            <div className="flex flex-col gap-y-[0.375rem]">
              <p className=" font-manropeB text-[0.875rem] leading-[1.25rem] text-[#344054]">Current Passowrd</p>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="border py-[0.625rem] px-[0.875rem] rounded-[0.5rem] lg:w-[35rem] font-manropeL text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#667085]"
              />
            </div>
            <div className="flex flex-col gap-y-[0.375rem]">
              <label
                htmlFor="newPassword"
                className=" font-manropeB lg:font-manropeB text-[0.875rem] leading-[1.25rem] text-[#344054]"
              >
                New Password
              </label>
              <input
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                className="border py-[0.625rem] px-[0.875rem] rounded-[0.5rem] lg:w-[35rem] font-manropeL text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#667085]"
              />
            </div>
            <div className="flex flex-col gap-y-[0.375rem]">
              <p className=" font-manropeB text-[0.875rem] leading-[1.25rem] text-[#344054]">Confirm New Password</p>
              <input
                name="confirmNewPassword"
                type="password"
                placeholder="Enter new password"
                className="border py-[0.625rem] px-[0.875rem] rounded-[0.5rem] lg:w-[35rem] font-manropeL text-[0.875rem] lg:text-[1rem] leading-[1.5rem] text-[#667085]"
              />
            </div>
          </div>
        </form>
      </div>
      <Button size="lg" intent="primary" className="w-full lg:w-fit rounded-[0.5rem] py-[0.5rem] px-[1.25rem]">
        Confirm Changes
      </Button>
    </>
  );
}

export default AccountManagement;
