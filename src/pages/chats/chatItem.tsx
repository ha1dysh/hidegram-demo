import { NavLink, useLocation } from "react-router-dom";
import { fakeChats } from "../../../fakeData";
import { twMerge } from "tailwind-merge";
import Divider from "@/components/ui/divider";

type Props = {
	isEdit: boolean;
} & (typeof fakeChats)[number];
function ChatItem({
	name,
	isEdit,
	id,
	date,
	lastMessage,
	unreadMessages,
}: Props) {
	const { pathname } = useLocation();

	return (
		<>
			<Wrapper isEdit={isEdit} id={id}>
				{isEdit && (
					<div className="row-span-2 place-self-center">
						<input
							type="checkbox"
							value={id}
							onChange={() => console.log(id)}
						/>
					</div>
				)}
				<div className="col-span-6 font-medium">{name}</div>
				<div className="col-span-7 line-clamp-1 text-[15px] text-gray">
					{lastMessage}
				</div>

				<div className="col-span-2 text-right text-gray text-[13px] relative top-[-4px]">
					{date}
				</div>
				<div className="relative bottom-[-4px] min-w-[20px] min-h-[20px] max-h-[20px] flex text-sm justify-self-end place-content-center bg-blue rounded-full">
					<span className="leading-normal px-1.5">
						{unreadMessages}
					</span>
				</div>
			</Wrapper>
			<Divider
				className={twMerge(
					pathname.includes(`user-id-${id}`) && "invisible"
				)}
			/>
		</>
	);
}
export default ChatItem;

type WrapperProps = {
	children: React.ReactNode;
	isEdit: boolean;
	id: number;
};
function Wrapper({ children, isEdit, id }: WrapperProps) {
	const { pathname } = useLocation();

	if (isEdit) {
		return (
			<label className="h-[76px] p-4 grid grid-cols-8 grid-rows-2 grid-flow-col cursor-pointer hover:bg-hover">
				{children}
			</label>
		);
	}

	return (
		<NavLink
			to={`user-id-${id}`}
			className={twMerge(
				"h-[76px] p-4 grid grid-cols-8 grid-rows-2 grid-flow-col cursor-pointer hover:bg-hover",
				pathname.includes(`user-id-${id}`) && "bg-hover"
			)}
		>
			{children}
		</NavLink>
	);
}
