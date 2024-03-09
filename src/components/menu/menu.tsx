import MenuLink from "./menuLink";

import AccessIcon from "../../assets/access.svg?react";
import ChangeIcon from "../../assets/change.svg?react";
import MessagesIcon from "../../assets/message.svg?react";
import SettingsIcon from "../../assets/settings.svg?react";

function Menu() {
	return (
		<nav className="sticky bottom-0 flex justify-around items-center border-t border-borderColor h-[70px] md:h-[50px] bg-[#242424] md:bg-black">
			<MenuLink path="access" Icon={AccessIcon} />
			<MenuLink path="change" Icon={ChangeIcon} />
			<MenuLink path="chats" Icon={MessagesIcon} />
			<MenuLink path="settings" Icon={SettingsIcon} />
		</nav>
	);
}

export default Menu;
