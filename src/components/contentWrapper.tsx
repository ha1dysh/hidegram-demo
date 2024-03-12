import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function ContentWrapper({ children }: { children: React.ReactNode }) {
	const isMobile = window.innerWidth < 768;
	const location = useLocation().pathname;

	const isLocation = [
		"userId",
		"new-chat",
		"chat-settings",
		"my-access",
		"edit-nickname",
		"edit-password",
		"language",
		"database",
		"db-product",
		"db-order",
		"db-number",
		"db-search",
		"notifications",
		"feedback",
		"bug-report",
	].some((s) => location.includes(s));

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
