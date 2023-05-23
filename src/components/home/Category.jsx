import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';
import electronics from '../../assets/icons/electronics.svg'
import jewelery from '../../assets/icons/jewelery.svg'
import men from '../../assets/icons/men.svg'
import women from '../../assets/icons/women.svg'



function Category() {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categories");
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='text-white bg-slate-700'>
            <div className='flex'>
            <div className='border-2 border-red-500 w-1/5'>
                    <div>Category</div>
                </div>
                <div className='border-2 border-red-500 w-1/5'>
                    <img src={electronics} alt="electronics" className='w-20 h-20' />
                    <div>Electronics</div>
                    <div>Shop Now</div>
                </div>
                <div className='border-2 border-red-500 w-1/5'>
                    <img src={jewelery} alt="jewelery" className='w-20 h-20' />
                    <div>Electronics</div>
                    <div>Shop Now</div>
                </div>
                <div className='border-2 border-red-500 w-1/5'>
                    <img src={men} alt="men" className='w-20 h-20' />
                    <div>Electronics</div>
                    <div>Shop Now</div>
                </div>
                <div className='border-2 border-red-500 w-1/5'>
                    <img src={women} alt="women" className='w-20 h-20' />
                    <div>Electronics</div>
                    <div>Shop Now</div>
                </div>



            </div>
        </div>
    )
}

export default Category