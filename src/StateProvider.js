import React,{createContext,useContext,useReducer} from 'react';
//Prepare the dataLayer
export const StateContext=createContext();
//Wrap Our App And Provide the Data Layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//Pu;; Information from the data layer
export const useStateValue=()=>useContext(StateContext);