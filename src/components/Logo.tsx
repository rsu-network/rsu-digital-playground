interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 40 }: LogoProps) => (
  <img
    src="/rsu-logo.svg"
    alt="RSU Network Logo"
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: size }}
  />
);
