import { useGetAllProductsQuery } from "../../storew/RTKQuery/productsAPISlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data } = useGetAllProductsQuery()
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8 text-slate-600">
        {/* HEADING */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold">Products</h1>
          <p className="text-lg ">
            Order it for you or your beloved ones
          </p>
        </div>
        {/* PRODUCT CARDS */}
        <div className="h-auto w-full bg-white">
          <div className="pl-[140px] pr-[140px] grid grid-cols-4 gap-[25px] pt-[80px]">
            {data && data.map((item) => (<ProductCard id={item.id} key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;

// import { Component } from 'react';
// import axios, { AxiosResponse } from 'axios';
// import ProductCard from './ProductCard';

// // Define the shape of the state
// interface ProductsState {
//   data: Array<{ id: number; name: string; imageUrl: string; price: number }> | null;
//   loading: boolean;
// }

// class Products extends Component<{}, ProductsState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       data: null,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3000/products')
//       .then((response: AxiosResponse) => {
//         this.setState({ data: response.data, loading: false });
//       })
//       .catch((err) => {
//         console.error('Failed to fetch products:', err);
//         this.setState({ loading: false }); 
//       });
//   }

//   render() {
//     const { data, loading } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div className="flex flex-col items-center justify-center my-8 text-slate-600">
//         {/* HEADING */}
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-semibold">Products</h1>
//           <p className="text-lg">Order it for you or your beloved ones</p>
//         </div>
//         {/* PRODUCT CARDS */}
//         <div className="h-auto w-full bg-white">
//           <div className="pl-[140px] pr-[140px] grid grid-cols-4 gap-[25px] pt-[80px]">
//             {data &&
//               data.map((item) => (
//                 <ProductCard
//                   id={item.id}
//                   key={item.id}
//                   name={item.name}
//                   imageUrl={item.imageUrl}
//                   price={item.price}
//                 />
//               ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Products;
