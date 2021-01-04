import React, { useState } from 'react';

import Dropdown from './Dropdown';

import * as languageObj from '../services/languages';

const Translate = () => {
	const languages = languageObj.getLanguages();
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	return <Dropdown type="language" selected={selectedLanguage} onSelectedChange={setSelectedLanguage} options={languages} />;
};

export default Translate;
