import { twMerge } from "tailwind-merge";

type Props = {
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
			<li
				className={twMerge(
					"relative max-w-[80%] md:max-w-[30%] mt-2",
					isPreviousSameAuthor && "mt-1",
					isBob ? "self-end" : "self-start"
				)}
			>
				{(isMoreThanTwoAuthors && isPreviousSameAuthor) || (
					<div
						className={twMerge(
							"absolute top-[6px] left-[8px] px-1 py-0.5 text-center bg-[#313131b3] rounded-[5px]",
							isBob && "hidden"
						)}
					>
						<span className="text-[15px] text-[#FF8989]">
							{sender.name}
						</span>
					</div>
				)}
				<img src={content.url} alt="image" className="rounded-2xl" />
				<div className="absolute bottom-[6px] right-[8px] w-[37px] h-[16] bg-[#313131] opacity-70 text-center text-[11px] rounded-[5px]">
					{timestamp.slice(11, 16)}
				</div>
			</li>
		);
	} else if (type === "file") {
		return (
			<li
				className={twMerge(
					"max-w-[calc(75%)] md:max-w-[calc(45%)] mt-2 md:bg-darkGray py-3 pl-3 pr-2",
					"rounded-t-[16px] md:rounded-t-[14px] ",
					isPreviousSameAuthor && "mt-1",
					// prettier-ignore
					isBob
					? twMerge("self-end rounded-bl-[16px] rounded-br-[8px] md:rounded-bl-[14px] md:rounded-br-none bg-blue",
							isPreviousSameAuthor && "rounded-br-[8px] md:rounded-[14px]")
					: twMerge("self-start rounded-bl-[8px] rounded-br-[16px] md:rounded-bl-none md:rounded-br-[14px] bg-darkGray",
							isPreviousSameAuthor && "rounded-tl-[8px] md:rounded-[14px]" )
				)}
			>
				{(isMoreThanTwoAuthors && isPreviousSameAuthor) || (
					<p className={twMerge("text-[#EDA0A0]", isBob && "hidden")}>
						{sender.name}
					</p>
				)}
				<div className="flex items-center gap-3">
					<img
						src={content.icon}
						alt="file icon"
						className="w-[40px] h-[52px]"
					/>
					<div className="">
						<p className="text-sm font-medium line-clamp-1">
							{content.title}
						</p>
						<p className="text-[13px] text-[#E9E9EB]">
							{content.description}
						</p>
						<p
							className={twMerge(
								"relative top-[10px] float-end text-[11px] md:text-xs",
								isBob
									? "text-[#D7D7D7] md:text-gray"
									: "text-gray"
							)}
						>
							{timestamp.slice(11, 16)}
						</p>
					</div>
				</div>
			</li>
		);
	}

	return (
		<li
			className={twMerge(
				"max-w-[calc(75%)] md:max-w-[calc(45%)] mt-2 md:bg-darkGray py-[6px] pl-3 pr-2 md:p-[10px]",
				"rounded-t-[16px] md:rounded-t-[14px] ",
				isPreviousSameAuthor && "mt-1",
				// prettier-ignore
				isBob
					? twMerge("self-end rounded-bl-[16px] rounded-br-[8px] md:rounded-bl-[14px] md:rounded-br-none bg-blue",
							isPreviousSameAuthor && "rounded-br-[8px] md:rounded-[14px]")
					: twMerge("self-start rounded-bl-[8px] rounded-br-[16px] md:rounded-bl-none md:rounded-br-[14px] bg-darkGray",
							isPreviousSameAuthor && "rounded-tl-[8px] md:rounded-[14px]" )
			)}
		>
			{(isMoreThanTwoAuthors && isPreviousSameAuthor) || (
				<p className={twMerge("text-[#EDA0A0]", isBob && "hidden")}>
					{sender.name}
				</p>
			)}
			<p className="">
				<span>{content.text}</span>
				<span
					className={twMerge(
						"relative top-[10px] pl-2 float-end text-[11px] md:text-xs pb-1.5",
						isBob ? "text-[#D7D7D7] md:text-gray" : "text-gray"
					)}
				>
					{timestamp.slice(11, 16)}
				</span>
			</p>
		</li>
	);
}

export default MessageItem;
