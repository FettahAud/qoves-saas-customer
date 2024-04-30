"use client";
import { useEffect, useRef, useState } from "react";
import store from "@/lib/store";
import SearchInput from "../ui/SearchInput";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export type sidebarTabId =
  | "overview"
  | "report-flow"
  | "client-list"
  | "customer-information"
  | "financials"
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
      title: "Overview",
      id: "overview",
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
      title: "Report Flow",
      id: "report-flow",
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
      title: "Client List",
      id: "client-list",
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
      title: "Financials",
      id: "financials",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_332_32227"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_332_32227)">
            <path
              d="M13.7499 12.7116C13.0512 12.7116 12.4599 12.4696 11.9759 11.9856C11.492 11.5017 11.25 10.9103 11.25 10.2116C11.25 9.5129 11.492 8.92157 11.9759 8.4376C12.4599 7.95364 13.0512 7.71165 13.7499 7.71165C14.4487 7.71165 15.04 7.95364 15.524 8.4376C16.0079 8.92157 16.2499 9.5129 16.2499 10.2116C16.2499 10.9103 16.0079 11.5017 15.524 11.9856C15.04 12.4696 14.4487 12.7116 13.7499 12.7116ZM5.34614 15.8077V4.61548H22.1537V15.8077H5.34614ZM8.65379 14.3078H18.8461C18.8461 13.8091 19.0231 13.3831 19.3771 13.0299C19.7311 12.6767 20.1567 12.5001 20.6538 12.5001V7.92313C20.1551 7.92313 19.7291 7.74613 19.3759 7.39213C19.0227 7.03811 18.8461 6.61255 18.8461 6.11545H8.65379C8.65379 6.61417 8.47679 7.04013 8.12279 7.39333C7.76877 7.74653 7.34322 7.92313 6.84612 7.92313V12.5001C7.34483 12.5001 7.77079 12.6771 8.12399 13.0311C8.47719 13.3851 8.65379 13.8107 8.65379 14.3078ZM1.84619 19.3077V7.59625H3.34614V17.8077H19.173V19.3077H1.84619Z"
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
        gsap.to(sideBar.current!.querySelector(".search-input"), {
          width: "100%",
          justifyContent: "space-between",
        });
        gsap.to(sideBar.current!.querySelector(".search-input input"), {
          width: "100%",
          flex: "1",
          duration: 0.3,
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
        px-4
      `}
    >
      <div className="sidebar-header w-full h-[4.75rem] flex items-center py-[1.38rem] justify-between">
        <div className="logo-wrapper">
          <svg
            className="logo w-[width: 5.5795rem] h-[1.26225rem]"
            viewBox="0 0 91 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M21.0047 20.376C17.1823 20.376 13.7364 20.376 10.3 20.376C8.24422 20.3699 6.24697 19.6842 4.61324 18.4237C2.97951 17.1631 1.79909 15.3971 1.25227 13.3953C0.674694 11.2783 0.81513 9.02702 1.65119 7.00006C2.48726 4.9731 3.97085 3.28713 5.86556 2.21079C7.67412 1.13837 9.78536 0.706609 11.8644 0.983995C13.9435 1.26138 15.8714 2.23203 17.3423 3.742C18.8298 5.21801 19.8008 7.14339 20.1083 9.22668C20.4158 11.31 20.043 13.4377 19.0464 15.2879C18.6416 16.0297 18.1614 16.7335 17.5494 17.7226L20.8446 17.9508L21.0047 20.376ZM3.47418 10.5611C3.42853 11.5218 3.57467 12.482 3.90392 13.3846C4.23316 14.2871 4.73878 15.1134 5.39067 15.8145C6.04257 16.5156 6.82742 17.077 7.69852 17.4654C8.56962 17.8537 9.50916 18.0611 10.4612 18.0752C11.4133 18.0892 12.3584 17.9096 13.2404 17.5471C14.1223 17.1846 14.9231 16.6465 15.5949 15.965C16.2668 15.2835 16.7961 14.4723 17.1513 13.5799C17.5065 12.6875 17.6803 11.732 17.6624 10.7703C17.7093 9.81044 17.5647 8.85081 17.2373 7.94847C16.9098 7.04613 16.4061 6.21949 15.7561 5.51767C15.1062 4.81585 14.3232 4.25317 13.4537 3.86307C12.5842 3.47297 11.6459 3.2634 10.6947 3.24682C9.74343 3.23024 8.79858 3.40699 7.91628 3.76656C7.03399 4.12613 6.23224 4.66119 5.55869 5.33994C4.88514 6.0187 4.35352 6.82729 3.99543 7.71768C3.63734 8.60808 3.46008 9.5621 3.47418 10.5231V10.5611Z"
                fill="#233137"
              />
              <path
                d="M33.0372 20.3881C31.763 20.3884 30.5015 20.1317 29.3268 19.6332C28.152 19.1347 27.0876 18.4043 26.1958 17.4849C25.3041 16.5655 24.603 15.4755 24.1336 14.2789C23.6642 13.0822 23.4359 11.803 23.4623 10.5161C23.5667 7.96566 24.6516 5.55694 26.4864 3.80179C28.3212 2.04665 30.7612 1.08345 33.2878 1.11688C35.8145 1.15032 38.2287 2.17776 40.0173 3.98086C41.806 5.78396 42.828 8.22056 42.8663 10.7729C42.8242 13.3643 41.7652 15.8328 39.9221 17.6358C38.079 19.4388 35.6026 20.4288 33.0372 20.3881ZM40.2678 10.5541C40.2736 9.59517 40.0888 8.6448 39.7246 7.75924C39.3603 6.87368 38.8239 6.07091 38.1471 5.39845C37.4703 4.72598 36.6669 4.19747 35.7844 3.84418C34.9018 3.4909 33.9581 3.32002 33.009 3.34165C32.0599 3.36328 31.1248 3.57698 30.2589 3.97011C29.3931 4.36325 28.614 4.92782 27.968 5.63044C27.3219 6.33305 26.8219 7.15944 26.4975 8.06069C26.1732 8.96195 26.0311 9.91976 26.0796 10.8775C26.0739 11.8364 26.2586 12.7868 26.6229 13.6724C26.9871 14.5579 27.5235 15.3607 28.2003 16.0331C28.8771 16.7056 29.6805 17.2341 30.5631 17.5874C31.4456 17.9407 32.3893 18.1116 33.3384 18.0899C34.2875 18.0683 35.2226 17.8546 36.0885 17.4615C36.9544 17.0683 37.7334 16.5038 38.3795 15.8011C39.0255 15.0985 39.5255 14.2722 39.8499 13.3709C40.1742 12.4696 40.3164 11.5118 40.2678 10.5541Z"
                fill="#233137"
              />
              <path
                d="M65.8391 9.35483H74.4066V11.723H65.9333V17.8097H75.8283L75.9883 20.1684H63.4571V1.2613H75.3858V3.48678H65.8391V9.35483Z"
                fill="#233137"
              />
              <path
                d="M89.9113 2.44087L89.0358 4.22887C87.8803 3.82488 86.6972 3.50701 85.4958 3.27781C84.5762 3.16648 83.6437 3.29076 82.7843 3.63921C82.3863 3.77164 82.0347 4.01736 81.7718 4.34683C81.5088 4.67629 81.3456 5.07548 81.3018 5.4964C81.2581 5.91731 81.3356 6.34204 81.5251 6.7195C81.7146 7.09697 82.008 7.41111 82.37 7.62415C83.7736 8.47518 85.2332 9.22827 86.7385 9.87817C88.7345 10.8958 90.1749 12.3129 90.1655 14.7951C90.2439 16.1263 89.8141 17.4372 88.9647 18.458C88.1153 19.4787 86.9109 20.1318 85.5993 20.2828C84.2579 20.4944 82.8882 20.4352 81.5695 20.1087C80.2509 19.7822 79.0093 19.1949 77.9168 18.3806L78.8583 16.6782C79.0926 16.7204 79.3227 16.784 79.5456 16.8685C81.3061 17.772 83.0855 18.5804 85.138 17.9527C85.7592 17.8381 86.3303 17.5328 86.7734 17.0784C87.2165 16.6239 87.5101 16.0425 87.6141 15.4133C87.701 14.819 87.5947 14.2122 87.3112 13.684C87.0277 13.1559 86.5823 12.7348 86.0418 12.4841C84.8932 11.8183 83.6599 11.3048 82.4642 10.7341C79.3761 9.26949 78.2181 7.24373 78.943 4.60929C79.5926 2.26968 82.1911 0.728966 85.138 0.976241C85.8413 1.01858 86.5385 1.1333 87.2187 1.31862C88.0284 1.60394 88.8004 1.98437 89.9113 2.44087Z"
                fill="#233137"
              />
              <path
                d="M56.9996 1.25874H59.8241C57.0749 7.84959 54.4388 14.1837 51.5672 21.0979L43.3292 1.25874L46.1537 1.10657C47.9613 5.62411 49.7313 10.0656 51.6896 14.9445L56.9996 1.25874Z"
                fill="#233137"
              />
            </g>
          </svg>
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
      <SearchInput
        searchClick={() => !sidebarState && toggleSidebarState()}
        className="w-full"
      />
      <div className="sidebar pt-2 pb-6 flex flex-col gap-3 h-full flex-1">
        <div className="s-body flex flex-col gap-3 flex-1">
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
