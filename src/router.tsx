import { createBrowserRouter } from "react-router-dom";
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
import Language from "./pages/settings/language.tsx";
import Database from "./pages/settings/database/database.tsx";
import Product from "./pages/settings/database/product.tsx";
import Order from "./pages/settings/database/order.tsx";
import Number from "./pages/settings/database/number.tsx";
import Search from "./pages/settings/database/search.tsx";
import Notifications from "./pages/settings/notifications.tsx";
import Feedback from "./pages/settings/feedback.tsx";
import BugReport from "./pages/settings/bugReport.tsx";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ path: "/access", element: <Access />, children: [] },
			{
				path: "/change",
				element: <Change />,
			},
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
					{ path: "language", element: <Language /> },
					{ path: "database", element: <Database /> },
					{ path: "db-product", element: <Product /> },
					{ path: "db-order", element: <Order /> },
					{ path: "db-number", element: <Number /> },
					{ path: "db-search", element: <Search /> },
					{ path: "notifications", element: <Notifications /> },
					{ path: "feedback", element: <Feedback /> },
					{ path: "bug-report", element: <BugReport /> },
				],
			},
		],
	},
];
const router = createBrowserRouter(routes);
export default router;
