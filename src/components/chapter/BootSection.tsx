/** @format */

import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ChapterContext } from './ChapterContextProvider';

const BootSection = () => {
	const [description, setDescription] = useState<{ __html: string }>();

	const { chapter } = useContext(ChapterContext);

	useEffect(() => {
		const pContent = document.querySelectorAll(
			'.react-page-row .react-page-cell p'
		)[0].innerHTML;
		// debugLog('p element', p.innerHTML);
		setDescription({
			__html:
				pContent.length >= 60
					? [...pContent].slice(0, 60).join('') + '...'
					: pContent,
		});
	}, []);

	return (
		<div className='gsap-boot-section'>
			<div
				style={{
					backgroundColor: 'rgb(239, 243, 250)',
					color: 'rgb(95, 104, 122)',
					fontSize: '16px',
					lineHeight: '26px',
					outlineColor: 'rgb(95, 104, 122)',
					overflowX: 'hidden',
					overflowY: 'hidden',
					paddingBlockStart: '16px',
					paddingTop: '16px',
					right: '0px',
					top: '0px',
				}}
				className={'section home-hero-section wf-section'}
			>
				<div
					style={{
						// blockSize: '543.734px',
						boxSizing: 'border-box',
						color: 'rgb(95, 104, 122)',
						fontFamily: 'Onest, sans-serif',
						fontSize: '16px',
						lineHeight: '26px',
						maxWidth: '1244px',
						outlineColor: 'rgb(95, 104, 122)',
					}}
					className={'p-4 container-default w-container'}
				>
					<div
						style={{
							alignItems: 'center',
							blockSize: '543.734px',
							boxSizing: 'border-box',
							caretColor: 'rgb(95, 104, 122)',
							color: 'rgb(95, 104, 122)',
							columnGap: '64px',
							columnRuleColor: 'rgb(95, 104, 122)',
							display: 'grid',
							fontFamily: 'Onest, sans-serif',
							fontSize: '16px',
							gridAutoColumns: '1fr',
							gridTemplateColumns: '424.5px 707.5px',
							gridTemplateRows: '543.734px',
							inlineSize: '1196px',
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
						className={'grid-2-columns home-hero-grid'}
					>
						<div
							className='gsap-course-name-div'
							style={{
								color: 'rgb(95, 104, 122)',
								fontSize: '16px',
								gridColumnEnd: 'span 1',
								gridColumnStart: 'span 1',
								gridRowEnd: 'span 1',
								gridRowStart: 'span 1',
								inlineSize: '415px',
								lineHeight: '26px',
								marginLeft: 0,
								marginRight: 0,
								maxInlineSize: '415px',
								maxWidth: '415px',
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(95, 104, 122)',
								textDecoration: 'none solid rgb(95, 104, 122)',
								textDecorationColor: 'rgb(95, 104, 122)',
								textEmphasisColor: 'rgb(95, 104, 122)',
								textSizeAdjust: '100%',
								transform: 'matrix(1, 0, 0, 1, 0, 0)',
								transformOrigin: '207.5px 161.906px',
								transformStyle: 'preserve-3d',
								WebkitTextFillColor: 'rgb(95, 104, 122)',
								WebkitTextStrokeColor: 'rgb(95, 104, 122)',
							}}
						>
							<h1
								style={{
									blockSize: '168.047px',
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
									fontSize: '48px',
									inlineSize: '415px',
									lineHeight: '56.016px',
									marginBlockEnd: '12px',
									marginBlockStart: '0px',
									marginBottom: '12px',
								}}
								className='mb-4'
							>
								{chapter.name}
							</h1>
							<p
								style={{
									blockSize: '52px',
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
									inlineSize: '415px',
									lineHeight: '26px',
									marginBlockEnd: '32px',
									marginBlockStart: '0px',
									marginBottom: '32px',
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
								className='mb-8 text-ellipsis'
								dangerouslySetInnerHTML={description}
							></p>
							<div
								style={{
									alignItems: 'center',
									blockSize: '59.7656px',

									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									display: 'flex',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '415px',
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
								className={'buttons-row'}
							>
								<a
									style={{
										backgroundColor: 'rgb(0, 93, 255)',
										blockSize: '59.7656px',
										borderBlockEndColor: 'rgb(0, 93, 255)',
										borderBlockEndStyle: 'solid',
										borderBlockEndWidth: '1px',
										borderBlockStartColor: 'rgb(0, 93, 255)',
										borderBlockStartStyle: 'solid',
										borderBlockStartWidth: '1px',
										borderBottomColor: 'rgb(0, 93, 255)',
										borderBottomLeftRadius: '48px',
										borderBottomRightRadius: '48px',
										borderBottomStyle: 'solid',
										borderBottomWidth: '1px',
										borderEndEndRadius: '48px',
										borderEndStartRadius: '48px',
										borderInlineEndColor: 'rgb(0, 93, 255)',
										borderInlineEndStyle: 'solid',
										borderInlineEndWidth: '1px',
										borderInlineStartColor: 'rgb(0, 93, 255)',
										borderInlineStartStyle: 'solid',
										borderInlineStartWidth: '1px',
										borderLeftColor: 'rgb(0, 93, 255)',
										borderLeftStyle: 'solid',
										borderLeftWidth: '1px',
										borderRightColor: 'rgb(0, 93, 255)',
										borderRightStyle: 'solid',
										borderRightWidth: '1px',
										borderStartEndRadius: '48px',
										borderStartStartRadius: '48px',
										borderTopColor: 'rgb(0, 93, 255)',
										borderTopLeftRadius: '48px',
										borderTopRightRadius: '48px',
										borderTopStyle: 'solid',
										borderTopWidth: '1px',
										boxSizing: 'border-box',
										caretColor: 'rgb(255, 255, 255)',
										color: 'rgb(255, 255, 255)',
										columnRuleColor: 'rgb(255, 255, 255)',
										cursor: 'pointer',
										display: 'block',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										fontWeight: 700,
										inlineSize: '173.281px',
										justifyContent: 'center',
										lineHeight: '17.776px',
										marginInlineEnd: '20px',
										marginLeft: 0,
										marginRight: 0,
										minBlockSize: 'auto',
										minHeight: 'auto',
										minInlineSize: 'auto',
										minWidth: 'auto',
										outlineColor: 'rgb(255, 255, 255)',
										paddingBlockEnd: '20px',
										paddingBlockStart: '20px',
										paddingBottom: '20px',
										paddingInlineEnd: '28px',
										paddingInlineStart: '28px',
										paddingLeft: '28px',
										paddingRight: '28px',
										paddingTop: '20px',
										textAlign: 'center',
										textDecoration: 'none',
										textDecorationColor: 'rgb(255, 255, 255)',
										textEmphasisColor: 'rgb(255, 255, 255)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '86.6406px 29.8828px',
										transformStyle: 'preserve-3d',
										transitionDelay: '0s, 0s, 0s, 0s',
										transitionDuration: '0.3s, 0.3s, 0.3s, 0.3s',
										transitionProperty:
											'border-color, background-color, transform, color',
										transitionTimingFunction: 'ease, ease, ease, ease',
										WebkitTextFillColor: 'rgb(255, 255, 255)',
										WebkitTextStrokeColor: 'rgb(255, 255, 255)',
									}}
									href={'https://workplacetemplate.webflow.io/packages'}
								>
									Hire freelancer
								</a>
								<a
									style={{
										blockSize: '59.7656px',
										borderBlockEndColor: 'rgb(16, 27, 68)',
										borderBlockEndStyle: 'solid',
										borderBlockEndWidth: '1px',
										borderBlockStartColor: 'rgb(16, 27, 68)',
										borderBlockStartStyle: 'solid',
										borderBlockStartWidth: '1px',
										borderBottomColor: 'rgb(16, 27, 68)',
										borderBottomLeftRadius: '48px',
										borderBottomRightRadius: '48px',
										borderBottomStyle: 'solid',
										borderBottomWidth: '1px',
										borderEndEndRadius: '48px',
										borderEndStartRadius: '48px',
										borderInlineEndColor: 'rgb(16, 27, 68)',
										borderInlineEndStyle: 'solid',
										borderInlineEndWidth: '1px',
										borderInlineStartColor: 'rgb(16, 27, 68)',
										borderInlineStartStyle: 'solid',
										borderInlineStartWidth: '1px',
										borderLeftColor: 'rgb(16, 27, 68)',
										borderLeftStyle: 'solid',
										borderLeftWidth: '1px',
										borderRightColor: 'rgb(16, 27, 68)',
										borderRightStyle: 'solid',
										borderRightWidth: '1px',
										borderStartEndRadius: '48px',
										borderStartStartRadius: '48px',
										borderTopColor: 'rgb(16, 27, 68)',
										borderTopLeftRadius: '48px',
										borderTopRightRadius: '48px',
										borderTopStyle: 'solid',
										borderTopWidth: '1px',
										boxSizing: 'border-box',
										caretColor: 'rgb(16, 27, 68)',
										color: 'rgb(16, 27, 68)',
										columnRuleColor: 'rgb(16, 27, 68)',
										cursor: 'pointer',
										display: 'block',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '202.594px',
										lineHeight: '17.776px',
										marginLeft: 0,
										marginRight: 0,
										minBlockSize: 'auto',
										minHeight: 'auto',
										minInlineSize: 'auto',
										minWidth: 'auto',
										outlineColor: 'rgb(16, 27, 68)',
										paddingBlockEnd: '20px',
										paddingBlockStart: '20px',
										paddingBottom: '20px',
										paddingInlineEnd: '28px',
										paddingInlineStart: '28px',
										paddingLeft: '28px',
										paddingRight: '28px',
										paddingTop: '20px',
										textAlign: 'center',
										textDecoration: 'none',
										textDecorationColor: 'rgb(16, 27, 68)',
										textEmphasisColor: 'rgb(16, 27, 68)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '101.297px 29.8828px',
										transformStyle: 'preserve-3d',
										transitionDelay: '0s, 0s, 0s, 0s',
										transitionDuration: '0.3s, 0.3s, 0.3s, 0.3s',
										transitionProperty:
											'border-color, transform, background-color, color',
										transitionTimingFunction: 'ease, ease, ease, ease',
										WebkitTextFillColor: 'rgb(16, 27, 68)',
										WebkitTextStrokeColor: 'rgb(16, 27, 68)',
									}}
									href={
										'https://workplacetemplate.webflow.io/apply-as-freelancer'
									}
								>
									Apply as freelancer
								</a>
							</div>
						</div>
						<div
							style={{
								alignItems: 'center',
								blockSize: '543.734px',

								bottom: '0px',
								boxSizing: 'border-box',
								caretColor: 'rgb(95, 104, 122)',
								color: 'rgb(95, 104, 122)',
								columnRuleColor: 'rgb(95, 104, 122)',
								display: 'flex',
								fontFamily: 'Onest, sans-serif',
								fontSize: '16px',
								gridColumnEnd: 'span 1',
								gridColumnStart: 'span 1',
								gridRowEnd: 'span 1',
								gridRowStart: 'span 1',
								inlineSize: '749.938px',
								insetBlockEnd: '0px',
								insetBlockStart: '0px',
								insetInlineEnd: '0px',
								insetInlineStart: '0px',
								justifyContent: 'flex-start',
								left: '0px',
								lineHeight: '26px',
								marginLeft: 0,
								marginRight: 0,
								maxInlineSize: '765px',
								maxWidth: '765px',
								minBlockSize: 'auto',
								minHeight: 'auto',
								minInlineSize: 'auto',
								minWidth: 'auto',
								outlineColor: 'rgb(95, 104, 122)',
								position: 'relative',
								right: '0px',
								textDecoration: 'none solid rgb(95, 104, 122)',
								textDecorationColor: 'rgb(95, 104, 122)',
								textEmphasisColor: 'rgb(95, 104, 122)',
								textSizeAdjust: '100%',
								top: '0px',
								WebkitTextFillColor: 'rgb(95, 104, 122)',
								WebkitTextStrokeColor: 'rgb(95, 104, 122)',
								width: '749.938px',
								height: '543.734px',
							}}
						>
							<div
								style={{
									blockSize: '164.781px',

									bottom: '259.344px',
									boxShadow: 'rgba(30, 30, 30, 0.08) 0px 2px 12px 0px',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '272px',
									insetBlockEnd: '259.344px',
									insetBlockStart: '119.609px',
									insetInlineEnd: '0px',
									insetInlineStart: '477.938px',
									left: '477.938px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									maxInlineSize: '272px',
									maxWidth: '272px',
									outlineColor: 'rgb(95, 104, 122)',
									position: 'absolute',
									right: '0px',
									textDecoration: 'none solid rgb(95, 104, 122)',
									textDecorationColor: 'rgb(95, 104, 122)',
									textEmphasisColor: 'rgb(95, 104, 122)',
									textSizeAdjust: '100%',
									top: '119.609px',
									transform: 'matrix(1, 0, 0, 1, 0, 0)',
									transformOrigin: '136px 82.3906px',
									WebkitTextFillColor: 'rgb(95, 104, 122)',
									WebkitTextStrokeColor: 'rgb(95, 104, 122)',
								}}
							>
								<div
									style={{
										blockSize: '164.781px',
										border: '1px solid rgb(234, 236, 242)',
										boxShadow: 'rgba(30, 30, 30, 0.08) 0px 2px 12px 0px',
										boxSizing: 'border-box',
										caretColor: 'rgb(95, 104, 122)',
										color: 'rgb(95, 104, 122)',
										columnRuleColor: 'rgb(95, 104, 122)',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '272px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										outlineColor: 'rgb(95, 104, 122)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										textDecoration: 'none solid rgb(95, 104, 122)',
										textDecorationColor: 'rgb(95, 104, 122)',
										textEmphasisColor: 'rgb(95, 104, 122)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '136px 82.3906px',
										WebkitTextFillColor: 'rgb(95, 104, 122)',
										WebkitTextStrokeColor: 'rgb(95, 104, 122)',
									}}
									className={
										'image-wrapper gsap-home-hero-right border-radius-12px shadow-02'
									}
								>
									<img
										style={{
											blockSize: '162.781px',
											boxSizing: 'border-box',
											caretColor: 'rgb(95, 104, 122)',
											color: 'rgb(95, 104, 122)',
											columnRuleColor: 'rgb(95, 104, 122)',
											display: 'inline-block',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '270px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											maxInlineSize: '100%',
											maxWidth: '100%',
											outlineColor: 'rgb(95, 104, 122)',

											verticalAlign: 'middle',

											width: '270px',
											height: '162.781px',
										}}
										src={
											'https://assets.website-files.com/63becc2faa5fe5779ca9a7a5/63c97b33b5a2a2ccb797737f_hire-the-best-freelances-in-the-tech-industry-botom-right-image-workplace-x-webflow-template.png'
										}
										alt=''
									></img>
								</div>
								<div
									style={{
										blockSize: '60px',

										bottom: '132.781px',
										boxSizing: 'border-box',
										caretColor: 'rgb(95, 104, 122)',
										color: 'rgb(95, 104, 122)',
										columnRuleColor: 'rgb(95, 104, 122)',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '60px',
										insetBlockEnd: '132.781px',
										insetBlockStart: '-28px',
										insetInlineEnd: '-29.9062px',
										insetInlineStart: '241.906px',
										left: '241.906px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '60px',
										maxWidth: '60px',
										outlineColor: 'rgb(95, 104, 122)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										position: 'absolute',
										right: '-29.9062px',

										top: '-28px',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '30px 30px',
									}}
									className={'image-wrapper home-hero-top-right'}
								>
									<img
										style={{
											blockSize: '60px',

											color: 'rgb(95, 104, 122)',
											columnRuleColor: 'rgb(95, 104, 122)',
											display: 'inline-block',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '60px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											maxInlineSize: '100%',
											maxWidth: '100%',
											outlineColor: 'rgb(95, 104, 122)',

											width: '60px',
											height: '60px',
										}}
										src={
											'https://assets.website-files.com/63becc2faa5fe5779ca9a7a5/63c97b3442030fd18e4137f6_hire-the-best-freelances-in-the-tech-industry-top-right-image-workplace-x-webflow-template.png'
										}
									></img>
								</div>
							</div>
							<div
								style={{
									blockSize: '543.734px',

									bottom: '0px',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '509.953px',
									insetBlockEnd: '0px',
									insetBlockStart: '0px',
									insetInlineEnd: '-209.982px',
									insetInlineStart: '209.969px',
									left: '209.969px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									maxInlineSize: '525px',
									maxWidth: '525px',
									minBlockSize: 'auto',
									minHeight: 'auto',
									minInlineSize: '485px',
									minWidth: '485px',
									outlineColor: 'rgb(95, 104, 122)',
									overflowX: 'hidden',
									overflowY: 'hidden',
									position: 'relative',
									right: '-209.982px',

									top: '0px',
									transform: 'matrix(1, 0, 0, 1, 0, 0)',
									transformOrigin: '254.977px 271.867px',
								}}
								className={'image-wrapper home-hero-main'}
							>
								<img
									style={{
										blockSize: '543.734px',

										boxSizing: 'border-box',
										caretColor: 'rgb(95, 104, 122)',
										color: 'rgb(95, 104, 122)',
										columnRuleColor: 'rgb(95, 104, 122)',
										display: 'inline-block',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '509.953px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '100%',
										maxWidth: '100%',
										outlineColor: 'rgb(95, 104, 122)',
										textDecoration: 'none solid rgb(95, 104, 122)',
										textDecorationColor: 'rgb(95, 104, 122)',
										textEmphasisColor: 'rgb(95, 104, 122)',
										textSizeAdjust: '100%',
										verticalAlign: 'middle',

										width: '509.953px',
										height: '543.734px',
									}}
									src={
										'https://assets.website-files.com/63becc2faa5fe5779ca9a7a5/63bf3f0b4092872e5f66850a_hire-the-best-freelances-in-the-tech-industry-main-image-workplace-x-webflow-template%20(1).png'
									}
								></img>
							</div>
							<div
								style={{
									blockSize: '316.203px',

									bottom: '113.766px',
									boxShadow: 'rgba(20, 20, 43, 0.1) 0px 8px 28px 0px',
									boxSizing: 'border-box',
									caretColor: 'rgb(95, 104, 122)',
									color: 'rgb(95, 104, 122)',
									columnRuleColor: 'rgb(95, 104, 122)',
									fontFamily: 'Onest, sans-serif',
									fontSize: '16px',
									inlineSize: '274px',
									insetBlockEnd: '113.766px',
									insetBlockStart: '113.766px',
									insetInlineEnd: '475.938px',
									insetInlineStart: '0px',
									left: '0px',
									lineHeight: '26px',
									marginLeft: 0,
									marginRight: 0,
									maxInlineSize: '274px',
									maxWidth: '274px',
									outlineColor: 'rgb(95, 104, 122)',
									overflowX: 'hidden',
									overflowY: 'hidden',
									position: 'absolute',
									right: '475.938px',
									textDecoration: 'none solid rgb(95, 104, 122)',
									textDecorationColor: 'rgb(95, 104, 122)',
									textEmphasisColor: 'rgb(95, 104, 122)',
									textSizeAdjust: '100%',
									top: '113.766px',
									transform: 'matrix(1, 0, 0, 1, 0, 0)',
									transformOrigin: '137px 158.102px',
								}}
								className='image-wrapper gsap-home-hero-left'
							>
								<img
									style={{
										blockSize: '105.75px',

										caretColor: 'rgb(95, 104, 122)',
										color: 'rgb(95, 104, 122)',
										columnRuleColor: 'rgb(95, 104, 122)',
										display: 'inline-block',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '274px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										maxInlineSize: '100%',
										maxWidth: '100%',
										outlineColor: 'rgb(95, 104, 122)',
										textDecoration: 'none solid rgb(95, 104, 122)',
										textDecorationColor: 'rgb(95, 104, 122)',
										textEmphasisColor: 'rgb(95, 104, 122)',
										textSizeAdjust: '100%',
										verticalAlign: 'middle',

										width: '274px',
										height: '105.75px',
									}}
									src={
										'https://assets.website-files.com/63becc2faa5fe5779ca9a7a5/63c97b3585306b678b4781b9_hire-the-best-freelances-in-the-tech-industry-top-left-image-workplace-x-webflow-template.png'
									}
									className={'width-100'}
								></img>
								<div
									style={{
										blockSize: '210.453px',

										border: '1px solid rgb(234, 236, 242)',

										boxSizing: 'border-box',
										caretColor: 'rgb(95, 104, 122)',
										color: 'rgb(95, 104, 122)',
										columnRuleColor: 'rgb(95, 104, 122)',
										fontFamily: 'Onest, sans-serif',
										fontSize: '16px',
										inlineSize: '274px',
										lineHeight: '26px',
										marginLeft: 0,
										marginRight: 0,
										outlineColor: 'rgb(95, 104, 122)',
										overflowX: 'hidden',
										overflowY: 'hidden',
										textDecoration: 'none solid rgb(95, 104, 122)',
										textDecorationColor: 'rgb(95, 104, 122)',
										textEmphasisColor: 'rgb(95, 104, 122)',
										textSizeAdjust: '100%',
										transform: 'matrix(1, 0, 0, 1, 0, 0)',
										transformOrigin: '137px 105.227px',
									}}
									className={'image-wrapper home-hero-bottom-left'}
								>
									<img
										style={{
											blockSize: '208.453px',

											boxSizing: 'border-box',
											caretColor: 'rgb(95, 104, 122)',
											color: 'rgb(95, 104, 122)',
											columnRuleColor: 'rgb(95, 104, 122)',
											display: 'inline-block',
											fontFamily: 'Onest, sans-serif',
											fontSize: '16px',
											inlineSize: '272px',
											lineHeight: '26px',
											marginLeft: 0,
											marginRight: 0,
											maxInlineSize: '100%',
											maxWidth: '100%',
											outlineColor: 'rgb(95, 104, 122)',
											textDecoration: 'none solid rgb(95, 104, 122)',
											textDecorationColor: 'rgb(95, 104, 122)',
											textEmphasisColor: 'rgb(95, 104, 122)',
											textSizeAdjust: '100%',
											verticalAlign: 'middle',
											WebkitTextFillColor: 'rgb(95, 104, 122)',
											WebkitTextStrokeColor: 'rgb(95, 104, 122)',
											width: '272px',
											height: '208.453px',
										}}
										src={
											'https://assets.website-files.com/63becc2faa5fe5779ca9a7a5/63c97b3563cbaa152b53b386_hire-the-best-freelances-in-the-tech-industry-botom-left-image-workplace-x-webflow-template.png'
										}
										loading={'lazy'}
										sizes={'100vw'}
									></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BootSection;
