import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: IPhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="Phone Image"
        width={200}
        height={200}
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          className="object-cover"
          alt="Overlaying Phone Image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Phone;
