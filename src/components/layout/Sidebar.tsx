"use client";
import { useEffect, useRef, useState } from "react";
import store from "@/lib/store";
import logo from "@/../public/svg/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export type sidebarTabId =
  | "reports"
  | "consultations"
  | "client-data"
  | "account"
  | "documentation"
  | "help"
  | "logout";
interface listItem {
  title: string;
  id: sidebarTabId;
  icon: JSX.Element;
}

export default function Sidebar() {
  const { toggleSidebar, sidebarTab, setSidebarTab, logout } = store();
  const [currentTab, setCurrentTab] = useState(sidebarTab);
  const [sidebarState, setSidebarState] = useState(true);
  const bodyListItems: listItem[] = [
    {
      title: "Reports",
      id: "reports",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32203"
            // style="mask-type:alpha"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#7D828E" />
          </mask>
          <g mask="url(#mask0_332_32203)">
            <path
              d="M3.5 20.5V15H11V20.5H3.5ZM13 20.5V11H20.5V20.5H13ZM3.5 13V3.5H11V13H3.5ZM13 8.99998V3.5H20.5V8.99998H13ZM4.99997 19H9.5V16.5H4.99997V19ZM14.5 19H19V12.5H14.5V19ZM4.99997 11.5H9.5V4.99998H4.99997V11.5ZM14.5 7.5H19V4.99998H14.5V7.5Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Consultations",
      id: "consultations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32209"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32209)">
            <path
              d="M4.50012 21.5V16.75H6.0001V20H18.0001V16.75H19.5001V21.5H4.50012ZM4.50012 11.25V2.5H14.2501L19.5001 7.74995V11.25H18.0001V8.49995H13.5001V3.99998H6.0001V11.25H4.50012ZM1.28857 14.75V13.25H22.7116V14.75H1.28857Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Your Data",
      id: "client-data",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32215"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32215)">
            <path
              d="M13.9989 11.2308C14.7624 11.2308 15.4118 10.9635 15.9471 10.429C16.4823 9.89452 16.75 9.24548 16.75 8.4819C16.75 7.71833 16.4827 7.06893 15.9482 6.53368C15.4137 5.99843 14.7647 5.7308 14.0011 5.7308C13.2375 5.7308 12.5881 5.99805 12.0529 6.53255C11.5176 7.06705 11.25 7.71608 11.25 8.47965C11.25 9.24322 11.5173 9.89263 12.0518 10.4279C12.5863 10.9631 13.2353 11.2308 13.9989 11.2308ZM8.28845 15.8461C9.01922 15.0205 9.88076 14.3846 10.8731 13.9385C11.8654 13.4923 12.9077 13.2692 14 13.2692C15.0923 13.2692 16.1346 13.4923 17.1269 13.9385C18.1192 14.3846 18.9807 15.0205 19.7115 15.8461H20V3.99998H7.99998V15.8461H8.28845ZM6.5 17.5V2.5H21.5V17.5H6.5ZM2.5 21.5V6.5H3.99998V20H17.5V21.5H2.5ZM14 9.7308C13.6525 9.7308 13.3573 9.60933 13.1144 9.36638C12.8714 9.12343 12.75 8.82823 12.75 8.48078C12.75 8.13334 12.8714 7.83815 13.1144 7.5952C13.3573 7.35223 13.6525 7.23075 14 7.23075C14.3474 7.23075 14.6426 7.35223 14.8856 7.5952C15.1285 7.83815 15.25 8.13334 15.25 8.48078C15.25 8.82823 15.1285 9.12343 14.8856 9.36638C14.6426 9.60933 14.3474 9.7308 14 9.7308ZM10.3346 16H17.6654C17.1436 15.5897 16.5689 15.282 15.9413 15.0769C15.3138 14.8718 14.6666 14.7692 14 14.7692C13.3333 14.7692 12.6862 14.8718 12.0586 15.0769C11.431 15.282 10.8564 15.5897 10.3346 16Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Account",
      id: "account",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32233"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32233)">
            <path
              d="M5.17334 19.75V12.6923H3.17334V11.1923H8.67329V12.6923H6.67329V19.75H5.17334ZM5.17334 8.80765V4.25H6.67329V8.80765H5.17334ZM9.25026 8.80765V7.3077H11.2503V4.25H12.7502V7.3077H14.7502V8.80765H9.25026ZM11.2503 19.75V11.1923H12.7502V19.75H11.2503ZM17.3272 19.75V16.6923H15.3272V15.1923H20.8271V16.6923H18.8271V19.75H17.3272ZM17.3272 12.8077V4.25H18.8271V12.8077H17.3272Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
  ];
  const footerListItems: listItem[] = [
    {
      title: "Documentation",
      id: "documentation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32241"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32241)">
            <path
              d="M6.11538 21.5C5.38888 21.5 4.77136 21.2475 4.26283 20.7427C3.75428 20.2379 3.5 19.625 3.5 18.9038V5.11538C3.5 4.38888 3.75428 3.77136 4.26283 3.26283C4.77136 2.75428 5.38888 2.5 6.11538 2.5H16.8077V17.8077H6.11538C5.80639 17.8077 5.54325 17.9125 5.32595 18.1223C5.10863 18.3321 4.99997 18.592 4.99997 18.9021C4.99997 19.2122 5.10863 19.4727 5.32595 19.6836C5.54325 19.8945 5.80639 20 6.11538 20H19V4.5H20.5V21.5H6.11538ZM8.69225 16.3077H15.3077V3.99998H8.69225V16.3077ZM7.1923 16.3077V3.99998H6.11538C5.79934 3.99998 5.53443 4.10863 5.32065 4.32595C5.10687 4.54325 4.99997 4.80639 4.99997 5.11538V16.5981C5.17306 16.516 5.34993 16.4471 5.53058 16.3914C5.71124 16.3356 5.90618 16.3077 6.11538 16.3077H7.1923Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Help",
      id: "help",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32247"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32247)">
            <path
              d="M13.7477 14.7692C13.994 14.7692 14.2086 14.6786 14.3913 14.4974C14.574 14.3163 14.6653 14.1025 14.6653 13.8561C14.6653 13.6097 14.5747 13.3952 14.3935 13.2125C14.2124 13.0298 13.9986 12.9385 13.7522 12.9385C13.5058 12.9385 13.2913 13.029 13.1086 13.2102C12.9259 13.3914 12.8345 13.6051 12.8345 13.8515C12.8345 14.0979 12.9251 14.3125 13.1063 14.4952C13.2875 14.6779 13.5013 14.7692 13.7477 14.7692ZM13.1538 11.7615H14.3461C14.3589 11.3102 14.4169 10.9753 14.5201 10.7567C14.6233 10.5381 14.8679 10.2423 15.2538 9.8692C15.7153 9.4269 16.0294 9.05318 16.1961 8.74805C16.3627 8.44293 16.4461 8.08845 16.4461 7.6846C16.4461 6.97307 16.1948 6.38621 15.6922 5.92403C15.1897 5.46184 14.5422 5.23075 13.7499 5.23075C13.1307 5.23075 12.5862 5.40158 12.1163 5.74325C11.6464 6.08492 11.3051 6.54357 11.0922 7.1192L12.173 7.57305C12.3422 7.1692 12.5592 6.86632 12.824 6.6644C13.0887 6.46247 13.3974 6.3615 13.7499 6.3615C14.1884 6.3615 14.5486 6.48843 14.8307 6.74228C15.1128 6.99613 15.2538 7.33066 15.2538 7.74588C15.2538 7.99861 15.1823 8.23556 15.0394 8.45673C14.8964 8.67788 14.6487 8.94999 14.2961 9.27308C13.8102 9.69871 13.4983 10.057 13.3605 10.3481C13.2227 10.6391 13.1538 11.1102 13.1538 11.7615ZM6.24998 17.5V2.5H21.2499V17.5H6.24998ZM7.74993 16H19.7499V3.99998H7.74993V16ZM2.75 20.9999V6.3077H4.24998V19.5H17.4422V20.9999H2.75Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Logout",
      id: "logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32253"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32253)">
            <path
              d="M3.5 20.5V3.5H12.0096V4.99998H4.99997V19H12.0096V20.5H3.5ZM16.2308 16.2692L15.1923 15.1846L17.6269 12.75H9.09613V11.25H17.6269L15.1923 8.81538L16.2308 7.7308L20.5 12L16.2308 16.2692Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      ),
    },
  ];

  const sideBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentTab(sidebarTab);
  }, [sidebarTab]);

  const toggleSidebarState = () => {
    if (sideBar.current) {
      sideBar.current.classList.toggle("closed");
      toggleSidebar();
      setSidebarState(!sidebarState);
    }
  };
  // May need to improve
  const toggleSidebarTab = (tab: sidebarTabId) => {
    setCurrentTab(tab);
    setSidebarTab(tab);
  };

  useGSAP(
    () => {
      if (sidebarState) {
        gsap.to(sideBar.current!.querySelector(".logo-wrapper"), {
          width: "5.5795rem",
          duration: 0.3,
          ease: "none",
          flex: "1",
        });
        gsap.to(sideBar.current!.querySelectorAll(".small-title"), {
          width: "100%",
          duration: 1.5,
          ease: "none",
        });
        gsap.to(sideBar.current!.querySelectorAll(".list-item span"), {
          width: "100%",
        });
        gsap.to(sideBar.current!.querySelectorAll(".list-item"), {
          width: "100%",
        });
        gsap.to(sideBar.current!.querySelectorAll(".list-item span"), {
          display: "block",
          width: "100%",
          duration: 0.3,
          ease: "none",
        });
      } else {
        gsap.to(sideBar.current!.querySelector(".logo-wrapper"), {
          width: "0",
          duration: 0.3,
          ease: "none",
          flex: "0",
        });
        gsap.to(sideBar.current!.querySelector(".search-input"), {
          width: "2.75rem",
          duration: 0.3,
          ease: "none",
          onComplete: () => {
            gsap.to(sideBar.current!.querySelector(".search-input"), {
              margin: "0 auto",
              justifyContent: "center",
              duration: 0.3,
              ease: "none",
            });
          },
        });
        gsap.to(sideBar.current!.querySelector(".search-input input"), {
          width: "0",
          flex: "0",
          duration: 0.3,
          ease: "none",
        });
        gsap.to(sideBar.current!.querySelectorAll(".list-item span"), {
          width: 0,
          duration: 0.3,
          ease: "none",
          onComplete: () => {
            gsap.set(sideBar.current!.querySelectorAll(".list-item span"), {
              display: "none",
            });
          },
        });
        gsap.to(sideBar.current!.querySelectorAll(".small-title"), {
          width: 0,
          duration: 0.3,
          ease: "none",
        });
        gsap.to(sideBar.current!.querySelectorAll(".list-item"), {
          width: "2.75rem",
          duration: 0.3,
          ease: "none",
          onComplete: () => {
            gsap.to(sideBar.current!.querySelectorAll(".list-item"), {
              margin: "0 auto",
              duration: 0.3,
              ease: "none",
            });
          },
        });
      }
    },
    { dependencies: [sidebarState] }
  );

  return (
    <div
      id="sidebar"
      ref={sideBar}
      className={`
        border-solid border-r border-bo-gray h-[100vh]
        flex flex-col gap-4
        bg-[#fafafa]
      `}
    >
      <div className="sidebar-header w-full py-4 px-6 border-b border-b-gray">
        <div className="py-1.5 flex items-center w-full justify-between">
          <div className="logo-wrapper">
            <Image {...logo} className="h-6 w-6" alt="" />
          </div>
          <svg
            className="menu-but cursor-pointer w-[1.5rem] h-[1.5rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={toggleSidebarState}
          >
            <mask
              id="mask0_332_32194"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_332_32194)">
              <path
                d="M3.5 17.6347V16.1347H20.5V17.6347H3.5ZM3.5 12.7501V11.2501H20.5V12.7501H3.5ZM3.5 7.86545V6.36548H20.5V7.86545H3.5Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="sidebar pt-3 pb-4 flex flex-col gap-3 h-full flex-1">
        <div className="s-body flex flex-col gap-3 flex-1">
          <div className="small-title">
            <span className="px-6">Essential</span>
          </div>
          <ul className="list">
            {bodyListItems.map((item, index) => (
              <li
                key={index}
                className={`list-item ${
                  item.id === currentTab ? `active` : ""
                }`}
                onClick={() => toggleSidebarTab(item.id)}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="s-footer flex flex-col gap-3">
          <div className="small-title">
            <span className="px-6">Support</span>
          </div>
          <ul className="list">
            {footerListItems.map((item, index) => (
              <li
                key={index}
                className="list-item"
                onClick={() => item.id === "logout" && logout()}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
