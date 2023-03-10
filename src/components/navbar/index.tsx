import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const navData = [
    { title: "Home" },
    { title: "Benefits" },
    { title: "Our Classes" },
    { title: "Contact Us" },
  ];
  return (
    <nav>
      <div
        className={`${navbarBackground} flex-space fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex-space mx-auto w-5/6">
          <div className="flex-space w-full gap-16">
            <img alt="logo" src={Logo} />

            {isAboveMediumScreens ? (
              <div className="flex-space w-full">
                <div className="flex-space gap-8 text-sm">
                  {navData?.map(({ title }, i: number) => (
                    <Link
                      key={i}
                      page={title}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className="flex-space gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="rounded-full bg-secondary-500 p-2">
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-10 flex flex-col gap-6 text-2xl">
            {navData?.map(({ title }, i: number) => (
              <Link
                key={i}
                page={title}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
