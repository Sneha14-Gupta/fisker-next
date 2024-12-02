import Image from "next/image";
function Header() {
  return (
    <div>
      <div className="bg-stone-100">
        <p className="text-xl text-center py-2 font-semibold">
          All electric • Dynamic • Driver Rang
        </p>
      </div>
      <header className="flex justify-between px-8 py-3">
        <Image
          src="fisker.svg"
          alt="fisker-logo"
          width={100}
          height={100}
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        <span className="flex gap-2 items-center">
          <Image src="globe.svg" alt="globe" width={20} height={20} />
          <p className="text-sm sm:text-base">US</p>
        </span>
      </header>
    </div>
  );
}
export default Header;
