import Section01 from "@/components/HomePage/Section01";
import Section02 from "@/components/HomePage/Section02";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-5 md:px-28">
      <Section01 />
      <Section02 />
    </main>
  );
}
