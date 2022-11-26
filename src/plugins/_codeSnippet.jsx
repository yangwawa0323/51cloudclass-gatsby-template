// lazy load this file to keep initial bundle small
import * as React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs as style} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeSnippet = ({ code, language }) => (
  <SyntaxHighlighter className='font-medium leading-9 rounded-md shadow-lg' wrapLongLines language={language} style={style} showLineNumbers wrapLines>
    {code}
  </SyntaxHighlighter>
);

export default CodeSnippet;