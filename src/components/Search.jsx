import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import wikipedia from '../services/wikipedia';

const Search = () => {
	const [term, setTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const onTextChange = (event) => {
		// console.log(event.target.value);
		setTerm(event.target.value);
	};

	// console.log("Runs with every render");

	useEffect(() => {
		// console.log("I Too Run With Every Render");

		const search = async () => {
			const { data } = await wikipedia.get('', {
				params: {
					srsearch: term,
				},
			});
			console.log(data.query.search);
			setSearchResults(data.query.search);
        };
        
        const timeoutId = setTimeout(() => {

            if(term) {
                search();
            }

        } , 750)
        
// useEffect Cleanup(Below) Function(Called whenever the function is re-rendered)
// Note: Below Cleanup function will always be called first before the component is actually re-rendered

        return () => {
            clearTimeout(timeoutId);
        }


	}, [term]);

	const renderArticles = () => {
		return searchResults.map((article) => {
			return (
				<div className="item" key={article.pageid}>
					<div className="right floated content">
                        <a href={`https://en.wikipedia.org?curid=${article.pageid}`} className="ui button">Go</a>
                    </div>
                    <div className="content">
						<div className="header">{article.title}</div>
						<span dangerouslySetInnerHTML={{ __html: article.snippet }}></span>
					</div>
				</div>
			);
		});
	};

	const displayResults = () => {
		if (term === '') {
			return '';
		} else if (searchResults.length === 0) {
			return 'no results to display';
		} else {
			return renderArticles();
		}
	};

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label className="label">Enter Search Term:</label>
					<input
						className="input"
						value={term !== '' ? term : ''}
						placeholder="Enter Search Term"
						onChange={(event) => {
							onTextChange(event);
						}}
					/>
				</div>
			</div>
			<div className="ui celled list">{displayResults()}</div>
		</div>
	);
};

export default Search;
