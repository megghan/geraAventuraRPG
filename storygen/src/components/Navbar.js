import React, {useEffect, useState} from "react";

function Navbar(){
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        document.body.classList.remove('light','dark');
        document.body.classList.add(theme);
    },[theme]);
    
    function handleThemeToogle(){
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
        document.body.className =theme === 'light' ? 'dark' : 'light';
        //criar logica
    }

    return(
        <header className="navbar">
            <h1>StoryGen</h1>
            <button onClick={handleThemeToogle} className="light-dark">
                {theme === 'dark'? '💡' : '💤'}</button>  
        </header>
    );
}

export default Navbar;