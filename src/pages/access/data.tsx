import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Scrollable from "@/components/scrollable";
import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Input from "@/components/ui/input";
import Switcher from "@/components/ui/switcher";
import Textarea from "@/components/ui/textarea";

function Data() {
	return (
		<>
			<Header>
				<BackBtn to=".." />
				<span>Wife 2</span>
				<EditBtn />
			</Header>

			<Scrollable className="max-w-2xl mx-auto">
				<div className="bg-darkGray md:rounded-[10px]">
					<div className="relative">
						<Input
							placeholder="Password Name"
							className="md:rounded-t-[10px] placeholder:text-white"
						/>
						<span className="absolute -translate-y-1/2 right-4 top-1/2 text-gray">
							Wife 2
						</span>
					</div>
					<Divider />
					<div className="relative">
						<Input
							placeholder="Chat ID"
							className="placeholder:text-white"
						/>
						<span className="absolute -translate-y-1/2 right-4 top-1/2 text-gray">
							12345678
						</span>
					</div>
					<Divider />
					<div className="relative">
						<Input
							placeholder="My Nickname"
							className="md:rounded-b-[10px] placeholder:text-white"
						/>
						<span className="absolute -translate-y-1/2 right-4 top-1/2 text-gray">
							HtoTut
						</span>
					</div>
				</div>

				<div>
					<span className="px-4 mb-[6px] text-sm text-gray">
						YOUR PASSWORD
					</span>
					<div className="relative">
						<Textarea placeholder="Password" className="h-[50px]" />
						<span className="absolute -translate-y-1/2 right-4 top-1/2 text-gray">
							8UT$ZmF9pd3mgrRhaf8...
						</span>
					</div>
					<p className="mt-[9px] px-4 text-sm text-gray">
						If you change your password, your message recipient must
						also change it to suspect the conversation.
					</p>
				</div>

				<div>
					<div className="flex justify-between px-4 mb-[6px]">
						<span className="text-sm text-gray">NOTE</span>
					</div>
					<Textarea
						placeholder="Add Note"
						className="h-[62px] md:h-[94px]"
					/>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						DEFAULT DATA USAGE
					</div>
					<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-t-[10px] text-[17px] hover:bg-hover cursor-pointer">
						<span>Load To Chat</span>
						<Switcher />
					</label>
					<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-b-[10px] text-[17px] hover:bg-hover cursor-pointer">
						<span>Save Unread Messages</span>
						<Switcher />
					</label>
				</div>

				<Button className="text-red">Delete Password</Button>
			</Scrollable>
		</>
	);
}

export default Data;
