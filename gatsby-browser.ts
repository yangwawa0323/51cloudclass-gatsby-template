import './src/styles/global.css';
import './src/styles.css';
import './src/styles/index.scss';

import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;
//
import gsap from 'gsap';
import { ScrollTrigger, } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger,);
