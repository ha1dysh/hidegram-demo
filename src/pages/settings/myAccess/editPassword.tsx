import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Input from "@/components/ui/input";

function EditPassword() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Edit Password</span>
				<EditBtn />
			</Header>

			<div className="max-w-2xl mx-auto pt-[35px] h-[calc(100%-60px)] md:h-[calc(100%-50px)] scrollbar-none flex flex-col gap-[35px]">
				<div>
					<div className="mb-[6px] ml-[16px] text-gray">
						ENTER YOUR OLD PASSWORD
					</div>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text"
							className="h-[50px] text-gray md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<div className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<div>
					<div className="mb-[6px] ml-[16px] text-gray">
						ENTER YOUR NEW PASSWORD
					</div>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text Field"
							className="h-[50px] text-gray md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<div className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<div>
					<div className="mb-[6px] ml-[16px] text-gray">
						CONFIRM PASSWORD
					</div>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text Field"
							className="h-[50px] text-gray md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<div className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</div>
				</div>

				<button className="w-full min-h-[44px] max-w-2xl px-4 text-blue md:text-left bg-darkGray md:rounded-[10px] mx-auto">
					APPLY
				</button>
			</div>
		</>
	);
}

export default EditPassword;
