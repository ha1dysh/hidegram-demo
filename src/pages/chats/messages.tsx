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
							className={`md:bg-darkGray pl-3 px-[6px] pr-[8px] md:px-[18px] pt-3 pb-[6px] rounded-tr-2xl rounded-bl-2xl md:rounded-tr-[14px] md:rounded-bl-[14px] ${
								bob
									? "max-w-[calc(80%)] self-end rounded-tl-2xl md:rounded-tl-[14px] bg-blue"
									: "max-w-[calc(80%)] self-start rounded-br-2xl md:rounded-br-[14px] bg-darkGray"
							}`}
						>
							<div className="mb-1 text-[17px] md:text-sm">
								{message.content.file?.type === "image" && (
									<img
										src={message.content.file.url}
										alt="image file"
										className="mb-4"
									/>
								)}
								{message.content.text}
							</div>
							<div
								className={twMerge(
									"text-[11px] md:text-xs text-gray text-right",
									bob
										? "text-[#D7D7D7] md:text-gray"
										: "text-gray"
								)}
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
