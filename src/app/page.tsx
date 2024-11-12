import { AboutSection, HappyClientSection, Newsletter, PopularSection } from "@/components";
import { Header1, Header3, Para1} from "@/components/ui/Typography";
import { appRoutePaths } from "@/routes/paths";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <section className='bg-white px-4'>
        <div className="container mx-auto py-10 lg:py-20 lg:px-10 grid md:grid-cols-2 gap-4 lg:justify-center">
          <aside className="relative flex flex-col gap-2 md:gap-4 py-5 md:py-10">
            <Header3 className='text-secondary font-inspiration'>Time to</Header3>
            <Header1 className='text-primary font-medium font-eugusto max-w-sm'>Enjoy Delicious <span className="flex items-center gap-4 lg:gap-6">Sushi Food</span></Header1>
            <Para1 className="font-urbanist text-text text-lg lg:text-xl max-w-md">After a good dinner, one can forgive anybody, even one&apos;s own relations</Para1>
            <Link href={appRoutePaths.menu} className="group flex-shrink-0 flex items-center gap-3 w-max px-6 lg:px-8 py-2 lg:py-3 rounded-[2rem] bg-secondary text-white text-lg md:text-xl cursor-pointer font-urbanist">Order Now <IoIosArrowRoundForward className="text-xl md:text-3xl group-hover:translate-x-2" /></Link>
          </aside>
          <aside className="relative bg-primary rounded-xl min-h-60 row-start-1 md:row-span-2"></aside>
        </div>
      </section>
      <PopularSection />
      <AboutSection />
      <HappyClientSection />
      <Newsletter />
    </main>
  );
}
