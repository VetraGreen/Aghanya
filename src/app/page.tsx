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
    h:"250",
    w:"200",
  },
  {
    id:"2",
    name: "Potting Mix",
    img: "/image2.png",
    link: "#Potting",
    h:"250",
    w:"200",
  },
  {
    id:"3",
    name: "Coco Peat",
    img: "/image3.png",
    link: "#Coco",
    h:"250",
    w:"200",
  },
  {
    id:"4",
    name: "Panchagavya Diya",
    img: "/diya.png",
    link: "#diya",
    h:"250",
    w:"200",
  },
  {
    id:"5",
    name: "Dhoop Stick",
    img: "/DhoopStick.jpeg",
    link: "#dhoopstick",
    h:"250",
    w:"600",
  },
  {
    id:"6",
    name: "⁠Biogas Project Consultancy",
    img: "/biogas.jpeg",
    link: "#biogas",
    h:"250",
    w:"600",
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



      {/* <div className='bg-[#141311] py-20 2xl:px-[400px] xl:px-[200px] px-[100px]'> */}
      <div className='bg-[#141311] py-20 px-20'>
        <div className='text-[60px]'>OUR</div>
        <div className='text-[60px] -translate-y-10'>PRODUCTS</div>
        {/* <div className='flex flex-row flex-wrap gap-2 justify-center items-center'>
          <div className=''>
            <Link href="#Vermicompost" scroll={false}>
              <Image src="/VC.png" alt='Product1' width={350} height={550} />
            </Link>
              <div className='flex justify-center items-center text-3xl'>Vermicompost</div>
          </div>
          <div>
              <Link href="#Potting">
                <Image src="/image2.png" alt='Product2' width={350} height={550} />
              </Link>
              <div className='flex justify-center text-3xl xl:mt-[25px] text-center'>Potting Mix</div>
          </div>
          <div>
            <Link href="#Coco">
              <Image src="/image3.png" alt='Product3' width={350} height={550} />
            </Link>
              <div className='flex justify-center text-3xl mt-[35px] text-center'>Coco Peat</div>
          </div>
          <div>
              <Link href="#diya">
                <Image src="/diya.png" alt='Product4' width={350} height={550} />
              </Link>
              <div className='flex justify-center text-3xl mt-[50px] text-center'>Panchagavya Diya</div>
          </div>
          <div>
              <Link href="#dhoopstick" >
                <Image src="/Dhoopstick.jpeg" alt='Dhoopstick' width={350} height={550} />
              </Link>
              <div className='flex justify-center text-3xl mt-[50px] text-center'>Dhoop Stick</div>
          </div>
          <div>
              <Link href="#biogas">
                <Image src="/biogas.jpeg" alt='Biogas' width={350} height={550} />
              </Link>
              <div className='flex justify-center text-3xl mt-[50px] text-center'>⁠Biogas Project Consultancy</div>
          </div>
        </div> */}
        <div className='flex flex-row px-20 gap-4 flex-wrap justify-center items-center'>
          {products.map((data, id) => (
            <Link href={data.link}>
              <div key={id} className='flex flex-col justify-between h-[350px] w-[300px] bg-[#413e385c] p-6 rounded-xl'>
                <div className='flex items-center justify-center'>
                  
                    {/* <Image src={data.img} alt='Product1' width={300} height={300} /> */}
                    <img src={data.img} className={`h-[${data.h}px] w-[${data.w}px] rounded-xl`} />
                  
                </div>
                <div className='font-roberto text-xl flex justify-center'>
                  {data.name}
                </div>
              </div>
            </Link>
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
