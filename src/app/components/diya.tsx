// export default function Diya() {
//     return(
//         <div className="bg-[#492a28] min-h-screen px-20 py-20">
//             <div className="text-6xl">   
//                 PANCHAGAVYA DIYA
//                 <div className="text-4xl w-[500px] pl-10 pt-16">
//                     Pure Desi Cowdung diya for Agnihotra                
//                 </div>
//             </div>

//             <div className="text-6xl pl-[650px]">Features</div>

//         </div>
//     )
// }

import Image from "next/image"

export default function Diya() {
    return(
        <div className="bg-[#141311] p-20">
            <div className="flex flex-row gap-8 justify-between flex-wrap gap-10">
                
                <div className="text-6xl flex flex-col justify-between">   
                    <div>
                        PANCHAGAVYA DIYA
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                        Pure Desi Cowdung diya for Agnihotra
                        </div>
                        
                    </div>
                    <div className="pl-10 mt-40">
                        <div className="text-5xl">HOW TO USE</div>
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                            <ul className="list-disc text-2xl w-[550px] leading-8">
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

                    

                </div>

                <div className="text-5xl flex justify-center flex-col w-[400px]">
                    <div>Directions To Use</div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/diya1.png" alt="feature1" width={70} height={100} />
                        <div>Pour the ghee/oil and light the lamp</div>
                    </div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/diya1.png" alt="feature1" width={100} height={100} />
                        <div>High aeration process cowdung fermentation process</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-2xl mt-[150px] w-[250px]">Scan for more Information</div>
                        <div className="mt-20">
                            <Image src="/qrcode1.jpeg" alt="QR Code" width={200} height={200} />
                        </div>
                    </div>
                    
                </div>

                <div className="flex items-center">
                    <Image src="/DiyaT.svg" alt="Vermicompost"  width={400} height={400} />
                </div>
            
            </div>
            
        </div>
    )
}