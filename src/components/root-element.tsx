/** @format */

// src/components/root-element.js

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type RootElementProps = {
	children: React.ReactNode;
};

const RootElement = ({ children }: RootElementProps) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default RootElement;
