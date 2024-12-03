"use client";
import Image from "next/image";
function Configurator() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-900">
        Fisker Ocean
      </h1>
      <p className="py-2">Customize Your Car</p>

      <div className="my-3">
        <h3 className="font-bold uppercase">Exterior Color</h3>
        <div className="flex gap-2">
          {new Array(6).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log(" Exterior clicked")}
              className={`hover:scale-105 transition-transform duration-100 ${index===0 ? "border-2 border-blue-300" : ""}`}
            >
              <Image
                src={"/images/color.png"}
                alt="color-picker"
                width={40}
                height={40}
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>Interior Color</h3>
        <div className="flex gap-2">
          {new Array(3).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log(" Interior clicked")}
              className="hover:scale-105 transition-transform duration-100"
            >
              {" "}
              <Image
                src={"/images/dark.png"}
                alt="color-picker"
                width={40}
                height={40}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="my-3">
        <h3 className="font-bold uppercase">Wheel Color</h3>
        <div className="flex gap-2">
          {new Array(2).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log(" Wheel clicked")}
              className="hover:scale-105 transition-transform duration-100"
            >
              <Image
                src={"/images/wheel-option.webp"}
                alt="color-picker"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Configurator;
