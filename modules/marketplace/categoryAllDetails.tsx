import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Image from 'next/image';

import { AllCategoryDetails } from '../../@types';

const dummyData: AllCategoryDetails[] = [
  {
    imageUrl: '/assets/Image.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-1.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-2.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-3.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-4.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-5.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-6.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-7.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-8.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-9.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-10.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
  {
    imageUrl: '/assets/Image-11.png',
    name: 'Webinar and Course Slide Template',
    price: '$100',
    author: 'Mark Essien',
  },
];

// Shuffle function to randomize the array
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Shuffle the entire dummyData array
const shuffledData = shuffleArray(dummyData);
const anotherShuffledData = shuffleArray(dummyData);
const yetAnotherShuffledData = shuffleArray(dummyData);
const fourthShuffleData = shuffleArray(dummyData);
const lastShuffleData = shuffleArray(dummyData);

// Display a random set of 4 items from the shuffled data
const graphicDesign = shuffledData.slice(0, 4);
const illustration = anotherShuffledData.slice(0, 4);
const logoDesign = yetAnotherShuffledData.slice(0, 4);
const brandingAssets = fourthShuffleData.slice(0, 4);
const designElements = lastShuffleData.slice(0, 4);

interface CategoryAllDetailsProps {
  category: string;
}

const CategoryAllDetails: React.FC<CategoryAllDetailsProps> = ({ category }) => {
  const [products, setProducts] = useState<AllCategoryDetails[]>([]);

  useEffect(() => {
    axios
      .get(`/api/products/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [category]);

  return (
    <>
      <div className="w-full h-screen flex flex-col content-center gap-[80px] pb-[90px]">
        <section className="w-full h-auto flex flex-col content-center gap-[32px]">
          <div className="w-full flex flex-row content-center items-center justify-between">
            <h1 className=" sm:text-[16px] md:text-[24px] lg:text-[28px] font-manropeB leading-[36px] text-[#131418]">
              Graphics Design Templates
            </h1>
            <p className="max-sm:text-[10px] md:text-[12px] lg:text-[14px] font-manropeB leading-[20px] text-[#009254]">
              View all
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-sm:gap-[8px] lg:gap-[25px] md:gap-[24px]">
            {/* <div className=" w-full p-[16px]"></div> */}
            {graphicDesign.map((AllCategoryDetails, index) => (
              <div
                key={index}
                className="flex flex-col content-center max-sm:p-[12px] md:p-[14px] lg:p-[16px] border-[1px] rounded-[8px] border-[#a0a6c9]"
              >
                <div className="w-full h-auto rounded-[8px]">
                  <Image
                    className="w-full"
                    src={AllCategoryDetails.imageUrl}
                    alt={AllCategoryDetails.name}
                    width={200}
                    height={209}
                  />
                </div>
                <h2 className=" mt-[8px] font-manropeL max-sm:text-[10.2px] md:text-[13.1px] lg:text-[13.9px] leading-[20px] tracking-[0.1%] text-[#131418] capitalize max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {AllCategoryDetails.name}
                </h2>
                <p className="mt-[2px] font-manropeEB max-sm:text-[16px] lg:text-[18px] leading-[24.59px] text-[#131418]">
                  {AllCategoryDetails.price}
                </p>
                <p className=" mt-[8px] font-manropeL max-sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] tracking-[0.25%] text-[#a0a6c9]">
                  By: <span className=" underline">{AllCategoryDetails.author}</span>
                </p>
                <Image className=" mt-[20px]" src={'/assets/Rating.png'} alt="rating" width={100} height={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-auto flex flex-col content-center gap-[32px]">
          <div className="w-full flex flex-row content-center items-center justify-between">
            <h1 className=" sm:text-[16px] md:text-[24px] lg:text-[28px] font-manropeB leading-[36px] text-[#131418]">
              Illustration
            </h1>
            <p className="max-sm:text-[10px] md:text-[12px] lg:text-[14px] font-manropeB leading-[20px] text-[#009254]">
              View all
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-sm:gap-[8px] lg:gap-[25px] md:gap-[24px]">
            {/* <div className=" w-full p-[16px]"></div> */}
            {illustration.map((AllCategoryDetails, index) => (
              <div
                key={index}
                className="flex flex-col content-center max-sm:p-[12px] md:p-[14px] lg:p-[16px] border-[1px] rounded-[8px] border-[#a0a6c9]"
              >
                <div className="w-full h-auto rounded-[8px]">
                  <Image
                    className="w-full"
                    src={AllCategoryDetails.imageUrl}
                    alt={AllCategoryDetails.name}
                    width={200}
                    height={209}
                  />
                </div>
                <h2 className=" mt-[8px] max-sm:text-[10.2px] md:text-[13.1px] lg:text-[13.9px] leading-[20px] tracking-[0.1%] font-manropeL text-[#131418] capitalize max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {AllCategoryDetails.name}
                </h2>
                <p className="mt-[2px] font-manropeEB max-sm:text-[16px] lg:text-[18px] leading-[24.59px] text-[#131418]">
                  {AllCategoryDetails.price}
                </p>
                <p className=" mt-[8px] font-manropeL max-sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] tracking-[0.25%] text-[#a0a6c9]">
                  By: <span className=" underline">{AllCategoryDetails.author}</span>
                </p>
                <Image className=" mt-[20px]" src={'/assets/Rating.png'} alt="rating" width={100} height={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-auto flex flex-col content-center gap-[32px]">
          <div className="w-full flex flex-row content-center items-center justify-between">
            <h1 className=" sm:text-[16px] md:text-[24px] lg:text-[28px] font-manropeB leading-[36px] text-[#131418]">
              Logo Design
            </h1>
            <p className="max-sm:text-[10px] md:text-[12px] lg:text-[14px] font-manropeB leading-[20px] text-[#009254]">
              View all
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-sm:gap-[8px] lg:gap-[25px] md:gap-[24px]">
            {/* <div className=" w-full p-[16px]"></div> */}
            {logoDesign.map((AllCategoryDetails, index) => (
              <div
                key={index}
                className="flex flex-col content-center max-sm:p-[12px] md:p-[14px] lg:p-[16px] border-[1px] rounded-[8px] border-[#a0a6c9]"
              >
                <div className="w-full h-auto rounded-[8px]">
                  <Image
                    className="w-full"
                    src={AllCategoryDetails.imageUrl}
                    alt={AllCategoryDetails.name}
                    width={200}
                    height={209}
                  />
                </div>
                <h2 className=" mt-[8px] max-sm:text-[10.2px] md:text-[13.1px] lg:text-[13.9px] leading-[20px] tracking-[0.1%] font-manropeL text-[#131418] capitalize max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {AllCategoryDetails.name}
                </h2>
                <p className="mt-[2px] font-manropeEB max-sm:text-[16px] lg:text-[18px] leading-[24.59px] text-[#131418]">
                  {AllCategoryDetails.price}
                </p>
                <p className=" mt-[8px] font-manropeL max-sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] tracking-[0.25%] text-[#a0a6c9]">
                  By: <span className=" underline">{AllCategoryDetails.author}</span>
                </p>
                <Image className=" mt-[20px]" src={'/assets/Rating.png'} alt="rating" width={100} height={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-auto flex flex-col content-center gap-[32px]">
          <div className="w-full flex flex-row content-center items-center justify-between">
            <h1 className=" sm:text-[16px] md:text-[24px] lg:text-[28px] font-manropeB leading-[36px] text-[#131418]">
              Branding Assets
            </h1>
            <p className="max-sm:text-[10px] md:text-[12px] lg:text-[14px] font-manropeB leading-[20px] text-[#009254]">
              View all
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-sm:gap-[8px] lg:gap-[25px] md:gap-[24px]">
            {/* <div className=" w-full p-[16px]"></div> */}
            {brandingAssets.map((AllCategoryDetails, index) => (
              <div
                key={index}
                className="flex flex-col content-center max-sm:p-[12px] md:p-[14px] lg:p-[16px] border-[1px] rounded-[8px] border-[#a0a6c9]"
              >
                <div className="w-full h-auto rounded-[8px]">
                  <Image
                    className="w-full"
                    src={AllCategoryDetails.imageUrl}
                    alt={AllCategoryDetails.name}
                    width={200}
                    height={209}
                  />
                </div>
                <h2 className=" mt-[8px] max-sm:text-[10.2px] md:text-[13.1px] lg:text-[13.9px] leading-[20px] tracking-[0.1%] font-manropeL text-[#131418] capitalize max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {AllCategoryDetails.name}
                </h2>
                <p className="mt-[2px] font-manropeEB max-sm:text-[16px] lg:text-[18px] leading-[24.59px] text-[#131418]">
                  {AllCategoryDetails.price}
                </p>
                <p className=" mt-[8px] font-manropeL max-sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] tracking-[0.25%] text-[#a0a6c9]">
                  By: <span className=" underline">{AllCategoryDetails.author}</span>
                </p>
                <Image className=" mt-[20px]" src={'/assets/Rating.png'} alt="rating" width={100} height={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-auto flex flex-col content-center gap-[32px]">
          <div className="w-full flex flex-row content-center items-center justify-between">
            <h1 className="text-[28px] font-manropeB leading-[36px] text-[#131418]">Ui/Ux Design Elements</h1>
            <p className="text-[14px] font-manropeB leading-[20px] text-[#009254]">View all</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-sm:gap-[8px] lg:gap-[25px] md:gap-[24px]">
            {/* <div className=" w-full p-[16px]"></div> */}
            {designElements.map((AllCategoryDetails, index) => (
              <div
                key={index}
                className="flex flex-col content-center max-sm:p-[12px] md:p-[14px] lg:p-[16px] border-[1px] rounded-[8px] border-[#a0a6c9]"
              >
                <div className="w-full h-auto rounded-[8px]">
                  <Image
                    className="w-full"
                    src={AllCategoryDetails.imageUrl}
                    alt={AllCategoryDetails.name}
                    width={200}
                    height={209}
                  />
                </div>
                <h2 className=" mt-[8px] max-sm:text-[10.2px] md:text-[13.1px] lg:text-[13.9px] leading-[20px] tracking-[0.1%] font-manropeL text-[#131418] capitalize max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {AllCategoryDetails.name}
                </h2>
                <p className="mt-[2px] font-manropeEB max-sm:text-[16px] lg:text-[18px] leading-[24.59px] text-[#131418]">
                  {AllCategoryDetails.price}
                </p>
                <p className=" mt-[8px] font-manropeL max-sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[20px] tracking-[0.25%] text-[#a0a6c9]">
                  By: <span className=" underline">{AllCategoryDetails.author}</span>
                </p>
                <Image className=" mt-[20px]" src={'/assets/Rating.png'} alt="rating" width={100} height={20} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryAllDetails;
