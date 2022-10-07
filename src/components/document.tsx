import Title from './title';
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from 'react-icons/md';
import {BsArrowLeftShort} from 'react-icons/bs';

const Document = () => (
  <div className="document-container">
    <div className="title-container">
      <BsArrowLeftShort className="back-to-home" />
      <Title docTitle="Untitiled Document" />
    </div>
    <div className="toolbar">
      <MdFormatBold className="toolbar-icons" />
      <MdFormatItalic className="toolbar-icons" />
      <MdFormatUnderlined className="toolbar-icons" />
      <MdFormatAlignLeft className="toolbar-icons" />
      <MdFormatAlignCenter className="toolbar-icons" />
      <MdFormatAlignRight className="toolbar-icons" />
      <MdFormatAlignJustify className="toolbar-icons" />
    </div>

    <textarea className="writing-area" name="doc" id="doc-text"></textarea>
  </div>
);

export default Document;
