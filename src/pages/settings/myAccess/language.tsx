import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Header from "@/components/header";
import Divider from "@/components/ui/divider";

function Language() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Language</span>
				<EditBtn className="invisible" />
			</Header>
			<div className="max-w-2xl mx-auto pt-[35px] h-[calc(100%-60px)] md:h-[calc(100%-50px)] scrollbar-none">
				<form className="flex flex-col bg-darkGray md:rounded-[10px]">
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">English</span>
							<span className="text-[13px]">English</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
							defaultChecked
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Arabic</span>
							<span className="text-[13px]">العربية</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Catalan</span>
							<span className="text-[13px]">Català</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Dutch</span>
							<span className="text-[13px]">Nederlands</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">French</span>
							<span className="text-[13px]">Français</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">German</span>
							<span className="text-[13px]">Deutsch</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Indonesian</span>
							<span className="text-[13px]">
								Bahasa Indonesia
							</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Italian</span>
							<span className="text-[13px]">Italiano</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Korean</span>
							<span className="text-[13px]">한국어</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Malay</span>
							<span className="text-[13px]">Bahasa Melayu</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
					<Divider full />
					<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer hover:bg-[#111]">
						<div className="flex flex-col">
							<span className="text-[17px]">Persian</span>
							<span className="text-[13px]">فارسی</span>
						</div>
						<input
							type="radio"
							name="language"
							className="invisible checked:visible"
						/>
					</label>
				</form>
			</div>
		</>
	);
}

export default Language;
