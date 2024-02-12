import Image from "next/image"

export default function Vermicompost() {
    return(
        // <div className="bg-[#492a28] px-20 py-20">
        //     <div className="flex flex-row gap-8 justify-between flex-wrap">
                
        //         <div className="text-6xl flex flex-col justify-between">   
        //             <div>
        //                 VERMICOMPOST
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                     Pure Desi Cowdung vermicompost is best soil suppliment
        //                 </div>
                        
        //             </div>
        //             <div className="pl-10">
        //                 <div className="text-5xl">HOW TO USE</div>
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                     <ul className="list-disc text-2xl w-[550px] leading-8">
        //                         <li>
        //                             Take  one  handful  for  a  7  inch  pot  or two handful for 12 inch pot. Decide propotion based on your pot size.
        //                         </li>
        //                         <li>
        //                             Dig  the  soil  surface  for  1-2  inches from stem of the plant.
        //                         </li>
        //                         <li>
        //                             Put vermicompost and mix with the soil.
        //                         </li>
        //                     </ul>
        //                 </div>
                        
        //             </div>

                    

        //         </div>

        //         <div className="text-5xl flex justify-center flex-col w-[400px]">
        //             <div>Features</div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/vermi1.png" alt="feature1" width={50} height={50} />
        //                 <div>Made by fermenting Cow dung</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/vermi2.png" alt="feature1" width={50} height={50} />
        //                 <div>Improves the soil structure, water retention</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
        //                 <Image src="/vermi3.png" alt="feature1" width={50} height={50} />
        //                 <div>Keeps Diseases away</div>
        //             </div>
        //         </div>

        //         <div className="flex items-center">
        //             <Image src="/VermicompostT.svg" alt="Vermicompost"  width={400} height={400} />
        //         </div>
            
        //     </div>
        // </div>
        
        
        // <div className="bg-[#492a28] py-20 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem] grid grid-cols-3">
        //     <div className="grid grid-rows-3">
        //         <div className="flex flex-col">
        //             <div className="text-[2rem]">
        //                 VERMICOMPOST
        //             </div>
        //             <div className="text-[1.5rem] lg:w-[500px] pl-10 pt-4">
        //                 Pure Desi Cowdung vermicompost is best soil suppliment
        //             </div>
        //         </div>
        //         <div className="row-start-3" >
        //             <div className="text-[1.7rem]">HOW TO USE</div>
        //                 <div className="text-[1.5rem] w-[500px] pl-10">
        //                     <ul className="list-disc text-[1rem] w-[550px] leading-8">
        //                         <li>
        //                             Take  one  handful  for  a  7  inch  pot  or two handful for 12 inch pot. Decide propotion based on your pot size.
        //                         </li>
        //                         <li>
        //                             Dig  the  soil  surface  for  1-2  inches from stem of the plant.
        //                         </li>
        //                         <li>
        //                             Put vermicompost and mix with the soil.
        //                         </li>
        //                     </ul>
        //                 </div>        
        //         </div>
        //     </div>
        //     <div className="grid grid-rows-3">
        //         <div className="row-start-2">
        //                 <div className="text-[1.7rem]">Features</div>
        //                     <div className="flex flex-row pt-4 gap-2 items-center">
        //                         <Image src="/vermi1.png" alt="feature1" width={50} height={50} />
        //                         <div>Made by fermenting Cow dung</div>
        //                     </div>
        //                     <div className="flex flex-row pt-4 gap-2 items-center">
        //                         <Image src="/vermi2.png" alt="feature1" width={50} height={50} />
        //                         <div>Improves the soil structure, water retention</div>
        //                     </div>
        //                     <div className="flex flex-row pt-4 gap-2 items-center">
        //                         <Image src="/vermi3.png" alt="feature1" width={50} height={50} />
        //                         <div>Keeps Diseases away</div>
        //                     </div>
        //         </div>
        //     </div>
        //     <div className="">
        //         <div className=" items-center justify-center">
        //             <Image src="/VermicompostT.svg" alt="Vermicompost"  width={400} height={400} />
        //         </div>
        //     </div>

        // </div>

        <div className="bg-[#492a28] pt-10 xl:pt-20 pb-0 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem]">

                <div className="flex flex-col">
                    <div className="text-[2rem]">
                        VERMICOMPOST
                    </div>
                    <div className="text-[1.5rem] lg:w-[500px] ml-10 pt-4">
                        Pure Desi Cowdung vermicompost is best soil suppliment
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-2 gap-4 ml-10 mt-4 lg:mt-0">
                <div className="lg:col-start-2 lg:row-start-1 md:col-start-1 md:row-start-1 col-start-1 row-start-1">
                        <div className="text-[1.7rem]">Features</div>
                            <div className="flex flex-col ">
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/vermi1.png" alt="feature1" width={50} height={50} />
                                    <div>Made by fermenting Cow dung</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/vermi2.png" alt="feature1" width={50} height={50} />
                                    <div>Improves the soil structure, water retention</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/vermi3.png" alt="feature1" width={50} height={50} />
                                    <div>Keeps Diseases away</div>
                                </div>
                            </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-2 md:col-start-1 md:row-start-2 col-start-1 row-start-2">
                    <div className="text-[1.7rem]">HOW TO USE</div>
                        <div className="text-[1.5rem] w-[500px] pl-10">
                            <ul className="list-disc text-[1rem] leading-8">
                                <li>
                                    Take  one  handful  for  a  7  inch  pot  or two handful for 12 inch pot. Decide propotion based on your pot size.
                                </li>
                                <li>
                                    Dig  the  soil  surface  for  1-2  inches from stem of the plant.
                                </li>
                                <li>
                                    Put vermicompost and mix with the soil.
                                </li>
                            </ul>
                        </div> 
                </div>
                <div className="lg:row-span-3 lg:col-start-3 lg:row-start-1 row-span-2 col-start-2 row-start-1">
                    <div className=" items-center justify-center lg:-translate-y-20 hidden md:block">
                        <Image src="/VermicompostT.svg" alt="Vermicompost"  width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
        // md:w-[300px] lg:w-[550px]

    )
}