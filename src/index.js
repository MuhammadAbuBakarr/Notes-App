import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { notesProvider } from "./contexts/notes.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<notesProvider>
			<App />
		</notesProvider>
	</React.StrictMode>
);
