import React from "react";
import { useContext, useEffect, useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { notesContext } from "./contexts/notes.context";

const getNotes = async () => {
	try {
		const res = await fetch("/note", {
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		if (res.status === 200) {
			setNotesArr([...data]);
		} else {
			console.log("failed request data");
		}
	} catch (error) {
		console.log(error);
	}
};

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
	const { notesArr, setNotesArr } = useContext(notesContext);
	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="p-8 flex flex-wrap ">
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					handleDeleteNote={handleDeleteNote}
					date={note.date}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NoteList;
