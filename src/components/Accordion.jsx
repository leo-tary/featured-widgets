import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const expandList = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="ui styled accordion">
			{items.map((item, index) => {
				const active = index === activeIndex ? 'active' : '';
				return (
					<React.Fragment key={index}>
						<div
							className={`${active} title`}
							onClick={() => {
								expandList(index);
							}}
						>
							<i className="dropdown icon"></i>
							{item.title}
						</div>
						<div className={`${active} content`}>
							<p>{item.content}</p>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Accordion;
