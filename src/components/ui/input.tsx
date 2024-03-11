import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
};

function Input({ className, ...props }: Props) {
	return (
		<input
			{...props}
			className={twMerge(
				"w-full px-4 bg-darkGray caret-blue outline-none",
				className
			)}
		/>
	);
}

export default Input;
