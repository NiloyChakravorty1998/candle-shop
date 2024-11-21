import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import { useNavigate } from "react-router-dom";
import { Product, ProductCart } from "../../components/Products/Types";
import { useAddToCartMutation } from "../../storew/RTKQuery/cartAPISlice";


const PriceAndQuantity = ({ price, name, imageUrl, id }: Product) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [calculatedPrice, setCalculatedPrice] = useState<number>(price);
    const [addToCart] = useAddToCartMutation();
    const navigate = useNavigate();

    const increment = () => {
        setQuantity((prev) => {
            const newQuantity = prev + 1;
            calculateTotalPrice(newQuantity);
            return newQuantity;
        });
    };

    const decrement = () => {
        setQuantity((prev) => {
            const newQuantity = prev > 1 ? prev - 1 : 1;
            calculateTotalPrice(newQuantity);
            return newQuantity;
        });
    };

    const calculateTotalPrice = (updatedQuantity: number = 1) => {
        let total = price * updatedQuantity;
        total = total >= 40 ? total * 0.9 : total;
        setCalculatedPrice(Math.floor(total));
    };

    const handleAddToCart = () => {
        //SET TO STORE
        const payload: ProductCart = {
            imageUrl,
            price,
            name,
            id,
            quantity,
            totalPrice: calculatedPrice
        }
        addToCart(payload);
        navigate('/cart');
    };

    return (
        <>
            <div className="py-5 flex gap-5 my-5 items-center">
                <h1 className="text-xl text-[#56B280] font-medium">{price}$</h1>
                <h1>x</h1>
                <div className="flex flex-col items-center">
                    <div className="py-1 px-3 my-2 mx-4 border border-green-600 flex items-center justify-between space-x-4">
                        <button onClick={increment} className="text-green-600 font-bold">+</button>
                        <span className="text-lg">{quantity}</span>
                        <button onClick={decrement} className="text-red-600 font-bold">-</button>
                    </div>
                </div>
                <h1>=</h1>
                <h1 className="text-xl font-semibold">{calculatedPrice}$</h1>
                {calculatedPrice >= 40 && (
                    <h1 className="italic text-zinc-400 text-[12px] font-semibold">
                        Extra 10% for offers greater than 40$
                    </h1>
                )}
            </div>
            {/* QUANTITY AND SUBSCRIPTION OPTION */}
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <Checkbox />
                    <h1 className="text-md">Subscribe & deliver every week 😊</h1>
                </div>
            </div>
            <button className="bg-[#56B280] px-16 py-3 text-white rounded-md my-8 hover:cursor-pointer hover:bg-green-700 hover:text-white" onClick={handleAddToCart}>
                🧺 Add to cart
            </button>
        </>
    );
};

export default PriceAndQuantity;
