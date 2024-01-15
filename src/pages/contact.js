import * as React from 'react'
import Layout from '../components/layout'
import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
const ContactPage = () => {
   return (
      <Layout pageTitle="Contact">
         <div className="mx-auto flex h-[90vh] max-w-screen-2xl flex-wrap content-center overflow-hidden">
            <section className="grid grid-cols-2 gap-4">
               <div
                  className=" flex flex-wrap content-center gap-5 pl-4 text-themeWhite"
                  data-aos="fade-left"
               >
                  <h2 className=" text-6xl">Get in touch!</h2>
                  <p className="text-xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua.{' '}
                  </p>
               </div>
               <div
                  className="flex justify-center bg-themeDark pr-4 text-themeWhite"
                  data-aos="fade-left"
               ></div>
            </section>
            <div
               className="mx-auto mt-[10vh] flex w-full max-w-screen-2xl flex-wrap content-center"
               data-aos="fade-up"
            >
               <section className="grid w-full grid-cols-2  gap-4 p-4 text-themeWhite">
                  <div className="mx-auto flex w-96  flex-col items-center gap-8 border-2 border-themeOrange bg-themeDarker p-6">
                     <img src={phone} alt="" />
                     <h3 className="border-b-2 border-themeOrange text-3xl">
                        Call me!
                     </h3>

                     <p className="text-xl">070-209 97 00</p>
                  </div>
                  <div className="mx-auto flex w-96  flex-col items-center gap-8 border-2 border-themeOrange bg-themeDarker p-6">
                     <img src={mail} alt="" />
                     <h3 className="border-b-2 border-themeOrange text-3xl">
                        Mail me!
                     </h3>

                     <p className="text-xl">dj.alvinfors@gmail.com</p>
                  </div>
               </section>
            </div>
         </div>
      </Layout>
   )
}
export default ContactPage
export const Head = () => <title>Contact</title>
