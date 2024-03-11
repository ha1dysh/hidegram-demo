import { NavLink, Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import SidebarWrapper from "@/components/sidebarWrapper";
import ContentWrapper from "@/components/contentWrapper";
import Menu from "@/components/menu/menu";
import Input from "@/components/ui/input";
import Divider from "@/components/ui/divider";

import SearchIcon from "/search-icon.svg";
import NewChatIcon from "/newChat.svg";

import { fakeChats } from "./fakeData";
import Header from "@/components/header";
import EditBtn from "@/components/editBtn";

function Chats() {
	const active = useLocation().pathname;

	return (
		<>
			<SidebarWrapper>
				<Header className="h-[70px] gap-4">
					<EditBtn className="md:hidden" />

					<div className="relative hidden w-full md:block">
						<Input className="h-9 pl-9 rounded-[10px]" />
						<img
							src={SearchIcon}
							alt="search icon"
							className="absolute left-[10px] top-[9px]"
						/>
					</div>

					<div className="text-lg font-medium md:hidden md:text-base">
						Chats
					</div>

					<NavLink to="/chats/new-chat">
						<img
							src={NewChatIcon}
							alt="new chat icon"
							className="cursor-pointer"
						/>
					</NavLink>
				</Header>

				<ul className="h-[calc(100%-140px)] md:h-[calc(100%-120px)] scrollbar-none">
					{fakeChats.map((chat) => {
						return (
							<div key={chat.id}>
								<li>
									<NavLink
										to={`userId${chat.id}`}
										className={twMerge(
											"grid grid-cols-8 grid-rows-2 p-4 cursor-pointer hover:bg-hover",
											active.includes(
												`userId${chat.id}`
											) && "bg-hover"
										)}
									>
										<div className="col-span-6 font-medium">
											{chat.name}
										</div>
										<div className="grid col-span-2 text-right text-gray text-[13px] relative top-[-10px]">
											{chat.date}
										</div>
										<div className="col-span-7 line-clamp-1 text-[15px] text-gray">
											{chat.lastMessage}
										</div>
										<div className="flex text-sm rounded-full bg-blue justify-self-end size-5 place-content-center">
											<span>{chat.unreadMessages}</span>
										</div>
									</NavLink>
								</li>
								<Divider />
							</div>
						);
					})}
				</ul>

				<Menu />
			</SidebarWrapper>

			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</>
	);
}

export default Chats;
