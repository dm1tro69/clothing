import React from 'react';
import './DirectoryItem.scss'
import {Link} from "react-router-dom";


const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className='directory-item-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Link to={`shop/${title}`} className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    );
};

export default DirectoryItem;
