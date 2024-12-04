import Image from "next/image";
import configs from "../app/assets/configs.json";
console.log(configs);
// 
function Preview({
  color = "Blue Planet",
  interior = "white",
  wheel = "Vortex",
}) {
  return (
    <>
      <Image
        src={configs[color].wheels[wheel]}
        alt="preview"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
      />
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-900">
          {configs[color].finish}
        </h3>
        <p>{configs[color].description}</p>
      </div>
      <Image
        src={`/images/interior/${interior}.jpeg`}
        alt="preview"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
      />
      <p className="font-semibold uppercase text-stone-900">Interior Image</p>
    </>
  );
}
export default Preview;
