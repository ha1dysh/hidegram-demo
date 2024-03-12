import Header from "@/components/header";
import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Input from "@/components/ui/input";

function Number() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Database</span>
				<EditBtn className="invisible" />
			</Header>

			<div className="w-full max-w-2xl mx-auto pt-[35px]">
				<div className="px-4 text-sm text-gray mb-[6px]">NUMBER</div>
				<Input className="md:rounded-[10px] text-[17px] mb-[9px]" />
				<div className="px-4 text-sm text-gray">
					Turn this off if you want to receive notifications only from
					your active account.
				</div>
				<button className="w-full min-h-[44px] mt-[35px] px-4 text-blue md:text-left bg-darkGray md:rounded-[10px] mx-auto">
					Apply
				</button>
			</div>
		</>
	);
}

export default Number;
