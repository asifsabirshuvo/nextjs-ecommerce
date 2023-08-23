import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';

export default function ProductCheckout(product: IProductWithCount) {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        < div onClick={() => {
            router.push(
                { pathname: `/products/${product.id}` }
            )
        }
        } className="cursor-pointer m-12 h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >

            <div className="space-y-8  md:space-y-0 md:space-x-8 md:flex md:items-center">
                <Image width={200} height={200}
                    className="p-8 rounded-t-lg"
                    src={product.image} alt="product image" />

                <div className="w-full">
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{product.rating.rate}</p>
                                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{product.rating.count} reviews</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-between" >
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>

                            <div onClick={(event) => {
                                event.target != event.currentTarget &&
                                    event.stopPropagation();
                            }} className=" focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800" role="group">
                                <button
                                    type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 dark:focus:text-white">
                                    -
                                </button>
                                <span
                                    className="cursor-text inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200  ">
                                    {product.count}
                                </span>
                                <button onClick={() => { dispatch(addToCart(product)) }}
                                    type="button" className="mr-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 dark:focus:text-white">
                                    +
                                </button>
                                <a onClick={(event) => {
                                    event.target == event.currentTarget &&
                                        event.stopPropagation();
                                    dispatch(removeFromCart(product.id))
                                }}
                                    className=" text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">
                                    Remove</a>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div >

    )
}
