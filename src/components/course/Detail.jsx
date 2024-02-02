import React from 'react';
import Frame from '../frame';
import BoostSection from './Boost';
import { graphql } from 'gatsby';

export const query = graphql`
	query ($uuid: String) {
		course(id: { eq: $uuid }) {
			name
			chapters {
				name
				id
				order_index
			}
		}
	}
`;

// In gatsby graphql inject to props.data
const Detail = (props) => {
	const { data } = props;
	console.log('In Detail : ', data);
	return (
		<Frame>
			<BoostSection course={data.course} />
		</Frame>
	);
};

export default Detail;
