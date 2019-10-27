import React, { useContext } from 'react'

import State from 'State'

import './style.scss'

const Panel = () => {
    const { itemFirstCopy, itemFirstDelete, itemLastCopy, itemLastDelete } = useContext(State)

    return (
        <div className='panel'>
            <button
                type='button'
                onClick={itemLastCopy}
            >
                добавить в начало
            </button>
            <button
                type='button'
                onClick={itemFirstCopy}
            >
                добавить в конец
            </button>
            <button
                type='button'
                onClick={itemFirstDelete}
            >
                удалить первый
            </button>
            <button
                type='button'
                onClick={itemLastDelete}
            >
                удалить последний
            </button>
        </div>
    )
}

export default Panel
