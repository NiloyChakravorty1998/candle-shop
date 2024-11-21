import LogoAndTagLine from "./LogoAndTagLine";
import OtherResources from "./OtherResources";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white pt-20 pb-10 roboto-regular-italic">
    <div className="flex justify-between items-center">
    {/* LEFT    */}
        <LogoAndTagLine />
    {/* RIGHT */}
        <OtherResources/>
    </div>
    <br/>
    <center>
        <h1>
        ©️ All rights belongs to Candleaf 2024.
        </h1>
    </center>
    </div>
  )
}

export default Footer;