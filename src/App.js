import React from "react";
import { nanoid } from "nanoid";
import NoteList from "./NoteList";
import { useState, useEffect } from "react";
import Search from "./Search";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState("");

	const addNote = (text) => {
		console.log(text);
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotesArr = [...notes, newNote];
		setNotes(newNotesArr);
	};

	const deleteNote = (id) => {
		const newNotesArr = notes.filter((note) => note.id !== id);
		setNotes(newNotesArr);
	};

	return (
		<>
			<Search handleSearch={setSearchText} />
			<NoteList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleDeleteNote={deleteNote}
				handleAddNote={addNote}
			/>
		</>
	);
};

export default App;
