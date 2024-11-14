import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import { Books } from './pages/Books'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookDetails } from './pages/BookDetails'
function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<FrappeProvider>
				<Routes>
					<Route path='/' element={<Books />} />
					<Route path='/details/:id' element={<BookDetails />} />
				</Routes>
			</FrappeProvider>
		</div>
	)
}

export default App
