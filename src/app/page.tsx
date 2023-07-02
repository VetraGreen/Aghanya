import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-[#fff]'>
      
      
      <div className='flex flex-col bg-[#371212] h-[100vh]'>
        <div className='p-20'>
          <Image src="/../public/aghanya_logo.jpeg" alt='Logo' width={200} height={200} />
        </div>
        <div className='flex justify-center text-[250px]'>Aghanya</div>
        <div className='flex justify-end mr-40 text-[50px]'>Smell-of-Earth Series</div>
      </div>



      <div className='bg-[#141311] h-[100vh]'>
        <div className='pl-20 pt-20 text-[80px]'>Our</div>
        <div className='pl-20 text-[80px] -translate-y-10'>Products</div>
        <div className='p-20 flex flex-row gap-20 flex-wrap'>
          <div>
            <Link href="/vermicompost">
              <Image src="/../public/image1.png" alt='Product1' width={300} height={550} />
            </Link>
          </div>
          <div>
            <Link href="/pottingmix">
              <Image src="/../public/image2.png" alt='Product2' width={300} height={550} />
            </Link>
          </div>
          <div>
            <Link href="/cocopeat">
              <Image src="/../public/image3.png" alt='Product3' width={300} height={550} />
            </Link>
          </div>
          <div>
            <Link href="/diya">
              <Image src="/../public/diya.png" alt='Product4' width={300} height={550} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
