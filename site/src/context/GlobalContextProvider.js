import React from "react"

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  language: 'en',
  searchName: '',
  searchPlace: '',
}

function reducer (state, action) {
  switch (action.type){
    case 'SET_EN': {
      return {
        ...state,
        language: state.language = 'en'
      }      
    }
    case 'SET_RU': {
      return {
        ...state,
        language: state.language = 'ru'
      }      
    }
    case 'SET_BY': {
      return {
        ...state,
        language: state.language = 'be'
      }      
    }     
    case 'SET_NAME': {
      return {
        ...state,
        searchName: state.searchName = action.payload
      }      
    }  
    case 'SET_PLACE': {
      return {
        ...state,
        searchPlace: state.searchPlace = action.payload
      }      
    }  
    default:
      throw new Error('Bad action')
  }
}

const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
export default GlobalContextProvider