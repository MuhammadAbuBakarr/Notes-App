import React from "react";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<>
			<div className="flex p-4 m-2 flex-col bg-yellow-200 rounded-2xl justify-between shadow-xl w-72 h-64">
				<p className="text-center break-words font-sans ">{text}</p>
				<div className=" flex flex-col justify-between">
					<div className="flex justify-around items-center">
						<span className="">{date}</span>
						<div
							onClick={() => handleDeleteNote(id)}
							className="bg-red-500 px-4 py-1 shadow-md rounded-xl text-white hover:bg-red-300 cursor-pointer "
						>
							Delete
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Note;
