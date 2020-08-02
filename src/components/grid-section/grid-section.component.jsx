import React, { useEffect, useState } from 'react';
import './grid-section.styles.scss';

const GridSection = ({sliderNumber}) => {
    console.log(sliderNumber)
    return (
        <div className='grid-section-container'>
            <div className={`grid-item ${sliderNumber === 1 ? 'blue' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 1 ? 'green' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 1 ? 'red' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 1 ? 'orange' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 1 ? 'purple' : ''}`}></div>
        </div>
    )
}

export default GridSection;