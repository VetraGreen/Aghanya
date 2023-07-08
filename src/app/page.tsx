import Image from 'next/image'
import Link from 'next/link'
import Vermicompost from './components/vermicompost'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='text-[#fff]'>
      
      
      <div className='flex flex-col bg-[#371212] min-h-screen'>
        <div className='p-20'>
          <Image src="/../public/aghanya_logo.jpeg" alt='Logo' width={200} height={200} />
        </div>
        <div className='flex justify-center text-[250px]'>Aghanya</div>
        <div className='flex justify-end mr-40 text-[50px]'>Smell-of-Earth Series</div>
      </div>



      <div className='bg-[#141311] min-h-screen py-10'>
        <div className='pl-20 text-[80px]'>Our</div>
        <div className='pl-20 text-[80px] -translate-y-10'>Products</div>
        <div className='p-20 flex flex-row gap-16 flex-wrap'>
          <div>
              <Image src="/../public/image1.png" alt='Product1' width={350} height={550} />
              <div className='flex justify-center text-3xl'>Vermicompost</div>
          </div>
          <div>
              <Image src="/../public/image2.png" alt='Product2' width={330} height={550} />
              <div className='flex justify-center text-3xl mt-6'>Vermicompost</div>
          </div>
          <div>
              <Image src="/../public/image3.png" alt='Product3' width={330} height={550} />
              <div className='flex justify-center text-3xl mt-8'>Vermicompost</div>
          </div>
          <div>
              <Image src="/../public/diya.png" alt='Product4' width={300} height={550} />
              <div className='flex justify-center text-3xl mt-40'>Vermicompost</div>
          </div>
        </div>
      </div>



      <div className='Products'>
        <Vermicompost />
      </div>
      <Footer />
    </div>
  )
}
