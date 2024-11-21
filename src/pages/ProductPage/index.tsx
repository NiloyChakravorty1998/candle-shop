import Dimension from "../../components/Dimension";
import useGetCurrentProduct from "./ApiCall";
import PriceAndQuantity from "./PriceAndQuantity";

const ProductPage = () => {
    const {data} = useGetCurrentProduct();
    return (
        <div className="flex justify-between items-start px-[140px] py-[20px]">
            {/* LEFT SECTION */}
            <div className="flex flex-col gap-4 w-[48%]">
                <img src={data?.imageUrl} alt="Product" />
                <h1 className="text-lg font-medium">
                    All made with natural soy wax, Candleaf is made for your pleasure moments.
                </h1>
                <h1 className="text-lg text-[#56B280] font-medium">
                    🚚 FREE SHIPPING
                </h1>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-[40%]">
                <h1 className="text-xl font-semibold">{data?.name}®️</h1>
                {/* PRICE AND PURCHASE OPTION */}
                {data && <PriceAndQuantity
                    imageUrl = {data.imageUrl}
                    id= {data.id}
                    price={data.price}
                    name={data.name}
                />}
                {/* DIMENSIONS */}
                <Dimension />
            </div>
        </div>
    );
};

export default ProductPage;


