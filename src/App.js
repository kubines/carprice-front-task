import React from 'react'

import Panel from './Panel'
import ItemList from './ItemList'
import ItemCreate from './ItemCreate'

import './style.scss'

function App() {
	return (
		<div className='container'>
			<Panel />
			<ItemList />
			<ItemCreate />
		</div>
	)
}

export default App
