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
                    className={`panel-list__change-view__icon ${cartView ? '' : 'panel-list__change-view__icon_active'}`}
                    onClick={() => setCartView(false)}
                >
                    L
                </span>
                <span
                    className={`panel-list__change-view__icon ${cartView ? 'panel-list__change-view__icon_active' : ''}`}
                    onClick={() => setCartView(true)}
                >
                    C
                </span>
            </div>
        </div>
    )
}

export default PanelList
