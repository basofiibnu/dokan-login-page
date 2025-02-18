import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-[#1A1B1E] text-white mt-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="col-span-1 items-center flex flex-col lg:block">
          <Image
            src={'/brandlogo.svg'}
            alt="logo"
            width={32}
            height={32}
          />
          <h2 className="text-sm leading-4 text-[#606060] font-normal mt-4">
            Dokan Front End Test
          </h2>

          <div className="mt-7 flex items-center gap-5">
            {[
              'linkedin.svg',
              'instagram.svg',
              'facebook.svg',
              'twitter.svg',
            ].map((icon) => (
              <Image
                src={icon}
                alt={icon}
                width={20}
                height={20}
                className="cursor-pointer"
                key={icon}
              />
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-32 lg:gap-20 xl:gap-40 w-full justify-center my-6 xl:my-0">
            <div className="flex flex-col gap-3 items-center lg:items-start justify-start w-full md:w-max">
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Pricing
              </a>
            </div>

            <div className="flex flex-col gap-3 items-center lg:items-start justify-start w-full md:w-max">
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Integrations
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                FAQs
              </a>
            </div>
            <div className="flex flex-col gap-3 items-center lg:items-start justify-start w-full md:w-max">
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="hover:underline text-md xl:text-[20px] leading-8 font-normal transition-all"
              >
                Terms & Policies
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-1 items-center lg:items-start">
          <a
            href="#"
            className="hover:underline text-[20px] leading-8 font-normal transition-all"
          >
            Our Contact
          </a>
          <div className="mt-6 flex flex-col items-center lg:items-start gap-2">
            <div className="flex gap-2 items-center">
              <Image
                src={'/envelope.svg'}
                width={16}
                height={16}
                alt="envelope"
              />
              <span className="text-[#C2C2C2] text-lg leading-7">
                dokan@test.sa
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src={'/phone.svg'}
                width={16}
                height={16}
                alt="phone"
              />
              <span className="text-[#C2C2C2] text-lg leading-7">
                +999-234-324
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src={'/pin.svg'}
                width={16}
                height={16}
                alt="pin"
              />
              <span className="text-[#C2C2C2] text-lg leading-7">
                Saudi Arabia, Jeddah
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col-reverse items-center lg:items-start lg:flex-row gap-8 xl:gap-0 justify-between mt-16 xl:mt-32">
        <div>
          <h2 className="text-lg text-[#606060] font-normal leading-4">
            © 2025 Dokan Inc. All rights reserved.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0">
          <a
            href="#"
            className="hover:underline text-[#606060] text-base font-normal leading-4 transition-all"
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="hover:underline text-[#606060] text-base font-normal leading-4 transition-all"
          >
            GDPR
          </a>
          <a
            href="#"
            className="hover:underline text-[#606060] text-base font-normal leading-4 transition-all"
          >
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
}
