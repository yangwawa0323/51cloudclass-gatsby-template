import React from 'react';
import Frame from '../frame';
import CourseBoostSection from './Boost';
import { graphql } from 'gatsby';
import SEO from '../seo';
import { debugLog } from '../../utilities/utils';

export const query = graphql`
	query ($uuid: String) {
		course(id: { eq: $uuid }) {
			name
			description
			image
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
	debugLog(data.course);
	return (
		<Frame>
			<CourseBoostSection course={data.course} />
		</Frame>
	);
};

export default Detail;

export const Head = ({ pageContext }) => <SEO title={pageContext.title} />;
