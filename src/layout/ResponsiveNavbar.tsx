/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

type ResponsiveNavType = {
  listName: string;
  isRes: string;
  link: string;
  optionList?: {
    title?: string;
    data: {
      title: string;
      link: string;
      icon: string;
    }[];
  }[];
};

export const NAVBAR_OPTIONS_ARRAY: ResponsiveNavType[] = [
  {
    listName: "Features",
    isRes: "yes",
    link: "#features",
  },
  {
    listName: "How it Works",
    isRes: "yes",
    link: "#how-it-works",
  },
  {
    listName: "Roadmap",
    isRes: "yes",
    link: "#roadmap",
  },
  {
    listName: "API",
    isRes: "no",
    link: "/api",
  },
  {
    listName: "Price",
    isRes: "no",
    link: "/api#pricing",
  },
  {
    listName: "Models",
    isRes: "no",
    link: "/api#pricing",
  },
];

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState("");
  const { push } = useRouter();
  const handleClick = (link: string) => {
    push(link);
    setShow(false);
  };

  return (
    <header className="block xl:hidden w-full py-3 lg:px-8 px-2 mx-auto max-w-screen-2xl">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="cursor-pointer flex gap-2 items-center">
          <img src="/logo.png" alt="BookAI Logo" className="w-14 sm:w-14" />
          <span className="text-white text-2xl font-medium">BookAI</span>
        </Link>
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="h-14 w-14 text-[#8025D2] rounded-full flex items-center justify-center"
        >
          <HiMenuAlt3 className="text-[#8025D2] text-3xl" />
        </button>
      </nav>

      <div
        className={`${
          show
            ? "opacity-1 visible translate-x-0 bg-[#00000054] bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter"
            : "-translate-x-[100%] opacity-0"
        } fixed left-0 top-0 bottom-0 min-h-screen w-full transition-all duration-300 ease-in-out`}
      >
        <motion.div
          transition={{ delay: 0.2, duration: 0.5 }}
          animate={show ? "open" : "closed"}
          variants={variants}
          className="scrollBarNone h-full w-4/5 overflow-scroll !bg-black !z-[999] pb-2 md:w-1/2"
        >
          <section className="flex flex-col">
            <header className="flex items-center justify-between border-b p-3">
              <Link href="/" className="cursor-pointer flex gap-2 items-center">
                <img
                  src="/logo.png"
                  alt="BookAI Logo"
                  className="w-14 sm:w-14"
                />
                <span className="text-white text-2xl font-semibold">
                  BookAI
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
                className="text-white cursor-pointer"
              >
                <IoClose className="text-3xl" />
              </button>
            </header>
            <div className="p-3 flex flex-col gap-2">
              {NAVBAR_OPTIONS_ARRAY?.map((item, i) => (
                <article key={i} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((prev) =>
                        prev === item?.listName ? "" : item?.listName
                      )
                    }
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center rounded-md p-1">
                      <span className="text-xl font-bold text-white">
                        {item.listName}
                      </span>
                    </div>
                    {item?.optionList && (
                      <div>
                        <BiChevronDown
                          className={`text-2xl common-transition ${
                            expanded === item?.listName ? "-rotate-180" : ""
                          }`}
                        />
                      </div>
                    )}
                  </button>
                  {item?.optionList && (
                    <div
                      className={`animate-collapse grid common-transition ease-in-out ${
                        expanded === item?.listName
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden w-full">
                        <div className="px-1 space-y-4">
                          {/* //? 2nd nested array mapped */}
                          {item?.optionList?.map((elm, index) => (
                            <div key={index} className="space-y-4">
                              {/* for checking title is present or not */}
                              {elm?.title && (
                                <h6 className="text-lg font-medium text-white">
                                  {elm.title}
                                </h6>
                              )}
                              <div className="flex flex-col gap-3">
                                {/* //? 3rd nested array mapped */}
                                {elm?.data?.map((dataItem, dataIndex) => (
                                  <Link
                                    href={dataItem?.link ? dataItem.link : "#"}
                                    key={dataIndex}
                                    className="flex items-center gap-2"
                                  >
                                    <img
                                      src={dataItem?.icon}
                                      alt="icon"
                                      className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-lg"
                                    />
                                    <p className="text-base font-bold">
                                      {dataItem?.title}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
            <div className="p-3 flex w-full flex-col md:flex-row gap-3">
              <button className="text-white bg-gradient-to-r from-[#648EFE] to-sky-600 text-xl capitalize font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700">
                Log / Sign Up
              </button>
            </div>
          </section>
        </motion.div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
