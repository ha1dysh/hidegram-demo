import { twMerge } from "tailwind-merge";
import ImageMsg from "./imageMsg";
import FileMsg from "./fileMsg";
import TextMsg from "./textMsg";

export type Message = {
	id: string;
	type: string;
	content: {
		text?: string;
		title?: string;
		url?: string;
		icon?: string;
		description?: string;
	};
	sender: { id: string; name: string };
	timestamp: string;
	status: string;
	isRead: boolean;
};

type Props = {
	message: Message;
	isMoreThanTwoAuthors: boolean;
	isSameAuthor: { prev: boolean; next: boolean };
};

function MessageItem({ message, isMoreThanTwoAuthors, isSameAuthor }: Props) {
	const isMe = message.sender.name === "Bob";
	const isName = isMoreThanTwoAuthors && !isMe && !isSameAuthor.next;

	const myFirstMsgInGroup = isSameAuthor.prev && !isSameAuthor.next;
	const notMyFirstMsgInGroup = isSameAuthor.prev && !isSameAuthor.next;
	const myLastMsgInGroup = !isSameAuthor.prev && isSameAuthor.next;
	const notMyLastMsgInGroup = !isSameAuthor.prev && isSameAuthor.next;

	return (
		<li
			className={twMerge(
				"max-w-[calc(75%)] md:max-w-[calc(45%)]",
				"mt-2 rounded",

				// prettier-ignore
				isMe
					? twMerge("self-end bg-blue rounded-l-[14px]", 
                        myFirstMsgInGroup && "rounded-tr-[14px]",
                        myLastMsgInGroup && "rounded-br-[14px]",)
					: twMerge("self-start bg-darkGray rounded-r-[14px]",
                        notMyFirstMsgInGroup && "rounded-tl-[14px]",
                        notMyLastMsgInGroup && "rounded-bl-[14px]",),

				message.type === "image" &&
					"max-w-[80%] md:max-w-[30%] rounded-t-[14px]",
				isSameAuthor.next && "mt-1"
			)}
		>
			{message.type === "text" && (
				<TextMsg
					message={message}
					isMe={isMe}
					isName={isName}
					isSameAuthor={isSameAuthor}
				/>
			)}

			{message.type === "image" && (
				<ImageMsg
					message={message}
					isMe={isMe}
					isName={isName}
					notMyLastMsgInGroup={notMyLastMsgInGroup}
					myLastMsgInGroup={myLastMsgInGroup}
					notMyFirstMsgInGroup={notMyFirstMsgInGroup}
					myFirstMsgInGroup={myFirstMsgInGroup}
				/>
			)}

			{message.type === "file" && (
				<FileMsg message={message} isName={isName} isMe={isMe} />
			)}
		</li>
	);
}
export default MessageItem;
