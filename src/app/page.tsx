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
  {
    id:"5",
    name: "Dhoop Stick",
    img: "/Dhoopstick.jpeg",
    link: "#dhoopstick",
    h:300,
    w:400,
  },
  {
    id:"6",
    name: "Biogas Project Consultancy",
    img: "/biogas.jpeg",
    link: "#biogas",
    h:300,
    w:350,
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

      <div className='bg-[#141311] py-20 px-20'>
        <div className='text-[60px]'>OUR</div>
        <div className='text-[60px] -translate-y-10'>PRODUCTS</div>
    
        <div className='flex flex-row px-20 gap-4 flex-wrap justify-center items-center'>
          {products.map((data, id) => (
            <div key={id}>
              <Link href={data.link}>
                {/* w-[300px] */}
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
