import Title from './Title';
import Editor from './Editor';
import 'react-quill/dist/quill.snow.css';
import {Link} from 'react-router-dom';
import {BsArrowLeftShort} from 'react-icons/bs';
import {FC} from 'react';

interface Props {
  id: string;
}

const Document: FC<Props> = ({id}) => {
  console.log(id);
  return (
    <div className="doc-section">
      <div className="document-container">
        <div className="title-container">
          <Link to="/">
            <BsArrowLeftShort className="back-to-home" />
          </Link>
          <Title docTitle="Untitiled Document" />
        </div>

        <Editor placeholder="Start writing here...." />
      </div>
    </div>
  );
};

export default Document;
