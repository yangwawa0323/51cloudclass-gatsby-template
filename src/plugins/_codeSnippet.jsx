// lazy load this file to keep initial bundle small
import * as React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import '../styles/_code_snippet_plugin.scss';

const CodeSnippet = ({ code, language }) => (
  <SyntaxHighlighter
    useInlineStyles={true}
    wrapLongLines
    className="syntax-high-lighter-plugin"
    language={language}
    style={style}
    showLineNumbers
    wrapLines
  >
    {code}
  </SyntaxHighlighter>
);

export default CodeSnippet;
