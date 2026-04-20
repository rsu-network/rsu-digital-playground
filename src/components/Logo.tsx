import logoSrc from "@/assets/rsu-logo.svg";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 40 }: LogoProps) => (
  <img
    src={logoSrc}
    alt="RSU Network Logo"
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: size }}
  />
);
