/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FcSearch } from 'react-icons/fc';
import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	FormLabel,
	Input,
	InputAdornment,
	Radio,
	RadioGroup,
	Tooltip,
	Typography,
} from '@mui/material';

import { debugLog, getAxios } from '51cloudclass-utilities/src/utils';
import { Link } from 'gatsby';

import SimpleBarScroll from './common/SimpleBar';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useLocation } from '@reach/router';
import { useGlobalContext } from '../../wrap-with-provider';

type FrameProps = {
	location: any;
	children: React.ReactNode;
	noFooter: boolean;
};

const Frame = ({ children, noFooter = false }: FrameProps) => {
	const [showResult, setShowResult] = useState(false);

	useEffect(() => {
		scrollTo('#frame-top');
	}, []);

	const handleSearchClick = () => {
		setShowResult((prev) => !prev);
	};

	return (
		<div id='frame-top'>
			<Header />

			<main className='w-full flex flex-col items-center relative'>
				<div className='flex hover:animate-none animate-bounce hover:opacity-100 duration-1000 justify-end w-screen sticky top-20 mr-20 z-50'>
					<div
						style={{ display: showResult ? 'none' : 'block' }}
						role='button'
						onClick={handleSearchClick}
					>
						<FcSearch size='4em' />
					</div>
				</div>
				{children}
			</main>
			<SearchingDialog {...{ showResult, setShowResult }} />
			{noFooter || <Footer />}
		</div>
	);
};

export default Frame;
const axiosInstance = getAxios();

const SearchingDialog = (props) => {
	const [keyword, setKeyword] = useState('');
	const [searchResult, setSearchResult] = useState();
	const [searchRange, setSearchRange] = useState('site');

	const location = useLocation();
	const { chapter } = useGlobalContext();
	debugLog('chapter: ', chapter);
	const isChapterListPage = useCallback(
		() => /\/chapters/.test(location.pathname),
		[location.path]
	);
	/**********************************************************
	 * searchResultByKeyword get request from api server
	 * /api/search?keyword=xxxx
	 */
	const searchResultByKeyword = async () => {
		const course_id = chapter?.course_id || 99999;
		if (keyword.length >= 2) {
			let url = `${process.env.GATSBY_API_SERVER}/search?keyword=${keyword}&range=${searchRange}&course_id=${course_id}`;
			await axiosInstance
				.get(url)
				.then((response) => setSearchResult(response.data))
				.catch((e) => console.log(e));
		}
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.currentTarget.value);
		setSearchResult(null);
	};

	const handleChooseSearchRange = (e) => {
		setSearchRange(e.target.value);
	};

	const emphasis = (title: string, keyword: string) => {
		let regexp = new RegExp(`(.*)(${keyword})(.*)`, 'i');
		let matches = title.match(regexp) || ['', '', '', ''];

		return (
			<>
				{matches[1].length > 0 && <span>{matches[1]}</span>}
				<span className='font-bold text-purple-400'>{matches[2]}</span>
				<span>{matches[3]}</span>
			</>
		);
	};

	const handleSearchKeyword = async () => {
		await searchResultByKeyword();
	};

	return (
		<Dialog
			fullWidth
			open={props.showResult}
			maxWidth='sm'
			onClose={() => props.setShowResult(false)}
		>
			<DialogTitle className='py-1 px-4'>
				<Typography
					variant='body2'
					className='inline-block'
				>
					搜课程 找到
				</Typography>
				{'   '}
				<Typography
					variant='body2'
					className='inline-block text-purple-500'
				>
					{/* (isFetched && */ searchResult?.result?.records?.length || 0}
				</Typography>
				{'   '}
				<Typography
					variant='body2'
					className='inline-block'
				>
					条记录
				</Typography>
			</DialogTitle>
			<DialogContent className='overflow-y-hidden flex justify-center items-center  flex-col px-10 py-6 rounded-md bg-slate-200 shadow-lg'>
				<Box>
					<FormControl
						sx={{
							m: 1,
							display: props.showResult ? 'block' : 'none',
						}}
						variant='standard'
					>
						<Input
							onChange={handleOnChange}
							className='text-purple-500'
							placeholder='请输入搜索条件'
							endAdornment={
								<InputAdornment position='end'>
									<FcSearch
										className='cursor-pointer opacity-40 hover:opacity-100 hover:animate-none animate-bounce'
										size='2em'
										onClick={handleSearchKeyword}
									/>
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl className='flex gap-4 !flex-row justify-center items-center'>
						<FormLabel className='text-[12px]'>搜索范围</FormLabel>
						<RadioGroup
							onChange={handleChooseSearchRange}
							defaultValue='site'
							name='searching-range'
							className='flex !flex-row'
							sx={{
								'& .MuiFormControlLabel-label': {
									fontSize: '12px',
								},
							}}
						>
							<FormControlLabel
								value='course'
								control={
									<Radio
										disabled={!isChapterListPage()}
										size='small'
									/>
								}
								label='课程内'
							/>
							<FormControlLabel
								value='site'
								control={<Radio size='small' />}
								label='全站内'
							/>
						</RadioGroup>
					</FormControl>
				</Box>
				{/* {isLoading && <div>Loading...</div>} */}
				<Box className='w-full'>
					{
						/* {isFetched && */
						// !searchResult &&
						(searchResult?.result?.records === null ||
							searchResult?.result?.records.length === 0) && (
							<Typography variant='caption'>
								没有找到`{keyword}`相关课程
							</Typography>
						)
					}
					<SimpleBarScroll sx={{ maxHeight: 360 }}>
						{searchResult?.result?.records?.map((sr, index) => (
							<Link
								to={sr.uri}
								key={index}
							>
								<Tooltip
									followCursor
									placement='top'
									title='点击查看视频'
								>
									<div className='font-light text-sm'>
										<span className='text-gray-400 leading-6'>
											{sr.type === 2 ? '【课程】' : '【章节】'}
										</span>{' '}
										{emphasis(sr.title, keyword)}
										<br />
									</div>
								</Tooltip>
							</Link>
						))}
					</SimpleBarScroll>
				</Box>
			</DialogContent>
		</Dialog>
	);
};
