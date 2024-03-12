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

			<div className="max-w-2xl mx-auto mt-[35px] bg-darkGray md:rounded-[10px]">
				<Input
					type="text"
					placeholder="Password"
					className="md:rounded-[10px]"
				/>
				<Divider full />
				<Input
					type="text"
					placeholder="Change Nickname"
					className="md:rounded-[10px]"
				/>
			</div>
		</>
	);
}

export default EditNickname;
