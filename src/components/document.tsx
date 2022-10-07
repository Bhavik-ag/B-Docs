import Title from './title';
import Editor from './Editor';
import 'react-quill/dist/quill.snow.css';

import {BsArrowLeftShort} from 'react-icons/bs';

const Document = () => {
  return (
    <div className="document-container">
      <div className="title-container">
        <BsArrowLeftShort className="back-to-home" />
        <Title docTitle="Untitiled Document" />
      </div>

      <Editor placeholder="Start writing here...." />
    </div>
  );
};

export default Document;
