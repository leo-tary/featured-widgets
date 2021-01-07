import React, { useState } from 'react';

import Route from './Route';

import Accordion from './Accordion';
import Search from '../components/Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Header from './Header';

import * as listObj from '../services/accordion';
import * as dropDownObj from '../services/dropdown';

const App = () => {
	const accordionList = listObj.getAccordion();
	const dropdownList = dropDownObj.getDropdownList();
	const [selected, setSelected] = useState(null);

	return (
		<div className="container">
			<Header />
			<Route path="/">
				<Accordion items={accordionList} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown type="color" selected={selected} onSelectedChange={setSelected} options={dropdownList} />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
