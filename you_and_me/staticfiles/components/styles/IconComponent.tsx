import React, { lazy } from "react";
const ArrowLeft = lazy(() => import("./icons/ArrowLeft"));
const ArrowRight = lazy(() => import("./icons/ArrowRight"));
const ArrowRightLine = lazy(() => import("./icons/ArrowRightLine"));
const ArrowUp = lazy(() => import("./icons/ArrowUp"));
const Facebook = lazy(() => import("./icons/Facebook"));
const Instagram = lazy(() => import("./icons/Instagram"));
const Like = lazy(() => import("./icons/Like"));
const Linkedin = lazy(() => import("./icons/Linkedin"));
const Mail = lazy(() => import("./icons/Mail"));
const Person = lazy(() => import("./icons/Person"));
const Phone = lazy(() => import("./icons/Phone"));
const Register = lazy(() => import("./icons/Register"));
const Search = lazy(() => import("./icons/Search"));
const Seller = lazy(() => import("./icons/Seller"));
const Share = lazy(() => import("./icons/Share"));
const Star = lazy(() => import("./icons/Star"));
const Telegram = lazy(() => import("./icons/Telegram"));
const Translater = lazy(() => import("./icons/Translater"));
const ArrowDown = lazy(() => import("./icons/ArrowDown"));
const Checkbox = lazy(() => import("./icons/Checked"));
const Calendar = lazy(() => import("./icons/Calendar"));
const Approved = lazy(() => import("./icons/Approved"));

interface IconProps {
  name:
    | "star"
    | "seller"
    | "mail"
    | "translater"
    | "register"
    | "person"
    | "search"
    | "like"
    | "arrowUp"
    | "arrowRight"
    | "arrowDown"
    | "arrowLeft"
    | "approved"
    | "share"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "phone"
    | "telegram"
    | "arrowRightLine"
    | "checkbox"
    | "calendar";
}

const iconMap: {
  [key in IconProps["name"]]: React.FC;
} = {
  star: Star,
  seller: Seller,
  mail: Mail,
  translater: Translater,
  register: Register,
  person: Person,
  search: Search,
  like: Like,
  arrowUp: ArrowUp,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  approved: Approved,
  share: Share,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  phone: Phone,
  telegram: Telegram,
  arrowRightLine: ArrowRightLine,
  checkbox: Checkbox,
  calendar: Calendar,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = iconMap[name] || ArrowDown;

  return (
    <i className={`unm-icon icon-${name}`}>
      <IconComponent />
    </i>
  );
};

export default Icon;
