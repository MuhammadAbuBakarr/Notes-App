import { useState, createContext } from "react";

export const notesContext = createContext({
	notesArr: [],
	setNotesArr: () => null,
});

export const notesProvider = ({ children }) => {
	const [notesArr, setNotesArr] = useState([]);
	const value = { notesArr, setNotesArr };
	return (
		<notesContext.Provider value={value}>{children}</notesContext.Provider>
	);
};
