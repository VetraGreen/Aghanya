import Image from "next/image"

export default function Vermicompost() {
    return(
        <div className="bg-[#492a28] px-20 py-20">
            <div className="flex flex-row gap-8 justify-between flex-wrap">
                
                <div className="text-6xl flex flex-col justify-between">   
                    <div>
                        VERMICOMPOST
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                            Pure Desi Cowdung vermicompost is best soil suppliment
                        </div>
                        
                    </div>
                    <div className="pl-10">
                        <div className="text-5xl">HOW TO USE</div>
                        <div className="text-4xl w-[500px] pl-10 pt-8">
                            <ul className="list-disc text-2xl w-[550px] leading-8">
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

                    

                </div>

                <div className="text-5xl flex justify-center flex-col w-[400px]">
                    <div>Features</div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/vermi1.png" alt="feature1" width={50} height={50} />
                        <div>Made by fermenting Cow dung</div>
                    </div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/vermi2.png" alt="feature1" width={50} height={50} />
                        <div>Improves the soil structure, water retention</div>
                    </div>
                    <div className="flex flex-row pt-4 text-2xl gap-2 items-center">
                        <Image src="/vermi3.png" alt="feature1" width={50} height={50} />
                        <div>Keeps Diseases away</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <Image src="/VermicompostT.svg" alt="Vermicompost"  width={400} height={400} />
                </div>
            
            </div>
        </div>
    )
}