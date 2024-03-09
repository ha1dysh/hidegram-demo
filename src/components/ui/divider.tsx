import { twMerge } from "tailwind-merge";

type Props = {
	full?: boolean;
};

export default function Divider({ full }: Props) {
	return (
		<div
			className={twMerge(
				"ml-4 border-b border-borderColor",
				full && "md:ml-0"
			)}
		/>
	);
}
