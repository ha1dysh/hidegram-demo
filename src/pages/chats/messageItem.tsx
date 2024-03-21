import { twMerge } from "tailwind-merge";

type Props = {
	id: string;
	type: string;
	content: string;
	sender: { id: string; name: string };
	timestamp: string;
	status: string;
	isRead: boolean;
	isMoreThanTwoAuthors: boolean;
	isPreviousSameAuthor: boolean;
};

function MessageItem({
	type,
	content,
	timestamp,
	sender,
	isMoreThanTwoAuthors,
	isPreviousSameAuthor,
}: Props) {
	const isBob = sender.name === "Bob";

	if (type === "image") {
		return (
			<img
				src={content}
				alt="image"
				className={twMerge(
					"max-w-[80%] md:max-w-[30%] rounded-2xl",
					isBob ? "self-end" : "self-start"
				)}
			/>
		);
	}

	return (
		<li
			className={twMerge(
				"max-w-[calc(75%)] md:max-w-[calc(45%)] md:bg-darkGray py-[6px] pl-3 pr-2 md:p-[10px]",
				"rounded-tl-[16px] rounded-tr-[16px] md:rounded-tl-[14px] md:rounded-tr-[14px]",
				isBob
					? `self-end rounded-bl-[16px] rounded-br-[8px] md:rounded-bl-[14px] md:rounded-br-none bg-blue 
                        ${isPreviousSameAuthor && "rounded-l-[16px] md:rounded-[14px]"}`
					: `self-start rounded-bl-[8px] rounded-br-[16px] md:rounded-bl-none md:rounded-br-[14px] bg-darkGray 
                        ${isPreviousSameAuthor && "rounded-l-[16px] md:rounded-[14px]"}`
			)}
		>
			{isMoreThanTwoAuthors && (
				<p className={twMerge("text-[#EDA0A0]", isBob && "hidden")}>
					{sender.name}
				</p>
			)}
			<p className="">
				<span>{content}</span>
				<span
					className={twMerge(
						"relative top-[10px] pl-2 float-end text-[11px] md:text-xs",
						isBob ? "text-[#D7D7D7] md:text-gray" : "text-gray"
					)}
				>
					{new Date(timestamp)
						.toLocaleTimeString()
						.replace(":00", "")}
				</span>
			</p>
		</li>
	);
}

export default MessageItem;
