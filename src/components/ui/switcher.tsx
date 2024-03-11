import * as Switch from "@radix-ui/react-switch";

function Switcher() {
	return (
		<Switch.Root
			className="w-[42px] h-[25px] bg-gray rounded-full relative data-[state=checked]:bg-blue outline-none"
			style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
		>
			<Switch.Thumb className="block w-[21px] h-[21px] bg-white md:bg-black rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
		</Switch.Root>
	);
}

export default Switcher;
