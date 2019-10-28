import React from 'react'

import './style.scss'

const PanelList = ({ cartView, setCartView }) => {
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
                    onClick={() => setCartView(false)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span
                    className={`panel-list__change-view__icon-2 ${cartView ? 'panel-list__change-view__icon-2_active' : ''}`}
                    onClick={() => setCartView(true)}
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
