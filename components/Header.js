import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="w-100vw">
        <img
  src="https://raw.githubusercontent.com/Skizofreno/nextjs-miptv/main/header-img.webp"
  width="100%"
  alt=""
/>
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>📱 MIPTV</a>
        </Link>
      </p>
    </header>
  );
}
