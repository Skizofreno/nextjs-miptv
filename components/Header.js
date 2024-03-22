import Link from 'next/link';


export default function Header({ name }) {
  return (
    <header>
  {

<img
  src="https://raw.githubusercontent.com/Skizofreno/nextjs-miptv/main/header-img.webp"
  alt="Description of the image"
  width={1920} // Assuming the image's original width is 1920 pixels
  height={60 * window.innerHeight / 100} // Set the height to 60% of the viewport height
  layout="fill"
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
