// Products
export interface Product {
    id?: number;
    title?: string;
    description?: string;
    weight?: number,
    brand?: string;
    category?: string;
    price?: number;
    specificPrice?: number;
    sale?: boolean;
    new?: boolean;
    quantity?: number;
    variants?: Variants[];
    images?: Images[];
}

export interface Variants {
    variant_id?: number;
    id?: number;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}