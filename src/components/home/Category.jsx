import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';
import electronics from '../../assets/icons/electronics.svg'
import jewelery from '../../assets/icons/jewelery.svg'
import men from '../../assets/icons/men.svg'
import women from '../../assets/icons/women.svg'
import rightArrow from '../../assets/icons/rightArrow.svg'



function Category() {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categories");
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='text-white bg-slate-700 sm:m-10 rounded-3xl'>
            <div className='flex p-2'>
                <div className='w-1/5 p-5 hidden sm:flex justify-center items-center'>
                    <div className='sm:text-sm md:text-xl xl:text-2xl cursor-default'>Category</div>
                </div>
                <div className='newdiv hidden sm:block' />
                <button className=' flex justify-center items-center flex-col p-5 w-1/4 sm:w-1/5 categoryHover relative'>
                    <img src={electronics} alt="electronics" className='w-20 h-20  pb-5' />
                    <div className='hidden sm:block sm:text-sm md:text-xl xl:text-2xl absolute bottom-1 text-center' >Electronics</div>
                </button>
                <div className='newdiv' />
                <button className='flex justify-center items-center flex-col p-5 w-1/4 sm:w-1/5 categoryHover relative'>
                    <img src={jewelery} alt="jewelery" className='w-20 h-20 pb-5' />
                    <div className='hidden sm:block sm:text-sm md:text-xl xl:text-2xl absolute bottom-1 text-center' >Jewelery</div>
                </button>
                <div className='newdiv' />
                <button className='flex justify-center items-center flex-col p-5 w-1/4 sm:w-1/5 categoryHover relative'>
                    <img src={men} alt="men" className='w-20 h-20 pb-5' />
                    <div className='hidden sm:block sm:text-sm md:text-xl xl:text-2xl absolute bottom-1 text-center' >Men</div>
                </button>
                <div className='newdiv' />
                <button className='flex justify-center items-center flex-col p-5 w-1/4 sm:w-1/5 categoryHover relative'>
                    <img src={women} alt="women" className='w-20 h-20 pb-5' />
                    <div className='hidden sm:block sm:text-sm md:text-xl xl:text-2xl absolute bottom-1 text-center'>Women</div>
                </button>
            </div>
        </div>
    )
}

export default Category