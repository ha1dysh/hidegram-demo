import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function ContentWrapper({ children }: { children: React.ReactNode }) {
	const isMobile = window.innerWidth < 768;
	const location = useLocation().pathname;

	const isLocation = ["userId", "newChat"].some((s) => location.includes(s));

	return (
		<div
			className={twMerge(
				"w-full h-full hidden md:block bg-black",
				isMobile && "absolute top-0",
				isLocation ? "block" : "hidden"
			)}
		>
			{children}
		</div>
	);
}

export default ContentWrapper;
