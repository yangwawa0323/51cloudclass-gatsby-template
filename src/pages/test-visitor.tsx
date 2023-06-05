/** @format */

import React from 'react';
import type { PageProps } from 'gatsby';
import LastVisitedWrapper from '../components/LastVisited';

const TestVisitor = (props: PageProps) => {
	return (
		<div>
			<LastVisitedWrapper {...props}>TestVisitor</LastVisitedWrapper>
		</div>
	);
};

export default TestVisitor;
