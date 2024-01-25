import Image from "next/image"

export default function BioGas() {
    return(
        <div className="bg-[#141311] p-20">
            <div className="flex flex-col justify-between gap-10">

                <div className="text-6xl">
                    Biogas Project Consultancy
                    <div className="text-4xl w-[500px] pl-10 pt-8">
                        Pure Desi Cowdung diya for Agnihotra
                    </div>
                </div>
                
                <div className="flex flex-row justify-between px-10 lg:px-20 flex-wrap-reverse">   

                    <div className="text-xl gap-20 mt-10 sm:mt-14 md:mt-10 lg:mt-0 text-justify lg:w-1/2 font-roberto ">
                        Biogas is very much a win-win low hanging fruit that should be done to harvest best benefits out of every pile of cowdung. However, every gaushala has its on character and often times its not easy to decide what would be the best setup for you. we have trusted, seasoned, accomplished brains to understand intricate engineering and mechanical concepts to study the needs of your customized design for gaushala biogas projects and map it against the plethora of vendors available in the market. You need not worry about evaluating vendor offerings and technical details. We will do the system engineering for you, i.e. bring different pieces of biogas project components together, considering the best options, and interface and combine them to put together the best , optimized composition of your own bio gas plant , making the most out of your bhu pavitra (cow dung) with calculated ROI. Our unique offering is the trust factor , decades of experience in system engineering and genuine concern for gaushala and waste management.
                    </div>
                    <div className="flex items-center justify-center lg:items-start xl:items-center xl:justify-center w-full lg:w-1/2 pl-10">
                        <Image src="/biogas.jpeg" alt="Vermicompost"  width={400} height={400} className="rounded-xl" />
                    </div>
                </div>
        
            </div>
            
        </div>
    )
}