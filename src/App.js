import React from 'react'

import Provider from 'State/Provider'

import Panel from './Panel'
import ItemList from './ItemList'
import ItemCreate from './ItemCreate'

import './style.scss'

function App() {
	return (
		<Provider>
			<div className='container'>
				<Panel />
				<ItemList />
				<ItemCreate />
			</div>
		</Provider>
	)
}

export default App
