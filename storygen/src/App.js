import { useState } from 'react';
import { gerarAventura } from './gerador';
import './App.css';

function App() {
  const [aventuraTexto, setAventuraTexto] = useState("Clique no botão!");
  const [npcTexto, setNpcTexto] = useState("");

  function handleAventura(){
    const {aventura, npc1,npc2} = gerarAventura();
    setAventuraTexto(aventura);
    setNpcTexto(npc1);
  }

  return (
    <div className="App">
      <div className="container">
    <h1>⚔️ Gerador de Aventuras</h1>
    <button onClick={handleAventura}>Gerar Aventura</button>
    <div className="resultado">
      <h2>Aventura</h2>
      <p>{aventuraTexto}</p>
      <h2>NPC Envolvido</h2>
      <p>{npcTexto}</p>
      
    </div>
  </div>
    </div>
  );
}

export default App;
