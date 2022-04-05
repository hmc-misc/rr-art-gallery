import {useState, useEffect} from 'react'
import ButtonBar from './components/buttonbar';
import Gallery from './components/gallery'
import './App.css';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    document.title=e.target.value;
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
    <main>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
    </main>
    </div>
  );
}

export default App;
