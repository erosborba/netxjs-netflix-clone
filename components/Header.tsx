import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [isScroled, setIsScroled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroled(true);
      } else {
        setIsScroled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])
  return (
    <header className={`${isScroled && 'bg-[141414]'}`} >
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/images/netflix-logo.svg"
          alt="Quaseflix-logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">News & Popular</li>
          <li className="headerLink">Minha Lista</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">
          <img src="/images/profile.png" alt="profile"  className="cursor-pointer rounded"/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
