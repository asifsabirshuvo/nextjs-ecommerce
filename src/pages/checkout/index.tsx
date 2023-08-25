import Navbar from '@/components/Navbar'
import ProductCheckout from '@/components/ProductCheckout'
import { getCart, emptyCart, getTotal } from '@/store/slices/cartSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import emptySvgIcon from './../../assets/undraw_empty_cart_co35.svg'
import Image from 'next/image';
export default function CheckoutPage() {
    const carts = useSelector(getCart)
    const total = useSelector(getTotal)
    const dispatch = useDispatch();
    return (
        <div >
            <Navbar />
            {carts.length == 0 && <div className=" ml-[38%] mt-[9%]">
                <Image
                    width={270}
                    height={270}
                    src={emptySvgIcon}
                    alt="cart empty"
                />
                <span className='text-2xl p-2 text-gray-400'>No items, keep shopping.</span>
            </div>}
            {carts.length > 0 && <div className='w-auto pt-2'>
                <span className='float-left ml-14 mt-2 text-lg'>Total price: <b>{(Math.round(total * 100) / 100).toFixed(2)} USD</b></span>
                <a onClick={(event) => {
                    event.target == event.currentTarget &&
                        event.stopPropagation();
                    dispatch(emptyCart())
                }}
                    className="float-right mr-14 mt-2 underline text-red-500 hover:text-red-600 cursor-pointer">
                    CLEAR ALL</a>
                <div className='w-[100%]'>
                    {carts.map((item: IProduct) => {
                        return <ProductCheckout {...item} key={item.id} />
                    })}
                </div>

            </div>}
        </div>
    )
}
