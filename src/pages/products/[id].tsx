import Navbar from "@/components/Navbar";
import { useProductDetails } from "@/hooks/useProductDetails";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/store/slices/cartSlice";

export default function Product() {
    const router = useRouter();
    const { productDetail } = useProductDetails(Number(router.query.id));
    const dispatch = useDispatch();

    return (
        <div className="bg-slate-100">
            <Navbar />

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                {
                    !productDetail.id && <div role="status"
                        className="m-48 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-500">
                            <svg className="w-25 h-25 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                {
                    productDetail.id && <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <Image width={200} height={200}
                                className="w-auto p-8 rounded-t-lg"
                                src={productDetail?.image} alt="product image" />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetail.title}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{productDetail?.rating?.rate}</p>
                                                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{productDetail?.rating?.count} reviews</a>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <p className="leading-relaxed">{productDetail?.description}</p>

                                <div className="flex mt-5">
                                    <span className="title-font font-medium text-2xl text-gray-900">{productDetail.price}$</span>
                                    <button
                                        onClick={() => {
                                            dispatch(addToCart(productDetail));
                                        }}
                                        className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}
