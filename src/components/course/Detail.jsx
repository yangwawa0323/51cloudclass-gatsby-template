import React from 'react';
import Frame from '../frame';
import BoostSection from './Boost';
import { graphql } from 'gatsby';
import { debugLog } from '51cloudclass-utilities/src/utils';

export const query = graphql`
	query ($uuid: String) {
		course(id: { eq: $uuid }) {
			name
			chapters {
				name
				id
			}
		}
	}
`;

const Detail = (props) => {
	const { data } = props;

	debugLog(`course detail: `, data);
	return (
		<Frame>
			<BoostSection course={data.course} />
		</Frame>
	);
};

export default Detail;
