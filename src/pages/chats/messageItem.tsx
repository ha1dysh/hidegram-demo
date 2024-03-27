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
	const isMobile = window.innerWidth < 768;

	if (type === "image") {
		return (
			<li
				className={twMerge(
					"relative max-w-[80%] md:max-w-[30%] mt-2",
					isPreviousSameAuthor && "mt-1",
					isBob ? "self-end" : "self-start"
				)}
			>
				{isMoreThanTwoAuthors && !isPreviousSameAuthor && !isBob && (
					<div
						className={twMerge(
							// "absolute top-[6px] left-[8px] py-0.5 bg-[#313131b3] rounded-[5px] text-center",
							"h-[25px] py-0.5 flex items-center rounded-b-none rounded-t-[14px] pl-[10px] text-left bg-[#313131b3]",
							isBob && "hidden"
						)}
					>
						<span className="text-[15px] font-medium md:font-semibold text-[#C8504F] md:text-xs">
							{sender.name}
						</span>
					</div>
				)}
				<img
					src={content.url}
					alt="image"
					className={twMerge(
						"rounded-b-[14px]",
						isBob ? "md:rounded-br rounded-t" : "md:rounded-bl",
						isBob && "md:rounded-t-[14px]"
					)}
				/>
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
					<p
						className={twMerge(
							"text-[15px] font-medium md:font-semibold text-[#C8504F] md:text-xs",
							isBob && "hidden"
						)}
					>
						{sender.name}
					</p>
				)}
				<div className="flex items-center gap-3">
					<svg
						width="40"
						height="53"
						viewBox="0 0 40 53"
						fill="current"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.8109 0.850098C23.5143 0.850098 24.191 1.11965 24.7017 1.60331L38.4617 14.6333C39.0101 15.1527 39.3208 15.8748 39.3208 16.6301V50.8892C39.3208 51.5795 38.7612 52.1392 38.0708 52.1392H1.5C0.809645 52.1392 0.25 51.5795 0.25 50.8892V2.1001C0.25 1.40974 0.809644 0.850098 1.5 0.850098H22.8109Z"
							fill={isMobile ? "white" : "#565961"}
							stroke={isMobile ? "#E9E9EB" : "#6B6E75"}
							strokeWidth="0.5"
						/>
						<path
							d="M25.4883 3.7241L37.5592 15.1547H28.9883C27.0553 15.1547 25.4883 13.5877 25.4883 11.6547V3.7241Z"
							fill={isMobile ? "white" : "#565961"}
							stroke={isMobile ? "#E9E9EB" : "#6B6E75"}
						/>
						<path
							d="M9.07066 34.592V24.2169H10.3261V25.4579H10.4415C10.9177 24.5921 11.7835 24.0798 12.8657 24.0798C14.8354 24.0798 16.1269 25.6743 16.1269 28.0985V28.113C16.1269 30.5516 14.8427 32.1317 12.8657 32.1317C11.7979 32.1317 10.8672 31.5978 10.4415 30.7681H10.3261V34.592H9.07066ZM12.5771 31.0206C13.9985 31.0206 14.8427 29.9239 14.8427 28.113V28.0985C14.8427 26.2876 13.9985 25.1909 12.5771 25.1909C11.163 25.1909 10.2972 26.302 10.2972 28.0985V28.113C10.2972 29.9095 11.163 31.0206 12.5771 31.0206ZM20.5496 32.1317C18.5799 32.1317 17.2884 30.5372 17.2884 28.113V28.0985C17.2884 25.6599 18.5727 24.0798 20.5496 24.0798C21.6174 24.0798 22.5482 24.6137 22.9739 25.4434H23.0893V21.1289H24.3447V31.9946H23.0893V30.7537H22.9739C22.4977 31.6194 21.6319 32.1317 20.5496 32.1317ZM20.8382 31.0206C22.2524 31.0206 23.1182 29.9095 23.1182 28.113V28.0985C23.1182 26.302 22.2524 25.1909 20.8382 25.1909C19.4169 25.1909 18.5727 26.2876 18.5727 28.0985V28.113C18.5727 29.9239 19.4169 31.0206 20.8382 31.0206ZM26.8626 31.9946V25.2558H25.5712V24.2169H26.8626V23.3511C26.8626 21.7999 27.6419 21.0567 29.1209 21.0567C29.424 21.0567 29.6981 21.0784 29.9579 21.1289V22.1317C29.8064 22.1029 29.5971 22.0957 29.3735 22.0957C28.4788 22.0957 28.118 22.5358 28.118 23.3872V24.2169H29.8857V25.2558H28.118V31.9946H26.8626Z"
							fill={isMobile ? "#468CF7" : "white"}
						/>
					</svg>

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
				"max-w-[calc(75%)] md:max-w-[calc(45%)] mt-2 px-3 py-1.5 pr-2 md:p-[10px] md:pt-1",
				"rounded-t-[16px] md:rounded-b md:rounded-t-[14px] md:bg-darkGray",
				isPreviousSameAuthor && "mt-1",
				// prettier-ignore
				isBob
					? twMerge("self-end rounded-bl-[16px] rounded-br-[8px] md:rounded-bl-[14px] bg-blue",
							isPreviousSameAuthor && "rounded-br-[8px] md:rounded-[14px] md:rounded-r")
					: twMerge("self-start rounded-bl-[8px] rounded-br-[16px] md:rounded-br-[14px] bg-darkGray",
							isPreviousSameAuthor && "rounded-tl-[8px] md:rounded-[14px] md:rounded-l")
			)}
		>
			{isMoreThanTwoAuthors && !isPreviousSameAuthor && (
				<p
					className={twMerge(
						"text-[15px] font-medium md:font-semibold text-[#C8504F] md:text-xs",
						isBob && "hidden"
					)}
				>
					{sender.name}
				</p>
			)}
			<p>
				<span className="text-[17px] md:text-sm leading-[22px]">
					{content.text}
				</span>
				<span
					className={twMerge(
						"relative top-[8px] pl-2 float-end text-[11px] md:text-xs pb-1.5",
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
