import React, { useState, useContext } from 'react'

import State from 'State'

import PanelList from './PanelList'
import Item from './Item'

import './style.scss'

const ItemList = () => {
    const { state: { data } } = useContext(State)
    const [cartView, setCartView] = useState(true)

    return (
        <React.Fragment>
            <PanelList
                cartView={cartView}
                setCartView={setCartView}
            />
            <div className={`list ${cartView ? 'list_cart' : 'list_column'}`}>
                {
                    data.map((item, i) =>
                        <Item
                            key={i}
                            index={i}
                            title={item.title}
                            attributes={item.attributes}
                            description={item.description}
                            cartView={cartView}
                        />
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default ItemList
