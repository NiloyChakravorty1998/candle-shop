import { ProductCart } from "../../components/Products/Types";
import { useRemoveFromCartMutation } from "../../storew/RTKQuery/cartAPISlice";

const ProductRow = ({ imageUrl, id, name, totalPrice }: ProductCart) => {
    const [removeItem] = useRemoveFromCartMutation();
    return (
        <div className="w-full  flex items-center justify-between my-10 border border-x-0 border-neutral-300 py-5">
            <div className="flex gap-2 ">
                <img src={imageUrl} className="w-[150px] h-[120px]" />
                <ul>
                    <li>
                        <h1 className="text-2xl">
                            {name}
                        </h1>
                    </li>
                    <li>
                        <h1 className="text-lg underline text-[#56B280] hover:cursor-pointer hover:text-green-700" onClick={() => removeItem(id)}>
                            Remove items
                        </h1>
                    </li>
                </ul>
            </div>
            <div className="flex items-center">
                <div className="mx-10">
                    <h1>
                        {totalPrice}$
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ProductRow