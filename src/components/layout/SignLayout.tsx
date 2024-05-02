"use client";

import store from "@/lib/store";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import logo from "@/../public/svg/logo.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { countries } from "countries-list";
import { DatePicker } from "../ui/DatePicker";

const arrDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="mask0_2179_33053"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2179_33053)">
      <path
        d="M12 15.0377L6.34619 9.3839L7.40002 8.33008L12 12.9301L16.6 8.33008L17.6538 9.3839L12 15.0377Z"
        fill="black"
      />
    </g>
  </svg>
);

const Welcome = ({ next }: { next: () => void }) => {
  return (
    <div className="welcome max-w-[45rem] flex flex-col gap-14 items-center z-10">
      <div className="title flex flex-col gap-8 flex-1 items-center">
        <h1 className="text-prim text-[4rem] font-normal leading-[84%] text-center">
          To prepare your report,
          <br /> we need to ask you a{" "}
          <span className="font-denton font-light">few questions</span>
        </h1>
        <span className="text-xl text-tGray">
          Don&apos;t worry, this process doesn&apos;t take long
        </span>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center gap-6 w-[31.25rem]"
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-2xl !font-normal flex-1 text-left !leading-[2.3125rem]">
          Start Answering
        </span>
        <div className="vertical-sep !bg-tGray !h-full"></div>
        <svg
          className="w-6"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </div>
  );
};

const UserName = ({ next }: { next: () => void }) => {
  const { user, setUser } = store();
  const [filled, setFilled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (firstName && lastName) setFilled(true);
    if (!firstName || !lastName) setFilled(false);
  }, [firstName, lastName]);

  useEffect(() => {
    if (firstName !== user.firstName || lastName !== user.lastName) {
      setUser({ ...user, firstName, lastName });
    }
  }, [firstName, lastName, user, setUser]);

  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          What’s your name?
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="form flex flex-col gap-6 flex-1">
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="firstName" className="text-[1.125rem] leading-normal">
            First Name
          </label>
          <Input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="py-5 px-6 h-auto text-[1.125rem] bg-[#FAFAFA] border-[#d0d0d0] text-[#000000] placeholder:text-[#0000004d]"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="lastName" className="text-[1.125rem] leading-normal">
            Last Name
          </label>
          <Input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="py-5 px-6 h-auto text-[1.125rem] bg-[#FAFAFA] border-[#d0d0d0] text-[#000000] placeholder:text-[#0000004d]"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Next Question
        </span>
        <svg
          className="w-[1.375rem]"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </>
  );
};

const UserCountry = ({ next }: { next: () => void }) => {
  const { user, setUser } = store();
  const [country, setCountry] = useState<string>("");
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (country) setFilled(true);
    if (!country) setFilled(false);
  }, [country]);

  useEffect(() => {
    if (country !== user.country && country !== "") {
      setUser({ ...user, country });
    }
  }, [country, user, setUser]);
  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          Which country are you from?
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="form flex flex-col gap-6 flex-1">
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="country" className="text-[1.125rem] leading-normal">
            Pick your country
          </label>
          <Select value={country} onValueChange={(value) => setCountry(value)}>
            <SelectTrigger className="select-trigger first:flex-1 px-6 py-5 h-auto text-[1.125rem]">
              <SelectValue placeholder="Select Country" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2179_33022"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2179_33022)">
                  <path
                    d="M12 15.0377L6.34619 9.3839L7.40002 8.33008L12 12.9301L16.6 8.33008L17.6538 9.3839L12 15.0377Z"
                    fill="black"
                  />
                </g>
              </svg>
            </SelectTrigger>
            <SelectContent>
              {Object.values(countries).map((country, index) => (
                <SelectItem
                  className="px-6 py-5 h-auto text-[1.125rem]"
                  key={index}
                  value={country.name}
                >
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Next Question
        </span>
        <svg
          className="w-[1.375rem]"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </>
  );
};

const UserBDate = ({ next }: { next: () => void }) => {
  const { user, setUser } = store();
  const [filled, setFilled] = useState(false);
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    if (date) setFilled(true);
    if (!date) setFilled(false);
  }, [date]);
  useEffect(() => {
    if (date !== user.bDate && date !== undefined) {
      setUser({ ...user, bDate: date });
    }
  }, [date, user, setUser]);
  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          What is your birthday?
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="input-wrapper flex flex-1 flex-col gap-2">
        <label htmlFor="b-date" className="text-[1.125rem] leading-normal">
          Pick your birthday
        </label>
        <DatePicker
          hideIcon={true}
          icon={arrDown}
          className={"px-6 py-5 h-auto w-full justify-between text-[1.125rem]"}
          placeholder="MM/DD/YY"
          date={date}
          setDate={setDate}
        />
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Next Question
        </span>
        <svg
          className="w-[1.375rem]"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </>
  );
};

