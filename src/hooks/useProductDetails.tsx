//practicing a custom hook

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useProductDetails = (id: number) => {
    const router = useRouter();
    const [productDetail, setProductDetail] = useState<IProduct>({});
    const fetchData = async () => {
        console.log('coming to fetch')
        const URL = "https://fakestoreapi.com/products/" + id;
        console.log(URL)
        const response = await axios.get(
            URL
        );
        console.log(response)
        if (response && response.data) {
            console.log(response)
            setProductDetail(response.data);
        }
    };
    useEffect(() => {
        if (router.isReady) {
            console.log('===== useEffect calling ====')
            fetchData();
        }
    }, [router.isReady]);

    return { productDetail };
};

