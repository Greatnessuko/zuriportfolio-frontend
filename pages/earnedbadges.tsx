import { useState } from 'react';
import Image from 'next/image';

interface BadgeComponentProps {
  locked: boolean;
}

const Earnedbadges: React.FC<BadgeComponentProps> = ({ locked }) => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="w-screen h-full font-manropeL">
      <div className="w-full h-[130px] bg-[#005427] px-[25px] sm:px-[68px] lg:px-[100px] flex items-center sm:justify-start overflow-y-hidden relative ">
        <div className="gap-[8px] flex flex-col ">
          <h1 className="text-[22px] sm:text-[32px] font-[600] text-white-100 leading-[36px] md:leading-[40px] tracking-normal">
            Keep tabs on all yours badges
          </h1>
          <p className="text-[14px] leading-[20px] font-[500] text-white-100">
            Start your journey and earn a badge today!
          </p>
        </div>
        <div className="absolute top-0 sm:hidden sm:top-0 right-0  mix-blend-burn lg:hidden block overflow-hidden">
          <Image
            src="/assets/images/badges/bannerexpertsmallbadge.svg"
            width={145}
            height={130}
            alt="expert badge image"
            priority={true}
          />
        </div>
        <div className="absolute right-[5%] md:right-[6%] hidden lg:block mix-blend-burn  overflow-hidden">
          <Image
            src="/assets/images/badges/expertbadgebanner.svg"
            width={430}
            height={30}
            alt="expert badge image"
            priority={true}
          />
        </div>
        <div className="absolute sm:top-0 right-0 hidden sm:block  mix-blend-burn lg:hidden overflow-hidden">
          <Image src="/assets/images/badges/bannerexpertbadge.svg" width={181} height={130} alt="expert badge image" />
        </div>
        <div className="absolute block sm:hidden top-0 left-0 overflow-hidden">
          <Image
            src="/assets/images/badges/smallscreenexpertfloatingbadge.svg"
            width={35}
            height={44}
            alt="expert badge image"
          />
        </div>
        <div className="absolute bottom-0 hidden sm:block sm:right-[20%] md:right-[10%] lg:right-[30%] mix-blend-hard-light ">
          <Image
            src="/assets/images/badges/bannerintermediatebadge.svg"
            width={290}
            height={30}
            alt="expert badge image"
          />
        </div>
        <div className="absolute top-[-20px] sm:top-0 right-0 hidden lg:block">
          <Image
            src="/assets/images/badges/bannerbeginnerbadge.svg"
            width={160}
            height={128}
            alt="expert badge image"
          />
        </div>
        <div className="absolute bottom-0 right-0 block sm:hidden mix-blend-hard-light ">
          <Image
            src="/assets/images/badges/bannerintermediatesmallbadge.svg"
            width={100}
            height={30}
            alt="expert badge image"
            priority={true}
          />
        </div>
      </div>
      <div className="px-[40px] lg:px-[130px] flex flex-col justify-start sm:mt-[80px] mt-[34px] lg:mt-[100px] mb-[80px] sm:mb-[200px] gap-[26px]">
        <h1 className="text-[16px] font-[600] leading-[24px] tracking-normal w-full text-center sm:text-start">
          Product design Badges
        </h1>
        <div className="badgecomponents flex flex-col md:flex-row  items-center justify-between gap-[95px] md:gap-[24px] lg:gap-[94px]">
          {/* beginner badge component */}
          <div className="beginnerbadgecomponent w-[330px] h-[330px] sm:w-[236px]  sm:h-[173px] lg:w-[330px] lg:h-[330px] p-[16px] flex flex-col items-center border border-neutral-200 rounded-[8px] gap-[12px]">
            <div className="badgerewardimage w-[160px] h-[128px] relative">
              <Image
                src="/assets/images/badges/beginnerbadgereward.svg"
                fill={true}
                alt="beginner reward badge image"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-center text-[22px] sm:text-[16px] lg:text-[22px] font-[600]">BEGINNER</h1>
              <p className="text-center block sm:hidden lg:block text-[14px] font-[400] leading-[20px] tracking-wide w-full">
                Badge earned in the Product designed category.
              </p>
              <p className="text-center block sm:hidden lg:block font-[700] leading-[20px] tracking-wider">
                Earned on: Sept 12, 2023
              </p>
            </div>
          </div>
          {/* intermediate badge component */}
          <div className="intermediatebadgecomponent w-[330px] h-[330px] sm:w-[236px]  sm:h-[173px] lg:w-[330px] lg:h-[330px] p-[16px] flex flex-col items-center border border-neutral-200 rounded-[8px] gap-[12px] overflow-hidden relative">
            {isLocked && (
              <div className="badgelockoverlay absolute w-full h-full top-0 bg-opacity-60 bg-black flex items-center justify-center z-10 ">
                <div className="badgelockimage w-[139px] sm:w-[90px] lg:w-[139px] lg:h-[139px]  h-[139px] sm:h-[90px] relative">
                  <Image
                    src="/assets/images/badges/badgelock.svg"
                    fill={true}
                    alt="expert reward badge image"
                    priority={true}
                  />
                </div>
              </div>
            )}
            <div className="badgerewardimage w-[160px] h-[128px] relative">
              <Image
                src="/assets/images/badges/intermediatebadgereward.svg"
                fill={true}
                alt="beginner reward badge image"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-center text-[22px] sm:text-[16px] lg:text-[22px] font-[600]">INTERMEDIATE</h1>
              <p className="text-center block sm:hidden lg:block text-[14px] font-[400] leading-[20px] tracking-wide w-full">
                Badge earned in the Product designed category.
              </p>
              <p className="text-center block sm:hidden lg:block font-[700] leading-[20px] tracking-wider">
                Earned on: Sept 12, 2023
              </p>
            </div>
          </div>
          {/* expert badge component */}
          <div className="expertbadgecomponent w-[330px] h-[330px] sm:w-[236px]  sm:h-[173px] lg:w-[330px] lg:h-[330px] p-[16px] flex flex-col items-center border border-neutral-200 rounded-[8px] gap-[12px] overflow-hidden relative">
            {isLocked && (
              <div className="badgelockoverlay absolute w-full h-full top-0 bg-opacity-60 bg-black flex items-center justify-center z-10 ">
                <div className="badgelockimage w-[139px] sm:w-[90px] lg:w-[139px] lg:h-[139px]  h-[139px] sm:h-[90px] relative">
                  <Image
                    src="/assets/images/badges/badgelock.svg"
                    fill={true}
                    alt="expert reward badge image"
                    priority={true}
                  />
                </div>
              </div>
            )}
            <div className="badgerewardimage w-[160px] h-[128px] relative">
              <Image
                src="/assets/images/badges/expertbadgereward.svg"
                fill={true}
                alt="expert reward badge image"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-center text-[22px] sm:text-[16px] lg:text-[22px] font-[600]">EXPERT</h1>
              <p className="text-center block sm:hidden lg:block text-[14px] font-[400] leading-[20px] tracking-wide w-full">
                Badge earned in the Product designed category.
              </p>
              <p className="text-center block sm:hidden lg:block font-[700] leading-[20px] tracking-wider">
                Earned on: Sept 12, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnedbadges;
