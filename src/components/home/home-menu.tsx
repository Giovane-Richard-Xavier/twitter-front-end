import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/Search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
  closeAction: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="lg:hidden fixed inset-0 p-6 bg-black">
      <div className="flex items-center justify-between">
        <Logo size={32} />
        <div
          className="flex items-center justify-center size-8 rounded-full border-2 border-gray-900 cursor-pointer"
          onClick={closeAction}
        >
          <FontAwesomeIcon icon={faXmark} className="size-4" />
        </div>
      </div>

      <div className="my-6">
        <SearchInput />
      </div>

      <nav className="mt-6">
        <NavItem href="/home" icon={faHouse} label="Página inicial" />
        <NavItem href="/profile" icon={faUser} label="Meu Perfil" />
        <NavLogout />
      </nav>
    </div>
  );
};
