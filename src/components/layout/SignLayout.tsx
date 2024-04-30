"use client";

import store from "@/lib/store";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

const SignIn = ({
  changeScreen,
}: {
  changeScreen: (value: boolean) => void;
}) => {
  const { login } = store();
  return (
    <div className="sign-in flex flex-col gap-8 flex-1">
      <div className="header flex flex-col gap-[1.12rem]">
        <h3 className="text-[1.875rem] font-medium">Sign In</h3>
        <p className="text-tGray text-[1.125rem]">
          Enim bibendum pharetra nisl diam maecenas.
        </p>
      </div>
      <div className="form flex flex-col gap-[1.12rem]">
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="check-wrapper flex gap-1 items-center">
            <Checkbox name="remember" id="remember" />
            <label htmlFor="remember" className="text-tGray text-sm">
              Remember this device
            </label>
          </div>
          <a href="#" className="text-tGray text-sm font-medium">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="actions flex flex-col gap-[1.12rem] items-center">
        <button
          className="but but-modal but-primary w-full"
          onClick={() => login()}
        >
          Sign In
        </button>
        <p className="text-tGray text-sm">
          Don’t have an account?{" "}
          <span
            className="font-medium cursor-pointer"
            onClick={() => changeScreen(false)}
          >
            Sign up
          </span>
        </p>
      </div>
      <div className="or">or</div>
      <div className="other-actions space-y-[1.12rem]">
        <button className="but but-modal flex gap-2 border border-bo-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
              fill="#233137"
            />
            <path
              d="M11.9999 22.9998C14.9699 22.9998 17.4599 22.0148 19.2799 20.3348L15.7249 17.5748C14.7399 18.2348 13.4799 18.6248 11.9999 18.6248C9.13492 18.6248 6.70992 16.6898 5.84492 14.0898H2.16992V16.9398C3.97992 20.5348 7.69992 22.9998 11.9999 22.9998Z"
              fill="#233137"
            />
            <path
              d="M5.845 14.0886C5.625 13.4286 5.5 12.7236 5.5 11.9986C5.5 11.2736 5.625 10.5686 5.845 9.90859V7.05859H2.17C1.4 8.59145 0.999321 10.2832 1 11.9986C1 13.7736 1.425 15.4536 2.17 16.9386L5.845 14.0886Z"
              fill="#233137"
            />
            <path
              d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
              fill="#233137"
            />
          </svg>
          <span className="text-sm font-medium text-[black] opacity-70">
            Sing in using Google
          </span>
        </button>
        <button className="but but-modal flex gap-2 border border-bo-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            style={{ height: "1.5rem" }}
            viewBox="0 0 21 24"
            fill="none"
          >
            <g clip-path="url(#clip0_355_11659)">
              <path
                d="M19.6488 8.18824C18.0495 9.17647 17.0618 10.8706 17.0618 12.7529C17.0618 14.8706 18.3318 16.8 20.2602 17.6C19.8839 18.8235 19.3195 19.9529 18.614 20.9882C17.5792 22.4471 16.4973 23.9529 14.8981 23.9529C13.2989 23.9529 12.8285 23.0118 10.9471 23.0118C9.11267 23.0118 8.45416 24 6.94901 24C5.44385 24 4.40905 22.6353 3.23315 20.9412C1.68096 18.5882 0.787271 15.8588 0.740234 12.9882C0.740234 8.32941 3.75055 5.83529 6.76086 5.83529C8.36009 5.83529 9.6771 6.87059 10.6649 6.87059C11.6056 6.87059 13.1107 5.78824 14.8981 5.78824C16.7796 5.74118 18.5669 6.63529 19.6488 8.18824ZM14.0515 3.81176C14.8511 2.87059 15.2744 1.69412 15.3214 0.470588C15.3214 0.329412 15.3214 0.141176 15.2744 0C13.9104 0.141176 12.6404 0.8 11.7467 1.83529C10.9471 2.72941 10.4767 3.85882 10.4297 5.08235C10.4297 5.22353 10.4297 5.36471 10.4767 5.50588C10.5708 5.50588 10.7119 5.55294 10.806 5.55294C12.0759 5.45882 13.2518 4.8 14.0515 3.81176Z"
                fill="#233137"
              />
            </g>
            <defs>
              <clipPath id="clip0_355_11659">
                <rect
                  width="19.52"
                  height="24"
                  fill="white"
                  transform="translate(0.740234)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm font-medium text-[black] opacity-70">
            Sing in using Apple
          </span>
        </button>
      </div>
    </div>
  );
};

