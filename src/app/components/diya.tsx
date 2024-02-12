import Image from "next/image"

export default function Diya() {
    return(
        // <div className="bg-[#d6bb63] text-[#2b2321] p-20">
        //     <div className="flex flex-row justify-between flex-wrap gap-10">
                
        //         <div className="text-6xl flex flex-col justify-between">   
        //             <div>
        //                 PANCHAGAVYA DIYA
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                 Pure Desi Cowdung diya for Agnihotra
        //                 </div>
                        
        //             </div>
        //             <div className="pl-10 mt-40">
        //                 <div className="text-5xl">HOW TO USE</div>
        //                 <div className="text-4xl w-[500px] pl-10 pt-8">
        //                     <ul className="list-disc text-2xl w-[550px] leading-8">
                                // <li> removes bacteria from atmosphere</li>
                                // <li> when burnt with ghee gives homam effect</li>
                                // <li> safe for people with allergy</li>
                                // <li> gives positive energy</li>
                                // <li> boosts confidence</li>
                                // <li> improves concentration</li>
                                // <li> stimulates creativity</li>
                                // <li> relieves headaches</li>
                                // <li> fights depression</li>
                                // <li> promotes deep sleep</li>
        //                     </ul>
        //                 </div>
                        
        //             </div>

                    

        //         </div>

        //         <div className="text-5xl flex justify-center flex-col w-[400px]">
        //             <div>Directions To Use</div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        // <Image src="/diya1.png" alt="feature1" width={70} height={100} />
                        // <div>Pour the ghee/oil and light the lamp</div>
        //             </div>
        //             <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        // <Image src="/diya1.png" alt="feature1" width={100} height={100} />
                        // <div>High aeration process cowdung fermentation process</div>
        //             </div>
        //             <div className="flex flex-row">
        //                 <div className="text-2xl mt-[150px] w-[250px]">Scan for more Information</div>
        //                 <div className="mt-20">
        //                     <Image src="/qrcode1.jpeg" alt="QR Code" width={200} height={200} />
        //                 </div>
        //             </div>
                    
        //         </div>

        //         <div className="flex items-center">
        //             <Image src="/DiyaT.svg" alt="Vermicompost"  width={400} height={400} />
        //         </div>
            
        //     </div>
            
        // </div>

        <div className="bg-[#d6bb63] text-[#2b2321] pt-10 xl:pt-20 pb-0 px-[2rem] md:px-[5rem] lg:px-[5rem] xl:px-[10rem]">

                <div className="flex flex-col">
                    <div className="text-[2rem]">
                        PANCHAGAVYA DIYA
                    </div>
                    <div className="text-[1.5rem] lg:w-[500px] ml-10 pt-4">
                        Pure Desi Cowdung diya for Agnihotra
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-2 gap-4 ml-10 mt-4">
                <div className="lg:col-start-2 lg:row-start-1 md:col-start-1 md:row-start-1 col-start-1 row-start-1">
                        <div className="text-[1.7rem]">Features</div>
                            <div className="flex flex-col ">
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/diya1.png" alt="feature1" width={50} height={50} />
                                    <div>Pour the ghee/oil and light the lamp</div>
                                </div>
                                <div className="flex flex-row pt-4 gap-2 items-center">
                                    <Image src="/diya1.png" alt="feature1" width={50} height={50} />
                                    <div>High aeration process cowdung fermentation process</div>
                                </div>
                            </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1 md:col-start-1 md:row-start-2 col-start-1 row-start-2 pb-6 lg:pb-0">
                    <div className="text-[1.7rem]">HOW TO USE</div>
                        <div className="text-[1.5rem] pl-10">
                            <ul className="list-disc text-[1rem] leading-8">
                                <li> removes bacteria from atmosphere</li>
                                <li> when burnt with ghee gives homam effect</li>
                                <li> safe for people with allergy</li>
                                <li> gives positive energy</li>
                                <li> boosts confidence</li>
                                <li> improves concentration</li>
                                <li> stimulates creativity</li>
                                <li> relieves headaches</li>
                                <li> fights depression</li>
                                <li> promotes deep sleep</li>
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
    )
}