import { Header1, Header3} from '@/components/ui/Typography'
import { GrSend } from "react-icons/gr";

export default function ContactForm() {
  return (
      <section className='bg-primary py-10 lg:py-20 px-4'>
          <div className="container mx-auto md:px-8 lg:px-10 rounded-xl grid lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
              <aside className="relative bg-light-secondary rounded-xl"></aside>
              <aside className="relative flex flex-col py-5">
                  <Header3 className='text-secondary font-inspiration'>Place an Order or</Header3>
                  <Header1 className='text-white font-medium font-eugusto max-w-sm'>Reach out in minutes</Header1>
                  <form action="" className="flex flex-col gap-2 max-w-md mt-4">
                      <input type="fullname" name="fullname" id="fullname" required placeholder='Enter Full Name e.g. Musa Saliu' className="flex-1 p-4 text-text text-sm lg:text-base rounded-[3rem]" />
                      <input type="email" name="newsletter" id="newsletter" required placeholder='Enter Email Address e.g. saliumusa@gmail.com' className="flex-1 p-4 text-text text-sm lg:text-base rounded-[3rem]" />
                      <div className="flex gap-1 p-4 text-text text-sm lg:text-base rounded-[3rem] bg-white">
                          <div className="flex-shrink-0">+234</div>
                          <input type="phone" name="phone" id="phone" maxLength={10} required placeholder='Enter Phone Number' className="flex-1" />
                      </div>
                      <textarea name="message" id="message" cols={30} rows={5} placeholder='Enter Email Address e.g. saliumusa@gmail.com' className="flex-1 p-4 text-text text-sm lg:text-base rounded-[1rem]"></textarea>
                      <button className="group flex-shrink-0 min-h-34 flex flex-row-reverse items-center gap-2 w-max px-6 lg:px-8 py-2 lg:py-3 rounded-[2rem] bg-secondary text-white text-lg md:text-xl cursor-pointer font-urbanist">Send <GrSend className="text-lg md:text-xl" /></button>
                  </form>
              </aside>
          </div>
      </section>
  )
}
