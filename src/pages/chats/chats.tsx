import { Outlet } from "react-router-dom";
import ChatSidebar from "./chatSidebar";
import SidebarWrapper from "../../components/sidebarWrapper";
import ContentWrapper from "../../components/contentWrapper";

function Chats() {
	return (
		<>
			<SidebarWrapper>
				<ChatSidebar />
			</SidebarWrapper>

			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</>
	);
}

export default Chats;
