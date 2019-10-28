import React, { useState, useContext, useEffect } from 'react'

import State from 'State'

import './style.scss'

const ItemCreate = () => {
    const { itemCreate } = useContext(State)
    const initItem = {
        title: '',
        attributes: [''],
        description: '',
    }
    const [item, setItem] = useState(initItem)
    const [error, setError] = useState(false)

    const create = (e) => {
        if (item.title.length > 0) {
            itemCreate(item)
            setItem(initItem)
        }
        else {
            setError(true)
        }
        e.preventDefault()
    }

    useEffect(() => {
        item.title.length > 0 && setError(false)
    }, [item.title])

    return (
        <form
            onSubmit={create}
            className='form'
        >
            <h4>
                Добавить новый объект
            </h4>
            <label>
                Заголовок*
            </label>
            <input
                className={error ? 'form_error' : ''}
                type='text'
                name='title'
                value={item.title}
                onChange={e => setItem({ ...item, title: e.target.value })}
            />
            <label>
                <span
                    onClick={() => setItem({ ...item, attributes: [...item.attributes, ''] })}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    Добавить пункт
                </span>
            </label>
            {
                item.attributes.map((attr, i) =>
                    <input
                        key={i}
                        type='text'
                        name='attribute'
                        value={attr}
                        onChange={e => setItem({ ...item, attributes: item.attributes.map((attr, index) => index === i ? e.target.value : attr) })}
                    />
                )
            }
            <label>
                Описание
            </label>
            <input
                type='text'
                name='description'
                value={item.description}
                onChange={e => setItem({ ...item, description: e.target.value })}
            />
            <button type='submit'>
                Добавить
            </button>
        </form>
    )
}

export default ItemCreate
