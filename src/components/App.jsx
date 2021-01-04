import React, { useState } from 'react';

// import Accordion from './Accordion';
// import Search from '../components/Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

// import * as listObj from '../services/accordion';
import * as dropDownObj from '../services/dropdown';

const App = () => {
	// const accordionList = listObj.getAccordion();
	const dropdownList = dropDownObj.getDropdownList();
	const [selected, setSelected] = useState(null);

	return (
		// <div className="container"><Accordion items = {accordionList}/></div>
		// <div className = "container"><Search /></div>
		<div className="container">
			<Dropdown type="color" selected={selected} onSelectedChange={setSelected} options={dropdownList} />
			<br />
			<Translate />
		</div>
	);
};

export default App;
