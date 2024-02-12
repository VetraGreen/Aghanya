import Image from "next/image"

export default function DhoopStick() {
    return(
        <div className="bg-[#492a28] py-20 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem]">
            <div className="flex flex-col justify-between gap-6">

                <div className="text-[2rem]">
                    Dhoopstick
                    <div className="text-[1.5rem] pl-10 pt-4">
                        Incense sticks for gentle natural fragrance
                    </div>
                </div>

                <div className="flex flex-row justify-between px-10 lg:px-20 flex-wrap-reverse">   

                    <div className="text-xl gap-20 mt-10 sm:mt-14 md:mt-10 lg:mt-0 text-justify lg:w-1/2 font-roberto flex items-center ">
                        Soft, divine, delightful, daily fragrance in your home, with purity and positivity of bhu pavitra. make it a part of your daily life. The BEST way to introduce your kids to gau products before they get distanced from cow dung and cow urine products. beautiful, fragrance-ful , purpose-ful dhoopsticks for your home, office, study, living and ofcourse, your puja ghar. 
                    </div>
                    <div className="flex items-center justify-center lg:items-start xl:items-center xl:justify-center w-full lg:w-1/2 pl-0 lg:pl-10">
                        <Image src="/Dhoopstick.jpeg" alt="Vermicompost"  width={400} height={400} className="rounded-xl" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}