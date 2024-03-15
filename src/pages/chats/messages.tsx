import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import BackBtn from "@/components/backBtn";
import EditButton from "@/components/editBtn";
import Header from "@/components/header";
import Input from "@/components/ui/input";

import { fakeMessages } from "../../../fakeData";
import Scrollable from "@/components/scrollable";

function Messages() {
	return (
		<>
			<NavLink to="/chats/chat-settings">
				<Header>
					<BackBtn className="md:hidden" />

					<div className={twMerge("text-center md:text-left")}>
						<h1 className="text-lg font-medium md:text-base">
							Mark
						</h1>
						<p className="text-[13px] md:text-[14px] text-gray">
							ID:18539181214
						</p>
					</div>

					<EditButton className="md:hidden" />
				</Header>
			</NavLink>

			<Scrollable className="h-[calc(100%-104px)] md:h-[calc(100%-110px)] p-4 flex-col-reverse gap-2">
				{fakeMessages.map((message) => {
					const bob = !(message.sender.name === "Bob");

					return (
						<li
							key={message.id}
							className={`md:bg-darkGray px-4 py-3 rounded-tr-xl rounded-bl-xl ${
								bob
									? "self-end rounded-tl-xl bg-blue"
									: "self-start rounded-br-xl bg-darkGray"
							}`}
						>
							<div className="text-[17px] md:text-sm">
								{message.content}
							</div>
							<div
								className={`text-[11px] md:text-xs text-[#D7D7D7] ${
									bob && "text-right"
								}`}
							>
								{new Date(message.timestamp)
									.toLocaleTimeString()
									.replace(":00", "")}
							</div>
						</li>
					);
				})}
			</Scrollable>

			<form className="flex items-center h-[50px] border-t border-borderColor bg-darkGray md:bg-black">
				<label className="flex w-12 p-2 place-content-center">
					<img src="/icon-plus.svg" alt="add file icon" />
					<input type="file" className="w-0 h-0 opacity-0" />
				</label>

				<Input
					placeholder="Text"
					className="h-[38px] bg-black rounded-[20px]"
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
