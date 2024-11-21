import Logo from "../Navbar/Logo"

const LogoAndTagLine = () => {
  return (
    <div className="px-[140px] flex flex-col gap-2 hover:cursor-pointer">
        <Logo styles="text-4xl text-white"/>
        <h1 className="px-2">
            Your candle shop
        </h1>
    </div>
  )
}

export default LogoAndTagLine