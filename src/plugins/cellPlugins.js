import slate from '@react-page/plugins-slate';
import divider from '@react-page/plugins-divider';
import spacer from '@react-page/plugins-spacer';
import html5video from '@react-page/plugins-html5-video';
import asciinema  from './AsciinemaPlugin';
import codeSnippet from '../plugins/CodeSnippet';


export const baseCellPlugins = [
    slate(),
    divider,
    spacer,
    html5video,
    asciinema,
    codeSnippet,
];


