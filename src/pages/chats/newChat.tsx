import BackBtn from "../../components/backBtn";
import EditButton from "../../components/editBtn";
import Input from "../../components/ui/input";

function NewChat() {
	return (
		<div className="w-full h-full">
			<header className="h-[60px] border-b border-borderColor flex px-4 items-center justify-between sticky top-0">
				<BackBtn />
				<span>New Chat</span>
				<EditButton />
			</header>

			<div className="pt-[35px] flex flex-col gap-[35px] scrollbar-none h-[calc(100%-95px)]">
				<div className="max-w-screen-md mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT HEADER
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

				<div className="max-w-screen-md mx-auto">
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

				<div className="max-w-screen-md mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						MY NICKNAME
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="max-w-screen-md mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						PASSWORD
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>

				<div className="max-w-screen-md mx-auto">
					<div className="px-4 text-sm text-gray mb-[6px]">
						CHAT HEADER
					</div>
					<Input
						placeholder="Enter Your Master Password"
						className="h-[50px] px-4 md:rounded-[10px] text-[17px] mb-[9px]"
					/>
					<div className="px-4 text-sm text-gray">
						If you change your password, your messages recipient
						must also change it to suspect the conversation.
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewChat;
