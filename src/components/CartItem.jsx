import React from 'react';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/slices/CartSlice'
const CartItem = ({item,index}) => {
 const dispatch=useDispatch();
    const removeFromCart=()=>{
  dispatch(remove(item.id))
    }
    return (
        <div className='flex gap-3 p-4 justify-between border-b-[3px] border-black'>
            <div className='h-[180px]'>
                <img src={item.image} className='w-full h-full'/>
            </div>
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                <div className='flex justify-between mt-2'>
                    <p className="text-green-600 font-semibold ">${item.price}</p>
                    <div onClick={removeFromCart}>
                    <FcDeleteDatabase className='text-2xl cursor-pointer'/>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
