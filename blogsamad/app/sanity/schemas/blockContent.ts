import { defineType } from 'sanity'

const blockContent = defineType({
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
      {
        title: "Block",
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "Quote", value: "blockquote" },
        ],
        lists: [{ title: "Bullet", value: "bullet" }], 
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          annotations: [
            {
              title: "URL",
              name: "link",
              type: "object",
              fields: [
                {
                  title: "URL",
                  name: "href",
                  type: "string",
                },
                {
                  title: "Open in new tab",
                  name: "blank",
                  type: "boolean",
                },
              ],
              initialValue: {
                blank: true,
              },
            },
          ],
        },
      },
      {
        type: "image",
        options: { hotspot: true },
      },
  
      {
        type: "code",
        name: "code",
        title: "Code Blocks",
        options: {
          language: "javascript",
          languageAlternatives: [
            { title: "Plain text", value: "text" },
            { title: "JavaScript", value: "javascript" },
            { title: "HTML", value: "html" },
            { title: "CSS", value: "css" },
            { title: "TypeScript", value: "typescript" },
            { title: "JSX", value: "jsx" },
            { title: "MySQL", value: "mysql" },
            { title: "Shell", value: "sh" },
          ],
          withFilename: false,
        },
      },
  
      {
        type: 'object',
        name: 'customTable',
        title: 'Table',
        fields: [
          {
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [{
              type: 'object',
              name: 'row',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{
                    type: 'string'
                  }]
                }
              ]
            }]
          }
        ]
      }
    ],
  });
  export default blockContent;