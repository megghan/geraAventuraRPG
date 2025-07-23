import { useState } from 'react';
import { gerarAventura } from './gerador';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import './style.scss';

function App() {
  const [aventuraTexto, setAventuraTexto] = useState("Clique no botão!");
  const [npcTexto1, setNpcTexto1] = useState("");
  const [npcTexto2, setNpcTexto2] = useState("");

  function handleAventura(){
    const {aventura, npc1,npc2} = gerarAventura();
    setAventuraTexto(aventura);
    setNpcTexto1(npc1);
    setNpcTexto2(npc2);
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <div className='main-layout'>
          <SidebarLeft />
           <main className='main-content'>
            <button onClick={handleAventura} className='genadvButton'><span>Gerar Aventura</span></button>
            <div className="resultado">
              <h2>Aventura</h2>
              <p>{aventuraTexto}</p>
              <h2>NPC Envolvido</h2>
              <p>{npcTexto1}</p>  
              <p>{npcTexto2}</p>     
            </div>           
          </main>
          <SidebarRight />
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
