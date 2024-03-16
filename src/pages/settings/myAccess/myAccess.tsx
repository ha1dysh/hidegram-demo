import { NavLink } from "react-router-dom";
import Header from "@/components/header";
import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Scrollable from "@/components/scrollable";
import Switcher from "@/components/ui/switcher";
import Divider from "@/components/ui/divider";

function MyAccess() {
	return (
		<>
			<Header className="justify-between">
				<BackBtn to=".." />
				<span className="text-lg font-semibold">Access</span>
				<EditBtn className="invisible" />
			</Header>

			<Scrollable className="max-w-2xl mx-auto">
				<div>
					<p className="mb-[6px] pl-4 text-sm text-gray">
						ACCESS SETTINGS
					</p>
					<div className="bg-darkGray md:rounded-[10px]">
						<NavLink
							to="/settings/edit-nickname"
							className="h-[50px] px-4 flex justify-between items-center md:rounded-t-[10px] hover:bg-hover cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Edit Nickname
							</p>
							<img src="/arrow-right.svg" alt="arrow left icon" />
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/edit-password"
							className="h-[50px] px-4 flex justify-between items-center hover:bg-hover cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Edit Password
							</p>
							<img src="/arrow-right.svg" alt="arrow left icon" />
						</NavLink>
						<Divider full />

						<NavLink
							to="/settings/my-access"
							className="h-[50px] px-[14px] flex justify-between items-center hover:bg-hover md:rounded-b-[10px] cursor-pointer"
						>
							<p className="text-[17px] font-medium">
								Default Nickname
							</p>
							<div className="flex gap-4">
								<p className="text-[15px] text-gray">
									Unknownuser5213
								</p>
								<img
									src="/arrow-right.svg"
									alt="arrow left icon"
								/>
							</div>
						</NavLink>
					</div>
				</div>

				<div>
					<p className="mb-[6px] pl-4 text-sm text-gray">
						CHAT SETTINGS
					</p>
					<div className="bg-darkGray md:rounded-[10px]">
						<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-t-[10px] text-[17px] hover:bg-hover cursor-pointer">
							<span className="select-none">
								Save Unread Messages
							</span>
							<Switcher />
						</label>
						<Divider full />

						<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 text-[17px] hover:bg-hover cursor-pointer">
							<span className="select-none">
								Load All Chats On Connection
							</span>
							<Switcher />
						</label>
						<Divider full />

						<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-b-[10px] text-[17px] hover:bg-hover cursor-pointer">
							<span className="select-none">
								Provide Default Data in Change
							</span>
							<Switcher />
						</label>
					</div>
				</div>

				<div>
					<div className="px-4 text-sm text-gray mb-[6px]">
						SYNCHRONIZATION
					</div>
					<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px] hover:bg-hover cursor-pointer">
						<span className="select-none">
							Save Settings To Access
						</span>
						<Switcher />
					</label>
					<div className="px-4 text-sm text-gray">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<button className="w-full min-h-[44px] px-4 text-red md:text-left bg-darkGray md:rounded-[10px] hover:bg-hover">
					Delete Access Data
				</button>

				<button className="w-full min-h-[44px] px-4 text-red md:text-left bg-darkGray md:rounded-[10px] hover:bg-hover">
					Log Out
				</button>
			</Scrollable>
		</>
	);
}

export default MyAccess;
