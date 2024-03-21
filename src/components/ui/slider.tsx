import * as RadixSlider from "@radix-ui/react-slider";

function Slider() {
	return (
		<RadixSlider.Root
			className="relative flex items-center w-full h-5 select-none touch-none"
			defaultValue={[10]}
			max={50}
			step={1}
		>
			<RadixSlider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
				<RadixSlider.Range className="absolute h-full rounded-full bg-blue" />
			</RadixSlider.Track>
			<RadixSlider.Thumb
				className="block w-5 h-5 bg-white rounded-[10px] hover:bg-violet3 focus:outline-none cursor-pointer"
				aria-label="Volume"
			/>
		</RadixSlider.Root>
	);
}

export default Slider;
