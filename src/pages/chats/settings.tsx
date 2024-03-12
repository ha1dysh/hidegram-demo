import { twMerge } from "tailwind-merge";
import BackBtn from "@/components/backBtn";
import Header from "@/components/header";
import EditButton from "@/components/editBtn";
import Input from "@/components/ui/input";
import Divider from "@/components/ui/divider";
import Switcher from "@/components/ui/switcher";
import Scrollable from "@/components/scrollable";

function ChatSettings() {
	return (
		<>
			<Header>
				<BackBtn />

				<div
					className={twMerge(
						"text-center md:text-left",
						"md:text-center"
					)}
				>
					<h1 className="text-lg font-medium md:text-base">Mark</h1>
					<p className="text-[13px] md:text-[14px] text-gray">
						ID:18539181214
					</p>
				</div>

				<EditButton />
			</Header>

			<Scrollable className="py-[35px] max-w-2xl mx-auto gap-[35px]">
				<div>
					<div className="mb-[6px] ml-[16px] text-gray">
						CONTACT DATA
					</div>
					<div className="bg-darkGray rounded-[10px]">
						<Input
							defaultValue="Chat Name"
							className="text-gray md:rounded-[10px]"
						/>
						<Divider full />
						<Input defaultValue="1234567" className="text-gray" />
						<Divider full />
						<Input
							defaultValue="Onxiros"
							className="text-gray md:rounded-[10px]"
						/>
					</div>
				</div>

				<div>
					<div className="mb-[6px] ml-[16px] text-gray">
						CONTACT DATA
					</div>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							defaultValue="Chat Name"
							className="text-gray md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4"
						/>
					</div>
					<div className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						SEARCH TYPE
					</div>
					<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px] hover:bg-hover cursor-pointer">
						<span>I Saved My Password</span>
						<Switcher />
					</label>
					<div className="px-4 text-sm text-gray">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<button className="w-full min-h-[44px] max-w-2xl px-4 text-blue md:text-left bg-darkGray md:rounded-[10px] mx-auto">
					Load To Access
				</button>

				<button className="w-full min-h-[44px] max-w-2xl px-4 text-red md:text-left bg-darkGray md:rounded-[10px] mx-auto">
					Delete Chat
				</button>
			</Scrollable>
		</>
	);
}

export default ChatSettings;
