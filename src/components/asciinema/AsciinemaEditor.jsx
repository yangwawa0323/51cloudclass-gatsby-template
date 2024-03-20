/** @format */

import Editor from '@react-page/editor';

import React from 'react';
import { baseCellPlugins } from '../../plugins/cellPlugins';
import PropTypes from 'prop-types';
import _ from 'lodash';
import '../../styles/pages/_reactpage.scss';

/**
 * IMPORTANT! IMPORTANT! IMPORTANT!
 *  Anywhere to use the AsciinemaEditor component must wrapper the @emotion/cache at top level
 *
 * For example:
 * import EmotionCacheWrapper from "../../utils/Cache";
 * import { CssBaseline } from "@mui/material";
 * import "@react-page/editor/lib/index.css";
 *
 * return (
 * <EmotionCacheWrapper >
 *   <CssBaseline />
 * </EmotionCacheWrapper />
 * )
 *
 */

const AsciinemaEditor = ({ readOnly, initialValue, onChange, ...options }) => {
	const [value, setValue] = React.useState(initialValue || null);

	const handleChange = (data) => {
		setValue(data);
		onChange && onChange();
	};
	return (
		<div className='react-page-editor-container'>
			<Editor
				cellPlugins={baseCellPlugins}
				value={initialValue || value}
				onChange={handleChange}
				readOnly={readOnly}
				{...options}
			/>
		</div>
	);
};

AsciinemaEditor.prototype = {
	mode: PropTypes.string,
	initialValue: PropTypes.object,
	onChange: PropTypes.func,
};

export default AsciinemaEditor;