const UserGender = ({ next }: { next: () => void }) => {
  const { user, setUser } = store();

  const [gender, setGender] = useState<string | undefined>();
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (gender) setFilled(true);
    else setFilled(false);
  }, [gender]);
  useEffect(() => {
    if (gender !== user.identify && gender !== undefined) {
      setUser({ ...user, identify: gender });
    }
  }, [gender, setUser, user]);
  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          What do you indentify as?
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="form flex flex-col gap-6 flex-1">
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="country" className="text-[1.125rem] leading-normal">
            Pick how you want to be identified
          </label>
          <Select value={gender} onValueChange={(value) => setGender(value)}>
            <SelectTrigger className="select-trigger first:flex-1 px-6 py-5 h-auto text-[1.125rem]">
              <SelectValue placeholder="Select" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2179_33022"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2179_33022)">
                  <path
                    d="M12 15.0377L6.34619 9.3839L7.40002 8.33008L12 12.9301L16.6 8.33008L17.6538 9.3839L12 15.0377Z"
                    fill="black"
                  />
                </g>
              </svg>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="male"
              >
                Male
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="female"
              >
                Female
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="other"
              >
                Rather not say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Next Question
        </span>
        <svg
          className="w-[1.375rem]"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </>
  );
};

const RacialGroup = ({ next }: { next: () => void }) => {
  const { user, setUser } = store();
  const [filled, setFilled] = useState(false);
  const [racial, setRacial] = useState<string | undefined>();

  useEffect(() => {
    if (racial) setFilled(true);
    else setFilled(false);
  }, [racial]);
  useEffect(() => {
    if (racial !== user.racialGroup && racial !== undefined)
      setUser({ ...user, racialGroup: racial });
  }, [racial, setUser, user]);
  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          Pick your racial group
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="form flex flex-col gap-6 flex-1">
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="country" className="text-[1.125rem] leading-normal">
            Pick your racial group
          </label>
          <Select value={racial} onValueChange={(value) => setRacial(value)}>
            <SelectTrigger className="select-trigger first:flex-1 px-6 py-5 h-auto text-[1.125rem]">
              <SelectValue placeholder="Select" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2179_33022"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2179_33022)">
                  <path
                    d="M12 15.0377L6.34619 9.3839L7.40002 8.33008L12 12.9301L16.6 8.33008L17.6538 9.3839L12 15.0377Z"
                    fill="black"
                  />
                </g>
              </svg>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="african"
              >
                African
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="asian"
              >
                Asian
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="american"
              >
                American
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="african-american"
              >
                African American
              </SelectItem>
              <SelectItem
                className="px-6 py-5 h-auto text-[1.125rem]"
                value="european"
              >
                European
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => next()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Next Question
        </span>
        <svg
          className="w-[1.375rem]"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.5 1L22 8.5L14.5 16" stroke="white" stroke-width="1.5" />
          <path d="M22.5 8L0.5 8" stroke="white" stroke-width="1.5" />
        </svg>
      </button>
    </>
  );
};

