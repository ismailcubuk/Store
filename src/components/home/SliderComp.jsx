import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import monitor from '../../assets/images/monitor.jpg'
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

                <img src={monitor} alt="monitor" className='border-2 border-blue-800 w-2/6 h-2/6' />
            </div>

        </div>
    )
}

export default SliderComp