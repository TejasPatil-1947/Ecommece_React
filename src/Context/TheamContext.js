import { createContext, useState } from "react";

export const TheamContext = createContext();

function TheamProvider(props) {
    const[theme, setTheme] = useState('light');
    return (
        <TheamContext.Provider value={{ theme,setTheme }}>
            {props.children}

        </TheamContext.Provider>


    );
}

export default TheamProvider;