import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

import * as languageObj from '../services/languages';


const Translate = () => {
	const languages = languageObj.getLanguages();
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
	const [text, setText] = useState('');

	const onTextChange = (event) => {
		// console.log(event.target.value);
		setText(event.target.value);
	};

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="text">Enter Text</label>
					<input
						type="text"
						id="text"
						placeholder="Enter text"
						value={text !== '' ? text : ''}
						onChange={(e) => {
							onTextChange(e);
						}}
					/>
				</div>
			</div>
			<Dropdown
				type="language"
				selected={selectedLanguage}
				onSelectedChange={setSelectedLanguage}
				options={languages}
			/>
			<Convert language={selectedLanguage} text={text} />
		</div>
	);
};

export default Translate;
