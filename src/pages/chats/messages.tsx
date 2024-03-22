import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import BackBtn from "@/components/backBtn";
import EditButton from "@/components/editBtn";
import Header from "@/components/header";
import Input from "@/components/ui/input";
import Scrollable from "@/components/scrollable";

import MessageItem from "./messageItem";
import { fakeMessages } from "@/../fakeData";

function Messages() {
	const isMoreThanTwoAuthors =
		[...new Set(fakeMessages.map((msg) => msg.sender.name))].length > 2;

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

			<Scrollable className="h-[calc(100%-112px)] md:h-[calc(100%-110px)] p-[10px] pt-[35px] flex-col-reverse gap-0">
				{fakeMessages.map((message, i) => {
					return (
						<MessageItem
							key={message.id}
							{...message}
							isMoreThanTwoAuthors={isMoreThanTwoAuthors}
							isPreviousSameAuthor={
								fakeMessages[i + 1]?.sender.name ===
								message.sender.name
							}
						/>
					);
				})}
			</Scrollable>

			<form className="h-[58px] md:h-[50px] flex border-t border-borderColor bg-darkGray md:bg-black">
				<label className="min-w-fit pt-[15px] pr-3 pl-[14px] flex">
					<img
						src="/icon-plus.svg"
						alt="add file icon"
						className="size-[19px]"
					/>
					<input type="file" className="w-0 h-0 opacity-0" />
				</label>
				<Input
					placeholder="Text"
					className="h-[38px] mt-[6px] mr-2 bg-black rounded-[20px]"
				/>

				<button className="hidden min-w-32 text-blue md:block">
					Send message
				</button>

				<button className="md:hidden h-[38px] mt-[6px] mr-[12px]">
					<img
						src="/send-button.svg"
						alt="send message icon"
						className="min-w-[38px] min-h-[38px]"
					/>
				</button>
			</form>
		</>
	);
}

export default Messages;
