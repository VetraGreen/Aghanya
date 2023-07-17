// export default function PottingMix() {
//     return(
//         <div className="bg-[#141311] min-h-screen px-20 py-20">
//             <div className="text-6xl">   
//                 POTTING MIX
//                 <div className="text-4xl w-[500px] pl-10 pt-16">
//                     Best medium for soil less cultivation. Best for germination and growth medium. Fast Growth.
//                 </div>
//             </div>

//             <div className="text-6xl pl-[650px]">Features</div>

//         </div>
//     )
// }



import Image from "next/image"

export default function PottingMix() {
    return(
        <div className="bg-[#141311] p-20">
            <div className="flex flex-row gap-8 justify-between flex-wrap gap-10">
                
                <div className="text-6xl flex flex-col justify-between">   
                    <div>
                        POTTING MIX
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                        Best medium for soil less cultivation. Best for germination and growth medium. Fast Growth.
                        </div>
                        
                    </div>
                    <div className="pl-10">
                        <div className="text-5xl">HOW TO USE</div>
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                            <ul className="list-disc text-2xl w-[550px] leading-8">
                                <li>
                                    Potting Mix is easy to use. 
                                </li>
                                <li>
                                    Pour it in the pot and use it  for planting just like soil.                                
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    

                </div>

                <div className="text-5xl flex justify-center flex-col w-[400px]">
                    <div>Features</div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/pot1.png" alt="feature1" width={100} height={100} />
                        <div>Sourced from original desi cows fed with high quality fodder</div>
                    </div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/pot2.png" alt="feature1" width={100} height={100} />
                        <div>High aeration process cowdung fermentation process</div>
                    </div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image className=" -translate-y-2" src="/pot3.png" alt="feature1" width={50} height={50} />
                        <div> High microbial activity</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <Image src="/PostmixT.svg" alt="Vermicompost"  width={400} height={400} />
                </div>
            
            </div>
        </div>
    )
}