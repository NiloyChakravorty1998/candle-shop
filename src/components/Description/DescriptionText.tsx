import Pointer from "./Pointer";

const DescriptionText = () => {
   const pointers: string [] = ["Eco-sustainable: All recyclable materials",
                                "Hyphoallergenic: 100% natural ingredients",
                                "Handmade: All candles are craftly made with love"];
    const formattedPointers: string[][] = pointers.map((item) => item.split(":"));
  return (
    <div className="flex flex-col gap-3 pl-[140px] pr-[130px]">
        <h1 className="text-4xl leading-relaxed text-wrap">
            Fragrant candles
        </h1>
        <h1 className="text-[#56B280] font-light text-lg">
            Made for your home and your wellness.
        </h1>
        <div className="my-4 flex flex-col gap-1">
            {formattedPointers.map((item, index) => (
                <Pointer key={index} pointerTitle={item[0]} pointerText={item[1]}/>
            ))}
        </div>
    </div>
  )
}

export default DescriptionText