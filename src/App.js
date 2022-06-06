import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Index from './pages/Index';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Index />} />
					<Route path='/add' element={<Add />} />
					<Route path='/detail' element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