const Password = ({ next }: { next: () => void }) => {
  const { user, setUser, login } = store();
  const [password, setPassword] = useState<string>();
  const [repeated, setRepeated] = useState<string>();
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (password && repeated && password === repeated) {
      setFilled(true);
    } else setFilled(false);
  }, [password, repeated]);

  const submit = () => {
    setUser({ ...user, password });
    login();
  };

  return (
    <>
      <div className="header flex flex-col gap-4">
        <h3 className="text-5xl leading-[115%] font-medium">
          Create a strong password
        </h3>
        <p className="opacity-50 text-xl">Odio blandit eget tincidunt lacus</p>
      </div>
      <div className="form flex flex-col gap-6 flex-1">
        <div className="input-wrapper flex flex-col gap-2">
          <label htmlFor="password" className="text-[1.125rem] leading-normal">
            Password
          </label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Enter Password"
            className="py-5 px-6 h-auto text-[1.125rem] bg-[#FAFAFA] border-[#d0d0d0] text-[#000000] placeholder:text-[#0000004d]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper flex flex-col gap-2">
          <label
            htmlFor="confirmPass"
            className="text-[1.125rem] leading-normal"
          >
            Confirm Password
          </label>
          <Input
            name="confirmPass"
            id="confirmPass"
            type="password"
            placeholder="Confirm Password"
            className="py-5 px-6 h-auto text-[1.125rem] bg-[#FAFAFA] border-[#d0d0d0] text-[#000000] placeholder:text-[#0000004d]"
            value={repeated}
            onChange={(e) => setRepeated(e.target.value)}
          />
        </div>
      </div>
      <button
        className="but bg-prim py-4 px-6 flex items-center justify-between w-full disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!filled}
        onClick={() => submit()}
      >
        <span className="text-[#fff] !text-[1.125rem] !font-normal flex-1 text-left !leading-[2.3125rem]">
          Finish
        </span>
      </button>
    </>
  );
};

const StepHandler = ({ step, next }: { step: number; next: () => void }) => {
  return (
    <>
      {step === 1 && <UserName next={next} />}
      {step === 2 && <UserCountry next={next} />}
      {step === 3 && <UserBDate next={next} />}
      {step === 4 && <UserGender next={next} />}
      {step === 5 && <RacialGroup next={next} />}
      {step === 6 && <Password next={next} />}
    </>
  );
};

const SignUp = ({ step, next }: { step: number; next: () => void }) => {
  return (
    <div className="right bg-[white] w-[55.125rem] px-[7.5rem] py-[6.25rem] flex">
      <div className="sign-up flex flex-col gap-14 flex-1">
        <div className="step-counter flex items-center gap-2">
          <span className="text-tGray font-zagma text-base leading-4">
            {step}
          </span>
          <span className="w-14 bg-tGray opacity-20 h-[1px]"></span>
          <span className="text-tGray font-zagma text-base leading-4">6</span>
        </div>
        <StepHandler step={step} next={next} />
      </div>
    </div>
  );
};

export default function SignLayout() {
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(false);
  const next = () => setStep(step + 1);
  useGSAP(
    () => {
      if (step === 1) {
        const tl = gsap.timeline();
        tl.to(".bg-svg", {
          width: "50rem",
          height: "50rem",
          ease: "power1.inOut",
          duration: 0.3,
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
        }).to(
          ".welcome",
          {
            xPercent: -100,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.3,
            onComplete: () => {
              gsap.set(".welcome", { display: "none" });
              setHide(true);
            },
          },
          "-=.15"
        );
      }
    },
    { dependencies: [step] }
  );
  return (
    <div
      className={`sign-layout w-full h-[100vh] flex overflow-hidden ${
        step > 0 ? "show-right" : ""
      }`}
    >
      <div className="left relative bg-[#FAFAFA] flex flex-col flex-1 justify-center items-center py-[3.3rem] px-[3.12rem] h-full">
        <svg
          // width="1920"
          // height="1920"
          className="bg-svg"
          viewBox="0 0 1920 1920"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <circle
              opacity="0.5"
              cx="1148.69"
              cy="1117.49"
              r="711.137"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
            <circle
              opacity="0.5"
              cx="1090.8"
              cy="810"
              r="401.25"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
            <rect
              x="283.95"
              y="283.95"
              width="1352.1"
              height="1352.1"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
            <circle
              cx="960"
              cy="960"
              r="959.25"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
            <circle
              opacity="0.5"
              cx="711.887"
              cy="711.887"
              r="711.137"
              transform="matrix(-1 0 0 1 1493.37 76.8008)"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
            <circle
              cx="960"
              cy="960"
              r="959.25"
              transform="matrix(-1 0 0 1 1920 0)"
              stroke="#D9D9D9"
              strokeWidth="1.5"
            />
          </g>
        </svg>

        <div className="logo-wrapper absolute top-[3.3rem] left-[3.12rem] z-10">
          <Image {...logo} className="h-10 w-10" alt="" />
        </div>

        {!hide && <Welcome next={next} />}
      </div>

      <SignUp step={step} next={next} />
    </div>
  );
}
