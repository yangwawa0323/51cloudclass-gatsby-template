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
	const { label, variant, selectArray } = props;
	const location = useLocation();

	var query = new URLSearchParams(location.search);
	const [value, setValue] = useState<string>(
		query.get(variant)
			? query.get(variant)!
			: selectArray.includes('None')
			? 'None'
			: selectArray.includes('Default')
			? 'Default'
			: selectArray[0]
	);
	debugLog(variant, query.get(variant), value);

	const handleChange = (e: SelectChangeEvent<string>): void => {
		setValue(e.target.value);
		debugLog(variant, e.target.value);

		// 1. get url parameter
		query = new URLSearchParams(location.search);
		// 2. replace the specific parameter

		if (query.has(variant)) {
			query.set(variant, e.target.value);
		} else {
			query.append(variant, e.target.value);
		}

		const path = `${location.pathname}?${query.toString()}`;
		// 3. navigate the new url
		navigate(path);
	};
	return (
		<div>
			<FormGroup className='grid grid-cols-4 items-center'>
				<InputLabel className='flex items-start'>{label}</InputLabel>
				<Select
					className='col-span-3'
					value={value}
					size='small'
					onChange={handleChange}
				>
					{selectArray.map((s, idx) => (
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
