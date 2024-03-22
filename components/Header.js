import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header>
{
  <img style={{ width: '100vw', height:'60vh', objectFit:'cover' }}
  src="https://raw.githubusercontent.com/Skizofreno/nextjs-miptv/main/header-img.webp"
  alt="" 
  />
    
}

      <p className="text-2xl dark:text-white text-left">
        <Link href="/">
          <a>MIPTV</a>
        </Link>
      </p>
    </header>
  );
}
