import CardTitle from "@/components/sections/CardTitle";
import SectionHeader from "@/components/sections/SectionHeader";
import SingleCustomerDataTable from "@/components/ui/client-table/SingleCustomerDataTable";
import { Input } from "@/components/ui/input";
import img from "/public/images/pp.png";
import Image from "next/image";

// Get some data from clients table
export default function CustomerInformation() {
  return (
    <div className="customer-information tab-wrapper">
      <div className="card border border-solid border-bo-gray flex">
        <div className="section p-6 flex-1">
          <h4 className="small-title mb-6">Basic Information</h4>
          {/* Make this more dynamic */}
          <div className="form-wrapper">
            <div className="row">
              <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  id="name"
                  disabled
                  value="Darlene Robertson"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  disabled
                  value="ohdarlene@gmail.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-wrapper">
                <label htmlFor="phone">Phone Number</label>
                <Input type="text" id="phone" disabled value="(406) 555-0120" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="address">Address</label>
                <Input
                  type="address"
                  id="email"
                  disabled
                  value="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
                />
              </div>
            </div>
            <div className="row">
              <div className="input-wrapper">
                <label htmlFor="gender">Gender</label>
                <Input type="text" id="gender" disabled value="Female" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="age">Age</label>
                <Input type="text" id="age" disabled value="25" />
              </div>
            </div>
            <div className="row">
              <div className="input-wrapper">
                <label htmlFor="country">Country</label>
                <Input type="text" id="country" disabled value="Russia" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="racial">Racial Group</label>
                <Input type="text" id="racial" disabled value="Asia" />
              </div>
            </div>
          </div>
        </div>
        <div className="section p-6 border-l border-solid border-bo-gray w-[37.5rem] flex flex-col gap-6">
          <h4 className="small-title mb-6">Analytics</h4>
          <div className="flex flex-col gap-4 flex-1">
            <div className="box border border-solid border-bo-gray flex flex-col justify-between p-6 bg-[#FAFAFA] flex-1">
              <CardTitle title="Total Revenue" />
              <h2 className="text-3xl font-normal">$8.000</h2>
            </div>
            <div className="box border border-solid border-bo-gray flex flex-col justify-between p-6 bg-[#FAFAFA] flex-1">
              <CardTitle title="Reports Purchased" />
              <h2 className="text-3xl font-normal">25</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="card border border-solid border-bo-gray flex">
        <div className="section flex flex-col gap-6 p-6 flex-1">
          <h4 className="small-title">Documents</h4>
          <SingleCustomerDataTable />
        </div>
        <div className="section flex flex-col gap-6 p-6 w-[37.5rem] border-l border-solid border-bo-gray">
          <h4 className="small-title">Customer Photos</h4>
          <div className="bg-[#fafafa] border border-solid border-bo-gray p-3 flex flex-wrap gap-[.62rem] h-max">
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
            <div className="img-wrapper relative h-[8.68rem] flex-1 basis-[23%]">
              <Image src={img} fill={true} alt="pp" className="" />
            </div>
          </div>
        </div>
      </div>
      {/* We need pagination here */}
    </div>
  );
}
