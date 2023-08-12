import Image from 'next/image'
import Link from 'next/link'
import Vermicompost from './components/vermicompost'
import PottingMix from './components/pottingmix'
import Footer from './components/footer'
import CocoPeat from './components/cocopeat'
import Diya from './components/diya'

export default function Home() {
  return (
    <div className='text-[#fff] font-roberto'>
      <section id='top'></section>
      <div className='fixed bottom-10 right-10'>
        <Link href="#top">
          <Image src="/arrow.png" alt='arrow' width={50} height={50} />
        </Link>
      </div>
      
      <div className='flex flex-col bg-hero bg-cover bg-center py-10 2xl:px-[400px] xl:px-[200px] px-[100px] '>
        <div className=' mt-20'>
          <Image src="/logo.jpeg" alt='Logo' width={200} height={200} />
        </div>
        <div className='flex justify-center text-[170px] font-cookie italic -translate-y-10'>Aghanya</div>
        {/* <Image src="/aghanyahero.png" alt='aghanya' height={200} width={700} /> */}
        <div className='flex justify-end text-[35px] font-roberto -translate-y-14'>Smell-of-Earth Series</div>
        <div className='flex justify-center text-justify my-20 text-[25px] font-roberto'>Our soil is drying up off its nutrients due to chemical fertilizers. Its possible to nourish and rejuvinate it. BhuPravitra is term used for cow-dung in early Indian scriptures. Bhu meaning land and Pavitra meaning pure and sacred. Cow dung nourishes, enriches and repletes our soil of its nutrients. Its healthifies the soil. 
Soil being most basic element of our well-being, we get both food and water from maati. Using Bhupavitra based products visibly enhance the quality and quantity of our produce.</div>
      </div>



      <div className='bg-[#141311] min-h-screen py-20 2xl:px-[400px] xl:px-[200px] px-[100px]'>
        <div className='text-[80px]'>OUR</div>
        <div className='text-[80px] -translate-y-10'>PRODUCTS</div>
        <div className='flex flex-row gap-16 flex-wrap justify-center'>
          <div className='-translate-y-6'>
            <Link href="#Vermicompost" scroll={false}>
              <Image src="/VC.png" alt='Product1' width={350} height={550} />
            </Link>
              <div className='flex justify-center -mt-6 text-3xl'>Vermicompost</div>
          </div>
          <div>
              <Link href="#Potting">
                <Image src="/image2.png" alt='Product2' width={330} height={550} />
              </Link>
              <div className='flex justify-center text-3xl mt-6'>Potting Mix</div>
          </div>
          <div>
            <Link href="#Coco">
              <Image src="/image3.png" alt='Product3' width={330} height={550} />
            </Link>
              <div className='flex justify-center text-3xl mt-8'>Coco Peat</div>
          </div>
          <div>
              <Link href="#diya">
                <Image src="/diya.png" alt='Product4' width={300} height={550} />
              </Link>
              <div className='flex justify-center text-3xl mt-40'>Panchagavya Diya</div>
          </div>
        </div>
      </div>



      <div className='Products'>
        <section id='Vermicompost'>
          <Vermicompost />
        </section>
        <section id='Potting'>
          <PottingMix />
        </section>
        <section id='Coco'>
          <CocoPeat />
        </section>
        <section id='diya'>
          <Diya />
        </section>
      </div>
      <Footer />
    </div>
  )
}
