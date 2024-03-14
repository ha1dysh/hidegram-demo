import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"button"> & {
	className?: string;
};

function BackBtn({ className, ...props }: Props) {
	const navigate = useNavigate();

	return (
		<button
			className={twMerge(
				"w-[60px] flex items-center gap-2 text-[17px] text-blue",
				className
			)}
			onClick={() => navigate(-1)}
			{...props}
		>
			<img src="/arrow-left.svg" alt="arrow left icon" className="" />
			<span>Back</span>
		</button>
	);
}

export default BackBtn;
