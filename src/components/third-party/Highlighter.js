import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, CardActions, Collapse, IconButton, Tooltip } from '@mui/material';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';
import reactElementToJSXString from 'react-element-to-jsx-string';

// project import
import SyntaxHighlight from 'utils/SyntaxHighlight';

// assets

import { AiOutlineCode as CodeOutlined } from 'react-icons/ai';
import { MdOutlineContentCopy as CopyOutlined } from 'react-icons/md';
// ==============================|| CLIPBOARD & HIGHLIGHTER   ||============================== //

const Highlighter = ({ children }) => {
	const [highlight, setHighlight] = useState(false);

	return (
		<Box sx={{ position: 'relative' }}>
			<CardActions
				sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}
			>
				<Box sx={{ display: 'flex', position: 'inherit', right: 0, top: 6 }}>
					<CopyToClipboard
						text={reactElementToJSXString(children, {
							showFunctions: true,
							maxInlineAttributesLineLength: 100,
						})}
					>
						<Tooltip
							title='Copy the source'
							placement='top-end'
						>
							<IconButton
								color='secondary'
								size='small'
								sx={{ fontSize: '0.875rem' }}
							>
								<CopyOutlined />
							</IconButton>
						</Tooltip>
					</CopyToClipboard>
					<Tooltip
						title='Show the source'
						placement='top-end'
					>
						<IconButton
							sx={{ fontSize: '0.875rem' }}
							size='small'
							color={highlight ? 'primary' : 'secondary'}
							onClick={() => setHighlight(!highlight)}
						>
							<CodeOutlined />
						</IconButton>
					</Tooltip>
				</Box>
			</CardActions>
			<Collapse in={highlight}>
				{highlight && (
					<SyntaxHighlight>
						{reactElementToJSXString(children, {
							showFunctions: true,
							showDefaultProps: false,
							maxInlineAttributesLineLength: 100,
						})}
					</SyntaxHighlight>
				)}
			</Collapse>
		</Box>
	);
};

Highlighter.propTypes = {
	children: PropTypes.node,
};

export default Highlighter;
