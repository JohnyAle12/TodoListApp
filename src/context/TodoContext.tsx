import { createContext } from "react";
import { ContextApp } from "../types/types";

const context: ContextApp = {}

export const TodoContext = createContext(context);