const SignUp = ({
  changeScreen,
}: {
  changeScreen: (value: boolean) => void;
}) => {
  const { login } = store();
  return (
    <div className="sign-up flex flex-col gap-8 flex-1">
      <div className="header flex flex-col gap-[1.12rem]">
        <h3 className="text-[1.875rem] font-medium">Sign Up</h3>
        <p className="text-tGray text-[1.125rem]">
          Enim bibendum pharetra nisl diam maecenas.
        </p>
      </div>
      <div className="form flex flex-col gap-[1.12rem]">
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            name="fullName"
            id="fullName"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="input-wrapper flex flex-col gap-[.62rem]">
          <label htmlFor="rPassword" className="text-sm font-medium">
            Repeat Password
          </label>
          <Input
            name="rPassword"
            id="rPassword"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="check-wrapper flex gap-1 items-center">
          <Checkbox name="terms" id="terms" />
          <label htmlFor="terms" className="text-tGray text-sm">
            <a href="">Terms & Conditions</a>
          </label>
        </div>
      </div>
      <div className="actions flex flex-col gap-[1.12rem] items-center">
        <button
          className="but but-modal but-primary w-full"
          onClick={() => login()}
        >
          Sign Up
        </button>
        <p className="text-tGray text-sm">
          Already have an account?{" "}
          <span
            className="font-medium cursor-pointer"
            onClick={() => changeScreen(true)}
          >
            Sign in
          </span>
        </p>
      </div>
      <div className="or">or</div>
      <div className="other-actions space-y-[1.12rem]">
        <button className="but but-modal flex gap-2 border border-bo-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
              fill="#233137"
            />
            <path
              d="M11.9999 22.9998C14.9699 22.9998 17.4599 22.0148 19.2799 20.3348L15.7249 17.5748C14.7399 18.2348 13.4799 18.6248 11.9999 18.6248C9.13492 18.6248 6.70992 16.6898 5.84492 14.0898H2.16992V16.9398C3.97992 20.5348 7.69992 22.9998 11.9999 22.9998Z"
              fill="#233137"
            />
            <path
              d="M5.845 14.0886C5.625 13.4286 5.5 12.7236 5.5 11.9986C5.5 11.2736 5.625 10.5686 5.845 9.90859V7.05859H2.17C1.4 8.59145 0.999321 10.2832 1 11.9986C1 13.7736 1.425 15.4536 2.17 16.9386L5.845 14.0886Z"
              fill="#233137"
            />
            <path
              d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
              fill="#233137"
            />
          </svg>
          <span className="text-sm font-medium text-[black] opacity-70">
            Sing up using Google
          </span>
        </button>
        <button className="but but-modal flex gap-2 border border-bo-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            style={{ height: "1.5rem" }}
            viewBox="0 0 21 24"
            fill="none"
          >
            <g clip-path="url(#clip0_355_11659)">
              <path
                d="M19.6488 8.18824C18.0495 9.17647 17.0618 10.8706 17.0618 12.7529C17.0618 14.8706 18.3318 16.8 20.2602 17.6C19.8839 18.8235 19.3195 19.9529 18.614 20.9882C17.5792 22.4471 16.4973 23.9529 14.8981 23.9529C13.2989 23.9529 12.8285 23.0118 10.9471 23.0118C9.11267 23.0118 8.45416 24 6.94901 24C5.44385 24 4.40905 22.6353 3.23315 20.9412C1.68096 18.5882 0.787271 15.8588 0.740234 12.9882C0.740234 8.32941 3.75055 5.83529 6.76086 5.83529C8.36009 5.83529 9.6771 6.87059 10.6649 6.87059C11.6056 6.87059 13.1107 5.78824 14.8981 5.78824C16.7796 5.74118 18.5669 6.63529 19.6488 8.18824ZM14.0515 3.81176C14.8511 2.87059 15.2744 1.69412 15.3214 0.470588C15.3214 0.329412 15.3214 0.141176 15.2744 0C13.9104 0.141176 12.6404 0.8 11.7467 1.83529C10.9471 2.72941 10.4767 3.85882 10.4297 5.08235C10.4297 5.22353 10.4297 5.36471 10.4767 5.50588C10.5708 5.50588 10.7119 5.55294 10.806 5.55294C12.0759 5.45882 13.2518 4.8 14.0515 3.81176Z"
                fill="#233137"
              />
            </g>
            <defs>
              <clipPath id="clip0_355_11659">
                <rect
                  width="19.52"
                  height="24"
                  fill="white"
                  transform="translate(0.740234)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-sm font-medium text-[black] opacity-70">
            Sing up using Apple
          </span>
        </button>
      </div>
    </div>
  );
};

