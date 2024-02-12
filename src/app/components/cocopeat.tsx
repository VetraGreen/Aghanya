// export default function CocoPeat() {
//     return(
//         <div className="bg-[#492a28] min-h-screen px-20 py-20">
//             <div className="text-6xl">   
//                 COCOPEAT
//                 <div className="text-4xl w-[500px] pl-10 pt-16">
//                     High quality cleaned sterilized cocopeat.                
//                 </div>
//             </div>

//             <div className="text-6xl pl-[650px]">Features</div>

//         </div>
//     )
// }

import Image from "next/image"

export default function CocoPeat() {
    return(
        // <div className="bg-[#492a28] p-20">
        //     <div className="flex flex-row justify-between flex-wrap gap-10">
                
        //         <div className="text-6xl flex flex-col justify-between">   
        //             <div>
        //                 COCO PEAT
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                     High quality cleaned sterilized cocopeat.
        //                 </div>
                        
        //             </div>
        //             <div className="pl-10">
        //                 <div className="text-5xl">HOW TO USE</div>
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                     <ul className="list-disc text-2xl w-[550px] leading-8">
                                // <li>
                                //     Can be used directly to plant sprouts / seedlings
                                // </li>
                                // <li>
                                //     Can be mixed with normal soil 50% and used for planting                                
                                // </li>
        //                     </ul>
        //                 </div>
                        
        //             </div>

                    

        //         </div>

        //         <div className="text-5xl flex justify-center flex-col w-[400px]">
        //             <div>Features</div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/coco1.png" alt="feature1" width={50} height={50} />
        //                 <div>High water holding capacity</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/coco2.png" alt="feature1" width={50} height={50} />
        //                 <div>Rich Nutrient and chemical properties</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/coco3.png" alt="feature1" width={50} height={50} />
        //                 <div>Fully Organic</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image className="-translate-y-2" src="/coco4.png" alt="feature1" width={50} height={50} />
        //                 <div>Anti fungal</div>
        //             </div>
        //         </div>

        //         <div className="flex items-center">
        //             <Image src="/CocopeatT.svg" alt="Vermicompost"  width={400} height={400} />
        //         </div>
            
        //     </div>
        // </div>

        <div className="bg-[#492a28] pt-10 xl:pt-20 pb-0 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem]">

                <div className="flex flex-col">
                    <div className="text-[2rem]">
                        COCO PEAT
                    </div>
                    <div className="text-[1.5rem] lg:w-[500px] ml-10 pt-2">
                        High quality cleaned sterilized cocopeat.
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-2 gap-4 ml-10 mt-4 lg:mt-2 ">
                <div className="lg:col-start-2 lg:row-start-1 md:col-start-1 md:row-start-1 col-start-1 row-start-1">
                        <div className="text-[1.7rem]">Features</div>
                            <div className="flex flex-col ">
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/coco1.png" alt="feature1" width={50} height={50} />
                                    <div>High water holding capacity</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/coco2.png" alt="feature1" width={50} height={50} />
                                    <div>Rich Nutrient and chemical properties</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/coco3.png" alt="feature1" width={50} height={50} />
                                    <div>Fully Organic</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                   <Image className="-translate-y-2" src="/coco4.png" alt="feature1" width={50} height={50} />
                                   <div>Anti fungal</div>
                               </div>
                            </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-2 md:col-start-1 md:row-start-2 col-start-1 row-start-2">
                    <div className="text-[1.7rem]">HOW TO USE</div>
                        <div className="text-[1.5rem] pl-10">
                            <ul className="list-disc text-[1rem] leading-8">
                                <li>
                                    Can be used directly to plant sprouts / seedlings
                                </li>
                                <li>
                                    Can be mixed with normal soil 50% and used for planting                                
                                </li>
                            </ul>
                        </div> 
                </div>
                <div className="lg:row-span-3 lg:col-start-3 lg:row-start-1 row-span-2 col-start-2 row-start-1">
                    <div className=" items-center justify-center lg:-translate-y-20 hidden md:block">
                        <Image src="/CocopeatT.svg" alt="Image CocoPeat"  width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}