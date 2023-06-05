/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useState } from 'react';
import Card from '../components/warnings/card';

const SystemAdminContainer = () => {
	return (
		<div
			style={{
				margin: 0,
				blockSize: '363px',
				borderBlockEndColor: 'rgb(105, 105, 123)',
				borderBlockStartColor: 'rgb(105, 105, 123)',
				borderBottomColor: 'rgb(105, 105, 123)',
				borderInlineEndColor: 'rgb(105, 105, 123)',
				borderInlineStartColor: 'rgb(105, 105, 123)',
				borderLeftColor: 'rgb(105, 105, 123)',
				borderRightColor: 'rgb(105, 105, 123)',
				borderTopColor: 'rgb(105, 105, 123)',
				bottom: '0px',
				boxSizing: 'border-box',
				caretColor: 'rgb(105, 105, 123)',
				color: 'rgb(105, 105, 123)',
				columnRuleColor: 'rgb(105, 105, 123)',
				display: 'inline-block',
				fontFamily: 'Jakarta Display, sans-serif',
				fontSize: '18px',
				inlineSize: '1017px',
				insetBlockEnd: '0px',
				insetBlockStart: '0px',
				insetInlineEnd: '0px',
				insetInlineStart: '0px',
				left: '0px',
				lineHeight: '30.006px',
				outlineColor: 'rgb(105, 105, 123)',
				position: 'relative',
				right: '0px',
				textAlign: 'left',
				textDecoration: 'none solid rgb(105, 105, 123)',
				textDecorationColor: 'rgb(105, 105, 123)',
				textEmphasisColor: 'rgb(105, 105, 123)',
				textSizeAdjust: '100%',
				top: '0px',
				transitionDuration: '0.5s',
				transitionProperty: 'transform',
				verticalAlign: 'top',
				WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
				WebkitTextFillColor: 'rgb(105, 105, 123)',
				WebkitTextStrokeColor: 'rgb(105, 105, 123)',
				width: '1017px',
			}}
			className={'slide w-slide'}
			aria-label={'2 of 3'}
			role={'group'}
		>
			<div
				style={{
					alignItems: 'center',
					blockSize: '363px',

					color: 'rgb(105, 105, 123)',

					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'Jakarta Display, sans-serif',
					fontSize: '18px',
					inlineSize: '1017px',
					justifyContent: 'center',
					lineHeight: '30.006px',
					marginLeft: 0,
					marginRight: 0,
					outlineColor: 'rgb(105, 105, 123)',
					padding: '62px',
					textAlign: 'center',
					textDecoration: 'none solid rgb(105, 105, 123)',
					textDecorationColor: 'rgb(105, 105, 123)',
					textEmphasisColor: 'rgb(105, 105, 123)',
					textSizeAdjust: '100%',
					WebkitBoxAlign: 'center',
					WebkitBoxOrient: 'vertical',
					WebkitBoxPack: 'center',
				}}
				className={'slide-wrapper'}
			>
				<img
					style={{
						blockSize: '69px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '69px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(105, 105, 123)',
						textAlign: 'center',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						verticalAlign: 'middle',
						WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						width: '69px',
						height: '69px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/60a6a04f011f01cedbe2ef5b_icon-slider-02-academy-template.svg'
					}
					alt={'Analytics - Academy Webflow Template'}
				></img>
				<h3
					style={{
						blockSize: '34px',
						borderBlockEndColor: 'rgb(11, 11, 44)',
						borderBlockStartColor: 'rgb(11, 11, 44)',
						borderBottomColor: 'rgb(11, 11, 44)',
						borderInlineEndColor: 'rgb(11, 11, 44)',
						borderInlineStartColor: 'rgb(11, 11, 44)',
						borderLeftColor: 'rgb(11, 11, 44)',
						borderRightColor: 'rgb(11, 11, 44)',
						borderTopColor: 'rgb(11, 11, 44)',
						boxSizing: 'border-box',
						caretColor: 'rgb(11, 11, 44)',
						color: 'rgb(11, 11, 44)',
						columnRuleColor: 'rgb(11, 11, 44)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '25px',
						fontWeight: 500,
						inlineSize: '203.125px',
						letterSpacing: '0.25px',
						lineHeight: '34px',
						marginBlockEnd: '20px',
						marginBlockStart: '16px',
						marginBottom: '20px',
						marginLeft: 0,
						marginRight: 0,
						marginTop: '16px',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(11, 11, 44)',
						textAlign: 'center',
						textDecoration: 'none solid rgb(11, 11, 44)',
						textDecorationColor: 'rgb(11, 11, 44)',
						textEmphasisColor: 'rgb(11, 11, 44)',
						textSizeAdjust: '100%',
						WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
						WebkitTextFillColor: 'rgb(11, 11, 44)',
						WebkitTextStrokeColor: 'rgb(11, 11, 44)',
					}}
				>
					2. Help you Grow
				</h3>
				<p
					style={{
						blockSize: '90px',

						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '671px',
						lineHeight: '30.006px',

						outlineColor: 'rgb(105, 105, 123)',
						textAlign: 'center',
					}}
					className={'paragraph slide'}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis cursus
					turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
					blandit vitae ut volutpat nunc nascetur varius. Sit felis sed sem
					duis.
				</p>
			</div>
		</div>
	);
};

const FullStackDeveloper = () => {
	return (
		<div
			style={{
				margin: 0,
				blockSize: '385px',

				bottom: '0px',
				boxSizing: 'border-box',
				caretColor: 'rgb(105, 105, 123)',
				color: 'rgb(105, 105, 123)',
				columnRuleColor: 'rgb(105, 105, 123)',
				display: 'inline-block',
				fontFamily: 'Jakarta Display, sans-serif',
				fontSize: '18px',
				inlineSize: '1017px',
				insetBlockEnd: '0px',
				insetBlockStart: '0px',
				insetInlineEnd: '0px',
				insetInlineStart: '0px',
				left: '0px',
				lineHeight: '30.006px',
				outlineColor: 'rgb(105, 105, 123)',
				position: 'relative',
				right: '0px',
				textAlign: 'left',
				textDecoration: 'none solid rgb(105, 105, 123)',
				textDecorationColor: 'rgb(105, 105, 123)',
				textEmphasisColor: 'rgb(105, 105, 123)',
				textSizeAdjust: '100%',
				top: '0px',
				transitionDuration: '0.5s',
				transitionProperty: 'transform',
				verticalAlign: 'top',
				WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
				WebkitTextFillColor: 'rgb(105, 105, 123)',
				WebkitTextStrokeColor: 'rgb(105, 105, 123)',
				width: '1017px',
			}}
			className={'slide w-slide'}
			aria-label={'3 of 3'}
			role={'group'}
		>
			<div
				style={{
					alignItems: 'center',
					blockSize: '385px',

					boxSizing: 'border-box',
					caretColor: 'rgb(105, 105, 123)',
					color: 'rgb(105, 105, 123)',
					columnRuleColor: 'rgb(105, 105, 123)',
					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'Jakarta Display, sans-serif',
					fontSize: '18px',
					inlineSize: '1017px',
					justifyContent: 'center',
					lineHeight: '30.006px',
					marginLeft: 0,
					marginRight: 0,
					outlineColor: 'rgb(105, 105, 123)',
					paddingBlockEnd: '62px',
					paddingBlockStart: '62px',
					paddingBottom: '62px',
					paddingTop: '62px',
					textAlign: 'center',
				}}
				className={'slide-wrapper'}
			>
				<img
					style={{
						blockSize: '91px',

						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '76px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(105, 105, 123)',
						textAlign: 'center',

						width: '76px',
						height: '91px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/60a6a243287434060d99491e_icon-slider-03-academy-template.svg'
					}
					alt={'Mentorship - Academy Webflow Template'}
				></img>
				<h3
					style={{
						blockSize: '34px',
						borderBlockEndColor: 'rgb(11, 11, 44)',
						borderBlockStartColor: 'rgb(11, 11, 44)',
						borderBottomColor: 'rgb(11, 11, 44)',
						borderInlineEndColor: 'rgb(11, 11, 44)',
						borderInlineStartColor: 'rgb(11, 11, 44)',
						borderLeftColor: 'rgb(11, 11, 44)',
						borderRightColor: 'rgb(11, 11, 44)',
						borderTopColor: 'rgb(11, 11, 44)',
						boxSizing: 'border-box',
						caretColor: 'rgb(11, 11, 44)',
						color: 'rgb(11, 11, 44)',
						columnRuleColor: 'rgb(11, 11, 44)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '25px',
						fontWeight: 500,
						inlineSize: '256.578px',
						letterSpacing: '0.25px',
						lineHeight: '34px',
						marginBlockEnd: '20px',
						marginBlockStart: '16px',
						marginBottom: '20px',
						marginLeft: 0,
						marginRight: 0,
						marginTop: '16px',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(11, 11, 44)',
						textAlign: 'center',
					}}
				>
					3. Grow a Community
				</h3>
				<p
					style={{
						blockSize: '90px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '671px',
						lineHeight: '30.006px',
						marginBlockEnd: '10px',
						marginBlockStart: '0px',
						marginBottom: '10px',
						marginLeft: 0,
						marginRight: 0,
						marginTop: '0px',
						maxInlineSize: '671px',
						maxWidth: '671px',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(105, 105, 123)',
						textAlign: 'center',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
					}}
					className={'paragraph slide'}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis cursus
					turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
					blandit vitae ut volutpat nunc nascetur varius. Sit felis sed sem
					duis.
				</p>
			</div>
		</div>
	);
};

const Section = () => (
	<div
		style={{
			margin: 0,
			backgroundColor: 'rgb(52, 52, 255)',
			blockSize: '556.141px',
			borderBlockEndColor: 'rgb(105, 105, 123)',
			caretColor: 'rgb(105, 105, 123)',
			color: 'rgb(105, 105, 123)',
			columnRuleColor: 'rgb(105, 105, 123)',
			fontFamily: 'Jakarta Display, sans-serif',
			fontSize: '18px',
			lineHeight: '30.006px',
			outlineColor: 'rgb(105, 105, 123)',
			overflowX: 'hidden',
			overflowY: 'hidden',
		}}
		className='py-[102px] section testimonial wf-section w-full'
	>
		<div
			style={{
				blockSize: '352.141px',
				color: 'rgb(105, 105, 123)',
				columnRuleColor: 'rgb(105, 105, 123)',
				fontSize: '18px',
				inlineSize: '1209px',
				lineHeight: '30.006px',
				marginInlineEnd: '19.5px',
				marginInlineStart: '19.5px',
				marginLeft: 'auto',
				marginRight: 'auto',
				maxInlineSize: '1209px',
				outlineColor: 'rgb(105, 105, 123)',
				paddingInlineEnd: '24px',
				paddingInlineStart: '24px',
				paddingLeft: '24px',
				paddingRight: '24px',
				textDecoration: 'none solid rgb(105, 105, 123)',
				textDecorationColor: 'rgb(105, 105, 123)',
				textEmphasisColor: 'rgb(105, 105, 123)',
				textSizeAdjust: '100%',
				WebkitTextFillColor: 'rgb(105, 105, 123)',
				WebkitTextStrokeColor: 'rgb(105, 105, 123)',
			}}
			className={'container-default-1209px w-container'}
		>
			<div
				style={{
					alignItems: 'center',
					blockSize: '352.141px',
					color: 'rgb(105, 105, 123)',
					display: 'flex',
					fontSize: '18px',
					inlineSize: '1161px',
					insetBlockEnd: '0px',
					insetBlockStart: '0px',
					insetInlineEnd: '0px',
					insetInlineStart: '0px',
					justifyContent: 'space-between',
					left: '0px',
					lineHeight: '30.006px',
					marginLeft: 0,
					marginRight: 0,
					outlineColor: 'rgb(105, 105, 123)',
					position: 'relative',
					right: '0px',
					textDecoration: 'none solid rgb(105, 105, 123)',
					textDecorationColor: 'rgb(105, 105, 123)',
					textEmphasisColor: 'rgb(105, 105, 123)',
					textSizeAdjust: '100%',
					top: '0px',
					WebkitBoxAlign: 'center',
					WebkitBoxPack: 'justify',
					WebkitTextFillColor: 'rgb(105, 105, 123)',
					WebkitTextStrokeColor: 'rgb(105, 105, 123)',
				}}
				className={'testimonial-wrapper'}
			>
				<div
					style={{
						blockSize: '348.984px',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '580.5px',
						insetBlockEnd: '0px',
						insetBlockStart: '0px',
						insetInlineEnd: '0px',
						insetInlineStart: '0px',
						left: '0px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '50%',
						maxWidth: '50%',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(105, 105, 123)',
						position: 'relative',
						right: '0px',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						top: '0px',
						transform: 'matrix(1, 0, 0, 1, 0, 0)',
						transformOrigin: '290.25px 174.492px',
						transformStyle: 'preserve-3d',
						zIndex: 1,
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
					}}
					data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371e7'}
					className={'split-content testimonial-left'}
				>
					<h2
						style={{
							blockSize: '96px',
							borderBlockEndColor: 'rgb(255, 255, 255)',
							borderBlockStartColor: 'rgb(255, 255, 255)',
							borderInlineEndColor: 'rgb(255, 255, 255)',
							borderInlineStartColor: 'rgb(255, 255, 255)',
							borderLeftColor: 'rgb(255, 255, 255)',
							borderRightColor: 'rgb(255, 255, 255)',
							borderTopColor: 'rgb(255, 255, 255)',
							boxSizing: 'border-box',
							caretColor: 'rgb(255, 255, 255)',
							color: 'rgb(255, 255, 255)',
							columnRuleColor: 'rgb(255, 255, 255)',
							fontFamily: 'Jakarta Display, sans-serif',
							fontSize: '40px',
							fontWeight: 500,
							inlineSize: '580.5px',
							letterSpacing: '0.4px',
							lineHeight: '48px',
							marginBlockEnd: '15px',
							marginBlockStart: '0px',
							marginBottom: '15px',
							marginLeft: 0,
							marginRight: 0,
							marginTop: '0px',
							outlineColor: 'rgb(255, 255, 255)',
							textDecoration: 'none solid rgb(255, 255, 255)',
							textDecorationColor: 'rgb(255, 255, 255)',
							textEmphasisColor: 'rgb(255, 255, 255)',
							textSizeAdjust: '100%',
							WebkitTextFillColor: 'rgb(255, 255, 255)',
							WebkitTextStrokeColor: 'rgb(255, 255, 255)',
						}}
						className={'title testimonial'}
					>
						Academy helped me to learn the skills to land my dream job.
					</h2>
					<p
						style={{
							blockSize: '90px',
							borderBlockEndColor: 'rgb(255, 255, 255)',
							borderBlockStartColor: 'rgb(255, 255, 255)',
							borderBottomColor: 'rgb(255, 255, 255)',
							borderInlineEndColor: 'rgb(255, 255, 255)',
							borderInlineStartColor: 'rgb(255, 255, 255)',
							borderLeftColor: 'rgb(255, 255, 255)',
							borderRightColor: 'rgb(255, 255, 255)',
							borderTopColor: 'rgb(255, 255, 255)',
							boxSizing: 'border-box',
							caretColor: 'rgb(255, 255, 255)',
							color: 'rgb(255, 255, 255)',
							columnRuleColor: 'rgb(255, 255, 255)',
							fontFamily: 'Jakarta Display, sans-serif',
							fontSize: '18px',
							inlineSize: '558px',
							lineHeight: '30.006px',
							marginBlockEnd: '0px',
							marginBlockStart: '0px',
							marginBottom: '0px',
							marginLeft: 0,
							marginRight: 0,
							marginTop: '0px',
							maxInlineSize: '558px',
							maxWidth: '558px',
							outlineColor: 'rgb(255, 255, 255)',
							textDecoration: 'none solid rgb(255, 255, 255)',
							textDecorationColor: 'rgb(255, 255, 255)',
							textEmphasisColor: 'rgb(255, 255, 255)',
							textSizeAdjust: '100%',
							WebkitTextFillColor: 'rgb(255, 255, 255)',
							WebkitTextStrokeColor: 'rgb(255, 255, 255)',
						}}
						className={'paragraph testimonial'}
					>
						“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
						quisque integer elementum egestas aliquet tincidunt. Nunc mauris
						enim tortor libero viverra aenean. Portitor semper facilisi velit.”
					</p>
					<div
						style={{
							alignItems: 'center',
							blockSize: '19.9844px',
							borderBlockEndColor: 'rgb(105, 105, 123)',
							borderBlockStartColor: 'rgb(105, 105, 123)',
							borderBottomColor: 'rgb(105, 105, 123)',
							borderInlineEndColor: 'rgb(105, 105, 123)',
							borderInlineStartColor: 'rgb(105, 105, 123)',
							borderLeftColor: 'rgb(105, 105, 123)',
							borderRightColor: 'rgb(105, 105, 123)',
							borderTopColor: 'rgb(105, 105, 123)',
							boxSizing: 'border-box',
							caretColor: 'rgb(105, 105, 123)',
							color: 'rgb(105, 105, 123)',
							columnRuleColor: 'rgb(105, 105, 123)',
							display: 'flex',
							fontFamily: 'Jakarta Display, sans-serif',
							fontSize: '18px',
							inlineSize: '580.5px',
							lineHeight: '30.006px',
							marginBlockEnd: '48px',
							marginBlockStart: '24px',
							marginBottom: '48px',
							marginLeft: 0,
							marginRight: 0,
							marginTop: '24px',
							outlineColor: 'rgb(105, 105, 123)',
							textDecoration: 'none solid rgb(105, 105, 123)',
							textDecorationColor: 'rgb(105, 105, 123)',
							textEmphasisColor: 'rgb(105, 105, 123)',
							textSizeAdjust: '100%',
							WebkitBoxAlign: 'center',
							WebkitTextFillColor: 'rgb(105, 105, 123)',
							WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						}}
						className={'testimonial-about'}
					>
						<div
							style={{
								blockSize: '19.9844px',
								borderBlockEndColor: 'rgb(255, 255, 255)',
								borderBlockStartColor: 'rgb(255, 255, 255)',
								borderBottomColor: 'rgb(255, 255, 255)',
								borderInlineEndColor: 'rgb(255, 255, 255)',
								borderInlineStartColor: 'rgb(255, 255, 255)',
								borderLeftColor: 'rgb(255, 255, 255)',
								borderRightColor: 'rgb(255, 255, 255)',
								borderTopColor: 'rgb(255, 255, 255)',
								boxSizing: 'border-box',
								caretColor: 'rgb(255, 255, 255)',
								color: 'rgb(255, 255, 255)',
								columnRuleColor: 'rgb(255, 255, 255)',
								fontFamily: 'Jakarta Display, sans-serif',
								fontSize: '18px',
								fontWeight: 500,
								inlineSize: '109.531px',
								lineHeight: '19.998px',
								marginLeft: 0,
								marginRight: 0,
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(255, 255, 255)',
								textDecoration: 'none solid rgb(255, 255, 255)',
								textDecorationColor: 'rgb(255, 255, 255)',
								textEmphasisColor: 'rgb(255, 255, 255)',
								textSizeAdjust: '100%',
								WebkitTextFillColor: 'rgb(255, 255, 255)',
								WebkitTextStrokeColor: 'rgb(255, 255, 255)',
							}}
							className={'testimonial-name'}
						>
							Daniel Carter
						</div>
						<div
							style={{
								backgroundColor: 'rgb(255, 255, 255)',
								blockSize: '2px',
								borderBlockEndColor: 'rgb(105, 105, 123)',
								borderBlockStartColor: 'rgb(105, 105, 123)',
								borderBottomColor: 'rgb(105, 105, 123)',
								borderInlineEndColor: 'rgb(105, 105, 123)',
								borderInlineStartColor: 'rgb(105, 105, 123)',
								borderLeftColor: 'rgb(105, 105, 123)',
								borderRightColor: 'rgb(105, 105, 123)',
								borderTopColor: 'rgb(105, 105, 123)',
								boxSizing: 'border-box',
								caretColor: 'rgb(105, 105, 123)',
								color: 'rgb(105, 105, 123)',
								columnRuleColor: 'rgb(105, 105, 123)',
								fontFamily: 'Jakarta Display, sans-serif',
								fontSize: '18px',
								inlineSize: '18px',
								lineHeight: '30.006px',
								marginInlineEnd: '14px',
								marginInlineStart: '14px',
								marginLeft: '14px',
								marginRight: 0,
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(105, 105, 123)',
								textDecoration: 'none solid rgb(105, 105, 123)',
								textDecorationColor: 'rgb(105, 105, 123)',
								textEmphasisColor: 'rgb(105, 105, 123)',
								textSizeAdjust: '100%',
								WebkitTextFillColor: 'rgb(105, 105, 123)',
								WebkitTextStrokeColor: 'rgb(105, 105, 123)',
								width: '18px',
								height: '2px',
							}}
							className={'dash testimonial'}
						></div>
						<div
							style={{
								blockSize: '19.9844px',
								borderBlockEndColor: 'rgb(255, 255, 255)',
								borderBlockStartColor: 'rgb(255, 255, 255)',
								borderBottomColor: 'rgb(255, 255, 255)',
								borderInlineEndColor: 'rgb(255, 255, 255)',
								borderInlineStartColor: 'rgb(255, 255, 255)',
								borderLeftColor: 'rgb(255, 255, 255)',
								borderRightColor: 'rgb(255, 255, 255)',
								borderTopColor: 'rgb(255, 255, 255)',
								boxSizing: 'border-box',
								caretColor: 'rgb(255, 255, 255)',
								color: 'rgb(255, 255, 255)',
								columnRuleColor: 'rgb(255, 255, 255)',
								fontFamily: 'Jakarta Display, sans-serif',
								fontSize: '18px',
								inlineSize: '184.875px',
								lineHeight: '19.998px',
								marginLeft: 0,
								marginRight: 0,
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(255, 255, 255)',
								textDecoration: 'none solid rgb(255, 255, 255)',
								textDecorationColor: 'rgb(255, 255, 255)',
								textEmphasisColor: 'rgb(255, 255, 255)',
								textSizeAdjust: '100%',
								WebkitTextFillColor: 'rgb(255, 255, 255)',
								WebkitTextStrokeColor: 'rgb(255, 255, 255)',
							}}
							className={'testimonial-work'}
						>
							Developer at Webflow
						</div>
					</div>
					<a
						style={{
							backgroundColor: 'rgb(255, 255, 255)',
							blockSize: '56px',
							borderBlockEndColor: 'rgb(255, 255, 255)',
							borderBlockEndStyle: 'solid',
							borderBlockEndWidth: '1px',
							borderBlockStartColor: 'rgb(255, 255, 255)',
							borderBlockStartStyle: 'solid',
							borderBlockStartWidth: '1px',
							borderBottomColor: 'rgb(255, 255, 255)',
							borderBottomLeftRadius: '4px',
							borderBottomRightRadius: '4px',
							borderBottomStyle: 'solid',
							borderBottomWidth: '1px',
							borderEndEndRadius: '4px',
							borderEndStartRadius: '4px',
							borderInlineEndColor: 'rgb(255, 255, 255)',
							borderInlineEndStyle: 'solid',
							borderInlineEndWidth: '1px',
							borderInlineStartColor: 'rgb(255, 255, 255)',
							borderInlineStartStyle: 'solid',
							borderInlineStartWidth: '1px',
							borderLeftColor: 'rgb(255, 255, 255)',
							borderLeftStyle: 'solid',
							borderLeftWidth: '1px',
							borderRightColor: 'rgb(255, 255, 255)',
							borderRightStyle: 'solid',
							borderRightWidth: '1px',
							borderStartEndRadius: '4px',
							borderStartStartRadius: '4px',
							borderTopColor: 'rgb(255, 255, 255)',
							borderTopLeftRadius: '4px',
							borderTopRightRadius: '4px',
							borderTopStyle: 'solid',
							borderTopWidth: '1px',
							boxSizing: 'border-box',
							caretColor: 'rgb(52, 52, 255)',
							color: 'rgb(52, 52, 255)',
							columnRuleColor: 'rgb(52, 52, 255)',
							cursor: 'pointer',
							display: 'inline-block',
							fontFamily: 'Jakarta Display, sans-serif',
							fontSize: '16px',
							fontWeight: 500,
							inlineSize: '181.484px',
							letterSpacing: '1.28px',
							lineHeight: '18px',
							marginLeft: 0,
							marginRight: 0,
							outlineColor: 'rgb(52, 52, 255)',
							paddingBlockEnd: '18px',
							paddingBlockStart: '18px',
							paddingBottom: '18px',
							paddingInlineEnd: '24px',
							paddingInlineStart: '24px',
							paddingLeft: '24px',
							paddingRight: '24px',
							paddingTop: '18px',
							textAlign: 'center',
							textDecoration: 'none',
							textDecorationColor: 'rgb(52, 52, 255)',
							textEmphasisColor: 'rgb(52, 52, 255)',
							textSizeAdjust: '100%',
							textTransform: 'uppercase',
							transitionDelay: '0s, 0s, 0s, 0s, 0s, 0s',
							transitionDuration: '0.35s, 0.35s, 0.35s, 0.3s, 0.3s, 0.35s',
							transitionProperty:
								'border-color, box-shadow, transform, color, background-color, -webkit-transform',
							transitionTimingFunction: 'ease, ease, ease, ease, ease, ease',
							WebkitTextFillColor: 'rgb(52, 52, 255)',
							WebkitTextStrokeColor: 'rgb(52, 52, 255)',
						}}
						href={'https://academytemplate.webflow.io/courses'}
						className={'button-secondary cta w-button'}
					>
						Our Courses
					</a>
				</div>
				<div
					style={{
						blockSize: '352.141px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '499.219px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '43%',
						maxWidth: '43%',
						minBlockSize: 'auto',
						minHeight: 'auto',
						minInlineSize: 'auto',
						minWidth: 'auto',
						outlineColor: 'rgb(105, 105, 123)',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						transform: 'matrix(1, 0, 0, 1, 0, 0)',
						transformOrigin: '249.609px 176.07px',
						transformStyle: 'preserve-3d',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
					}}
					data-w-id={'c6978c25-4afe-9282-d31c-bd36a5bd8ca6'}
					className={'animation-wrapper testimonial'}
				>
					<img
						style={{
							blockSize: '352.141px',
							borderBlockEndColor: 'rgb(105, 105, 123)',
							borderBlockStartColor: 'rgb(105, 105, 123)',
							borderBottomColor: 'rgb(105, 105, 123)',
							borderBottomLeftRadius: '18px',
							borderBottomRightRadius: '18px',
							borderEndEndRadius: '18px',
							borderEndStartRadius: '18px',
							borderInlineEndColor: 'rgb(105, 105, 123)',
							borderInlineStartColor: 'rgb(105, 105, 123)',
							borderLeftColor: 'rgb(105, 105, 123)',
							borderRightColor: 'rgb(105, 105, 123)',
							borderStartEndRadius: '18px',
							borderStartStartRadius: '18px',
							borderTopColor: 'rgb(105, 105, 123)',
							borderTopLeftRadius: '18px',
							borderTopRightRadius: '18px',
							bottom: '0px',
							boxShadow: 'rgba(11, 11, 44, 0.22) 0px 14px 54px 0px',
							boxSizing: 'border-box',
							caretColor: 'rgb(105, 105, 123)',
							color: 'rgb(105, 105, 123)',
							columnRuleColor: 'rgb(105, 105, 123)',
							display: 'inline-block',
							flexShrink: 0,
							fontFamily: 'Jakarta Display, sans-serif',
							fontSize: '18px',
							inlineSize: '499.219px',
							insetBlockEnd: '0px',
							insetBlockStart: '0px',
							insetInlineEnd: '0px',
							insetInlineStart: '0px',
							left: '0px',
							lineHeight: '30.006px',
							marginLeft: 0,
							marginRight: 0,
							maxInlineSize: '100%',
							maxWidth: '100%',
							objectFit: 'cover',
							outlineColor: 'rgb(105, 105, 123)',
							position: 'relative',
							right: '0px',
							textDecoration: 'none solid rgb(105, 105, 123)',
							textDecorationColor: 'rgb(105, 105, 123)',
							textEmphasisColor: 'rgb(105, 105, 123)',
							textSizeAdjust: '100%',
							top: '0px',
							transform: 'matrix(1, 0, 0, 1, 0, 0)',
							transformOrigin: '249.609px 176.07px',
							transformStyle: 'preserve-3d',
							verticalAlign: 'middle',
							zIndex: 1,
							WebkitTextFillColor: 'rgb(105, 105, 123)',
							WebkitTextStrokeColor: 'rgb(105, 105, 123)',
							width: '499.219px',
							height: '352.141px',
						}}
						src={
							'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c5f5731c6ba5_image-cta-v1-academy-template.jpg'
						}
						data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371f4'}
						alt={'Advanced Skills - Academy Webflow Template'}
						className={'image testimonial'}
					></img>
				</div>
				<img
					style={{
						blockSize: '552px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						bottom: '-315px',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '552px',
						insetBlockEnd: '-315px',
						insetBlockStart: '115.141px',
						insetInlineEnd: '-371px',
						insetInlineStart: '980px',
						left: '980px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						outlineColor: 'rgb(105, 105, 123)',
						position: 'absolute',
						right: '-371px',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						top: '115.141px',
						transform: 'matrix(1, 0, 0, 1, 8.1522, 5.9962)',
						transformOrigin: '276px 276px',
						transformStyle: 'preserve-3d',
						verticalAlign: 'middle',
						willChange: 'transform',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						width: '552px',
						height: '552px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c54f401c6b92_circle-shape-testimonial-04-academy-template.svg'
					}
					data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371f5'}
					className={'circle-shape-testimonial _4'}
				></img>
				<img
					style={{
						blockSize: '276px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						bottom: '176.141px',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '276px',
						insetBlockEnd: '176.141px',
						insetBlockStart: '-100px',
						insetInlineEnd: '-115px',
						insetInlineStart: '1000px',
						left: '1000px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						outlineColor: 'rgb(105, 105, 123)',
						position: 'absolute',
						right: '-115px',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						top: '-100px',
						transform: 'matrix(1, 0, 0, 1, -4.6584, -3.4264)',
						transformOrigin: '138px 138px',
						transformStyle: 'preserve-3d',
						verticalAlign: 'middle',
						willChange: 'transform',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						width: '276px',
						height: '276px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c5866a1c6ba4_circle-shape-testimonial-03-academy-template.svg'
					}
					data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371f6'}
					className={'circle-shape-testimonial _3'}
				></img>
				<img
					style={{
						blockSize: '229px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						bottom: '-87px',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '229px',
						insetBlockEnd: '-87px',
						insetBlockStart: '210.141px',
						insetInlineEnd: '369px',
						insetInlineStart: '563px',
						left: '563px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						outlineColor: 'rgb(105, 105, 123)',
						position: 'absolute',
						right: '369px',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						top: '210.141px',
						transform: 'matrix(1, 0, 0, 1, -2.3292, -1.7132)',
						transformOrigin: '114.5px 114.5px',
						transformStyle: 'preserve-3d',
						verticalAlign: 'middle',
						willChange: 'transform',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						width: '229px',
						height: '229px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c526731c6b8e_circle-shape-testimonial-02-academy-template.svg'
					}
					data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371f7'}
					className={'circle-shape-testimonial _2'}
				></img>
				<img
					style={{
						blockSize: '646px',
						borderBlockEndColor: 'rgb(105, 105, 123)',
						borderBlockStartColor: 'rgb(105, 105, 123)',
						borderBottomColor: 'rgb(105, 105, 123)',
						borderInlineEndColor: 'rgb(105, 105, 123)',
						borderInlineStartColor: 'rgb(105, 105, 123)',
						borderLeftColor: 'rgb(105, 105, 123)',
						borderRightColor: 'rgb(105, 105, 123)',
						borderTopColor: 'rgb(105, 105, 123)',
						bottom: '-304px',
						boxSizing: 'border-box',
						caretColor: 'rgb(105, 105, 123)',
						color: 'rgb(105, 105, 123)',
						columnRuleColor: 'rgb(105, 105, 123)',
						display: 'block',
						fontFamily: 'Jakarta Display, sans-serif',
						fontSize: '18px',
						inlineSize: '646px',
						insetBlockEnd: '-304px',
						insetBlockStart: '10.1406px',
						insetInlineEnd: '828px',
						insetInlineStart: '-313px',
						left: '-313px',
						lineHeight: '30.006px',
						marginLeft: 0,
						marginRight: 0,
						maxInlineSize: '100%',
						maxWidth: '100%',
						outlineColor: 'rgb(105, 105, 123)',
						position: 'absolute',
						right: '828px',
						textDecoration: 'none solid rgb(105, 105, 123)',
						textDecorationColor: 'rgb(105, 105, 123)',
						textEmphasisColor: 'rgb(105, 105, 123)',
						textSizeAdjust: '100%',
						top: '10.1406px',
						transform: 'matrix(1, 0, 0, 1, 11.646, 8.566)',
						transformOrigin: '323px 323px',
						transformStyle: 'preserve-3d',
						verticalAlign: 'middle',
						willChange: 'transform',
						WebkitTextFillColor: 'rgb(105, 105, 123)',
						WebkitTextStrokeColor: 'rgb(105, 105, 123)',
						width: '646px',
						height: '646px',
					}}
					src={
						'https://assets.website-files.com/5f52d24bbe17c561061c6b7a/5f52d24bbe17c521331c6b94_circle-shape-testimonial-01-academy-template.svg'
					}
					data-w-id={'0b097d78-b776-9e09-a4b6-8ab6576371f8'}
					className={'circle-shape-testimonial _1'}
				></img>
			</div>
		</div>
	</div>
);

const ThreeDirection = () => {
	const [direction, setDirection] = useState<number>(0);

	const chooseDirection = (e: React.SyntheticEvent<EventTarget>) => {
		const dirEle = document.querySelectorAll('div.choose-wrapper ul > li');
		dirEle.forEach((d) => d.classList.remove('active'));
		if (!(e.target instanceof HTMLLIElement)) return;
		setDirection(parseInt(e.target.dataset.index as string, 10));
		// target.classList.add('active');
	};

	return (
		<div className='choose-wrapper w-full'>
			<Section />

			<div>
				<Card />
			</div>
			<div>
				<ul className='flex flex-row gap-12'>
					<li
						onClick={chooseDirection}
						data-index={0}
						className='hover:border-blue-600 border-solid border-[1px] relative rounded-2xl min-w-[220px] h-fit shadow-xl p-12'
					>
						系统运维工程师
						{direction === 0 && (
							<DoneOutlineIcon
								className='absolute !text-[100px] left-24 -bottom-5'
								color='success'
							/>
						)}
					</li>
					<li
						onClick={chooseDirection}
						data-index={1}
						className='hover:border-blue-600 border-solid border-[1px] relative rounded-2xl min-w-[220px] h-fit shadow-xl p-12'
					>
						全栈开发工程师
						{direction === 1 && (
							<DoneOutlineIcon
								className='absolute !text-[100px] left-24 -bottom-5'
								color='success'
							/>
						)}
					</li>
					<li
						onClick={chooseDirection}
						data-index={2}
						className='hover:border-blue-600 border-solid border-[1px] relative rounded-2xl min-w-[220px] h-fix shadow-xl p-12'
					>
						云计算大数据
						{direction === 2 && (
							<DoneOutlineIcon
								className='absolute !text-[100px] left-24 -bottom-5'
								color='success'
							/>
						)}
					</li>
				</ul>
			</div>
			<div>
				<div
					style={{
						margin: 0,
						blockSize: '469.219px',
						borderBlockEndColor: 'rgb(95, 104, 122)',
						borderBlockStartColor: 'rgb(95, 104, 122)',
						borderBottomColor: 'rgb(95, 104, 122)',
						borderInlineEndColor: 'rgb(95, 104, 122)',
						borderInlineStartColor: 'rgb(95, 104, 122)',
						borderLeftColor: 'rgb(95, 104, 122)',
						borderRightColor: 'rgb(95, 104, 122)',
						borderTopColor: 'rgb(95, 104, 122)',
						boxSizing: 'border-box',
						caretColor: 'rgb(95, 104, 122)',
						color: 'rgb(95, 104, 122)',
						columnRuleColor: 'rgb(95, 104, 122)',
						fontFamily: 'Onest, sans-serif',
						fontSize: '16px',
						inlineSize: '1053px',
						lineHeight: '26px',
						maxInlineSize: '1244px',
						outlineColor: 'rgb(95, 104, 122)',
						paddingInlineEnd: '24px',
						paddingInlineStart: '24px',
						paddingLeft: '24px',
						paddingRight: '24px',
						textDecoration: 'none solid rgb(95, 104, 122)',
						textDecorationColor: 'rgb(95, 104, 122)',
						textEmphasisColor: 'rgb(95, 104, 122)',
						textSizeAdjust: '100%',
						WebkitTextFillColor: 'rgb(95, 104, 122)',
						WebkitTextStrokeColor: 'rgb(95, 104, 122)',
					}}
					className={'container-default w-container'}
				>
					<div
						style={{
							alignItems: 'center',
							blockSize: '50px',
							borderBlockEndColor: 'rgb(95, 104, 122)',
							borderBlockStartColor: 'rgb(95, 104, 122)',
							borderBottomColor: 'rgb(95, 104, 122)',
							borderInlineEndColor: 'rgb(95, 104, 122)',
							borderInlineStartColor: 'rgb(95, 104, 122)',
							borderLeftColor: 'rgb(95, 104, 122)',
							borderRightColor: 'rgb(95, 104, 122)',
							borderTopColor: 'rgb(95, 104, 122)',
							boxSizing: 'border-box',
							caretColor: 'rgb(95, 104, 122)',
							color: 'rgb(95, 104, 122)',
							columnGap: '24px',
							columnRuleColor: 'rgb(95, 104, 122)',
							display: 'flex',
							flexWrap: 'wrap',
							fontFamily: 'Onest, sans-serif',
							fontSize: '16px',
							inlineSize: '1005px',
							justifyContent: 'space-between',
							lineHeight: '26px',
							marginBlockEnd: '32px',
							marginBottom: '32px',
							marginLeft: 0,
							marginRight: 0,
							outlineColor: 'rgb(95, 104, 122)',
							rowGap: '24px',
							textDecoration: 'none solid rgb(95, 104, 122)',
							textDecorationColor: 'rgb(95, 104, 122)',
							textEmphasisColor: 'rgb(95, 104, 122)',
							textSizeAdjust: '100%',
							transform: 'matrix(1, 0, 0, 1, 0, 0)',
							transformOrigin: '502.5px 25px',
							transformStyle: 'preserve-3d',
							WebkitTextFillColor: 'rgb(95, 104, 122)',
							WebkitTextStrokeColor: 'rgb(95, 104, 122)',
						}}
						data-w-id={'a15990ba-97ca-a374-b7e5-fefd8afa9e30'}
						className={'title-left---content-right mg-bottom-32px'}
					>
						<h2
							style={{
								blockSize: '44px',
								borderBlockEndColor: 'rgb(28, 31, 35)',
								borderBlockStartColor: 'rgb(28, 31, 35)',
								borderBottomColor: 'rgb(28, 31, 35)',
								borderInlineEndColor: 'rgb(28, 31, 35)',
								borderInlineStartColor: 'rgb(28, 31, 35)',
								borderLeftColor: 'rgb(28, 31, 35)',
								borderRightColor: 'rgb(28, 31, 35)',
								borderTopColor: 'rgb(28, 31, 35)',
								boxSizing: 'border-box',
								caretColor: 'rgb(28, 31, 35)',
								color: 'rgb(28, 31, 35)',
								columnRuleColor: 'rgb(28, 31, 35)',
								fontFamily: 'Onest, sans-serif',
								fontSize: '32px',
								inlineSize: '292.906px',
								lineHeight: '44px',
								marginBlockEnd: '0px',
								marginBlockStart: '0px',
								marginBottom: '0px',
								marginLeft: 0,
								marginRight: 0,
								marginTop: '0px',
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(28, 31, 35)',
								textDecoration: 'none solid rgb(28, 31, 35)',
								textDecorationColor: 'rgb(28, 31, 35)',
								textEmphasisColor: 'rgb(28, 31, 35)',
								textSizeAdjust: '100%',
								WebkitTextFillColor: 'rgb(28, 31, 35)',
								WebkitTextStrokeColor: 'rgb(28, 31, 35)',
							}}
							className={'mg-bottom-0'}
						>
							三大职业课程方向
						</h2>
					</div>
					<div
						style={{
							blockSize: '387.219px',
							borderBlockEndColor: 'rgb(95, 104, 122)',
							borderBlockStartColor: 'rgb(95, 104, 122)',
							borderBottomColor: 'rgb(95, 104, 122)',
							borderInlineEndColor: 'rgb(95, 104, 122)',
							borderInlineStartColor: 'rgb(95, 104, 122)',
							borderLeftColor: 'rgb(95, 104, 122)',
							borderRightColor: 'rgb(95, 104, 122)',
							borderTopColor: 'rgb(95, 104, 122)',
							boxSizing: 'border-box',
							caretColor: 'rgb(95, 104, 122)',
							color: 'rgb(95, 104, 122)',
							columnRuleColor: 'rgb(95, 104, 122)',
							fontFamily: 'Onest, sans-serif',
							fontSize: '16px',
							inlineSize: '1005px',
							lineHeight: '26px',
							marginLeft: 0,
							marginRight: 0,
							outlineColor: 'rgb(95, 104, 122)',
							textDecoration: 'none solid rgb(95, 104, 122)',
							textDecorationColor: 'rgb(95, 104, 122)',
							textEmphasisColor: 'rgb(95, 104, 122)',
							textSizeAdjust: '100%',
							WebkitTextFillColor: 'rgb(95, 104, 122)',
							WebkitTextStrokeColor: 'rgb(95, 104, 122)',
						}}
						className={'w-dyn-list'}
					>
						<div
							style={{
								blockSize: '387.219px',
								borderBlockEndColor: 'rgb(95, 104, 122)',
								borderBlockStartColor: 'rgb(95, 104, 122)',
								borderBottomColor: 'rgb(95, 104, 122)',
								borderInlineEndColor: 'rgb(95, 104, 122)',
								borderInlineStartColor: 'rgb(95, 104, 122)',
								borderLeftColor: 'rgb(95, 104, 122)',
								borderRightColor: 'rgb(95, 104, 122)',
								borderTopColor: 'rgb(95, 104, 122)',
								boxSizing: 'border-box',
								caretColor: 'rgb(95, 104, 122)',
								color: 'rgb(95, 104, 122)',
								columnGap: '28px',
								columnRuleColor: 'rgb(95, 104, 122)',
								display: 'grid',
								fontFamily: 'Onest, sans-serif',
								fontSize: '16px',
								gridAutoColumns: '1fr',
								gridTemplateColumns: '316.328px 316.328px 316.344px',
								gridTemplateRows: '387.219px',
								inlineSize: '1005px',
								lineHeight: '26px',
								marginLeft: 0,
								marginRight: 0,
								outlineColor: 'rgb(95, 104, 122)',
								rowGap: '28px',
								textDecoration: 'none solid rgb(95, 104, 122)',
								textDecorationColor: 'rgb(95, 104, 122)',
								textEmphasisColor: 'rgb(95, 104, 122)',
								textSizeAdjust: '100%',
								WebkitTextFillColor: 'rgb(95, 104, 122)',
								WebkitTextStrokeColor: 'rgb(95, 104, 122)',
							}}
							role={'list'}
							className={'grid-3-columns _1-col-tablet w-dyn-items'}
						>
							<div
								style={{
									blockSize: '387.219px',
									borderBlockEndColor: 'rgb(95, 104, 122)',
									borderBlockStartColor: 'rgb(95, 104, 122)',
									borderBottomColor: 'rgb(95, 104, 122)',
									borderInlineEndColor: 'rgb(95, 104, 122)',
									borderInlineStartColor: 'rgb(95, 104, 122)',
									borderLeftColor: 'rgb(95, 104, 122)',
									borderRightColor: 'rgb(95, 104, 122)',
									borderTopColor: 'rgb(95, 104, 122)',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '316.328px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									minBlockSize: 'auto',
									minHeight: 'auto',
									minInlineSize: 'auto',
									minWidth: 'auto',
									outlineColor: 'rgb(95, 104, 122)',
									textDecoration: 'none solid rgb(95, 104, 122)',
									textDecorationColor: 'rgb(95, 104, 122)',
									textEmphasisColor: 'rgb(95, 104, 122)',
									textSizeAdjust: '100%',
									WebkitTextFillColor: 'rgb(95, 104, 122)',
									WebkitTextStrokeColor: 'rgb(95, 104, 122)',
								}}
								role={'listitem'}
								className={'w-dyn-item'}
							>
								<a
									style={{
										backgroundColor: 'rgb(255, 255, 255)',
										blockSize: '387.203px',
										borderBlockEndColor: 'rgb(223, 229, 238)',
										borderBlockEndStyle: 'solid',
										borderBlockEndWidth: '1px',
										borderBlockStartColor: 'rgb(223, 229, 238)',
										borderBlockStartStyle: 'solid',
										borderBlockStartWidth: '1px',
										borderBottomColor: 'rgb(223, 229, 238)',
										borderBottomLeftRadius: '18px',
										borderBottomRightRadius: '18px',
										borderBottomStyle: 'solid',
										borderBottomWidth: '1px',
										borderEndEndRadius: '18px',
										borderEndStartRadius: '18px',
										borderInlineEndColor: 'rgb(223, 229, 238)',
										borderInlineEndStyle: 'solid',
										borderInlineEndWidth: '1px',
										borderInlineStartColor: 'rgb(223, 229, 238)',
										borderInlineStartStyle: 'solid',
										borderInlineStartWidth: '1px',
										borderLeftColor: 'rgb(223, 229, 238)',
										borderLeftStyle: 'solid',
										borderLeftWidth: '1px',
										borderRightColor: 'rgb(223, 229, 238)',
										borderRightStyle: 'solid',
										borderRightWidth: '1px',
										borderStartEndRadius: '18px',
										borderStartStartRadius: '18px',
										borderTopColor: 'rgb(223, 229, 238)',
										borderTopLeftRadius: '18px',
										borderTopRightRadius: '18px',
										borderTopStyle: 'solid',
										borderTopWidth: '1px',
										boxShadow: 'rgba(42, 42, 43, 0.06) 0px 2px 8px 0px',
										boxSizing: 'border-box',
										caretColor: 'rgb(0, 93, 255)',
										color: 'rgb(0, 93, 255)',
										columnRuleColor: 'rgb(0, 93, 255)',
										cursor: 'pointer',
										display: 'flex',
										flexDirection: 'column',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '316.328px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '100%',
										maxWidth: '100%',
										outlineColor: 'rgb(0, 93, 255)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										textDecoration: 'none',
										textDecorationColor: 'rgb(0, 93, 255)',
										textEmphasisColor: 'rgb(0, 93, 255)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '158.164px 193.602px',
										transitionDelay: '0s, 0s',
										transitionDuration: '0.3s, 0.3s',
										transitionProperty: 'transform, color',
										transitionTimingFunction: 'ease, ease',
										WebkitTextFillColor: 'rgb(0, 93, 255)',
										WebkitTextStrokeColor: 'rgb(0, 93, 255)',
									}}
									href={
										'https://workplacetemplate.webflow.io/freelancer-categories/design'
									}
									className=''
								>
									<div
										style={{
											blockSize: '195.203px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.328px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											overflowX: 'hidden',
											overflowY: 'hidden',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
											transform: 'matrix(1, 0, 0, 1, 0, 0)',
											transformOrigin: '157.164px 97.6016px',
											WebkitTextFillColor: 'rgb(0, 93, 255)',
											WebkitTextStrokeColor: 'rgb(0, 93, 255)',
										}}
										className={'image-wrapper'}
									>
										<img
											style={{
												blockSize: '195.203px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												display: 'inline-block',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '314.328px',
												lineHeight: '26px',
												marginLeft: 0,
												marginRight: 0,
												maxInlineSize: '100%',
												maxWidth: '100%',
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												transform: 'matrix(1, 0, 0, 1, 0, 0)',
												transformOrigin: '157.164px 97.6016px',
												transformStyle: 'preserve-3d',
												verticalAlign: 'middle',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
												width: '314.328px',
												height: '195.203px',
											}}
											src={
												'https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c027260c0d1c7a175d21cc_design-thumbnail-image-workplace-x-webflow-template.svg'
											}
											alt={'Design'}
											className={'image'}
										></img>
									</div>
									<div
										style={{
											blockSize: '190px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.328px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											paddingBlockEnd: '32px',
											paddingBlockStart: '32px',
											paddingBottom: '32px',
											paddingInlineEnd: '24px',
											paddingInlineStart: '24px',
											paddingLeft: '24px',
											paddingRight: '24px',
											paddingTop: '32px',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
										}}
									>
										<div
											style={{
												blockSize: '40px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.328px',
												lineHeight: '26px',
												marginBlockEnd: '8px',
												marginBottom: '8px',
												marginLeft: 0,
												marginRight: 0,
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
											}}
											className={'mg-bottom-8px'}
										>
											<div
												style={{
													alignItems: 'center',
													blockSize: '40px',
													borderBlockEndColor: 'rgb(0, 93, 255)',
													borderBlockStartColor: 'rgb(0, 93, 255)',
													borderBottomColor: 'rgb(0, 93, 255)',
													borderInlineEndColor: 'rgb(0, 93, 255)',
													borderInlineStartColor: 'rgb(0, 93, 255)',
													borderLeftColor: 'rgb(0, 93, 255)',
													borderRightColor: 'rgb(0, 93, 255)',
													borderTopColor: 'rgb(0, 93, 255)',
													boxSizing: 'border-box',
													caretColor: 'rgb(0, 93, 255)',
													color: 'rgb(0, 93, 255)',
													columnRuleColor: 'rgb(0, 93, 255)',
													cursor: 'pointer',
													display: 'flex',
													fontFamily: 'Onest, sans-serif',
													fontSize: '16px',
													inlineSize: '266.328px',
													justifyContent: 'space-between',
													lineHeight: '26px',
													marginLeft: 0,
													marginRight: 0,
													outlineColor: 'rgb(0, 93, 255)',
													textDecoration: 'none solid rgb(0, 93, 255)',
													textDecorationColor: 'rgb(0, 93, 255)',
													textEmphasisColor: 'rgb(0, 93, 255)',
													textSizeAdjust: '100%',
													WebkitTextFillColor: 'rgb(0, 93, 255)',
													WebkitTextStrokeColor: 'rgb(0, 93, 255)',
												}}
												className={'flex-horizontal space-between'}
											>
												<h3
													style={{
														color: 'rgb(28, 31, 35)',
														cursor: 'pointer',
														fontSize: '24px',
														inlineSize: '79.9688px',
														lineHeight: '34.008px',
													}}
													className={'mg-bottom-0 card-title'}
												>
													系统运维工程师
												</h3>
												<div
													style={{
														alignItems: 'center',
														backgroundColor: 'rgb(255, 255, 255)',
														blockSize: '40px',
														borderBlockEndColor: 'rgb(28, 31, 35)',
														borderBlockEndStyle: 'solid',
														borderBlockEndWidth: '1px',
														borderBlockStartColor: 'rgb(28, 31, 35)',
														borderBlockStartStyle: 'solid',
														borderBlockStartWidth: '1px',
														borderBottomColor: 'rgb(28, 31, 35)',
														borderBottomLeftRadius: '50%',
														borderBottomRightRadius: '50%',
														borderBottomStyle: 'solid',
														borderBottomWidth: '1px',
														borderEndEndRadius: '50%',
														borderEndStartRadius: '50%',
														borderInlineEndColor: 'rgb(28, 31, 35)',
														borderInlineEndStyle: 'solid',
														borderInlineEndWidth: '1px',
														borderInlineStartColor: 'rgb(28, 31, 35)',
														borderInlineStartStyle: 'solid',
														borderInlineStartWidth: '1px',
														borderLeftColor: 'rgb(28, 31, 35)',
														borderLeftStyle: 'solid',
														borderLeftWidth: '1px',
														borderRightColor: 'rgb(28, 31, 35)',
														borderRightStyle: 'solid',
														borderRightWidth: '1px',
														borderStartEndRadius: '50%',
														borderStartStartRadius: '50%',
														borderTopColor: 'rgb(28, 31, 35)',
														borderTopLeftRadius: '50%',
														borderTopRightRadius: '50%',
														borderTopStyle: 'solid',
														borderTopWidth: '1px',
														boxSizing: 'border-box',
														caretColor: 'rgb(28, 31, 35)',
														color: 'rgb(28, 31, 35)',
														columnRuleColor: 'rgb(28, 31, 35)',
														cursor: 'pointer',
														display: 'flex',
														fontFamily: 'Onest, sans-serif',
														fontSize: '18px',
														inlineSize: '40px',
														justifyContent: 'center',
														lineHeight: '18px',
														marginLeft: 0,
														marginRight: 0,
														minBlockSize: '40px',
														minHeight: '40px',
														minInlineSize: '40px',
														minWidth: '40px',
														outlineColor: 'rgb(28, 31, 35)',
														textDecoration: 'none solid rgb(28, 31, 35)',
														textDecorationColor: 'rgb(28, 31, 35)',
														textEmphasisColor: 'rgb(28, 31, 35)',
														textSizeAdjust: '100%',
														transitionDelay: '0s, 0s, 0s, 0s',
														transitionDuration: '0.3s, 0.3s, 0.3s, 0.3s',
														transitionProperty:
															'border-color, transform, background-color, color',
														transitionTimingFunction: 'ease, ease, ease, ease',
														WebkitTextFillColor: 'rgb(28, 31, 35)',
														WebkitTextStrokeColor: 'rgb(28, 31, 35)',
													}}
													className={'btn-circle-secondary small no-hover'}
												>
													<div
														style={{
															blockSize: '18px',
															borderBlockEndColor: 'rgb(28, 31, 35)',
															borderBlockStartColor: 'rgb(28, 31, 35)',
															borderBottomColor: 'rgb(28, 31, 35)',
															borderInlineEndColor: 'rgb(28, 31, 35)',
															borderInlineStartColor: 'rgb(28, 31, 35)',
															borderLeftColor: 'rgb(28, 31, 35)',
															borderRightColor: 'rgb(28, 31, 35)',
															borderTopColor: 'rgb(28, 31, 35)',
															boxSizing: 'border-box',
															caretColor: 'rgb(28, 31, 35)',
															color: 'rgb(28, 31, 35)',
															columnRuleColor: 'rgb(28, 31, 35)',
															cursor: 'pointer',
															fontFamily: 'Onest, sans-serif',
															fontSize: '18px',
															inlineSize: '17.2812px',
															lineHeight: '18px',
															marginLeft: 0,
															marginRight: 0,
															minBlockSize: 'auto',
															minHeight: 'auto',
															minInlineSize: 'auto',
															minWidth: 'auto',
															outlineColor: 'rgb(28, 31, 35)',
															textDecoration: 'none solid rgb(28, 31, 35)',
															textDecorationColor: 'rgb(28, 31, 35)',
															textEmphasisColor: 'rgb(28, 31, 35)',
															textSizeAdjust: '100%',
															WebkitTextFillColor: 'rgb(28, 31, 35)',
															WebkitTextStrokeColor: 'rgb(28, 31, 35)',
														}}
													>
														<span
															style={{
																borderBlockEndColor: 'rgb(28, 31, 35)',
																borderBlockStartColor: 'rgb(28, 31, 35)',
																borderBottomColor: 'rgb(28, 31, 35)',
																borderInlineEndColor: 'rgb(28, 31, 35)',
																borderInlineStartColor: 'rgb(28, 31, 35)',
																borderLeftColor: 'rgb(28, 31, 35)',
																borderRightColor: 'rgb(28, 31, 35)',
																borderTopColor: 'rgb(28, 31, 35)',
																boxSizing: 'border-box',
																caretColor: 'rgb(28, 31, 35)',
																color: 'rgb(28, 31, 35)',
																columnRuleColor: 'rgb(28, 31, 35)',
																cursor: 'pointer',
																fontFamily: 'Line Rounded Icons, sans-serif',
																fontSize: '18px',
																lineHeight: '18px',
																marginLeft: 0,
																marginRight: 0,
																outlineColor: 'rgb(28, 31, 35)',
																textDecoration: 'none solid rgb(28, 31, 35)',
																textDecorationColor: 'rgb(28, 31, 35)',
																textEmphasisColor: 'rgb(28, 31, 35)',
																textSizeAdjust: '100%',
																WebkitTextFillColor: 'rgb(28, 31, 35)',
																WebkitTextStrokeColor: 'rgb(28, 31, 35)',
															}}
															className={'line-rounded-icon'}
														>
															
														</span>
													</div>
												</div>
											</div>
										</div>
										<p
											style={{
												blockSize: '78px',
												borderBlockEndColor: 'rgb(95, 104, 122)',
												borderBlockStartColor: 'rgb(95, 104, 122)',
												borderBottomColor: 'rgb(95, 104, 122)',
												borderInlineEndColor: 'rgb(95, 104, 122)',
												borderInlineStartColor: 'rgb(95, 104, 122)',
												borderLeftColor: 'rgb(95, 104, 122)',
												borderRightColor: 'rgb(95, 104, 122)',
												borderTopColor: 'rgb(95, 104, 122)',
												boxSizing: 'border-box',
												caretColor: 'rgb(95, 104, 122)',
												color: 'rgb(95, 104, 122)',
												columnRuleColor: 'rgb(95, 104, 122)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.328px',
												lineHeight: '26px',
												marginBlockEnd: '0px',
												marginBlockStart: '0px',
												marginBottom: '0px',
												marginLeft: 0,
												marginRight: 0,
												marginTop: '0px',
												outlineColor: 'rgb(95, 104, 122)',
												textDecoration: 'none solid rgb(95, 104, 122)',
												textDecorationColor: 'rgb(95, 104, 122)',
												textEmphasisColor: 'rgb(95, 104, 122)',
												textSizeAdjust: '100%',
												WebkitTextFillColor: 'rgb(95, 104, 122)',
												WebkitTextStrokeColor: 'rgb(95, 104, 122)',
											}}
											className={'color-neutral-600 mg-bottom-0'}
										>
											Lorem ipsum dolor sit amet lorem non consectetur
											adipiscing elit amet.
										</p>
									</div>
								</a>
							</div>
							<div
								style={{
									blockSize: '387.219px',
									borderBlockEndColor: 'rgb(95, 104, 122)',
									borderBlockStartColor: 'rgb(95, 104, 122)',
									borderBottomColor: 'rgb(95, 104, 122)',
									borderInlineEndColor: 'rgb(95, 104, 122)',
									borderInlineStartColor: 'rgb(95, 104, 122)',
									borderLeftColor: 'rgb(95, 104, 122)',
									borderRightColor: 'rgb(95, 104, 122)',
									borderTopColor: 'rgb(95, 104, 122)',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '316.328px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									minBlockSize: 'auto',
									minHeight: 'auto',
									minInlineSize: 'auto',
									minWidth: 'auto',
									outlineColor: 'rgb(95, 104, 122)',
									textDecoration: 'none solid rgb(95, 104, 122)',
									textDecorationColor: 'rgb(95, 104, 122)',
									textEmphasisColor: 'rgb(95, 104, 122)',
									textSizeAdjust: '100%',
									WebkitTextFillColor: 'rgb(95, 104, 122)',
									WebkitTextStrokeColor: 'rgb(95, 104, 122)',
								}}
								role={'listitem'}
								className={'w-dyn-item'}
							>
								<a
									style={{
										backgroundColor: 'rgb(255, 255, 255)',
										blockSize: '387.203px',
										borderBlockEndColor: 'rgb(223, 229, 238)',
										borderBlockEndStyle: 'solid',
										borderBlockEndWidth: '1px',
										borderBlockStartColor: 'rgb(223, 229, 238)',
										borderBlockStartStyle: 'solid',
										borderBlockStartWidth: '1px',
										borderBottomColor: 'rgb(223, 229, 238)',
										borderBottomLeftRadius: '18px',
										borderBottomRightRadius: '18px',
										borderBottomStyle: 'solid',
										borderBottomWidth: '1px',
										borderEndEndRadius: '18px',
										borderEndStartRadius: '18px',
										borderInlineEndColor: 'rgb(223, 229, 238)',
										borderInlineEndStyle: 'solid',
										borderInlineEndWidth: '1px',
										borderInlineStartColor: 'rgb(223, 229, 238)',
										borderInlineStartStyle: 'solid',
										borderInlineStartWidth: '1px',
										borderLeftColor: 'rgb(223, 229, 238)',
										borderLeftStyle: 'solid',
										borderLeftWidth: '1px',
										borderRightColor: 'rgb(223, 229, 238)',
										borderRightStyle: 'solid',
										borderRightWidth: '1px',
										borderStartEndRadius: '18px',
										borderStartStartRadius: '18px',
										borderTopColor: 'rgb(223, 229, 238)',
										borderTopLeftRadius: '18px',
										borderTopRightRadius: '18px',
										borderTopStyle: 'solid',
										borderTopWidth: '1px',
										boxShadow: 'rgba(42, 42, 43, 0.06) 0px 2px 8px 0px',
										boxSizing: 'border-box',
										caretColor: 'rgb(0, 93, 255)',
										color: 'rgb(0, 93, 255)',
										columnRuleColor: 'rgb(0, 93, 255)',
										cursor: 'pointer',
										display: 'flex',
										flexDirection: 'column',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '316.328px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '100%',
										maxWidth: '100%',
										outlineColor: 'rgb(0, 93, 255)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										textDecoration: 'none',
										textDecorationColor: 'rgb(0, 93, 255)',
										textEmphasisColor: 'rgb(0, 93, 255)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '158.164px 193.602px',
										transitionDelay: '0s, 0s',
										transitionDuration: '0.3s, 0.3s',
										transitionProperty: 'transform, color',
										transitionTimingFunction: 'ease, ease',
										WebkitTextFillColor: 'rgb(0, 93, 255)',
										WebkitTextStrokeColor: 'rgb(0, 93, 255)',
									}}
									data-w-id={'a4f981e9-c677-114b-909f-e904386d04b2'}
									href={
										'https://workplacetemplate.webflow.io/freelancer-categories/development'
									}
									className=''
								>
									<div
										style={{
											blockSize: '195.203px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.328px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											overflowX: 'hidden',
											overflowY: 'hidden',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
											transform: 'matrix(1, 0, 0, 1, 0, 0)',
											transformOrigin: '157.164px 97.6016px',
											WebkitTextFillColor: 'rgb(0, 93, 255)',
											WebkitTextStrokeColor: 'rgb(0, 93, 255)',
										}}
										className={'image-wrapper'}
									>
										<img
											style={{
												blockSize: '195.203px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												display: 'inline-block',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '314.328px',
												lineHeight: '26px',
												marginLeft: 0,
												marginRight: 0,
												maxInlineSize: '100%',
												maxWidth: '100%',
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												transform: 'matrix(1, 0, 0, 1, 0, 0)',
												transformOrigin: '157.164px 97.6016px',
												transformStyle: 'preserve-3d',
												verticalAlign: 'middle',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
												width: '314.328px',
												height: '195.203px',
											}}
											src={
												'https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c02734cfbc6c8ae72d8b8e_development-thumbnail-image-workplace-x-webflow-template.svg'
											}
											alt={'Development'}
											className={'image'}
										></img>
									</div>
									<div
										style={{
											blockSize: '190px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.328px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											paddingBlockEnd: '32px',
											paddingBlockStart: '32px',
											paddingBottom: '32px',
											paddingInlineEnd: '24px',
											paddingInlineStart: '24px',
											paddingLeft: '24px',
											paddingRight: '24px',
											paddingTop: '32px',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
											WebkitTextFillColor: 'rgb(0, 93, 255)',
											WebkitTextStrokeColor: 'rgb(0, 93, 255)',
										}}
										className={'freelance-category-card-content-bottom'}
									>
										<div
											style={{
												blockSize: '40px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.328px',
												lineHeight: '26px',
												marginBlockEnd: '8px',
												marginBottom: '8px',
												marginLeft: 0,
												marginRight: 0,
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
											}}
											className={'mg-bottom-8px'}
										>
											<div
												style={{
													alignItems: 'center',
													blockSize: '40px',
													borderBlockEndColor: 'rgb(0, 93, 255)',
													borderBlockStartColor: 'rgb(0, 93, 255)',
													borderBottomColor: 'rgb(0, 93, 255)',
													borderInlineEndColor: 'rgb(0, 93, 255)',
													borderInlineStartColor: 'rgb(0, 93, 255)',
													borderLeftColor: 'rgb(0, 93, 255)',
													borderRightColor: 'rgb(0, 93, 255)',
													borderTopColor: 'rgb(0, 93, 255)',
													boxSizing: 'border-box',
													caretColor: 'rgb(0, 93, 255)',
													color: 'rgb(0, 93, 255)',
													columnRuleColor: 'rgb(0, 93, 255)',
													cursor: 'pointer',
													display: 'flex',
													fontFamily: 'Onest, sans-serif',
													fontSize: '16px',
													inlineSize: '266.328px',
													justifyContent: 'space-between',
													lineHeight: '26px',
													marginLeft: 0,
													marginRight: 0,
													outlineColor: 'rgb(0, 93, 255)',
													textDecoration: 'none solid rgb(0, 93, 255)',
													textDecorationColor: 'rgb(0, 93, 255)',
													textEmphasisColor: 'rgb(0, 93, 255)',
													textSizeAdjust: '100%',
													WebkitTextFillColor: 'rgb(0, 93, 255)',
													WebkitTextStrokeColor: 'rgb(0, 93, 255)',
												}}
												className={'flex-horizontal space-between'}
											>
												<h3
													style={{
														blockSize: '34px',
														borderBlockEndColor: 'rgb(28, 31, 35)',
														borderBlockStartColor: 'rgb(28, 31, 35)',
														borderBottomColor: 'rgb(28, 31, 35)',
														borderInlineEndColor: 'rgb(28, 31, 35)',
														borderInlineStartColor: 'rgb(28, 31, 35)',
														borderLeftColor: 'rgb(28, 31, 35)',
														borderRightColor: 'rgb(28, 31, 35)',
														borderTopColor: 'rgb(28, 31, 35)',
														boxSizing: 'border-box',
														caretColor: 'rgb(28, 31, 35)',
														color: 'rgb(28, 31, 35)',
														columnRuleColor: 'rgb(28, 31, 35)',
														cursor: 'pointer',
														fontFamily: 'Onest, sans-serif',
														fontSize: '24px',
														inlineSize: '153.344px',
														lineHeight: '34.008px',
														marginBlockEnd: '0px',
														marginBlockStart: '0px',
														marginBottom: '0px',
														marginLeft: 0,
														marginRight: 0,
														marginTop: '0px',
														minBlockSize: 'auto',
														minHeight: 'auto',
														minInlineSize: 'auto',
														minWidth: 'auto',
														outlineColor: 'rgb(28, 31, 35)',
														textDecoration: 'none solid rgb(28, 31, 35)',
														textDecorationColor: 'rgb(28, 31, 35)',
														textEmphasisColor: 'rgb(28, 31, 35)',
														textSizeAdjust: '100%',
														WebkitTextFillColor: 'rgb(28, 31, 35)',
														WebkitTextStrokeColor: 'rgb(28, 31, 35)',
													}}
													className={'mg-bottom-0 card-title'}
												>
													全栈开发工程师
												</h3>
												<div
													style={{
														alignItems: 'center',
														backgroundColor: 'rgb(255, 255, 255)',
														blockSize: '40px',
														borderBlockEndColor: 'rgb(28, 31, 35)',
														borderBlockEndStyle: 'solid',
														borderBlockEndWidth: '1px',
														borderBlockStartColor: 'rgb(28, 31, 35)',
														borderBlockStartStyle: 'solid',
														borderBlockStartWidth: '1px',
														borderBottomColor: 'rgb(28, 31, 35)',
														borderBottomLeftRadius: '50%',
														borderBottomRightRadius: '50%',
														borderBottomStyle: 'solid',
														borderBottomWidth: '1px',
														borderEndEndRadius: '50%',
														borderEndStartRadius: '50%',
														borderInlineEndColor: 'rgb(28, 31, 35)',
														borderInlineEndStyle: 'solid',
														borderInlineEndWidth: '1px',
														borderInlineStartColor: 'rgb(28, 31, 35)',
														borderInlineStartStyle: 'solid',
														borderInlineStartWidth: '1px',
														borderLeftColor: 'rgb(28, 31, 35)',
														borderLeftStyle: 'solid',
														borderLeftWidth: '1px',
														borderRightColor: 'rgb(28, 31, 35)',
														borderRightStyle: 'solid',
														borderRightWidth: '1px',
														borderStartEndRadius: '50%',
														borderStartStartRadius: '50%',
														borderTopColor: 'rgb(28, 31, 35)',
														borderTopLeftRadius: '50%',
														borderTopRightRadius: '50%',
														borderTopStyle: 'solid',
														borderTopWidth: '1px',
														boxSizing: 'border-box',
														caretColor: 'rgb(28, 31, 35)',
														color: 'rgb(28, 31, 35)',
														columnRuleColor: 'rgb(28, 31, 35)',
														cursor: 'pointer',
														display: 'flex',
														fontFamily: 'Onest, sans-serif',
														fontSize: '18px',
														inlineSize: '40px',
														justifyContent: 'center',
														lineHeight: '18px',
														marginLeft: 0,
														marginRight: 0,
														minBlockSize: '40px',
														minHeight: '40px',
														minInlineSize: '40px',
														minWidth: '40px',
														outlineColor: 'rgb(28, 31, 35)',
														textDecoration: 'none solid rgb(28, 31, 35)',
														textDecorationColor: 'rgb(28, 31, 35)',
														textEmphasisColor: 'rgb(28, 31, 35)',
														textSizeAdjust: '100%',
														transitionDelay: '0s, 0s, 0s, 0s',
														transitionDuration: '0.3s, 0.3s, 0.3s, 0.3s',
														transitionProperty:
															'border-color, transform, background-color, color',
														transitionTimingFunction: 'ease, ease, ease, ease',
														WebkitTextFillColor: 'rgb(28, 31, 35)',
														WebkitTextStrokeColor: 'rgb(28, 31, 35)',
													}}
													className={'btn-circle-secondary small no-hover'}
												>
													<div
														style={{
															blockSize: '18px',
															borderBlockEndColor: 'rgb(28, 31, 35)',
															borderBlockStartColor: 'rgb(28, 31, 35)',
															borderBottomColor: 'rgb(28, 31, 35)',
															borderInlineEndColor: 'rgb(28, 31, 35)',
															borderInlineStartColor: 'rgb(28, 31, 35)',
															borderLeftColor: 'rgb(28, 31, 35)',
															borderRightColor: 'rgb(28, 31, 35)',
															borderTopColor: 'rgb(28, 31, 35)',
															boxSizing: 'border-box',
															caretColor: 'rgb(28, 31, 35)',
															color: 'rgb(28, 31, 35)',
															columnRuleColor: 'rgb(28, 31, 35)',
															cursor: 'pointer',
															fontFamily: 'Onest, sans-serif',
															fontSize: '18px',
															inlineSize: '17.2812px',
															lineHeight: '18px',
															marginLeft: 0,
															marginRight: 0,
															minBlockSize: 'auto',
															minHeight: 'auto',
															minInlineSize: 'auto',
															minWidth: 'auto',
															outlineColor: 'rgb(28, 31, 35)',
															textDecoration: 'none solid rgb(28, 31, 35)',
															textDecorationColor: 'rgb(28, 31, 35)',
															textEmphasisColor: 'rgb(28, 31, 35)',
															textSizeAdjust: '100%',
															WebkitTextFillColor: 'rgb(28, 31, 35)',
															WebkitTextStrokeColor: 'rgb(28, 31, 35)',
														}}
													>
														<span
															style={{
																borderBlockEndColor: 'rgb(28, 31, 35)',
																borderBlockStartColor: 'rgb(28, 31, 35)',
																borderBottomColor: 'rgb(28, 31, 35)',
																borderInlineEndColor: 'rgb(28, 31, 35)',
																borderInlineStartColor: 'rgb(28, 31, 35)',
																borderLeftColor: 'rgb(28, 31, 35)',
																borderRightColor: 'rgb(28, 31, 35)',
																borderTopColor: 'rgb(28, 31, 35)',
																boxSizing: 'border-box',
																caretColor: 'rgb(28, 31, 35)',
																color: 'rgb(28, 31, 35)',
																columnRuleColor: 'rgb(28, 31, 35)',
																cursor: 'pointer',
																fontFamily: 'Line Rounded Icons, sans-serif',
																fontSize: '18px',
																lineHeight: '18px',
																marginLeft: 0,
																marginRight: 0,
																outlineColor: 'rgb(28, 31, 35)',
																textDecoration: 'none solid rgb(28, 31, 35)',
																textDecorationColor: 'rgb(28, 31, 35)',
																textEmphasisColor: 'rgb(28, 31, 35)',
																textSizeAdjust: '100%',
																WebkitTextFillColor: 'rgb(28, 31, 35)',
																WebkitTextStrokeColor: 'rgb(28, 31, 35)',
															}}
															className={'line-rounded-icon'}
														>
															
														</span>
													</div>
												</div>
											</div>
										</div>
										<p
											style={{
												blockSize: '78px',
												borderBlockEndColor: 'rgb(95, 104, 122)',
												borderBlockStartColor: 'rgb(95, 104, 122)',
												borderBottomColor: 'rgb(95, 104, 122)',
												borderInlineEndColor: 'rgb(95, 104, 122)',
												borderInlineStartColor: 'rgb(95, 104, 122)',
												borderLeftColor: 'rgb(95, 104, 122)',
												borderRightColor: 'rgb(95, 104, 122)',
												borderTopColor: 'rgb(95, 104, 122)',
												boxSizing: 'border-box',
												caretColor: 'rgb(95, 104, 122)',
												color: 'rgb(95, 104, 122)',
												columnRuleColor: 'rgb(95, 104, 122)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.328px',
												lineHeight: '26px',
												marginBlockEnd: '0px',
												marginBlockStart: '0px',
												marginBottom: '0px',
												marginLeft: 0,
												marginRight: 0,
												marginTop: '0px',
												outlineColor: 'rgb(95, 104, 122)',
												textDecoration: 'none solid rgb(95, 104, 122)',
												textDecorationColor: 'rgb(95, 104, 122)',
												textEmphasisColor: 'rgb(95, 104, 122)',
												textSizeAdjust: '100%',
												WebkitTextFillColor: 'rgb(95, 104, 122)',
												WebkitTextStrokeColor: 'rgb(95, 104, 122)',
											}}
											className={'color-neutral-600 mg-bottom-0'}
										>
											Lorem ipsum dolor sit amet lorem non consectetur
											adipiscing elit amet.
										</p>
									</div>
								</a>
							</div>
							<div
								style={{
									blockSize: '387.219px',
									borderBlockEndColor: 'rgb(95, 104, 122)',
									borderBlockStartColor: 'rgb(95, 104, 122)',
									borderBottomColor: 'rgb(95, 104, 122)',
									borderInlineEndColor: 'rgb(95, 104, 122)',
									borderInlineStartColor: 'rgb(95, 104, 122)',
									borderLeftColor: 'rgb(95, 104, 122)',
									borderRightColor: 'rgb(95, 104, 122)',
									borderTopColor: 'rgb(95, 104, 122)',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '316.344px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									minBlockSize: 'auto',
									minHeight: 'auto',
									minInlineSize: 'auto',
									minWidth: 'auto',
									outlineColor: 'rgb(95, 104, 122)',
									textDecoration: 'none solid rgb(95, 104, 122)',
									textDecorationColor: 'rgb(95, 104, 122)',
									textEmphasisColor: 'rgb(95, 104, 122)',
									textSizeAdjust: '100%',
									WebkitTextFillColor: 'rgb(95, 104, 122)',
									WebkitTextStrokeColor: 'rgb(95, 104, 122)',
								}}
								role={'listitem'}
								className={'w-dyn-item'}
							>
								<a
									style={{
										backgroundColor: 'rgb(255, 255, 255)',
										blockSize: '387.219px',
										borderBlockEndColor: 'rgb(223, 229, 238)',
										borderBlockEndStyle: 'solid',
										borderBlockEndWidth: '1px',
										borderBlockStartColor: 'rgb(223, 229, 238)',
										borderBlockStartStyle: 'solid',
										borderBlockStartWidth: '1px',
										borderBottomColor: 'rgb(223, 229, 238)',
										borderBottomLeftRadius: '18px',
										borderBottomRightRadius: '18px',
										borderBottomStyle: 'solid',
										borderBottomWidth: '1px',
										borderEndEndRadius: '18px',
										borderEndStartRadius: '18px',
										borderInlineEndColor: 'rgb(223, 229, 238)',
										borderInlineEndStyle: 'solid',
										borderInlineEndWidth: '1px',
										borderInlineStartColor: 'rgb(223, 229, 238)',
										borderInlineStartStyle: 'solid',
										borderInlineStartWidth: '1px',
										borderLeftColor: 'rgb(223, 229, 238)',
										borderLeftStyle: 'solid',
										borderLeftWidth: '1px',
										borderRightColor: 'rgb(223, 229, 238)',
										borderRightStyle: 'solid',
										borderRightWidth: '1px',
										borderStartEndRadius: '18px',
										borderStartStartRadius: '18px',
										borderTopColor: 'rgb(223, 229, 238)',
										borderTopLeftRadius: '18px',
										borderTopRightRadius: '18px',
										borderTopStyle: 'solid',
										borderTopWidth: '1px',
										boxShadow: 'rgba(42, 42, 43, 0.06) 0px 2px 8px 0px',
										boxSizing: 'border-box',
										caretColor: 'rgb(0, 93, 255)',
										color: 'rgb(0, 93, 255)',
										columnRuleColor: 'rgb(0, 93, 255)',
										cursor: 'pointer',
										display: 'flex',
										flexDirection: 'column',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '316.344px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '100%',
										maxWidth: '100%',
										outlineColor: 'rgb(0, 93, 255)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										textDecoration: 'none',
										textDecorationColor: 'rgb(0, 93, 255)',
										textEmphasisColor: 'rgb(0, 93, 255)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '158.172px 193.609px',
										transitionDelay: '0s, 0s',
										transitionDuration: '0.3s, 0.3s',
										transitionProperty: 'transform, color',
										transitionTimingFunction: 'ease, ease',
										WebkitTextFillColor: 'rgb(0, 93, 255)',
										WebkitTextStrokeColor: 'rgb(0, 93, 255)',
									}}
									href={
										'https://workplacetemplate.webflow.io/freelancer-categories/marketing'
									}
									className=''
								>
									<div
										style={{
											blockSize: '195.219px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.344px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											overflowX: 'hidden',
											overflowY: 'hidden',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
											transform: 'matrix(1, 0, 0, 1, 0, 0)',
											transformOrigin: '157.172px 97.6094px',
											WebkitTextFillColor: 'rgb(0, 93, 255)',
											WebkitTextStrokeColor: 'rgb(0, 93, 255)',
										}}
										className={'image-wrapper'}
									>
										<img
											style={{
												blockSize: '195.219px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												display: 'inline-block',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '314.344px',
												lineHeight: '26px',
												marginLeft: 0,
												marginRight: 0,
												maxInlineSize: '100%',
												maxWidth: '100%',
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												transform: 'matrix(1, 0, 0, 1, 0, 0)',
												transformOrigin: '157.172px 97.6094px',
												transformStyle: 'preserve-3d',
												verticalAlign: 'middle',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
												width: '314.344px',
												height: '195.219px',
											}}
											src={
												'https://assets.website-files.com/63becc2faa5fe51a6fa9a7d7/63c0274233a4b85992dc2335_marketing-thumbnail-image-workplace-x-webflow-template.svg'
											}
											alt={'Marketing'}
											className={'image'}
										></img>
									</div>
									<div
										style={{
											blockSize: '190px',
											borderBlockEndColor: 'rgb(0, 93, 255)',
											borderBlockStartColor: 'rgb(0, 93, 255)',
											borderBottomColor: 'rgb(0, 93, 255)',
											borderInlineEndColor: 'rgb(0, 93, 255)',
											borderInlineStartColor: 'rgb(0, 93, 255)',
											borderLeftColor: 'rgb(0, 93, 255)',
											borderRightColor: 'rgb(0, 93, 255)',
											borderTopColor: 'rgb(0, 93, 255)',
											boxSizing: 'border-box',
											caretColor: 'rgb(0, 93, 255)',
											color: 'rgb(0, 93, 255)',
											columnRuleColor: 'rgb(0, 93, 255)',
											cursor: 'pointer',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '314.344px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											minBlockSize: 'auto',
											minHeight: 'auto',
											minInlineSize: 'auto',
											minWidth: 'auto',
											outlineColor: 'rgb(0, 93, 255)',
											paddingBlockEnd: '32px',
											paddingBlockStart: '32px',
											paddingBottom: '32px',
											paddingInlineEnd: '24px',
											paddingInlineStart: '24px',
											paddingLeft: '24px',
											paddingRight: '24px',
											paddingTop: '32px',
											textDecoration: 'none solid rgb(0, 93, 255)',
											textDecorationColor: 'rgb(0, 93, 255)',
											textEmphasisColor: 'rgb(0, 93, 255)',
											textSizeAdjust: '100%',
											WebkitTextFillColor: 'rgb(0, 93, 255)',
											WebkitTextStrokeColor: 'rgb(0, 93, 255)',
										}}
										className={'freelance-category-card-content-bottom'}
									>
										<div
											style={{
												blockSize: '40px',
												borderBlockEndColor: 'rgb(0, 93, 255)',
												borderBlockStartColor: 'rgb(0, 93, 255)',
												borderBottomColor: 'rgb(0, 93, 255)',
												borderInlineEndColor: 'rgb(0, 93, 255)',
												borderInlineStartColor: 'rgb(0, 93, 255)',
												borderLeftColor: 'rgb(0, 93, 255)',
												borderRightColor: 'rgb(0, 93, 255)',
												borderTopColor: 'rgb(0, 93, 255)',
												boxSizing: 'border-box',
												caretColor: 'rgb(0, 93, 255)',
												color: 'rgb(0, 93, 255)',
												columnRuleColor: 'rgb(0, 93, 255)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.344px',
												lineHeight: '26px',
												marginBlockEnd: '8px',
												marginBottom: '8px',
												marginLeft: 0,
												marginRight: 0,
												outlineColor: 'rgb(0, 93, 255)',
												textDecoration: 'none solid rgb(0, 93, 255)',
												textDecorationColor: 'rgb(0, 93, 255)',
												textEmphasisColor: 'rgb(0, 93, 255)',
												textSizeAdjust: '100%',
												WebkitTextFillColor: 'rgb(0, 93, 255)',
												WebkitTextStrokeColor: 'rgb(0, 93, 255)',
											}}
											className={'mg-bottom-8px'}
										>
											<div
												style={{
													alignItems: 'center',
													blockSize: '40px',

													boxSizing: 'border-box',
													caretColor: 'rgb(0, 93, 255)',
													color: 'rgb(0, 93, 255)',
													columnRuleColor: 'rgb(0, 93, 255)',
													cursor: 'pointer',
													display: 'flex',
													fontFamily: 'Onest, sans-serif',
													fontSize: '16px',
													inlineSize: '266.344px',
													justifyContent: 'space-between',
													lineHeight: '26px',
													marginLeft: 0,
													marginRight: 0,
													outlineColor: 'rgb(0, 93, 255)',
												}}
												className={'flex-horizontal space-between'}
											>
												<h3
													style={{
														blockSize: '34px',

														color: 'rgb(28, 31, 35)',

														cursor: 'pointer',
														fontFamily: 'Onest, sans-serif',
														fontSize: '24px',
														inlineSize: '117.734px',
														lineHeight: '34.008px',

														outlineColor: 'rgb(28, 31, 35)',
														textDecoration: 'none solid rgb(28, 31, 35)',
														textDecorationColor: 'rgb(28, 31, 35)',
														textEmphasisColor: 'rgb(28, 31, 35)',
														textSizeAdjust: '100%',
														WebkitTextFillColor: 'rgb(28, 31, 35)',
														WebkitTextStrokeColor: 'rgb(28, 31, 35)',
													}}
													className={'mg-bottom-0 card-title'}
												>
													大数据云计算工程师
												</h3>
												<div
													style={{
														alignItems: 'center',
														backgroundColor: 'rgb(255, 255, 255)',
														blockSize: '40px',
														border: '1px solid rgb(28,31,35)',
														borderRadius: '50%',
														color: 'rgb(28, 31, 35)',
														cursor: 'pointer',
														display: 'flex',
														fontFamily: 'Onest, sans-serif',
														fontSize: '18px',
														inlineSize: '40px',
														justifyContent: 'center',
														lineHeight: '18px',
														marginLeft: 0,
														marginRight: 0,
														minBlockSize: '40px',
														minHeight: '40px',
														minInlineSize: '40px',
														minWidth: '40px',
														outlineColor: 'rgb(28, 31, 35)',

														transitionDelay: '0s, 0s, 0s, 0s',
														transitionDuration: '0.3s, 0.3s, 0.3s, 0.3s',
														transitionProperty:
															'border-color, transform, background-color, color',
														transitionTimingFunction: 'ease, ease, ease, ease',
													}}
													className={'btn-circle-secondary small no-hover'}
												>
													<div
														style={{
															blockSize: '18px',
															color: 'rgb(28, 31, 35)',
															cursor: 'pointer',
															fontFamily: 'Onest, sans-serif',
															fontSize: '18px',
															inlineSize: '17.2812px',
															lineHeight: '18px',
														}}
													>
														<span
															style={{
																color: 'rgb(28, 31, 35)',

																cursor: 'pointer',
																fontFamily: 'Line Rounded Icons, sans-serif',
																fontSize: '18px',
																lineHeight: '18px',
															}}
															className={'line-rounded-icon'}
														>
															
														</span>
													</div>
												</div>
											</div>
										</div>
										<p
											style={{
												blockSize: '78px',

												color: 'rgb(95, 104, 122)',
												cursor: 'pointer',
												fontFamily: 'Onest, sans-serif',
												fontSize: '16px',
												inlineSize: '266.344px',
												lineHeight: '26px',
												outlineColor: 'rgb(95, 104, 122)',
											}}
											className={'color-neutral-600 mg-bottom-0'}
										>
											Lorem ipsum dolor sit amet lorem non consectetur
											adipiscing elit amet.
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const steps = [
	{
		label: '选择学习线路',
		description: `在你开始学习旅程之前，请选择将来你职场生涯的发展路线以及你的个人学习兴趣。
        当然你也可以做一个全能选手，但这需要时间的沉淀，虽说术业有专攻，但你花在学习上的每一个硬币
        都会给你成为你成功的垫脚石。  
                         ---杨坤`,
		componentContent: <ThreeDirection />,
	},
	{
		label: 'Create an ad group',
		description:
			'An ad group contains one or more ads which target a shared set of keywords.',
		componentContent: <SystemAdminContainer />,
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues!!!`,
		componentContent: <FullStackDeveloper />,
	},
];

export default function VerticalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box className='w-full'>
			<Stepper
				activeStep={activeStep}
				orientation='vertical'
			>
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === 2 ? (
									<Typography variant='caption'>最后一步</Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							{step.componentContent && step.componentContent}
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant='contained'
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === steps.length - 1 ? '结束' : '继续'}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										返回上一步
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper
					square
					elevation={0}
					sx={{ p: 3 }}
				>
					<Typography>你已成功设置选课的过程</Typography>
					<Button
						onClick={handleReset}
						sx={{ mt: 1, mr: 1 }}
					>
						重选
					</Button>
				</Paper>
			)}
		</Box>
	);
}
