import Button from '@ui/Button';
import Modal from '@ui/Modal';
import { useState } from 'react';

const SkillModal = () => {
  const [skillModalOpen, setIsSkillModalOpen] = useState(false);

  const isSkillModalOpen = () => {
    setIsSkillModalOpen(true);
  };

  const onClose = () => {
    setIsSkillModalOpen(false);
  };

  const [arrayOne, setArrayOne] = useState<Array<string>>([
    'Version Control',
    'DevOps',
    'Testing',
    'Art',
    'Sketch',
    'Visual Branding',
    'Graphics Design',
    'Animation',
    'Color Theory',
    'Illustration',
    'Animation',
    'API Intergration',
  ]);
  const [arrayTwo, setArrayTwo] = useState<Array<string>>([]);

  const handleMoveToTwo = (item: string) => {
    setArrayOne(arrayOne.filter((el: string) => el !== item));
    setArrayTwo([...arrayTwo, item]);
  };

  const handleMoveToOne = (item: string) => {
    setArrayTwo(arrayTwo.filter((el) => el !== item));
    setArrayOne([...arrayOne, item]);
  };

  return (
    <section className="w-full flex items-center justify-center">
      {skillModalOpen && (
        <Modal closeOnOverlayClick isOpen={skillModalOpen} closeModal={onClose} isCloseIconPresent={false} size="lg">
          <div className=" w-full max-sm:w-full px-4 py-6">
            <div className="flex justify-between items-center border-b-4 border-brand-green-primary py-4">
              <h1 className="font-bold text-2xl ">Skill</h1>
              <span>x</span>
            </div>
            <div className="w-full">
              {arrayTwo.length > 0 && (
                <ul className="w-full flex flex-wrap gap-4 my-12">
                  {arrayTwo.map((item) => (
                    <li key={item}>
                      <Button
                        className=" group/skillsbtn  h-10 bg-brand-green-shade95 text-brand-green-shade20 hover:text-white-100 hover: text-sm font-semibold leading-5 rounded-lg px-2 py-4 flex items-center gap-4"
                        onClick={() => handleMoveToOne(item)}
                        type="button"
                      >
                        {item}
                        <span className="text-base w-6 h-6 border-2 rounded-full m-auto ml-4 flex items-center justify-center group-hover/skillsbtn:border-white-100">
                          X
                        </span>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="my-12">
              <input
                type="text"
                placeholder='Enter your skill and press "ENTER'
                className="w-full rounded-lg p-4 mb-6 border-2 border-[#C4C7C6]"
              />
            </div>

            <div className="w-full">
              <h2 className="text-brand-green-primary text-base font-bold">Suggestions</h2>
              {arrayOne.length > 0 && (
                <ul className=" p-4  flex gap-6 rounded-lg flex-wrap w-full ">
                  {arrayOne.map((item) => (
                    <li key={item}>
                      <Button
                        className="text-[#737876] bg-white border-2 border-[#C4C7C6]"
                        onClick={() => handleMoveToTwo(item)}
                        type="button"
                      >
                        {item}
                        <span>+</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-4 pb-4 max-sm:flex-col max-sm:items-center">
            <button className="border-2 p-5 rounded-lg h-5 text-center w-24 flex items-center max-sm:w-10/12 border-brand-green-primary text-brand-green-primary">
              Cancel
            </button>
            <Button className="border-2 p-5 rounded-lg h-5 w-24 flex items-center max-sm:w-10/12 border-brand-green-primary">
              Save
            </Button>
          </div>
        </Modal>
      )}

      <Button className="bg-brand-green-primary text-brand-green-ttr my-10" onClick={isSkillModalOpen} type="button">
        Open Modal
      </Button>
    </section>
  );
};

export default SkillModal;
