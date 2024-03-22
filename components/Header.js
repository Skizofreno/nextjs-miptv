import Link from 'next/link';
import Image from 'next/image';


export default function Header({ name }) {
  return (
    <header>

    <Image
  src="https://raw.githubusercontent.com/Skizofreno/nextjs-miptv/main/header-img.webp"
  alt="Description of the image"
  width={100vw}
  height={60vh}
/>



      <p className="text-2xl dark:text-white text-left">
        <Link href="/">
          <a>MIPTV</a>
        </Link>
      </p>
    </header>
  );
}
