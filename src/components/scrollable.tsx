import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"ul"> & {
	children: React.ReactNode;
	className?: string;
};

function Scrollable({ children, className, ...props }: Props) {
	return (
		<ul
			{...props}
			className={twMerge(
				"h-[calc(100%-54px)] md:h-[calc(100%-60px)] flex flex-col",
				className
			)}
		>
			{children}
		</ul>
	);
}

export default Scrollable;
