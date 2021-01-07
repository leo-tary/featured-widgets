import React, { useState, useEffect } from 'react';

import google from '../services/google';

const Convert = ({ language, text }) => {
	const [translation, setTranslation] = useState([]);
    const [debouncedText , setDebouncedText] = useState(text);

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            setDebouncedText(text);
        } , 750)


        return () => {
            clearTimeout(timeOutId);
        }

    } , [text])


	useEffect(() => {
		// console.log("start here");

		const transalator = async () => {
			const { data } = await google.post(
				'/v2',
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
					},
				}
			);

			// console.log(data.data.translations);
			setTranslation(data.data.translations[0].translatedText);
		};

            transalator();
            
	}, [language , debouncedText]);

	// const translatedText = translation.map((text,index) => {
	//     return (
	//         <div key={index}>{text.translatedText}</div>
	//     )
	// })

	return <div> {translation} </div>;
};

export default Convert;
