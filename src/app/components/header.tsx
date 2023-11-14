import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-primary">
      <Image
        src="/images/bg-header-desktop.svg"
        alt="hero image"
        width={365}
        height={150}
        layout="responsive"
      />
    </div>
  );
};

export default Header;
