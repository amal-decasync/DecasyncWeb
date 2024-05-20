"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import OffcanvasMenu from "./OffcanvasMenu";
import logo from "@/public/images/logods.png";
import logoLight from "@/public/images/logods.png";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setIsOffcanvasOpen(false);
    }, 900);
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setTimeout(() => {
        setIsOffcanvasOpen(false);
      }, 900);
      setIsActive(false);
    };

    window.addEventListener("resize", handleResizeHeader);
    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, [setIsOffcanvasOpen]);

  let logoSrc = logo;
  let headerClass = "tp-header";

  const pathname = usePathname();
  if (
    pathname === "/career" ||
    pathname === "/" ||
    pathname === "/index" ||
    pathname === "/services" ||
    pathname === "/service-single"
  ) {
    logoSrc = logoLight;
    headerClass = "tp-header";
  } else {
    headerClass = "tp-header tp-header--light";
  }

  const handleOffCanvas = () => {
    setIsOffcanvasOpen(true);
    setIsActive(true);
  };

  return (
    <>
      <header className={headerClass}>
        <div className={"primary-navbar" + (scrolled ? " navbar-active" : " ")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image
                        src={logoSrc}
                        alt="Logo"
                        priority
                        style={{ width: '100px', height: '50px', objectFit: 'contain' }}
                      /> 
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <Link href="contact-us" className="d-none d-sm-flex">
                    Let&apos;s Connect
                    </Link>
                    <button
                      className="open-offcanvas-nav"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleOffCanvas}
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu
        isOffcanvasOpen={isOffcanvasOpen}
        handleClick={handleClick}
        isActive={isActive}
      />
    </>
  );
};

export default Header;
