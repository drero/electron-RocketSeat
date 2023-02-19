import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";

export interface onContentUpdatedParams {
  title: string,
  content: string
}

interface EditorProps {
  content: string,
  onContentUpdate: (params: onContentUpdatedParams) => void
}

export function Editor({ content, onContentUpdate }: EditorProps) {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*'
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography, 
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass: 'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      })
    ],
    onUpdate: ({editor}) => { 
      const contentRegex = /(<h1>(?<title>.+)<\/h1>(?<content>.+)?)/
      const parsedContend = editor.getHTML().match(contentRegex)?.groups
      
      const title = parsedContend?.title ?? 'Untitled'
      const content = parsedContend?.content ?? ''

      onContentUpdate({
        title,
        content,
      })
    },
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert prose-headings:mt-0',
      }
    }
  })

  return (
    <EditorContent className="w-[65ch]" editor={editor} />
  )
}