import {useState, FC, useEffect} from 'react';
import ReactQuill from 'react-quill';

interface Props {
  placeholder?: string;
}

const Editor: FC<Props> = ({placeholder}) => {
  const [editorHtml, setEditorHtml] = useState<string>('');

  useEffect(() => {
    console.log(editorHtml);
  }, [editorHtml]);

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'align',
    'link',
    'image',
    'video',
  ];

  const modules = {
    toolbar: [
      [{header: '1'}, {header: '2'}, {font: []}],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{align: []}],
      [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <ReactQuill
      value={editorHtml}
      onChange={setEditorHtml}
      modules={modules}
      formats={formats}
      bounds={'.app'}
      placeholder={placeholder}
    />
  );
};

export default Editor;
