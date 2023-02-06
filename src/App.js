import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Works from './Works';
import Resume from './Resume';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/works' element={<Works />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
}
