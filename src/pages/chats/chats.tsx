import { NavLink, Outlet } from "react-router-dom";

import SidebarWrapper from "@/components/sidebarWrapper";
import ContentWrapper from "@/components/contentWrapper";
import Menu from "@/components/menu/menu";
import Input from "@/components/ui/input";
import Header from "@/components/header";
import EditBtn from "@/components/editBtn";

import SearchIcon from "/search-icon.svg";
import NewChatIcon from "/icon-new-chat.svg";

import { fakeChats } from "../../../fakeData";
import Scrollable from "@/components/scrollable";
import { useState } from "react";
import ChatItem from "./chatItem";

function Chats() {
	const [isEdit, setIsEdit] = useState(false);

	return (
		<>
			<SidebarWrapper>
				<Header className="md:h-[70px] md:p-[14px] md:gap-[14px] border-none">
					<EditBtn
						className="text-left md:hidden"
						onClick={() => setIsEdit((s) => !s)}
					>
						{isEdit ? "Done" : "Edit"}
					</EditBtn>

					<div className="relative hidden w-full md:block">
						<Input
							placeholder="Search"
							className="h-9 pl-[32px] rounded-[10px]"
						/>
						<img
							src={SearchIcon}
							alt="search icon"
							className="absolute left-[10px] top-[9px]"
						/>
					</div>

					<div className="text-lg font-semibold md:hidden md:text-base">
						Chats
					</div>

					<NavLink to="/chats/new-chat" className="w-[55px] md:w-fit">
						<img
							src={NewChatIcon}
							alt="new chat icon"
							className="ml-auto cursor-pointer"
						/>
					</NavLink>
				</Header>

				<Scrollable className="h-[calc(100%-124px)] md:h-[calc(100%-120px)] py-0 gap-0">
					{fakeChats.map((chat) => {
						return (
							<ChatItem key={chat.id} isEdit={isEdit} {...chat} />
						);
					})}
				</Scrollable>

				<Menu />
			</SidebarWrapper>

			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</>
	);
}

export default Chats;
