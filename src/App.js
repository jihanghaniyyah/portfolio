import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Homepage';
import Works from './Works';
import Resume from './Resume';
import Sipengmas from './Works/Sipengmas';
import SipengmasMobile from './Works/SipengmasM';
import Siukm from './Works/Siukm';
import Pilkahimapsi from './Works/Pilkahimapsi';
import Visitind from './Works/Visitind';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/works' element={<Works />} />
				<Route path='/works/sipengmas' element={<Sipengmas />} />
				<Route path='/works/sipengmasmobile' element={<SipengmasMobile />} />
				<Route path='/works/siukm' element={<Siukm />} />
				<Route path='/works/pilkahimapsi' element={<Pilkahimapsi />} />
				<Route path='/works/visitind' element={<Visitind />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
}
