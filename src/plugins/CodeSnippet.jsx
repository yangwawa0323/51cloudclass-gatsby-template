import React from 'react';

// lazy load to keep initial bundle small
const CodeSnippet = React.lazy(()=> import('./_codeSnippet'));

const codeSnippet = {
  Renderer: ({ data }) =>
    data?.code ? (
      <CodeSnippet language={data.language} code={data.code} />
    ) : null,
  id: 'code-snippet',
  title: 'Code snippet',
  description: 'A code snippet',
  version: 1,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        language: {
          type: 'string',
        },
        code: {
          type: 'string',
          uniforms: {
            multiline: true,
          },
        },
      },
      required: ['code', 'language'],
    },
  },
};
export default codeSnippet;
