import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
function SliderComp() {
    const dispatch = useDispatch()
    const { products, productsStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    console.log(products);
    return (
        <div>
            <div className='border-2 border-red-600 flex justify-around'>
                <div>
                    <div>
                        İNSPECT
                    </div>
                </div>
                <img src="https://raw.githubusercontent.com/ismailcubuk/Store/main/src/assets/images/Phones/iphone%2012/black/1.jpg" alt="" className='w-40 h-40'/>
            </div>

        </div>
    )
}

export default SliderComp