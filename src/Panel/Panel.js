import React from 'react'
import { connect } from 'react-redux'

import { itemFirstCopy, itemFirstDelete, itemLastCopy, itemLastDelete } from 'actions'

import './style.scss'

const Panel = ({ itemFirstCopy, itemFirstDelete, itemLastCopy, itemLastDelete }) => {
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

const mapDispatchToProps = dispatch => {
    return {
        itemFirstCopy: () => dispatch(itemFirstCopy()),
        itemFirstDelete: () => dispatch(itemFirstDelete()),
        itemLastCopy: () => dispatch(itemLastCopy()),
        itemLastDelete: () => dispatch(itemLastDelete()),
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Panel)
