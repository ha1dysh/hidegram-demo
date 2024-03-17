import ContentWrapper from "@/components/contentWrapper";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Menu from "@/components/menu/menu";
import Scrollable from "@/components/scrollable";
import SidebarWrapper from "@/components/sidebarWrapper";
import Divider from "@/components/ui/divider";
import Switcher from "@/components/ui/switcher";
import { NavLink, Outlet } from "react-router-dom";
import { myData } from "@/../fakeData";

function Access() {
	return (
		<>
			<SidebarWrapper>
				<Header>
					<EditBtn className="w-fit" />
					<span className="text-lg font-semibold">Access</span>
					<img
						src="/icon-plus.svg"
						alt="plus icon"
						className="cursor-pointer"
					/>
				</Header>

				<Scrollable className="h-[calc(100%-124px)] md:h-[calc(100%-110px)] md:px-4">
					<div className="w-full max-w-2xl mx-auto">
						<div className="px-4 text-sm text-gray mb-[6px]">
							SHOW PASSWORDS IN CHATS
						</div>
						<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px] hover:bg-hover cursor-pointer">
							<span>Load All Chats</span>
							<Switcher />
						</label>
					</div>

					<div className="bg-darkGray md:rounded-[10px]">
						{myData.map((data) => {
							return <AccessItem key={data.id} {...data} />;
						})}
					</div>
				</Scrollable>

				<Menu />
			</SidebarWrapper>

			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</>
	);
}

export default Access;

function AccessItem(props: (typeof myData)[0]) {
	return (
		<>
			<NavLink
				to={`/access/data-${props.id}`}
				className="w-full h-[58px] px-4 flex justify-between items-center hover:bg-hover first-of-type:rounded-t-[10px] last-of-type:rounded-b-[10px]"
			>
				<div className="flex flex-col">
					<span className="text-[17px] text-left">{props.title}</span>
					<span className="text-[13px] text-gray">
						ID: {props.id}
					</span>
				</div>
				<img src="/arrow-right.svg" alt="arrow left icon" />
			</NavLink>
			<Divider className="last:hidden" />
		</>
	);
}
