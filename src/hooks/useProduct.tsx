//practicing a custom hook

import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const fetchData = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );
        if (response && response.data) {
            setProducts(response.data);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return { products };
};