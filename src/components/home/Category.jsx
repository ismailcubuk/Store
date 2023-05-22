import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Category() {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categories");
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div>
            <div>Category</div>
            {
                categories?.map((category,i)=>(
                    <div key={i}>{category}</div>
                ))
            }
        </div>
    )
}

export default Category