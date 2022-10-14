import {BsPlus} from 'react-icons/bs';
import {nanoid} from 'nanoid';
import {Link} from 'react-router-dom';
import {Docs} from '../App';
import {Dispatch, FC} from 'react';

interface Props {
  docs: Docs[];
  setDocs: Dispatch<React.SetStateAction<Docs[] | []>>;
}

const Home: FC<Props> = ({docs, setDocs}) => {
  const addDoc = (): Docs => {
    const date = new Date();
    const newDoc: Docs = {
      id: nanoid(),
      title: 'Untitiled Document',
      date: date.toLocaleDateString(),
    };
    const newDocs: Docs[] = [newDoc, ...docs];
    setDocs(newDocs);
    return newDoc;
  };

  const createNewDoc = () => {
    addDoc();
  };

  return (
    <div className="home-container">
      <div className="doc-cards-container">
        <div className="doc-card" onClick={createNewDoc}>
          <BsPlus size={'50px'} />
          <p>Create New Document</p>
        </div>
        {docs.map(doc => {
          return (
            <Link key={doc.id} to={`/doc/${doc.id}`} className="docLink">
              <div className="doc-card">
                <p>{doc.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
