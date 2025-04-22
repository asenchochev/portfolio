import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="asenchochochev@yahoo.com" Image={HiOutlineMail} />
      <SingleInfo text="+359893934322" Image={FiPhone} />
      <SingleInfo text="Kazanlak, Bulgaria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
