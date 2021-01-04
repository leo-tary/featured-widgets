import React, { useState } from 'react';

// import Accordion from './Accordion';
// import Search from '../components/Search';
import Dropdown from '../components/Dropdown';

// import * as listObj from '../services/accordion';
import * as dropDownObj from '../services/dropdown';

const App = () => {
	// const accordionList = listObj.getAccordion();
	const dropdownList = dropDownObj.getDropdownList();
	const [selected, setSelected] = useState(dropdownList[0]);

    
	return (
		// <div className="container"><Accordion items = {accordionList}/></div>
		// <div className = "container"><Search /></div>
		<div className="container">
			<Dropdown selected={selected} onSelectedChange={setSelected} options={dropdownList} />
		</div>
	);
};

export default App;
