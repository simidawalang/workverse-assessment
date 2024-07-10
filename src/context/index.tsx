"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext({} as any);

export const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [todoList, setTodoList] = useState([{ id: 1, task: "Sweep" }, {id: 2, task :"Cook"}]);
  
  return <AppContext.Provider value={{ todoList, setTodoList }}>{children}</AppContext.Provider >
}

export const useAppContext = () => {
  return useContext(AppContext);
}