import { useNavigate } from "react-router-dom";
import { Product } from "./Types";

const ProductCard = ({name, price, imageUrl, id} : Product) => {
    const navigate = useNavigate();
    const handleClick = () => {
        //SET TO LOCAL STORAGE
        localStorage.setItem('currentProduct', JSON.stringify({name, price, imageUrl}));
        //SET CURRENT PRODUCT TO REDUX
        navigate(`/product/${id}`);
    }
  return (
    <div className={`flex flex-col shadow-lg hover:cursor-pointer hover:shadow-2xl`} onClick={handleClick}>
            <div>
                <img className="object-cover" src={imageUrl} />
                <div className="px-2 flex justify-between py-5">
                <h1 className="text-black font-medium">
                    {name}
                </h1>
                <p className="text-[#56B280] font-bold pt-3 px-2 text-xl">
                    {price}$
                </p>
                </div>
            </div>
        </div>
  )
}

export default ProductCard;