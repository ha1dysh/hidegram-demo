import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Divider from "@/components/ui/divider";
import Input from "@/components/ui/input";

function EditNickname() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Edit Nickname</span>
				<EditBtn />
			</Header>

			<div className="max-w-2xl mx-auto mt-[35px] md:bg-darkGray md:rounded-[10px]">
				<Input
					type="text"
					placeholder="Text Field"
					className="md:rounded-[10px] bg-black md:bg-darkGray text-xl border border-borderColor border-x-0 md:border-0"
				/>
				<Divider className="hidden md:block" full />
				<Input
					type="text"
					placeholder="Last Name"
					className="md:rounded-[10px] bg-black md:bg-darkGray text-xl border border-borderColor border-t-0 border-x-0 md:border-0"
				/>
			</div>
		</>
	);
}

export default EditNickname;
