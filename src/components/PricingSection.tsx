/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PricingSection = () => {
  const pricingDetails = [
    {
      apiName: "OpenAI",
      modelName: "GPT-3.5",
      price: "$0.002",
    },
    {
      apiName: "OpenAI",
      modelName: "GPT-4",
      price: "$0.03",
    },
    {
      apiName: "Together AI",
      modelName: "Llama-2-70b",
      price: "$0.0008",
    },
    {
      apiName: "Together AI",
      modelName: "	Llama-2-13b",
      price: "$0.0006",
    },
  ];
  return (
    <section className="bg-cover bg-no-repeat  bg-center top-spacing bottom-spacing text-white min-h-screen bg-black pt-16">
      <div className=" flex flex-col gap-20">
        <aside className="flex flex-col gap-8 items-center">
          <h1 className=" !font-medium text-center text-white text-3xl">
            Choose a plan that works for you
          </h1>

          <h3 className="text-lg font-medium">{`Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:`}</h3>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {pricingDetails?.map((price, index) => (
              <div
                className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 w-64 hover:bg-slate-900 cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all"
                key={index}
              >
                <div className="flex items-center justify-between gap-x-4 ">
                  <h2
                    id="product1"
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    {price?.apiName}
                  </h2>
                </div>

                <p className="mt-6 items-baseline gap-x-1 flex gap-2">
                  <span className="text-4xl font-bold tracking-tight text-white ">
                    {price?.price}
                  </span>
                  <span className="text-md text-gray-400 whitespace-nowrap font-medium">
                    / 1k token
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                </p>
                <Link
                  href="/"
                  aria-describedby="product1"
                  className=" text-white bg-gradient-to-r from-[#648EFE] to-sky-600 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-3/4 pb-9">
            <div className="grid grid-cols-2 gap-8 w-3/4">
              <div className="bg-slate-900 p-5 rounded-2xl flex flex-col gap-5 justify-center items-center">
                <img src="token.png" alt="" className="w-20" />
                <h3 className="text-2xl font-semibold">Token Estimation</h3>
                <p className="text-center">
                  On average, 1 token is approximately 4 characters or 0.75
                  words. For precise pricing, we recommend using our token
                  calculator tool.
                </p>
              </div>
              <div className="bg-slate-900 p-5 rounded-2xl flex flex-col gap-5 justify-center items-center">
                <img src="billing.png" alt="" className="w-20" />
                <h3 className="text-2xl font-semibold">Billing</h3>
                <p className="text-center">
                  You will only be charged for the tokens used in generating the
                  book. The API tracks token usage and bills accordingly.
                  Detailed usage reports are available in your account
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default PricingSection;
