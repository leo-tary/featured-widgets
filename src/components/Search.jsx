import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import wikipedia from '../services/wikipedia';

const Search = () => {
	const [term, setTerm] = useState('');
    const [ searchResults , setSearchResults ] = useState([]);

	const onTextChange = (event) => {
		// console.log(event.target.value);
		setTerm(event.target.value);
	};

    // console.log("Runs with every render");

    useEffect(() => {
        // console.log("I Too Run With Every Render");

        const search = async () => {
            const response = await wikipedia.get("" , {
                params:{
                    srsearch:term
                }
            })
            console.log(response.data.query.search);
            // setSearchResults(response.data.query);
            // if(response.data.query !== undefined) {
            //     setSearchResults(response.data.query);
            // }
        }
        if(term) {
            search();
        }
        
    } , [term])

    const renderArticles = () => {
        return searchResults.map((article) => {
            return (
                <div key={article.pageid}>
                    <div>{article.title}</div>
                </div>
            )
        })
    }

    const displayResults = () => {

        if(term === '') {
            return "";
        }else if(searchResults.length === 0) {

            return "no results to display";

        }else {
            return renderArticles();
        }

    }


	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term:</label>
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
            {
                displayResults()
            }
		</div>
	);
};

export default Search;
