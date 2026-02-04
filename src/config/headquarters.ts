import IconAustralia from "../ui/icons/IconAustralia";
import IconCanada from "../ui/icons/IconCanada";
import IconUK from "../ui/icons/IconUK";

export interface location {
  country: string;
  icon: React.ComponentType<{ className?: string; "aria-label"?: string }>;
  address: string;
  phone: string;
}

export const headquarters: location[] = [
  {
    country: "United Kingdom",
    icon: IconUK,
    address: `68  Asfordby Rd<br />Alcaston<br />SY6 1YA`,
    phone: "+44 1241 918425",
  },
  {
    country: "Canada",
    icon: IconCanada,
    address: `1528 Eglinton Avenue<br />Toronto<br />Ontario M4P 1A6`,
    phone: "+1 416 485 2997",
  },
  {
    country: "Australia",
    icon: IconAustralia,
    address: `36 Swanston Street<br />Kewell<br />Victoria`,
    phone: "+61 4 9928 3629",
  },
];
