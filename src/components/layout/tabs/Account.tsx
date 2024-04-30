"use client";

import CardTitle from "@/components/sections/CardTitle";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Plans from "@/components/ui/Plans";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";

function AccTabs({
  typeGlobal,
  setTypeGlobal,
}: {
  typeGlobal: string;
  setTypeGlobal: Function;
}) {
  const tabsRef = useRef(null);

  const changeType = (newType: string) => {
    setTypeGlobal(newType);
  };

  return (
    <Tabs
      ref={tabsRef}
      defaultValue={typeGlobal}
      onValueChange={(e) => changeType(e)}
    >
      <TabsList className="rounded-none">
        <TabsTrigger className="px-4 py-2 h-9" value="doc-info">
          Doctor Information
        </TabsTrigger>
        <TabsTrigger className="px-4 py-2 h-9" value="clinic-info">
          Clinic Information
        </TabsTrigger>
        <TabsTrigger className="px-4 py-2 h-9" value="password">
          Password
        </TabsTrigger>
        <TabsTrigger className="px-4 py-2 h-9" value="notification-settings">
          Notification Settings
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function DoctorInfo() {
  return (
    <>
      <div className="row input-wrapper">
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" disabled value="Darlene Robertson" />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="email">Email</label>
        <Input type="text" id="email" disabled value="ohdarlene@gmail.com" />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="phone">Phone Number</label>
        <Input type="text" id="phone" disabled value="Phone Number" />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="address">Address</label>
        <Input
          type="text"
          id="address"
          disabled
          value="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
        />
      </div>
    </>
  );
}
function ClinicInfo() {
  return (
    <>
      <div className="row input-wrapper">
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" disabled value="Azarine Beauty Clinic" />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="phone">Phone Number</label>
        <Input type="text" id="phone" disabled value="(319) 555-0115" />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="address">Address</label>
        <Input
          type="text"
          id="address"
          disabled
          value="4517 Washington Ave. Manchester, Kentucky 39495"
        />
      </div>
    </>
  );
}
function Password() {
  return (
    <>
      <div className="row input-wrapper">
        <label htmlFor="old-password">Old Password</label>
        <Input
          type="password"
          id="old-password"
          disabled
          value="jdlkas*23dsa@!@#"
        />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="new-password">New Password</label>
        <Input
          type="password"
          id="new-password"
          disabled
          value="jdlkas*23d!@#"
        />
      </div>
      <div className="row input-wrapper">
        <label htmlFor="new-password-conf">Confirm New Password</label>
        <Input
          type="password"
          id="new-password-conf"
          disabled
          value="jdlkas*23d!@#"
        />
      </div>
      <div className="checklist">
        <ul className="flex flex-col flex-wrap gap-y-2 gap-x-[1.12rem] h-[4rem] w-max">
          <li className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "0.875rem", height: "0.875rem" }}
              fill="none"
            >
              <mask
                id="mask0_351_10858"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <rect width="14" height="14" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_351_10858)">
                <path
                  d="M5.8333 9.35925L3.70752 7.23347L4.31664 6.62435L5.8333 8.14102L9.6833 4.29102L10.2924 4.90013L5.8333 9.35925Z"
                  fill="black"
                />
              </g>
            </svg>
            <span className="text-xs text-tGray">
              At least contain 8 character long.
            </span>
          </li>
          <li className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "0.875rem", height: "0.875rem" }}
              fill="none"
            >
              <mask
                id="mask0_351_10858"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <rect width="14" height="14" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_351_10858)">
                <path
                  d="M5.8333 9.35925L3.70752 7.23347L4.31664 6.62435L5.8333 8.14102L9.6833 4.29102L10.2924 4.90013L5.8333 9.35925Z"
                  fill="black"
                />
              </g>
            </svg>
            <span className="text-xs text-tGray">
              Contain uppercase letters.
            </span>
          </li>
          <li className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "0.875rem", height: "0.875rem" }}
              fill="none"
            >
              <mask
                id="mask0_351_10858"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <rect width="14" height="14" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_351_10858)">
                <path
                  d="M5.8333 9.35925L3.70752 7.23347L4.31664 6.62435L5.8333 8.14102L9.6833 4.29102L10.2924 4.90013L5.8333 9.35925Z"
                  fill="black"
                />
              </g>
            </svg>
            <span className="text-xs text-tGray">
              Contain lowercase letters.
            </span>
          </li>
          <li className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "0.875rem", height: "0.875rem" }}
              fill="none"
            >
              <mask
                id="mask0_351_10858"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <rect width="14" height="14" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_351_10858)">
                <path
                  d="M5.8333 9.35925L3.70752 7.23347L4.31664 6.62435L5.8333 8.14102L9.6833 4.29102L10.2924 4.90013L5.8333 9.35925Z"
                  fill="black"
                />
              </g>
            </svg>
            <span className="text-xs text-tGray">
              Contain special character
            </span>
          </li>
          <li className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "0.875rem", height: "0.875rem" }}
              fill="none"
            >
              <mask
                id="mask0_351_10858"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
              >
                <rect width="14" height="14" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_351_10858)">
                <path
                  d="M5.8333 9.35925L3.70752 7.23347L4.31664 6.62435L5.8333 8.14102L9.6833 4.29102L10.2924 4.90013L5.8333 9.35925Z"
                  fill="black"
                />
              </g>
            </svg>
            <span className="text-xs text-tGray">Contain number</span>
          </li>
        </ul>
      </div>
    </>
  );
}
function NotSettings() {
  return (
    <div className="not-settings flex flex-col gap-[.62rem]">
      <h4 className="text-sm">Email Me When</h4>
      <div className="check-wrapper py-2 flex gap-1 items-center border-b border-solid border-bo-gray">
        <Checkbox id="news" />
        <label htmlFor="news">News & Promotion from QOVES</label>
      </div>
      <div className="check-wrapper py-2 flex gap-1 items-center border-b border-solid border-bo-gray">
        <Checkbox id="new" />
        <label htmlFor="new">New Customer</label>
      </div>
      <div className="check-wrapper py-2 flex gap-1 items-center border-b border-solid border-bo-gray">
        <Checkbox id="activity" />
        <label htmlFor="activity">Account Activity</label>
      </div>
      <div className="check-wrapper py-2 flex gap-1 items-center border-b border-solid border-bo-gray">
        <Checkbox id="transactions" />
        <label htmlFor="transactions">Transactions</label>
      </div>
      <div className="check-wrapper py-2 flex gap-1 items-center border-b border-solid border-bo-gray">
        <Checkbox id="report-state" />
        <label htmlFor="report-state">Report Status Update</label>
      </div>
    </div>
  );
}

export default function Account() {
  const [type, setType] = useState("doc-info");

  return (
    <div className="account">
      <div className="card p-6 flex flex-col gap-4 mb-4">
        <AccTabs typeGlobal={type} setTypeGlobal={setType} />
        <form action="" className="form-wrapper flex flex-col gap-4">
          {type === "doc-info" && <DoctorInfo />}
          {type === "clinic-info" && <ClinicInfo />}
          {type === "password" && <Password />}
          {type === "notification-settings" && <NotSettings />}
        </form>
      </div>
      <div className="card p-6 flex flex-col gap-4">
        <CardTitle title="Plans & Pricing" />
        <Plans />
      </div>
    </div>
  );
}
