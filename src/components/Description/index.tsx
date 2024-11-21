import DescriptionText from "./DescriptionText";
import RightImage from "./RightImage";

const Description = () => {
  return (
    <>
    <div className="flex justify-between items-center">
    {/* LEFT    */}
        <DescriptionText/>
    {/* RIGHT */}
        <RightImage/>
    </div>
    </>
  )
}

export default Description;