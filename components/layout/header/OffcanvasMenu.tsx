"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimateHeight from "react-animate-height";
import Image from "next/image";
import Link from "next/link";
import OffcanvasData from "@/public/data/offcanvas-data";
import logoLight from "@/public/images/logods.png";

const OffcanvasMenu = ({ isOffcanvasOpen, isActive, handleClick }: any) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownToggle = (index: any) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const pathname = usePathname();
  useEffect(() => {
    const parentItems = document.querySelectorAll(
      ".navbar__item--has-children"
    );

    parentItems.forEach((parentItem) => {
      const childItems = parentItem.querySelectorAll(".active-current-sub");

      if (childItems.length > 0) {
        parentItem.classList.add("active-current-parent");
      }
    });
  }, []);

  return (
    <div className="offcanvas-nav">
      <div
        className={
          "offcanvas-menu" + (isOffcanvasOpen ? " show-offcanvas-menu" : " ")
        }
      >
        <nav
          className={
            "offcanvas-menu__wrapper" + (isActive ? " " : " nav-fade-active")
          }
          data-lenis-prevent
        >
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/" className="logo-img">
                <Image src={logoLight} priority  style={{ width: '100px', height: '50px', objectFit: 'contain' }} alt="Image" title="Logo" />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={handleClick}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                {OffcanvasData.map((item, index) =>
                  item.submenu ? (
                    <li
                      className="navbar__item navbar__item--has-children nav-fade"
                      key={index}
                    >
                      <button
                        aria-label="dropdown menu"
                        className={
                          "navbar__dropdown-label" +
                          (openDropdown === index
                            ? " navbar__item-active"
                            : " ")
                        }
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.title}
                      </button>
                      <AnimateHeight
                        duration={400}
                        height={openDropdown === index ? "auto" : 0}
                      >
                        <ul className="navbar__sub-menu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.path}
                                className={
                                  pathname === subItem.path
                                    ? " active-current-sub"
                                    : " "
                                }
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </li>
                  ) : (
                    <li className="navbar__item nav-fade" key={index}>
                      <Link
                        href={`${item.path}`}
                        className={
                          pathname === item.path ? " active-current-link" : " "
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
        <ul className=" social nav-fade">
        <li>
          <Link href="https://in.linkedin.com/company/decasync-innovations-pvt-ltd" target="_blank" aria-label="share us on facebook">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>

        <li>
          <Link href="https://www.instagram.com/decasync_innovations/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/decasync.innovations" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://x.com/decasync" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.threads.net/@decasync_innovations" target="_blank">
            <i className="fa-brands fa-threads"></i>
          </Link>
        </li>
        </ul>
        <div className="anime">
          <span className="nav-fade"></span>
          <span className="nav-fade"></span>
          <span className="nav-fade"></span>
          <span className="nav-fade"></span>
          <span className="nav-fade"></span>
          <span className="nav-fade"></span>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasMenu;
