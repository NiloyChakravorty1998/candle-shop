import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const headers: string[] = ["Discovery", "About", "Contact us"];
    const hoverProperty: string = 'hover:text-neutral-400 hover:cursor-pointer';
    const logoProps = 'text-[#56B280] font-semibold text-xl hover:cursor-pointer';

    const navigate = useNavigate();

    const handleClick = (header: string) => {
        if (header === "Contact us") {
            window.open('https://github.com/NiloyChakravorty1998/candle-shop', '_blank');
        }
    }

    return (
        <nav className='max-w-[1440px] mx-auto px-[165px] pt-[10px] pb-[10px]'>
            <div className='flex justify-between items-center'>
                {/* LEFT */}
                <Logo styles={logoProps} />
                {/* MIDDLE */}
                <div className='flex items-center gap-10'>
                    {headers.map((item, index) =>
                        (
                            <h1 
                                key={index} 
                                className={hoverProperty} 
                                onClick={() => handleClick(item)} 
                            >
                                {item === "Discovery" ? (
                                    <span className="flex items-center">
                                        {item}
                                        <IoIosArrowDown className="ml-1" />
                                    </span>
                                ) : (
                                    item
                                )}
                            </h1>
                        ))}
                </div>
                {/* RIGHT */}
                <div className='flex items-center text-xl gap-3 font-semibold'>
                    <CgProfile className={hoverProperty} onClick={() => navigate('/product-management')} />
                    <BsCart className={hoverProperty} onClick={() => navigate('/cart')} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
