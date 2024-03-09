import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
};

function Input({ className, ...props }: Props) {
	return (
		<input
			{...props}
			className={twMerge(
				"w-full caret-blue outline-none bg-darkGray",
				className
			)}
		/>
	);
}

export default Input;
