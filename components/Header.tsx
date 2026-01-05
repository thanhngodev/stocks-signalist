import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import Logo from "./Logo";

const Header = async ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
          {/* <NavItems initialStocks={initialStocks} /> */}
        </nav>

        <UserDropdown user={user} initialStocks={[]} />
        {/* <UserDropdown user={user} initialStocks={initialStocks} /> */}
      </div>
    </header>
  );
};

export default Header;
