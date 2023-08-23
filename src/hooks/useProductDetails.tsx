//practicing a custom hook

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useProductDetails = (id: number) => {
    const router = useRouter();
    const [productDetail, setProductDetail] = useState<IProduct>({});
    const fetchData = async () => {
        const URL = `${process.env.NEXT_PUBLIC_API_URL!}products/${id}`;
        const response = await axios.get(
            URL
        );
        if (response && response.data) {
            setProductDetail(response.data);
        }
    };
    useEffect(() => {
        if (router.isReady) {
            fetchData();
        }
    }, [router.isReady]);

    return { productDetail };
};

