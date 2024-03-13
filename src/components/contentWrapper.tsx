import { routes } from "@/router";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function ContentWrapper({ children }: { children: React.ReactNode }) {
	const isMobile = window.innerWidth < 768;
	const location = useLocation().pathname;

	// prettier-ignore
	const isActiveLocation = [...routes[0].children]
		.reduce((acc: string[], cur) =>
				[...acc,cur.children?.map((r: { path: string; }) => r.path.replace(":", ""))].flat(),[])
		.some((s: string) => location.includes(s));

	return (
		<div
			className={twMerge(
				"w-full h-full hidden md:block bg-black",
				isMobile && "absolute top-0",
				isActiveLocation ? "block" : "hidden"
			)}
		>
			{children}
		</div>
	);
}

export default ContentWrapper;
