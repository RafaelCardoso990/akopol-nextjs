import Link from 'next/link';
import Image from 'next/image';

const Logo = (): any => {
  return (
    <Link href="/">
      <Image
        className="hidden xl:flex"
        src="/logo.png"
        width={120}
        height={120}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
