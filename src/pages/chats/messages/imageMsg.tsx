import { twMerge } from "tailwind-merge";
import { Message } from "./messageItem";

type Props = {
	message: Message;
	isMe: boolean;
	isName: boolean;
	notMyLastMsgInGroup: boolean;
	myLastMsgInGroup: boolean;
	notMyFirstMsgInGroup: boolean;
	myFirstMsgInGroup: boolean;
};

function ImageMsg({
	message,
	isMe,
	isName,
	myFirstMsgInGroup,
	myLastMsgInGroup,
	notMyFirstMsgInGroup,
	notMyLastMsgInGroup,
}: Props) {
	return (
		<div>
			{isName && (
				<p
					className={twMerge(
						"h-7 md:h-6 pt-1.5 px-[10px] pb-1",
						"font-medium text-[15px] md:text-xs"
					)}
				>
					{message.sender.name}
				</p>
			)}
			<img
				src={message.content.url}
				alt="image"
				className={twMerge(
					// prettier-ignore
					isMe
						? twMerge("rounded rounded-l-[14px]", 
							myFirstMsgInGroup && "rounded-tl-[14px]",
							myLastMsgInGroup && "rounded-br-[14px]")
						: twMerge("rounded-bl rounded-br-[14px]",
							!isName && 'rounded-tr-[14px] rounded-tl', 
							notMyFirstMsgInGroup && "rounded-tl-[14px]",
							notMyLastMsgInGroup && "rounded-bl-[14px]")
				)}
			/>
		</div>
	);
}

export default ImageMsg;
