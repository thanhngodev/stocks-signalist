import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = async ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Signalist
          </span>
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
