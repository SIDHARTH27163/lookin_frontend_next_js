import { Buttons } from "@lookin-app/common-components";

export default function Index() {
  return (
    <div className="font-Roboto_regular">
      <div className="flex flex-col items-center px-20 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
     
      <div className="mt-24 w-full max-w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 lg:flex-row md:flex-col sm:flex-col flex-col max-md:gap-0">
          <div className="flex flex-col md:w-full w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-medium max-md:max-w-full">
                Hi, there!
              </div>
              <div className="mt-7 text-9xl leading-[120px] max-md:max-w-full max-md:text-4xl max-md:leading-10 font-Roboto_medium">
                <span className="text-rose-600">Lookin</span> is here to be your
                Guide 
              </div>
              <div className="mt-12 text-2xl leading-10 max-md:mt-10 max-md:max-w-full font-Playwrite">
                We are here ready to help you in making creative digital products
              </div>
             
             <Buttons label={"Get Started"} className={"justify-center font-Roboto_regular0 text-2xl  self-start p-2 mt-14 text-gray-100 bg-rose-600 rounded-xl  max-md:px-5 max-md:mt-10 transform transition hover:scale-110 duration-500 ease-in-out"}/>
            </div>
          </div>
          <div className="flex flex-col ml-5 md:w-full w-6/12 max-md:ml-0 max-md:w-full">
            
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f1a7cb810086b43a49ab87582ac4087a5f5bd6d599d062e955f80568c0a53f2?apiKey=4e7da40a67694812bbc97f1bb14d5db2&" className="grow w-full aspect-[1.35] max-md:mt-10 max-md:max-w-full" alt="Service illustration" />
          </div>
        </div>
      </div>
      <div className="mt-3 w-full max-w-[1689px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="mt-32 text-5xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Our Service
              </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-12">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f2cd8dc38fce9242731a790ddd0d3c2e7f69b63483738e12a8882b70e63cdb9?"
                className="w-16 aspect-square"
              />
              <div className="mt-6 text-2xl font-medium text-zinc-800 font-Roboto_medium">
                Branding
              </div>
              <div className="mt-2 text-lg text-neutral-400 font-Playwrite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e31994fc04ec6ca9f49ac46d48246811e94fa765fc2ec21b621c9c53d0606f7?"
                className="w-16 aspect-square"
              />
              <div className="mt-6 text-2xl font-medium text-zinc-800 font-Roboto_medium">
                UI/UX
              </div>
              <div className="mt-2 text-lg text-neutral-400 font-Playwrite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07eec2abe73d30df884bf7729e794d5e280975b8794fa39ec4d5c731d9d6d368?"
                className="w-16 aspect-square"
              />
              <div className="mt-6 text-2xl font-medium text-zinc-800 font-Roboto_medium">
                Product Design
              </div>
              <div className="mt-2 text-lg text-neutral-400 font-Playwrite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
