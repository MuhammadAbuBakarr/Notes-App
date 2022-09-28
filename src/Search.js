import React from "react";

const Search = ({ handleSearch }) => {
	return (
		<div className="mt-5">
			<div className="flex justify-center">
				<input
					className="w-1/2 h-11 border-slate-400 rounded-lg placeholder:pl-3 placeholder:text-slate-600 border-2"
					type="text"
					onChange={(e) => handleSearch(e.target.value)}
					placeholder="Search Notes"
				/>
			</div>
		</div>
	);
};

export default Search;
