function SidebarWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative md:min-w-[300px] md:w-1/3 h-full md:max-w-[416px] md:border-r md:border-borderColor">
			{children}
		</div>
	);
}

export default SidebarWrapper;
