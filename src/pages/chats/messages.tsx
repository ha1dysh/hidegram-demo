import { Outlet, useLocation } from "react-router-dom";
import Input from "../../components/ui/input";
import HeaderMain from "./MainHeader";

function Messages() {
	const isShownChatSettings = useLocation().pathname.includes("chatSettings");

	return (
		<>
			<HeaderMain isShownChatSettings={isShownChatSettings} />

			{!isShownChatSettings && (
				<main className="h-[calc(100%-110px)]">content</main>
			)}
			{isShownChatSettings && <Outlet />}

			<form className="sticky bottom-0 flex items-center h-[50px] border-t border-borderColor bg-darkGray md:bg-black">
				<label className="flex w-12 p-2 place-content-center">
					<img src="/addFile.svg" alt="add file" />
					<input type="file" className="w-0 h-0 opacity-0" />
				</label>

				<Input
					placeholder="Text"
					className="h-[38px] bg-black rounded-[20px] px-4"
				/>

				<button className="m-3 md:min-w-32">
					<span className="hidden text-blue md:block">
						Send message
					</span>
					<img
						src="/send-button.svg"
						alt="send message icon"
						className="md:hidden"
					/>
				</button>
			</form>
		</>
	);
}

export default Messages;
