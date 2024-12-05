"use client";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";
import { useState } from "react";
function HomePage() {
  const [activeOptions, setActiveOptions] = useState({
    color: "Red Planet",
    interior: "dark",
    wheel: "AeroStealth",
  });
  // function updateExterior(color){
  //   setActiveOptions({...activeOptions, color: color})
  // }
  function updateOptions(option, value) {
    const newOptions = { ...activeOptions, [option]: value };
    setActiveOptions(newOptions);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-8 px-2 md:px-4 py-3 md:py-6">
        <section className="w-full md:w-3/4">
          <Preview {...activeOptions} />
        </section>
        <aside className="w-full md:w-1/4">
          <Configurator updateOptions={updateOptions} {...activeOptions} />
        </aside>
      </main>
    </>
  );
}
export default HomePage;
