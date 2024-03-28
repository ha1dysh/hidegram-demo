import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Agreement from "@/components/agreement";

export default function Layout() {
	const [isShownAgreement, setIsShownAgreement] = useState(() => true);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		navigate("/chats");
	}, [navigate]);

	return (
		<div
			id="layout"
			className="relative h-full text-white bg-black md:flex"
		>
			<Outlet />

			{isShownAgreement && pathname === "/access/signup" && (
				<div className="absolute inset-0 w-full h-full bg-[#11111199] backdrop-blur-[2px]">
					<Agreement setIsShownAgreement={setIsShownAgreement} />
				</div>
			)}
		</div>
	);
}
