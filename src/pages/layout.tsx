import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/chats");
	}, [navigate]);

	return (
		<div className="h-full text-white bg-black md:flex">
			<Outlet />
		</div>
	);
}
