import { useGetAllProductsQuery } from "../../storew/RTKQuery/productsAPISlice";
import ProductCard from "../Products/ProductCard";

const Popular = () => {
  const { data } = useGetAllProductsQuery();
  return (
    <div className="flex flex-col items-center justify-center my-8  text-slate-600">
      {/* HEADING */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-semibold">Popular</h1>
        <p className="text-lg">Our top selling products</p>
      </div>
      <div className="h-auto w-full bg-white">
        <div className="pl-[140px] pr-[140px] grid grid-cols-4 gap-6 my-8">
          {data &&
            data.map(
              (item, index) =>
                index <= 3 && (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.price}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
