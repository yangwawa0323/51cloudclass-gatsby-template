import html5video from '@react-page/plugins-html5-video';
import slate from '@react-page/plugins-slate';
import spacer from '@react-page/plugins-spacer';
// import '@react-page/editor/lib/index.css';
import divider from '@react-page/plugins-divider';
import {asciinemaPlugin as asciinema }from './asciinema';


export const cellPlugins = [slate(), html5video, spacer, divider, asciinema];
