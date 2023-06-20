import { useState } from 'react';
import './App.css';
import { Table } from './components/table';
import { SearchButton } from './components/searchButton';
import { SearchBar } from './components/searchBar';


function App() {

	return (
		<div>
		<SearchBar/>
      	<SearchButton/>
		<Table />
		</div>
	);
}

export default App;
