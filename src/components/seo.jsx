import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-meadata';

const SEO = ({ title, description, pathname, children }) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl,
		image,
		keywords,
	} = useSiteMetadata();
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
		image,
		keywords,
	};
	return (
		<>
			<title>{seo.title}</title>
			<meta
				name='description'
				content={seo.description}
			/>
			<meta
				name='keywords'
				content={seo.keywords}
			/>
			{children}
		</>
	);
};

export default SEO;
