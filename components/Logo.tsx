interface LogoProps {
  size?: string;
}

const Logo = ({ size = "text-xl" }: LogoProps) => {
  return (
    <span
      className={`${size} font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent`}
    >
      Signalist
    </span>
  );
};

export default Logo;
