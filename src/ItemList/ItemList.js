import React, { useState} from 'react'
import { useSelector } from 'react-redux'

import PanelList from './PanelList'
import Item from './Item'

import './style.scss'

const ItemList = () => {
    const data = useSelector(state => state.data)
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
