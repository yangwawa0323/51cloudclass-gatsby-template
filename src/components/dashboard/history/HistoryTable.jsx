import React from 'react';

import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Typography,
	TableContainer,
	Table,
	TableRow,
	TableBody,
	TableCell,
} from '@mui/material';

import { Link } from 'gatsby';
import {
	StyledGridItem,
	StyledTableHead,
	StyledTableHeadCell,
} from '../../utils/StyledMain';

import SimpleBarScroll from '../../common/SimpleBar';
import { useQuery } from '@tanstack/react-query';
import { getAxios } from '51cloudclass-utilities/src/utils';

import momentAgo from 'moment-ago';
import Loading from '../../Loading';
import { useState } from 'react';
import { decryptJWE2JSON } from '../../../utils/jwe-decrypt';

/*************************************************************
 * the data has been encrypted by JWE
 **************************************************************/

const HistoryTable = () => {
	const [histories, setHistories] = useState(null);
	const fetchHistories = async () => {
		const axiosInstance = getAxios();
		let url = `${process.env.GATSBY_API_SERVER}/history/`;
		return await axiosInstance
			.get(url)
			.then((response) => decryptJWE2JSON(response.data.result.encrypted));
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['fetch-history'],
		queryFn: () => fetchHistories(),
	});

	if (isLoading) return <Loading />;
	if (isError) return <div>Error</div>;

	return (
		<Card
			variant='outlined'
			sx={{ height: '90vh' }}
		>
			<CardHeader
				title={<Typography variant='subtitle1'>学习记录</Typography>}
			/>
			<Divider />
			<CardContent
				sx={{
					'&.MuiCardContent-root': { paddingX: 'unset' },
				}}
			>
				<Grid
					container
					spacing={'32px'}
				>
					<Grid
						item
						xs={12}
					>
						<Grid
							container
							spacing={1}
							direction='row'
							display='flex'
							justifyContent='space-around'
						>
							<StyledGridItem>
								<Typography
									variant='subtitle2'
									color='secondary'
								>
									总浏览
								</Typography>
								<Typography variant='h4'>569</Typography>
							</StyledGridItem>
							<StyledGridItem>
								<Typography
									variant='subtitle2'
									color='secondary'
								>
									昨日浏览
								</Typography>
								<Typography variant='h4'>66</Typography>
							</StyledGridItem>
							<StyledGridItem>
								<Typography
									variant='subtitle2'
									color='secondary'
								>
									本周浏览
								</Typography>
								<Typography variant='h4'>122</Typography>
							</StyledGridItem>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<SimpleBarScroll style={{ maxHeight: 'calc(80vh - 60px)' }}>
							<TableContainer>
								<Table aria-label='simple table'>
									<StyledTableHead>
										<TableRow>
											{/* <StyledTableHeadCell>标题</StyledTableHeadCell> */}
											<StyledTableHeadCell>URI</StyledTableHeadCell>
											<StyledTableHeadCell>时间</StyledTableHeadCell>
										</TableRow>
									</StyledTableHead>
									<TableBody>
										{data.result.histories?.map((hist, index) => (
											<TableRow key={hist.ID}>
												{/* <TableCell>
													<Avatar src={hist.user.avatar_url}></Avatar>
												</TableCell> */}
												<TableCell>
													<Link to={`${hist.uri}`}>{`${hist.title}`}</Link>
												</TableCell>
												<TableCell>
													{momentAgo(new Date(hist.CreatedAt)).ago()}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</SimpleBarScroll>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default HistoryTable;
