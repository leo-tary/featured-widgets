import React from 'react';

import Accordion from './Accordion';

import * as listObj from '../services/accordion';

const App =  () => {

    const accordionList = listObj.getAccordion();

    return (
        <div className="container"><Accordion items = {accordionList}/></div>
    );

};

export default App;