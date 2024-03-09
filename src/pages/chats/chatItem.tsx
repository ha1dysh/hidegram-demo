import { NavLink, useLocation } from "react-router-dom";
import Divider from "../../components/ui/divider";
import { twMerge } from "tailwind-merge";

type Props = {
	id: number;
	name: string;
	date: string;
	lastMessage: string;
	unreadMessages: number;
};

function ChatItem({ name, lastMessage, date, id, unreadMessages }: Props) {
	const active = useLocation().pathname.includes(`userId${id}`);

	return (
		<>
			<li className="">
				<NavLink
					to={`userId${id}`}
					className={twMerge(
						"grid grid-cols-8 grid-rows-2 p-4 cursor-pointer hover:bg-hover",
						active && "bg-hover"
					)}
				>
					<div className="col-span-6 font-medium">{name}</div>
					<div className="grid col-span-2 text-right text-gray text-[13px]">
						{date}
					</div>
					<div className="col-span-7 line-clamp-1 text-[15px] text-gray">
						{lastMessage}
					</div>
					<div className="flex text-sm rounded-full bg-blue justify-self-end size-5 place-content-center">
						<span className="text-black">{unreadMessages}</span>
					</div>
				</NavLink>
			</li>
			<Divider />
		</>
	);
}

export default ChatItem;
