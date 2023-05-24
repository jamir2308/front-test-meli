export interface ProductResponse {
    author: Author
    categories: array<string>,
    items: array<Product>
}

export interface ProductDetailResponse {
    author: Author
    item: Item
}


export interface Author {
    name: string;
    lastname: string
}

export interface Product {
    id: string;
    title: string;
    picture: string;
    condition: string;
    free_shipping: fboolean;
    price: Price;
}

export interface Item extends Product {
    description: string;
    sold_quantity: number;
}


export interface  Price {
    currency: string;
    amount: number;
    decimals: number;
}