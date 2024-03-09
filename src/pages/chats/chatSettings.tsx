import { twMerge } from "tailwind-merge";
import BackBtn from "../../components/backBtn";
import Header from "../../components/header";
import EditButton from "../../components/editBtn";

function ChatSettings() {
	return (
		<div className="h-[calc(100%-110px)]">
			<Header className="h-[60px]">
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
		</div>
	);
}

export default ChatSettings;
