import React, { useReducer } from 'react'

import State from './State'
import reducer from './reducer'
import data from 'data.json'

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data)

    const itemCreate = item => dispatch({ type: 'ITEM_CREATE', item: item })

    const itemFirstCopy = () => state.data.length > 0 && dispatch({ type: 'ITEM_FIRST_COPY' })

    const itemFirstDelete = () => state.data.length > 0 && dispatch({ type: 'ITEM_FIRST_DELETE' })

    const itemLastCopy = () => state.data.length > 0 && dispatch({ type: 'ITEM_LAST_COPY' })

    const itemLastDelete = () => state.data.length > 0 && dispatch({ type: 'ITEM_LAST_DELETE' })

    return (
        <State.Provider
            value={{
                state,
                itemCreate,
                itemFirstCopy,
                itemFirstDelete,
                itemLastCopy,
                itemLastDelete,
            }}
        >
            {children}
        </State.Provider>
    )
}

export default Provider
