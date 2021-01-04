import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
	// console.log(options);

	useEffect(() => {
		document.body.addEventListener(
			'click',
			(event) => {
                if(ref.current && ref.current.contains(event.target)) {
                    return;
                }
				setOpen(false);
			},
			{ capture: true }
		);
	}, []);

	const renderedOptions = options.map((option) => {
		if (selected !== null && option.value === selected.value) {
			return null;
		}
		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Select a color</label>
				<div
					onClick={() => {
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{ selected === null ? 'Select a color' : selected.label }</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
