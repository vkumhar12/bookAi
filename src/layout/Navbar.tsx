/* eslint-disable @next/next/no-img-element */
// import { useScrollPosition } from "hooks";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ResponsiveNavbar from "./ResponsiveNavbar";
// import ResponsiveNavbar from "./ResponsiveNavbar";

interface MENU {
  id: string;
  list: list[];
  title: string;
  image: string;
}
interface list {
  id: string;
  image: string;
  title: string;
  desc: string;
}

export default function Navbar() {
  // const scrollPosition = useScrollPosition();
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const NavBarArr = [
    {
      id: "1",
      name: "Features",
      link: "",
      haveMenuList: false,
      list: [
        {
          id: "1.1",
          image: "/New/school_erp.png",
          title: "School ERP",
          desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: "2.1",
          image: "/New/college_erp.png",
          title: "College ERP",
          desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: "2",
      name: "How It Works",
      link: "",
      haveMenuList: false,
    },
    {
      id: "3",
      name: "Roadmap",
      link: "",
      haveMenuList: false,
    },
    {
      id: "4",
      name: "API",
      link: "",
      haveMenuList: false,
    },
    {
      id: "5",
      name: "Price",
      link: "/pricing",
      haveMenuList: false,
    },
    {
      id: "6",
      name: "Models",
      link: "/pricing",
      haveMenuList: false,
    },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setSubmenuOpen(false);
      setActiveMenu(null);
    }
  };

  const toggleSubMenu = (id: string | null) => {
    if (activeMenu === id) {
      setSubmenuOpen(false);
      setActiveMenu(null);
      document.removeEventListener("mousedown", handleClickOutside);
    } else {
      setSubmenuOpen(true);
      setActiveMenu(id);
      document.addEventListener("mousedown", handleClickOutside);
    }
  };

  return (
    <section className={`w-full h-24 sticky top-0 bg-black `}>
      <div className="lg:px-44 px-4  w-full  text-white lg:py-5 ">
        <div className="lg:flex hidden">
          <div className="flex gap-10 justify-between items-center w-full">
            <div className="flex items-center">
              <div className="w-7 h-7 bg-[#648EFE] rounded-full mr-2.5"></div>

              <Link href="/" className="flex items-center gap-1 cursor-pointer">
                <img
                  src="logo.png"
                  alt="logo"
                  className="!w-12 cursor-pointer"
                />
                <span className="text-white text-2xl font-bold whitespace-nowrap">
                  BookAI
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-7">
              {NavBarArr.map((item) => (
                <div key={item.id} className="flex items-center relative">
                  <span
                    className="font-extralight text-lg text-white cursor-pointer relative hover:text-[#8025D2] duration-500 transition-all ease-in-out"
                    onClick={() => toggleSubMenu(item.id)}
                  >
                    {item.name}
                    {item.haveMenuList && (
                      <div className="text-xs px-1.5 py-0.5 rounded btn-gradient absolute -top-5 right-0">
                        <span className="absolute w-2 h-2 rotate-45 left-3 -translate-x-1/2 btn-gradient -bottom-1"></span>
                        New
                      </div>
                    )}
                  </span>
                  {item.haveMenuList && (
                    <BiChevronDown
                      className="common-transition cursor-pointer text-lg text-blue-500"
                      onClick={() => toggleSubMenu(item.id)}
                    />
                  )}
                  {item.haveMenuList &&
                    submenuOpen &&
                    activeMenu === item.id && (
                      <SubMenu data={item as unknown as MENU} ref={menuRef} />
                    )}
                </div>
              ))}
              <div className="flex gap-4 items-center text-lg">
                <Link href="/login">
                  <button className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[#648EFE] to-sky-600">
                    Log / Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveNavbar />
    </section>
  );
}

const SubMenu = React.forwardRef(
  ({ data }: { data: MENU }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <section
        ref={ref}
        className="lg:w-[60rem] absolute top-[3.5rem] transition-all duration-300 ease-in-out left-0 right-0 overflow-hidden opacity-100 translate-y-0 "
      >
        <div className="w-full flex ">
          <div className="flex flex-col gap-2 bg-black border-2 border-theme rounded-xl w-full overflow-y-auto">
            <div className="h-full flex justify-center items-center  px-16">
              <div className="h-full flex flex-col gap-4 w-1/2 py-10">
                <div className="pl-5">PRODUCT</div>
                {data?.list?.map((submenu) => (
                  <div
                    key={submenu?.id}
                    className="flex items-center gap-5 common-transition rounded-2xl px-5 py-2 overflow-hidden"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={submenu?.image}
                        alt={submenu?.title}
                        className="w-fit h-full"
                      />
                      <p className="flex flex-col">
                        <span className="font-medium text-sm text-white">
                          {submenu?.title}
                        </span>
                        <span className="2xl:text-sm text-xs text-gray-400">
                          {submenu?.desc}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex">
                <div className="w-10/12 flex flex-col gap-5 bg-white bg-opacity-10 h-full">
                  <div className="">
                    <img src="/New/submenu-img.png" alt="" className="w-full" />
                    <h1 className="p-2">
                      How you manage, unite and run <br /> your University.{" "}
                      <br /> Do it all here.
                    </h1>
                  </div>
                  <button className="underline w-fit py-6 px-2">
                    See YardERP in action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
SubMenu.displayName = "SubMenu";