export default function SignLayout() {
  const { user, setUser } = store();
  const [haveAccount, setHaveAccount] = useState(true);

  return (
    <div className="sign-layout w-full h-[100vh] flex">
      <div className="left relative bg-[#FAFAFA] flex flex-col flex-1 justify-between py-[3.3rem] px-[3.12rem] h-full">
        <svg
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.5,
          }}
          viewBox="0 0 932 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.3"
            cx="261.067"
            cy="736.96"
            r="618.041"
            stroke="#7D828E"
          />
          <circle
            opacity="0.3"
            cx="210.772"
            cy="469.793"
            r="348.788"
            stroke="#7D828E"
          />
          <rect
            opacity="0.6"
            x="-490.433"
            y="12.5694"
            width="1175.11"
            height="1175.11"
            stroke="#7D828E"
          />
          <circle
            opacity="0.6"
            cx="97.1223"
            cy="600.124"
            r="833.621"
            stroke="#7D828E"
          />
          <circle
            opacity="0.3"
            cx="618.541"
            cy="618.541"
            r="618.041"
            transform="matrix(-1 0 0 1 560.554 -167.269)"
            stroke="#7D828E"
          />
          <circle
            opacity="0.6"
            cx="834.121"
            cy="834.121"
            r="833.621"
            transform="matrix(-1 0 0 1 931.241 -233.997)"
            stroke="#7D828E"
          />
        </svg>

        <div className="logo-wrapper mb-[12.5rem]">
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
        <div className="title flex flex-col gap-6 flex-1">
          <span className="font-zagma uppercase text-base ">
            Scelerisque risus
          </span>
          <h1 className="text-prim text-[5rem] leading-[84%] ">
            Ultrices imperdiet
            <br />
            <span className="font-denton font-light">lacus faucibus</span>
          </h1>
        </div>
        <div className="footer flex items-center justify-between">
          <div className="links flex gap-[1.8rem]">
            <a
              href="#"
              className="text-tGray text-sm leading-[.812rem] underline"
            >
              instagram
            </a>
            <span className="text-tGray text-sm leading-[.812rem]">/</span>
            <a
              href="#"
              className="text-tGray text-sm leading-[.812rem] underline"
            >
              Youtube
            </a>
            <span className="text-tGray text-sm leading-[.812rem]">/</span>
            <a
              href="#"
              className="text-tGray text-sm leading-[.812rem] underline"
            >
              Twitter
            </a>
            <span className="text-tGray text-sm leading-[.812rem]">/</span>
            <a
              href="#"
              className="text-tGray text-sm leading-[.812rem] underline"
            >
              Tiktok
            </a>
          </div>
          <span className="text-lg text-tGray">info@qoves.com </span>
        </div>
      </div>
      <div className="right bg-[white] w-[55.125rem] px-[6.5rem] flex items-center">
        {haveAccount ? (
          <SignIn changeScreen={setHaveAccount} />
        ) : (
          <SignUp changeScreen={setHaveAccount} />
        )}
      </div>
    </div>
  );
}
