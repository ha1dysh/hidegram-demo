import Header from "@/components/header";
import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Input from "@/components/ui/input";
import Scrollable from "@/components/scrollable";

function EditPassword() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Edit Password</span>
				<EditBtn />
			</Header>

			<Scrollable className="max-w-2xl mx-auto">
				<div>
					<p className="mb-[6px] ml-[16px] text-gray text-sm">
						ENTER YOUR OLD PASSWORD
					</p>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text"
							className="md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<p className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</p>
				</div>

				<div>
					<p className="mb-[6px] ml-[16px] text-gray text-sm">
						ENTER YOUR NEW PASSWORD
					</p>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text Field"
							className="md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<p className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</p>
				</div>

				<div>
					<p className="mb-[6px] ml-[16px] text-gray text-sm">
						CONFIRM PASSWORD
					</p>
					<div className="bg-darkGray flex md:rounded-[10px]">
						<Input
							type="password"
							placeholder="Text Field"
							className="md:rounded-[10px]"
						/>
						<img
							src="/show-password.svg"
							alt="show password icon"
							className="mr-4 cursor-pointer"
						/>
					</div>
					<p className="px-4 text-sm text-gray mt-[9px]">
						Turn this off if you want to receive notifications only
						from your active account.
					</p>
				</div>

				<button className="w-full min-h-[44px] px-4 text-blue text-center md:text-left bg-darkGray md:rounded-[10px]">
					Apply
				</button>
			</Scrollable>
		</>
	);
}

export default EditPassword;
