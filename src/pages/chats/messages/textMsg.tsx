import { twMerge } from "tailwind-merge";
import { Message } from "./messageItem";

type Props = {
	message: Message;
	isName: boolean;
	isMe: boolean;
	isSameAuthor: { prev: boolean; next: boolean };
};

function TextMsg({ message, isName, isMe, isSameAuthor }: Props) {
	return (
		<>
			{isName && (
				<p
					className={twMerge(
						"pt-1.5 px-2 md:pt-1",
						(isSameAuthor.next || isSameAuthor.prev) && "px-2.5",
						"text-[15px] md:text-xs font-medium"
					)}
				>
					{message.sender.name}
				</p>
			)}
			<p
				className={twMerge(
					"py-1.5 px-2",
					(isSameAuthor.next || isSameAuthor.prev) && "p-2.5",
					isName && "pt-0"
				)}
			>
				<span className="text-[17px] md:text-sm">
					{message.content.text}
				</span>
				<span
					className={twMerge(
						"relative top-[8px] text-xs float-end pl-2.5 pb-2",
						isMe ? "text-[#DAEFFF]" : "text-[#A1AAB3]"
					)}
				>
					{new Intl.DateTimeFormat("en-US", {
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
					}).format(new Date(message.timestamp))}
				</span>
			</p>
		</>
	);
}

export default TextMsg;
