import React from 'react'

import './style.scss'

const Item = ({ cartView, index, title, attributes, description }) => {
    return (
        <div
            className='item'
        >
            <div className='item_container'>
                <div className='item__title'>
                    <h4>
                        {title}
                    </h4>
                    <span>
                        {index}
                    </span>
                </div>
                <div className='item__attributes'>
                    {
                        attributes.map((attribute, i) =>
                            <p
                                key={i}
                            >
                                {attribute}
                            </p>
                        )
                    }
                </div>
            </div>
            <div className='item__description'>
                {description}
            </div>
        </div>
    )
}

export default Item
