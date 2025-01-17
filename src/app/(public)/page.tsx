import { getPageMenu } from "@/action";
import { AboutSection, HappyClientSection, Newsletter, PopularSection } from "@/components";
import FakeSection from "@/components/FakeSection";
import { Header1, Header3, Para1 } from "@/components/ui/Typography";
import { ASSETS_URL } from "@/constants";
import { appRoutePaths } from "@/routes/paths";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
// import Image from "next/image";

export default async function Home() {
  const res = await getPageMenu()
  const menu = res.data?.menu

  return (
    <main className="flex flex-col bg-background">
      <section className='bg-white px-4'>
        <div className="container mx-auto py-10 lg:py-20 lg:px-10 grid md:grid-cols-2 gap-4 lg:justify-center">
          <aside className="relative flex flex-col gap-2 md:gap-4 py-5 md:py-10">
            <Header3 className='text-secondary font-inspiration'>We take pride in offering a</Header3>
            <Header1 className='text-primary font-medium font-eugusto max-w-sm'>Truly Authentic <span className="flex items-center gap-4 lg:gap-6">Dining Experience</span></Header1>
            <Para1 className="font-urbanist text-text text-xxsmall text-justify lg:max-w-md">We take pride in offering a truly authentic dining experience. Our dishes are crafted daily using only the freshest ingredients, handpicked by our dedicated staff from local markets. This ensures that every bite is bursting with flavor, packed with nutrients, and showcases the vibrant essence of our local produce.</Para1>
            <Link href={appRoutePaths.menu} className="group button bg-secondary rounded-full flex items-center gap-1 w-max">Order Now <IoIosArrowRoundForward className="text-xl md:text-3xl group-hover:translate-x-2" /></Link>
          </aside>
          <aside className="relative overflow-hidden bg-primary rounded-xl min-h-60 row-start-1 md:row-span-2">
            <Image src={ASSETS_URL["pepper_assorted"]} alt={"pepper_assorted"} fill className={`w-full h-full rounded-xl absolute object-cover object-center flex-shrink-0 flex`} />
          </aside>
        </div>
      </section>
      <PopularSection data={menu} />
      <FakeSection />
      <AboutSection />
      <HappyClientSection />
      <Newsletter />
    </main>
  );
}
