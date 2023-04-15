import MarkdownEditor from '@uiw/react-markdown-editor'
import React, { useState } from 'react'
import { debugLog } from '../../utils/tools'

const CommentEditor = () => {
  const [markdown, setMarkdown] = useState('')



  return (
    <div className="m-12 flex flex-col gap-4">
      <MarkdownEditor
        toolbarBottom
        minHeight="100px"
        value={markdown}
        toolbars={[
          'bold', 'italic', 'header'
        ]}
        onChange={setMarkdown}
      />
    </div>
  )
}

export default CommentEditor