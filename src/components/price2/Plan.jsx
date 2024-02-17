/**
 * Media query is OK.
 *
 * @format
 */

import * as React from 'react';
import { CloseCircleFilled, CloseCircleOutlined } from '@ant-design/icons';
import { MdOutlineCheckCircle } from 'react-icons/md';

const PlanSection = () => {
	return (
		<div className='flex flex-col mb-12 bg-white justify-center items-center gap-20 pt-50 px-24 pb-0 z-10'>
			<div className='flex flex-col gap-4 h-min max-w-[460px] overflow-hidden'>
				<div>
					<p className='uppercase font-extrabold'>包月/包年/终身会员</p>
				</div>
				<div>
					<h2 className='font-bold'>选择学习会员套餐</h2>
				</div>
			</div>
			<div className='flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
				<div className='free-icons-wrap1 cursor-pointer flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
					<div className='gradient-background xl:flex-row xl:gap-48 flex lg:flex-col gap-5'>
						<div className='flex flex-col h-min gap-1'>
							<div>
								<p className='uppercase text-purple-600 font-extrabold'>
									基础套餐
								</p>
							</div>
							<h3>51元/包月</h3>
						</div>
						<div className='free-icons  text-purple-700 flex flex-row flex-wrap  gap-4 h-min justify-start'>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>不限科目</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>答题自测</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>站内短信51条</h5>
								</div>
							</div>
							<div>
								<div>
									<CloseCircleOutlined className='text-xl' />
								</div>
								<div>
									<h5>导出PDF考试卷</h5>
								</div>
							</div>
							<div>
								<div>
									<CloseCircleOutlined className='text-xl' />
								</div>
								<div>
									<h5>学习记录查询</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='free-icons-wrap2 lg:-translate-y-8 cursor-pointer flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
					<div className='gradient-background xl:flex-row xl:gap-48  flex lg:flex-col gap-5'>
						<div className='flex flex-col h-min gap-1'>
							<div>
								<p className='uppercase text-white font-extrabold'>
									大多数人的选择
								</p>
							</div>

							<div>
								<p className='text-yellow-100 text-4xl'>510元/包年大会员</p>
							</div>
						</div>
						<div className='free-icons  text-white flex flex-row flex-wrap  gap-4 h-min justify-start'>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>不限科目</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>答题自测</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>站内短信每月251条</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>导出PDF自测题</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>完整学习记录</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>自定义avatar上传</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='free-icons-wrap3 cursor-pointer md:translate-x-1/2 lg:-translate-x-0 flex flex-col hover:opacity-60 duration-1000 gap-3 rounded-2xl shadow-lg border-[1px] border-gray-200'>
					<div className='gradient-background xl:flex-row xl:gap-48  flex lg:flex-col gap-5'>
						<div>
							<div>
								<p className='font-extrabold uppercase'>VIP</p>
							</div>
							<div className='flex flex-row'>
								<p className='text-4xl'>951元/终生会员</p>
							</div>
						</div>
						<div className='free-icons text-white flex flexrow flex-wrap gap-4 h-min justify-start'>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>不限科目</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>自定义学习答题模式</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>不限站内短信数量</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>更新课程站内短信通知</h5>
								</div>
							</div>
							<div>
								<div>
									<MdOutlineCheckCircle className='text-2xl' />
								</div>
								<div>
									<h5>平台提问留言</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanSection;
