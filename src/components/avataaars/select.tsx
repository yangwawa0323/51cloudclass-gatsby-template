import React, { useState } from 'react';

import { useLocation } from '@reach/router';

import { debugLog } from '51cloudclass-utilities/src/utils';
import {
	FormGroup,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { navigate } from 'gatsby';
type StyleSelectProps = {
	label: string;
	variant: string;
	selectArray: Array<string>;
};

const StyleSelect: React.FC<StyleSelectProps> = (props: StyleSelectProps) => {
	const [value, setValue] = useState<string>(props.selectArray[0]);

	const location = useLocation();

	const handleChange = (e: SelectChangeEvent<string>): void => {
		setValue(e.target.value);
		debugLog(props.variant, e.target.value);

		// 1. get url parameter
		const query = new URLSearchParams(location.search);
		// 2. replace the specific parameter

		if (query.has(props.variant)) {
			query.set(props.variant, e.target.value);
		} else {
			query.append(props.variant, e.target.value);
		}

		const path = `${location.pathname}?${query.toString()}`;
		// 3. navigate the new url
		navigate(path);
	};
	return (
		<div>
			<FormGroup className='grid grid-cols-4 items-center'>
				<InputLabel className='flex items-start'>{props.label}</InputLabel>
				<Select
					className='col-span-3'
					value={value}
					size='small'
					onChange={handleChange}
				>
					{props.selectArray.map((s, idx) => (
						<MenuItem
							key={idx}
							value={s}
						>
							{s}
						</MenuItem>
					))}
				</Select>
			</FormGroup>
		</div>
	);
};

export default StyleSelect;
