import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"button"> & {
	className?: string;
};

function EditBtn({ className, ...props }: Props) {
	return (
		<button
			{...props}
			className={twMerge("w-[60px] text-[17px] text-blue", className)}
		>
			Edit
		</button>
	);
}

export default EditBtn;
