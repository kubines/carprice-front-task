import React, { memo } from 'react'

import './style.scss'

const Item = memo(({ cartView, index, title, attributes, description }) => {
    return (
        <div
            className={`item ${cartView ? 'item_cart' : 'item_column'}`}
        >
            <div className={`item__content ${cartView ? 'item__content_cart' : 'item__content_column'}`}>
                <div className={`item__content__title ${cartView ? 'item__content__title_cart' : 'item__content__title_column'}`}>
                    <h4>
                        {title}
                    </h4>
                    <span>
                        {index + 1}
                    </span>
                </div>
                <div className={`item__content__attributes ${cartView ? 'item__content__attributes_cart' : 'item__content__attributes_column'}`}>
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
            <p className='item__description'>
                {description}
            </p>
        </div>
    )
})

export default Item
