import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./pages/layout.tsx";
import NotFound from "./pages/notFound.tsx";

import Access from "./pages/access/access.tsx";
import Change from "./pages/change/change.tsx";
import Chats from "./pages/chats/chats.tsx";
import Messages from "./pages/chats/messages.tsx";
import NewChat from "./pages/chats/newChat.tsx";
import Settings from "./pages/settings/settings.tsx";
import ChatSettings from "./pages/chats/chatSettings.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ path: "/access", element: <Access /> },
			{ path: "/change", element: <Change /> },
			{
				path: "/chats",
				element: <Chats />,
				children: [
					{
						path: ":userId",
						element: <Messages />,
					},

					{ path: "chatSettings", element: <ChatSettings /> },
					{ path: "newChat", element: <NewChat /> },
				],
			},
			{ path: "/settings", element: <Settings /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
