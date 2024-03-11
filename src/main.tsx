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
import ChatSettings from "./pages/chats/settings.tsx";
import NewChat from "./pages/chats/newChat.tsx";

import Settings from "./pages/settings/settings.tsx";
import MyAccess from "./pages/settings/myAccess/myAccess.tsx";
import EditNickname from "./pages/settings/myAccess/editNickname.tsx";
import EditPassword from "./pages/settings/myAccess/editPassword.tsx";
import Language from "./pages/settings/myAccess/language.tsx";

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
					{ path: ":userId", element: <Messages /> },
					{ path: "chat-settings", element: <ChatSettings /> },
					{ path: "new-chat", element: <NewChat /> },
				],
			},
			{
				path: "/settings",
				element: <Settings />,
				children: [
					{ path: "my-access", element: <MyAccess /> },
					{ path: "edit-nickname", element: <EditNickname /> },
					{ path: "edit-password", element: <EditPassword /> },
					{
						path: "edit-default-nickname",
						element: <EditNickname />,
					},
					{ path: "language", element: <Language /> },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);