import Document from './components/Document';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles.css';
import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';

export interface Docs {
  id: string;
  title: string;
  date: string;
}

function App() {
  const [docs, setDocs] = useState<Docs[] | []>([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home docs={docs} setDocs={setDocs} />} />
        <Route path="/doc">
          {docs.map(doc => {
            return (
              <Route
                key={doc.id}
                path={doc.id}
                element={<Document id={doc.id} />}
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
