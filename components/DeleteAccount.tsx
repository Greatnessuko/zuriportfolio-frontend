import Modal from '@ui/Modal';

function DeleteAccount() {
  const handleCloseModal = () => {
    alert('close now!!');
  };
  return (
    <>
      <div className="flex flex-col gap-y-[1rem]">
        <h3 className=" font-manropeB text-[1.375rem] text-[#2E3130] leading-[1.75rem]">Delete Account</h3>
        <p className="text-[#737876] font-manropeB text-[0.875rem] leading-[1.25rem]">
          Would you like to delete your portfolio account: <span className="text-[#009254]">@pleroma</span>?
        </p>
        <p className="text-[#737876] font-manropeB text-[0.875rem] leading-[1.25rem]">
          Deleting your account will remove all of your content and data associated with it.
        </p>
        <p className="text-[#FF2E2E] font-manropeEB">I want to delete my account</p>
      </div>
      {/* <Modal size="sm" title="Warning:" isOpen isCloseIconPresent closeModal={handleCloseModal}>
                Are you sure you want to delete your account? This action will permanently remove your profile, projects, and all associated data from the platform.
            </Modal> */}
    </>
  );
}

export default DeleteAccount;
