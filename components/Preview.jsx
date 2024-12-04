import Image from "next/image";
function Preview({color,interior,wheel}) {
  return (
    <>
      <Image
        src={"/images/preview.jpg"}
        alt="preview"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
      />
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-900">Metallic gloss</h3>
        <p>A mysterious, seductive black with a metallic blue shimmer.</p>
      </div>
      <Image
        src={"/images/interior.jpeg"}
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
