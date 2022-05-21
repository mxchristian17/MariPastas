import React from 'react'

const GeneralContext = React.createContext()

export const GeneralContextProvider = ({children}) => {

    const fontStyle = { 'fontFamily' : "'Courier Prime', monospace" }

    return (
        <GeneralContext.Provider value={{ fontStyle : fontStyle }}>
            {children}
        </GeneralContext.Provider>
    )

}

export default GeneralContext