import Switcher from "@/components/ui/switcher";
import BackBtn from "@/components/backBtn";
import EditButton from "@/components/editBtn";
import Input from "@/components/ui/input";

function NewChat() {
	return (
		<div className="w-full h-full">
			<header className="h-[60px] border-b border-borderColor flex px-4 items-center justify-between sticky top-0">
				<BackBtn />
				<span>New Chat</span>
				<EditButton />
			</header>

			<div className="pt-[35px] flex flex-col gap-[35px] scrollbar-none h-[calc(100%-95px)]">
				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT HEADER
					</div>
					<Input
						placeholder="Re-Enter Your Password"
						className="h-[50px] md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT ID
					</div>
					<Input
						placeholder="Re-Enter Your Password"
						className="h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						MY NICKNAME
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						PASSWORD
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT HEADER
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="w-full max-w-2xl mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT FILTER
					</div>
					<label className="flex items-center justify-between bg-darkGray h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px]">
						<span>I Saved My Password</span>
						<Switcher />
					</label>
					<div className="px-4 text-sm text-gray">
						Enter a few words so the sender can be sure that you
						received the code.
					</div>
				</div>

				<button className="w-full min-h-[44px] max-w-2xl px-4 text-blue md:text-left bg-darkGray md:rounded-[10px] mx-auto">
					Create New Chat
				</button>
			</div>
		</div>
	);
}

export default NewChat;
