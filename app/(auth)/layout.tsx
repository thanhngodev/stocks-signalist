import Link from "next/link";
import Logo from "@/components/Logo";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <Link href="/" className="mb-8 lg:mb-16">
          <Logo size="text-2xl lg:text-3xl" />
        </Link>
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto">{children}</div>
        </div>
        <footer className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Signalist. All rights reserved.
        </footer>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-white/20" />
        <div className="relative z-10 flex flex-col justify-center p-16 text-white">
          <h2 className="text-4xl font-bold mb-6">Welcome to Signalist</h2>
          <p className="text-lg text-white/90 mb-8">
            Your personal stock market assistant. Track, analyze, and make
            better investment decisions.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-yellow-400" />
            <span className="text-sm font-medium">Market Insights</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
