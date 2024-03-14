import Header from "@/components/header";
import BackBtn from "@/components/backBtn";
import EditBtn from "@/components/editBtn";
import Scrollable from "@/components/scrollable";
import Divider from "@/components/ui/divider";
import Input from "@/components/ui/input";

const languages = [
	{ title: "English", description: "English" },
	{ title: "Arabic", description: "العربية" },
	{ title: "Catalan", description: "Català" },
	{ title: "Dutch", description: "Nederlands" },
	{ title: "French", description: "Français" },
	{ title: "German", description: "Deutsch" },
	{ title: "Indonesian", description: "Bahasa Indonesia" },
	{ title: "Italian", description: "Italiano" },
	{ title: "Korean", description: "한국어" },
	{ title: "Malay", description: "Bahasa Melayu" },
	{ title: "Persian", description: "فارسی" },
];

function Language() {
	return (
		<>
			<Header>
				<BackBtn />
				<span className="text-lg font-semibold">Language</span>
				<EditBtn className="invisible" />
			</Header>

			<Scrollable className="max-w-2xl mx-auto py-[35px]">
				<div className="relative w-full px-4 mb-2 md:hidden">
					<Input
						placeholder="Search"
						className="h-9 pl-9 rounded-[10px]"
					/>
					<img
						src="/search-icon.svg"
						alt="search icon"
						className="absolute left-[26px] top-[9px]"
					/>
				</div>

				<div className="md:bg-darkGray md:rounded-[10px]">
					{languages.map((lang) => (
						<LangItem key={lang.title} {...lang} />
					))}
				</div>
			</Scrollable>
		</>
	);
}
export default Language;

function LangItem(props: (typeof languages)[0]) {
	return (
		<>
			<label className="px-4 py-[24px] flex justify-between h-[58px] items-center cursor-pointer">
				<div className="flex flex-col">
					<span className="text-[17px]">{props.title}</span>
					<span className="text-[13px]">{props.description}</span>
				</div>
				<input
					type="radio"
					name="language"
					defaultChecked={props.title === "English"}
					value={props.title.toLowerCase()}
					onChange={() => {}}
					className="invisible checked:visible"
				/>
			</label>
			<Divider full className="last:hidden" />
		</>
	);
}
