import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const chrLimit = 100;

	const handleChange = (e) => {
		if (chrLimit - e.target.value.length >= 0) {
			setNoteText(e.target.value);
		} else alert("Limit Exceed");
	};

	const handleSave = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
		}
		setNoteText("");
	};

	return (
		<div className="flex p-4 m-2 flex-col bg-emerald-400 rounded-2xl justify-between shadow-xl w-72 h-64">
			<textarea
				className="bg-transparent outline-none text-black placeholder:text-black resize-none"
				placeholder="Type Your Note Here"
				name=""
				id=""
				cols="30"
				rows="10"
				value={noteText}
				onChange={handleChange}
			></textarea>

			<div className=" flex flex-col justify-between">
				<div className="flex justify-around items-center">
					<span className="">
						{chrLimit - noteText.length} Characters Remaining
					</span>
					<div
						onClick={handleSave}
						className="bg-red-500 px-4 py-1 shadow-md rounded-xl text-white hover:bg-red-300 cursor-pointer "
					>
						Save
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddNote;
