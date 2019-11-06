import React from 'react'

import './style.scss'

const PanelList = ({ cartView, showCart, showColumn }) => {
    return (
        <div className='panel-list'>
            <h2>
                список объектов
            </h2>
            <div
                className='panel-list__change-view'
            >
                <span
                    className={`panel-list__change-view__icon-1 ${cartView ? '' : 'panel-list__change-view__icon-1_active'}`}
                    onClick={showColumn}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span
                    className={`panel-list__change-view__icon-2 ${cartView ? 'panel-list__change-view__icon-2_active' : ''}`}
                    onClick={showCart}
                >
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default PanelList
