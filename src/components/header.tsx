import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"header"> & {
	className?: string;
};

function Header({ children, className, ...props }: Props) {
	const isMobile = window.innerWidth < 768;

	if (isMobile) {
		return (
			<header
				className={twMerge(
					"h-[60px] px-[14px] flex justify-between items-center bg-darkGray",
					className
				)}
				{...props}
			>
				{children}
			</header>
		);
	}

	return (
		<header
			className={twMerge(
				"h-[50px] px-4 flex justify-between items-center bg-black border border-borderColor",
				className
			)}
			{...props}
		>
			{children}
		</header>
	);
}

export default Header;
