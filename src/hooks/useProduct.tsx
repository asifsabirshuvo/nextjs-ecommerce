//practicing a custom hook

import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    //this can be moved to separate /service/api folder. I am too tired to do this
    const fetchData = async () => {
        const response = await axios.get(
            process.env.NEXT_PUBLIC_API_URL + "products"
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