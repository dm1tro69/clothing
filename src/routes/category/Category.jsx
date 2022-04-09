import React, {useEffect, useState} from 'react';
import './Category.scss'
import {useParams} from 'react-router-dom'
import ProductCard from "../../componets/product-card/ProductCard";
import {useSelector} from "react-redux";

const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useSelector((state)=> state.category)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=> {
       setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className={'category-title'}>{category.toUpperCase()}</h2>
        <div className={'category-container'}>
            {products && products.map((product)=> (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    );
};

export default Category;
