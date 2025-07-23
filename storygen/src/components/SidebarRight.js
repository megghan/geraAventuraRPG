import React, {useState,useEffect} from 'react';

function SidebarRight()
{
    const[notes,setNotes] = useState(()=>{
        try {
            return localStorage.getItem('userNotes') || "";
        } catch(err) {
            console.warn("falha:",err);
            return "";
        }
        
    });
    useEffect(()=>{
        try{
            localStorage.setItem('userNotes', notes);}
            catch (err){
                console.warn("falha ao salvar notas",err);
            }
    },[notes]);

    function fazerMudanca(e){
        setNotes(e.target.value);
    }
    return(
        <aside className="sidebar right">
            <h3>Notas de Campanha</h3>
            <textarea value={notes} onChange={fazerMudanca} 
            placeholder='Escreva seus planos, segredos e magias' 
            rows={10} className='notas-textarea' 
            ></textarea>
        </aside>
    );
}
export default SidebarRight;