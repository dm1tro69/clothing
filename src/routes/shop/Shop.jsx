import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import './Shop.scss';
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../../store/categories/category.action";

const Shop = () => {

    const dispatch = useDispatch()

    useEffect( ()=> {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()

            dispatch(setCategoriesMap(categoryMap))
        }
        getCategoriesMap()

    }, [])


    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;
