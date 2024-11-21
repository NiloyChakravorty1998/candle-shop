export interface Product {
    name: string,
    imageUrl: string,
    price: number,
    id?: string
}

export interface ProductCart {
    [x: string]: any
    name: string,
    imageUrl: string,
    price: number,
    id: string,
    quantity: number,
    totalPrice: number
}

export interface CartState {
    cart: ProductCart[];
    loading: boolean;
    error: string | null;
}
