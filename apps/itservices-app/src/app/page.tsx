export default function Index() {
  return (
    <div>
    <section className=" py-12">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-w-7xl mx-auto">
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
        <h1 className="text-5xl font-Roboto_medium font-extrabold text-gray-900 bg-clip-text leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
          <span className="text-5xl font-light font-Roboto_regular">Great</span>
          <span className="text-5xl font-bold">Product</span>
          <span className="text-5xl font-light font-Roboto_regular">is</span>
          <br />
          built by great teams
        </h1>
        <p className="mt-7 text-lg leading-9 text-slate-600 max-md:max-w-full font-Playwrite">
          We help build and manage a team of world-class developers to bring your vision to life
        </p>
        <button className="justify-center self-start px-8 py-5 mt-20 text-sm font-semibold leading-4 bg-blue-600 rounded-md shadow-2xl text-neutral-50 max-md:px-5 max-md:mt-10">
          Lets get started!
        </button>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6edbac42fa6940652015227c93ee44b409217cc4e6a1b4138bd1d3fc9b1bbb01?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Illustration representing great teams building great products" className="w-full aspect-[1.12] max-md:max-w-full" />
      </div>
    </div>
  </div>
</section>
{/* crousle */}

<section className="px-5">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
   
    <main className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
      <section className="flex flex-col grow pt-14 w-full bg-slate-50 max-md:mt-1.5 max-md:max-w-full">
        <h2 className="self-center text-4xl font-bold text-gray-900 leading-[54.95px]">Services we offer</h2>
        <div className="px-11 py-8 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center max-md:mt-10">
                <div className="flex flex-col py-9 pr-14 pl-7 rounded-lg shadow-lg bg-neutral-50 max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/900d4d60241fe835359a85190c1a7abebd1367d18e14d734f517f34d1112da81?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Mobile App Development icon" className="rounded-full border border-rose-400 border-solid aspect-[1.49] w-[86px]" />
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-gray-700 max-md:mr-0.5">Mobile App Development</h3>
                  <p className="mt-5 ml-8 text-sm leading-6 text-slate-500 max-md:ml-2.5">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center mt-10 max-md:mt-10">
                <div className="flex flex-col px-14 py-10 rounded-lg border border-rose-400 border-solid shadow-lg bg-neutral-50 max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16940bd5af47649ab942bc7929414533f696b715380e5860eb8808d9c536c294?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Web Design & Development icon" className="aspect-square w-[58px]" />
                  <h3 className="mt-4 text-xl font-semibold leading-7 bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]">Web Design & Development</h3>
                  <p className="mt-5 text-sm leading-6 text-slate-600">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center max-md:mt-10">
                <div className="flex flex-col px-9 py-9 rounded-lg shadow-lg bg-neutral-50 max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad6ae8f3ea0497393a0be0862854dd2ab3f4c4910941165b4274bda4a1b9fe50?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Software Testing Service icon" className="rounded-full border border-rose-400 border-solid aspect-[1.39] w-[81px]" />
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-gray-700 max-md:mr-0.5">Software Testing Service</h3>
                  <p className="mt-5 ml-6 text-sm leading-6 text-slate-500 max-md:ml-2.5">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <nav className="flex gap-2 justify-center items-center self-center mt-2" aria-label="Pagination">
          <button className="shrink-0 self-stretch my-auto rounded-full border border-solid border-slate-300 h-[13px] stroke-[1px] w-[13px]" aria-label="Page 1"></button>
          <button className="shrink-0 self-stretch my-auto rounded-full border border-solid border-slate-300 h-[13px] stroke-[1px] w-[13px]" aria-label="Page 2"></button>
          <button className="shrink-0 self-stretch rounded-full border border-white border-solid bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[18px] stroke-[1px] w-[18px]" aria-label="Current Page 3" aria-current="page"></button>
          <button className="shrink-0 self-stretch my-auto rounded-full border border-solid border-slate-300 h-[13px] stroke-[1px] w-[13px]" aria-label="Page 4"></button>
          <button className="shrink-0 self-stretch my-auto rounded-full border border-solid border-slate-300 h-[13px] stroke-[1px] w-[13px]" aria-label="Page 5"></button>
        </nav>
        <hr className="shrink-0 mt-14 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:mt-10 max-md:max-w-full" />
      </section>
    </main>
   
  </div>
</section>
{/* crousle */}
<section className="flex flex-col  mx-auto max-w-7xl">
<div className="flex flex-col items-center text-center text-gray-900">
    <div className="h-[5px] w-[69px] bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)]" aria-hidden="true"></div>
    <h2 className="mt-5 text-4xl font-bold leading-[55px] max-w-[474px] font-Roboto_medium">
        Way of building
        <br />
        Great Software
    </h2>
</div>
  <section className="justify-between w-full max-md:max-w-full mt-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto leading-8 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-semibold leading-10 text-center text-gray-900 max-md:max-w-full font-Roboto_regular">
            Build the right team to scale
          </h2>
          <p className=" font-Playwrite mt-8 text-lg text-gray-700 max-md:max-w-full">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers
          </p>
          <p className="mt-2.5 text-lg text-gray-700 bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
            Our delivery model helps you cut costs and deliver within budget.
          </p>
          <blockquote className="flex gap-4 mt-5 text-base font-light max-md:flex-wrap">
            <span className="shrink-0 bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[87px] w-[3px]"></span>
            <p className="italic bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
              imform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules
            </p>
          </blockquote>
          <figure className="flex gap-2.5 justify-center self-start mt-6">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fed884f4f14e0a9165fa75c1543cc453c2c57a46104b36c4b25fe04c0ab0acc?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Profile picture of Jeewa markram" className="shrink-0 rounded-full aspect-square w-[41px]" />
            <figcaption className="flex flex-col self-start">
              <p className="text-base text-gray-900">Jeewa markram</p>
              <p className="mt-1.5 text-sm text-slate-500">CEO</p>
            </figcaption>
          </figure>
        </div>
      </article>
      <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5ece749ae17880fe6104eb9a7e563513cbab05963374aaf197f4c7e0e84e713?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Illustration representing team building and scaling" className="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full" />
      </aside>
    </div>
  </section>
  <section className="justify-between mt-24 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <aside className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ada9b159ff3a5981bf7285745ea5b7b06406aa4d8eadb159e6fad57ab191991?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Visual representation of team scaling concept" className="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full" />
      </aside>
      <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto leading-8 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-semibold leading-10 text-center text-gray-900 max-md:max-w-full font-Roboto_regular">
            Build the right team to scale
          </h2>
          <p className=" font-Playwrite mt-8 text-lg text-gray-700 max-md:max-w-full">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers
          </p>
          <p className="mt-2.5 text-lg text-gray-700 bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
            Our delivery model helps you cut costs and deliver within budget.
          </p>
          <blockquote className="flex gap-4 mt-5 text-base font-light max-md:flex-wrap">
            <span className="shrink-0 bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[87px] w-[3px]"></span>
            <p className="italic bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
              Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules
            </p>
          </blockquote>
          <figure className="flex gap-2.5 justify-center self-start mt-6">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1a779579f1d0481da5bbc5b9e41660ffde36e799e0c55385351b7ffad5436f4?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Profile picture of Jeewa markram" className="shrink-0 rounded-full aspect-square w-[41px]" />
            <figcaption className="flex flex-col self-start">
              <p className="text-base text-gray-900">Jeewa markram</p>
              <p className="mt-1.5 text-sm text-slate-500">CEO</p>
            </figcaption>
          </figure>
        </div>
      </article>
    </div>
  </section>
  <section className="justify-between mt-24 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto leading-8 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-semibold leading-10 text-center text-gray-900 max-md:max-w-full font-Roboto_regular">
            Build the right team to scale
          </h2>
          <p className=" font-Playwrite mt-8 text-lg text-gray-700 max-md:max-w-full">
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers
          </p>
          <p className="mt-2.5 text-lg text-gray-700 bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
            Our delivery model helps you cut costs and deliver within budget.
          </p>
          <blockquote className="flex gap-4 mt-5 text-base font-light max-md:flex-wrap">
            <span className="shrink-0 bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] h-[87px] w-[3px]"></span>
            <p className="italic bg-clip-text bg-[linear-gradient(225deg,#F76680_0%,#57007B_100%)] max-md:max-w-full">
              Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules
            </p>
          </blockquote>
          <figure className="flex gap-2.5 justify-center self-start mt-6">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdebe3c7dcf2cb0feaa101f455ffed5cfea04c7f68b2a393894f387515a7a109?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Profile picture of Jeewa markram" className="shrink-0 rounded-full aspect-square w-[41px]" />
            <figcaption className="flex flex-col self-start">
              <p className="text-base text-gray-900">Jeewa markram</p>
              <p className="mt-1.5 text-sm text-slate-500">CEO</p>
            </figcaption>
          </figure>
        </div>
      </article>
      <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0748c6db6c37dc0f9c4b0f9497ba19648be1d6c3b34ba09664e0e8fb9946ea8?apiKey=c81a87a8b87043acac16b0e47d857063&" alt="Illustration showcasing team scaling strategies" className="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full" />
      </aside>
    </div>
  </section>
</section>

    </div>
  );
}
