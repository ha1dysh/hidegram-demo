import { NavLink } from "react-router-dom";
import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Divider from "@/components/ui/divider";
import Switcher from "@/components/ui/switcher";

function MyAccess() {
	return (
		<>
			<Header className="justify-between">
				<BackBtn />
				<span>Access</span>
				<EditBtn />
			</Header>

			<div className="h-[calc(100%-60px)] md:h-[calc(100%-50px)] scrollbar-none">
				<p className="max-w-2xl mt-[35px] mb-[6px] pl-4 mx-auto text-sm text-gray">
					ACCESS SETTINGS
				</p>
				<div className="max-w-2xl mx-auto flex flex-col gap-[35px]">
					<div className="bg-darkGray md:rounded-[10px]">
						<NavLink
							to="/settings/edit-nickname"
							className="relative h-[50px] px-[14px] flex justify-between items-center md:rounded-t-[10px] hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Edit Nickname
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/edit-password"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Edit Password
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/my-access"
							className="relative h-[50px] px-[14px] flex justify-between items-center hover:bg-[#111] md:rounded-b-[10px] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Default Nickname
							</p>
							<p className="text-[15px] text-gray mr-4">
								Unknownuser5213
							</p>
							<img
								src="/arrow-right.svg"
								alt="arrow left icon"
								className="absolute -translate-y-1/2 right-4 top-1/2"
							/>
						</NavLink>
					</div>

					<div>
						<p className="max-w-2xl mb-[6px] pl-4 mx-auto text-sm text-gray">
							CHAT SETTINGS
						</p>
						<div className="bg-darkGray md:rounded-[10px]">
							<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] hover:bg-[#111] cursor-pointer">
								<span className="select-none">
									Save Unread Messages
								</span>
								<Switcher />
							</label>
							<Divider full />

							<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] hover:bg-[#111] cursor-pointer">
								<span className="select-none">
									Load All Chats On Connection
								</span>
								<Switcher />
							</label>
							<Divider full />

							<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] hover:bg-[#111] cursor-pointer">
								<span className="select-none">
									Provide Default Data in Change
								</span>
								<Switcher />
							</label>
						</div>
					</div>

					<div className="w-full max-w-2xl mx-auto">
						<div className="px-4 text-sm text-gray mb-[6px]">
							SYNCHRONIZATION
						</div>
						<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px] hover:bg-[#111] cursor-pointer">
							<span className="select-none">
								Save Settings To Access
							</span>
							<Switcher />
						</label>
						<div className="px-4 text-sm text-gray">
							Turn this off if you want to receive notifications
							only from your active account.
						</div>
					</div>

					<button className="w-full min-h-[44px] max-w-2xl px-4 text-red md:text-left bg-darkGray md:rounded-[10px] mx-auto">
						Delete Access Data
					</button>

					<button className="w-full min-h-[44px] max-w-2xl px-4 text-red md:text-left bg-darkGray md:rounded-[10px] mx-auto">
						Log Out
					</button>
				</div>
			</div>
		</>
	);
}

export default MyAccess;
