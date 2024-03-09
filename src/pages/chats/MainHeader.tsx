import { NavLink } from "react-router-dom";
import BackBtn from "../../components/backBtn";
import EditButton from "../../components/editBtn";
import { twMerge } from "tailwind-merge";
import Header from "../../components/header";

type Props = {
	isShownChatSettings: boolean;
};

function HeaderMain({ isShownChatSettings }: Props) {
	return (
		<NavLink to="/chats/chatSettings">
			{/* <header className="flex items-center justify-between h-[60px] px-4 bg-darkGray md:bg-black md:text-left border-b border-borderColor"> */}
			<Header className="h-[60px]">
				{/* <BackBtn className="md:hidden" /> */}
				{isShownChatSettings && <BackBtn />}
				<div
					className={twMerge(
						"text-center md:text-left",
						isShownChatSettings && "md:text-center"
					)}
				>
					<h1 className="text-lg font-medium md:text-base">Mark</h1>
					<p className="text-[13px] md:text-[14px] text-gray">
						ID:18539181214
					</p>
				</div>

				{isShownChatSettings && <EditButton />}

				<img
					src="/newChat.svg"
					alt="new chat icon"
					className="size-5 md:hidden"
				/>
				{/* </header> */}
			</Header>
		</NavLink>
	);
}

export default HeaderMain;
