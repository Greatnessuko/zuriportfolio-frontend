import Image from 'next/image';
import star from '/public/assets/vendor/grade.png';
import active from '/public/assets/vendor/active.png';
import star_outline from '/public/assets/vendor/star_outline.png';
import vendor from '/public/assets/vendor/vendor-img.png';
import product_one from '/public/assets/vendor/vendor-product.png';
import product_two from '/public/assets/vendor/vendor-product-2.png';
import right from '/public/assets/vendor/arrow-right.svg';
import badge from '/public/assets/vendor/Badge.png';
import Button from '@ui/Button';
import { ArrowRight } from 'iconsax-react';
import SuperAdminNavbar from '../../../modules/super-admin/components/navigations/SuperAdminNavbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

function VendorDetails() {
  const router = useRouter();
  function allProducts() {
    router.push('/super-admin/vendor-management/');
  }
  return (
    <>
      <SuperAdminNavbar />
      <Link href="/super-admin/vendor-management">
        <div className="top flex items-center mr-5 border-b border-gray-50 ml-10 mt-5">
          <Image src={right} alt="back" className="mr-2 pb-3"></Image>
          <p className="pb-3">Vendor Profile Details</p>
        </div>
      </Link>

      <section className="vendor-dash mr-5 ml-5 lg:flex items-center lg:mr-0 lg:ml-0 font-manropeL">
        <div className="sales flex flex-col items-center justify-center lg:w-1/2 lg:ml-10">
          <div className="revenue border border-gray-300 p-2 mb-5 w-full lg:w-full">
            <p>Total Products</p>
            <h1 className="text-lg font-bold">12</h1>
          </div>
          <div className="revenue border border-gray-300 p-2 mb-5 w-full lg:w-full">
            <p>Total Order</p>
            <div className="badge flex items-center justify-between">
              <h1 className="text-lg font-bold">7890</h1>
              <Image src={badge} alt="Price Badge" />
            </div>
          </div>
          <div className="revenue border border-gray-300  p-2 w-full lg:w-full">
            <p>Total Sales</p>
            <div className="badge flex items-center justify-between">
              <h1 className="text-lg font-bold">$430600</h1>
              <Image src={badge} alt="Price Badge" />
            </div>
          </div>
        </div>

        <div className="profile mt-10  w-full lg:w-1/2 lg:ml-12 lg:mr-5 lg:mt-0 ">
          <div className="header flex items-center ml-5 lg:ml-0">
            <Image src={vendor} alt="Vendor image" className="mr-3"></Image>
            <div className="name">
              <h1 className="text-3xl font-bold font-manropeL">Gustavo Silas</h1>
              <p>gustavosilas@gmail.com</p>
            </div>
          </div>
          <div className="bio-text mt-3 ml-5 lg:ml-0">
            <h1 className="w-full">A UX Designer loves to make UX and the career easier for others, no fancy stuff.</h1>
          </div>
          <div className="bio">
            <div className="rating flex items-center justify-between mr-3">
              <aside className="left flex items-center">
                <p className="ml-5 lg:ml-0">3.3/5</p>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star} alt="star"></Image>
                <Image src={star_outline} alt="star"></Image>
                <Image src={star_outline} alt="star"></Image>
              </aside>
              <p className="text-xs mr-5 lg:mr-0 sm:ml-auto">Date Added 08-01-23</p>
            </div>

            <div className="status flex items-center justify-between">
              <p className="ml-5 lg:ml-0">(50 Customers)</p>
              <Image src={active} alt="active" className="mr-5 lg:mr-0"></Image>
            </div>

            <div className="buttons w-full flex items-center justify-between mt-6">
              <Button
                size={'md'}
                isLoading={false}
                spinnerColor="#000"
                className="text-red-200 bg-transparent border border-red-200 p-3 w-1/3 rounded-sm ml-5 lg:ml-0 z-0"
              >
                Delete
              </Button>

              <Button
                size={'md'}
                isLoading={false}
                spinnerColor="#000"
                className="text-black bg-transparent border border-black p-3 w-1/3 rounded-md mr-5 lg:mr-0 z-0"
              >
                Ban
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-10 font-manropeL pb-5">
        <h1 className="ml-10 text-xl font-bold mt-6">Products by Gustavo Silas</h1>
        <div className="products flex items-center justify-evenly mt-6">
          <div className="product border border-gray-300 p-3 rounded-md cursor-pointer">
            <Image src={product_one} alt="product"></Image>
            <p>Webinar and Course Slide Template</p>
            <p className="font-bold">$100</p>
            <p className="mb-3">By Mark Essien</p>
            <aside className="left flex items-center">
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <p>(3)</p>
            </aside>
          </div>
          <div className="product border border-gray-300 p-3 rounded-md cursor-pointer">
            <Image src={product_two} alt="product"></Image>
            <p>Webinar and Course Slide Template</p>
            <p className="font-bold">$100</p>
            <p className="mb-3">By Mark Essien</p>
            <aside className="left flex items-center">
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <p>(3)</p>
            </aside>
          </div>
          <div className="product border border-gray-300 p-3 rounded-md hidden md:block cursor-pointer">
            <Image src={product_one} alt="product"></Image>
            <p>Webinar and Course Slide Template</p>
            <p className="font-bold">$100</p>
            <p className="mb-3">By Mark Essien</p>
            <aside className="left flex items-center">
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <p>(3)</p>
            </aside>
          </div>
          <div className="product border border-gray-300 p-3 rounded-md hidden lg:block cursor-pointer">
            <Image src={product_two} alt="product"></Image>
            <p>Webinar and Course Slide Template</p>
            <p className="font-bold">$100</p>
            <p className="mb-3">By Mark Essien</p>
            <aside className="left flex items-center">
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <Image src={star_outline} alt="star"></Image>
              <p>(3)</p>
            </aside>
          </div>
        </div>

        <Button
          rightIcon={<ArrowRight color="#06C270" />}
          intent={'secondary'}
          size={'md'}
          isLoading={false}
          spinnerColor="#000"
          className="ml-auto mt-5 mr-8 rounded-none"
          onClick={allProducts}
        >
          See all
        </Button>
      </section>
    </>
  );
}

export default VendorDetails;
