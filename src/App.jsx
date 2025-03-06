import './index.css';
import { Header } from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/home' element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
