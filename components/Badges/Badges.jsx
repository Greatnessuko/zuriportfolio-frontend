
import Image from "next/image"

const Badges = () => {
  return (
    <div>

      <div className='my-16 md:mx-52 border rounded-3xl '>
      <div className='flex justify-center align-middle bg-[#F1AE67] rounded-t-3xl py-8'>
       <Image src='/illustrationicon.png' width={200} height={200} />
      </div>
     <div className='flex flex-col justify-center align-middle text-center '>
       <h4 className="font-bold my-4 text-[#2E3130] text-2xl">Congratulations! You've performed extremely well in this<br/> assessment. Below is your score.</h4>
       <div>
        <button className="text-[#009254] border-[#dfe3e6] border rounded-2xl p-4">90%</button>
       </div>
        <p className=" mt-4 mb-8 ">You’ve earned yourself an expert badge!</p>
         <div className='flex justify-center align-middle h-30 w-full'>
        <Image src="/badge tablet.png" width={200} height={200}/>
      </div>
     </div> 
      <div className="flex justify-center align-middle mb-8 mt-4 gap-4 w-[100%]">
         <button  className='bg-[#009254] border-[#009254] border h-14 w-64 rounded-2xl text-white'>Download </button>
         <button  className='bg-white border-[#009254] border h-14 w-64 rounded-2xl text-[#009254]' >View </button>
        </div>
    </div>
    </div>
    
  )
}

export default Badges