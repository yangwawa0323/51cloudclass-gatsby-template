import React from 'react'


import MarkdownEditor from '@uiw/react-markdown-editor';
import '@uiw/react-markdown-editor/markdown-editor.css';
import { debugLog } from '51cloudclass-utilities/utils';
import { useState } from 'react';

const MyMarkdown = (props) => {
    const [value, setValue] = useState(props.data?.content)

    const handleChange = (e) => {
        setValue(e)
        props.onChange({
            content: e,
        })
    }
    return (
        // <OutlinedInput value={value} onChange={handleChange} />
        <MarkdownEditor minHeight='100px' value={value} onChange={handleChange} autoFocus inputMode='text' aria-disabled onClickCapture={(e) => {
            debugLog("click capture");
            e.preventDefault();
            e.stopPropagation()
            return false;
        }} />
    )

}


const markdownEditor = {
    Renderer: ({ data, readOnly }) => {
        return <MarkdownEditor.Markdown source={data.content} />
    },
    id: 'markdown-editor',
    title: 'markdown editor',
    description: 'React markdown editor/ preview',
    version: 1,
    controls: {
        type: 'custom',
        Component: MyMarkdown,
    },


}

export default markdownEditor;

