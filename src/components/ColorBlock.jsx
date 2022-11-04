import React from 'react'

const ColorBlock = (props) => {
	const { text } = props;
	
	return (
		<div className="color-block" style={{ backgroundColor: `var(--${ text.toLowerCase().replace(/ /, '-')})`}}>
			<div>
				<h3>{text}</h3>
			</div>
			<div>
				<h3>{ text.toLowerCase().replace(/ /, '-') }</h3>
			</div>
		</div>
	)
}

export default ColorBlock