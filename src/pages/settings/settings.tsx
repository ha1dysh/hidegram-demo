import { NavLink, Outlet } from "react-router-dom";
import ContentWrapper from "@/components/contentWrapper";
import Header from "@/components/header";
import Menu from "@/components/menu/menu";
import SidebarWrapper from "@/components/sidebarWrapper";
import Divider from "@/components/ui/divider";

function Settings() {
	return (
		<>
			<SidebarWrapper>
				<Header className="h-[70px] md:pl-[32px] bg-black border-none">
					<span className="font-bold text-[34px] select-none">
						Settings
					</span>
					<img
						src="/moon.svg"
						alt="moon icon"
						className="cursor-pointer"
					/>
				</Header>

				<div className="h-[calc(100%-140px)] md:h-[calc(100%-120px)] md:px-4 flex flex-col gap-[35px] scrollbar-none">
					<NavLink to="/settings/my-access">
						<p className="mb-[6px] pl-4 text-gray text-sm">
							MY ACCESS
						</p>
						<div className="relative p-[14px] bg-darkGray md:rounded-[10px] hover:bg-[#111] cursor-pointer">
							<p className="text-[19px] font-medium">Morpheus</p>
							<p className="text-[15px] text-gray">
								ID:21304995678
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</div>
					</NavLink>

					<div className="bg-darkGray md:rounded-[10px]">
						<NavLink
							to="/settings/language"
							className="relative h-[50px] px-[14px] flex justify-between items-center md:rounded-t-[10px] hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">Language</p>
							<p className="text-[15px] text-gray mr-4">
								English
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/database"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">Database</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/notifications"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] md:rounded-b-[10px] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Notifications
							</p>
							<p className="text-[15px] text-gray mr-4">Enable</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
					</div>

					<div className="bg-darkGray md:rounded-[10px]">
						<NavLink
							to="/settings/feedback"
							className="relative h-[50px] px-[14px] flex justify-between items-center md:rounded-t-[10px] hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">Feedback</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/about"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">About</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/privacy-policy"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Privacy Policy
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/bug-report"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] md:rounded-b-[10px] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Bug Report
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
					</div>
				</div>
				<Menu />
			</SidebarWrapper>

			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</>
	);
}

export default Settings;
