import { NavLink, useLocation } from "react-router-dom";
import Menu from "../../components/menu/menu";
import Input from "../../components/ui/input";

import SearchIcon from "/search-icon.svg";
import NewChat from "/newChat.svg";

import { fakeChats } from "./fakeData";
import { twMerge } from "tailwind-merge";
import Divider from "../../components/ui/divider";

function ChatSidebar() {
	const active = useLocation().pathname;

	return (
		<>
			<header className="flex items-center gap-4 p-4 h-[70px] justify-between">
				<div className="text-blue text-[17px] md:hidden">Edit</div>

				<div className="relative hidden w-full md:block">
					<Input className="h-9 pl-9 rounded-[10px]" />
					<img
						src={SearchIcon}
						alt="search icon"
						className="absolute left-[10px] top-[9px]"
					/>
				</div>

				<div className="md:hidden">Chats</div>

				<NavLink to="/chats/newChat">
					<img
						src={NewChat}
						alt="new chat icon"
						className="cursor-pointer"
					/>
				</NavLink>
			</header>

			<ul className="h-[calc(100%-140px)] md:h-[calc(100%-120px)] scrollbar-none">
				{fakeChats.map((chat) => {
					return (
						<div key={chat.id}>
							<li>
								<NavLink
									to={`userId${chat.id}`}
									className={twMerge(
										"grid grid-cols-8 grid-rows-2 p-4 cursor-pointer hover:bg-hover",
										active.includes(`userId${chat.id}`) &&
											"bg-hover"
									)}
								>
									<div className="col-span-6 font-medium">
										{chat.name}
									</div>
									<div className="grid col-span-2 text-right text-gray text-[13px]">
										{chat.date}
									</div>
									<div className="col-span-7 line-clamp-1 text-[15px] text-gray">
										{chat.lastMessage}
									</div>
									<div className="flex text-sm rounded-full bg-blue justify-self-end size-5 place-content-center">
										<span className="text-black">
											{chat.unreadMessages}
										</span>
									</div>
								</NavLink>
							</li>
							<Divider />
						</div>
					);
				})}
			</ul>

			<Menu />
		</>
	);
}

export default ChatSidebar;
