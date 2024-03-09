import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	path: string;
};

function MenuLink({ Icon, path }: Props) {
	const { pathname } = useLocation();

	return (
		<NavLink to={"/" + path} className="flex flex-col items-center gap-2">
			<Icon fill={pathname.includes(path) ? "#567DFF" : "#676E75"} />
			<span
				className={twMerge(
					pathname.includes(path) ? "text-blue" : "text-gray",
					"text-xs md:hidden"
				)}
			>
				{path[0].toUpperCase() + path.slice(1)}
			</span>
		</NavLink>
	);
}

export default MenuLink;
