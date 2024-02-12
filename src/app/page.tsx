import Image from 'next/image'
import Link from 'next/link'
import Vermicompost from './components/vermicompost'
import PottingMix from './components/pottingmix'
import Footer from './components/footer'
import CocoPeat from './components/cocopeat'
import Diya from './components/diya'
import DhoopStick from './components/DhoopStick'
import BioGas from './components/Biogas'

const products = [
  {
    id:"1",
    name: "Vermicompost",
    img: "/VC.png",
    link: "#Vermicompost",
    h:200,
    w:200,
  },
  {
    id:"2",
    name: "Potting Mix",
    img: "/image2.png",
    link: "#Potting",
    h:200,
    w:200,
  },
  {
    id:"3",
    name: "Coco Peat",
    img: "/image3.png",
    link: "#Coco",
    h:200,
    w:200,
  },
  {
    id:"4",
    name: "Panchagavya Diya",
    img: "/diya.png",
    link: "#diya",
    h:200,
    w:200,
  },

]

const products2 = [
  {
    id:"5",
    name: "Dhoop Stick",
    img: "/Dhoopstick.jpeg",
    link: "#dhoopstick",
    h:200,
    w:250,
  },
  {
    id:"6",
    name: "Biogas Project Consultancy",
    img: "/biogas.jpeg",
    link: "#biogas",
    h:200,
    w:250,
  },
]

export default function Home() {
  return (
    <div className='text-[#fff] font-roberto'>
      <section id='top'></section>

      <div className='fixed bottom-10 right-10'>
        <Link href="#top">
          <Image src="/arrow.png" alt='arrow' width={50} height={50} />
        </Link>
      </div>

      <div className='flex flex-col justify-center gap-6 bg-hero bg-cover bg-center py-6 xl:py-2 px-[2rem] md:px-[5rem] lg:px-[15rem] xl:px-[20rem] min-h-screen'>
        <div className='logo'>
          <div className=''>
            <Image src="/logo.jpeg" alt='Logo' width="120" height="120" />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-center font-cookie italic text-[5rem]'>
            Aghanya
          </div>
          <div className='flex justify-end text-[2rem]'>
            Smell-of-Earth Series
          </div>
        </div>
        <div className='flex justify-center text-justify text-md xl:text-lg 2xl:text-xl font-roberto'>
          Our soil is drying up off its nutrients due to chemical fertilizers. Its possible to nourish and rejuvinate it. BhuPravitra is term used for cow-dung in early Indian scriptures. Bhu meaning land and Pavitra meaning pure and sacred. Cow dung nourishes, enriches and repletes our soil of its nutrients. Its healthifies the soil. Soil being most basic element of our well-being, we get both food and water from maati. Using Bhupavitra based products visibly enhance the quality and quantity of our produce.
        </div>
      </div>


      {/* 
      <div className='flex flex-col gap-4 min-h-screen justify-center lg:gap-2 xl:gap-0 bg-hero bg-cover bg-center py-6 2xl:px-[400px] xl:px-[200px] px-[100px] '>
        <div className='mt-0 w-full h-full'>
          <Image src="/logo.jpeg" alt='Logo' width="120" height="120" />
        </div>
        <div className='flex justify-center text-[70px] lg:text-[100px] xl:text-[140px] font-cookie italic'>Aghanya</div>
        <div className='flex justify-end lg:text-[30px] xl:text-[30px] font-roberto xl:-translate-y-14'>Smell-of-Earth Series</div>
        <div className='flex justify-center text-justify text-[15px] lg:text-[20px] xl:text-[25px] font-roberto'>Our soil is drying up off its nutrients due to chemical fertilizers. Its possible to nourish and rejuvinate it. BhuPravitra is term used for cow-dung in early Indian scriptures. Bhu meaning land and Pavitra meaning pure and sacred. Cow dung nourishes, enriches and repletes our soil of its nutrients. Its healthifies the soil. Soil being most basic element of our well-being, we get both food and water from maati. Using Bhupavitra based products visibly enhance the quality and quantity of our produce.</div>
      </div> */}

      <div className='bg-[#d6bb63] py-20 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem] text-[#2b2321]'>
        <div className='text-[2rem]'>OUR</div>
        <div className='text-[2rem] -translate-y-4'>PRODUCTS</div>
    
        <div className='flex flex-row gap-4 flex-wrap justify-center items-center mb-4'>
          {products.map((data, id) => (
            <div key={id}>
              <Link href={data.link}>
                <div className='flex flex-col justify-between h-[370px] bg-[#413e385c] p-6 rounded-xl border-[1px]  hover:border-neutral-400 transition border-neutral-600 '>
                  <div className='flex items-center justify-center'>                    
                      <Image src={data.img} alt='Product1' width={data.w} height={data.h} className='rounded-xl items-center justify-center flex' />
                      {/* <img src={data.img} className={`h-[${data.h}px] w-[${data.w}px] rounded-xl`} /> */}
                  </div>
                  <div className='font-roberto text-xl flex justify-center'>
                    {data.name}
                  </div>
                </div>
              </Link>
            </div>
           ))}
        </div>
            {/* 2nd Product list */}
        <div className="h-px mx-20 border-0 dark:bg-neutral-600"></div>
        <div className='flex flex-row px-0 gap-4 flex-wrap justify-center items-center mt-4'>
          {products2.map((data, id) => (
            <div key={id}>
              <Link href={data.link}>
                <div className='flex flex-col justify-between h-[270px] bg-[#413e385c] p-6 rounded-xl border-[1px]  hover:border-neutral-400 transition border-neutral-600 '>
                  <div className='flex items-center justify-center'>                    
                      <Image src={data.img} alt='Product1' width={data.w} height={data.h} className='rounded-xl items-center justify-center flex' />
                      {/* <img src={data.img} className={`h-[${data.h}px] w-[${data.w}px] rounded-xl`} /> */}
                  </div>
                  <div className='font-roberto text-xl flex justify-center'>
                    {data.name}
                  </div>
                </div>
              </Link>
            </div>
           ))}
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
        <section id='dhoopstick'>
          <DhoopStick />
        </section>
        <section id='biogas'>
          <BioGas />
        </section>
      </div>
      <Footer />
    </div>
  )
}
