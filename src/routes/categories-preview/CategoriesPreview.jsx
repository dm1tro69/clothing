import {Fragment } from 'react';

import CategoryPreview from "../../componets/category-preview/CategoryPreview";
import {useSelector} from "react-redux";

const CategoriesPreview = () => {

    const {categoriesMap} = useSelector((state)=> state.category)


    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;
