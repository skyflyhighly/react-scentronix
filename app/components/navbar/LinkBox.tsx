"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LinkBoxProps {
  label: string;
  url: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ label, url }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    router.push(`/${url}`);
  }, []);

  const selected = useMemo(() => {
    return pathname.split("/")[1] === url;
  }, [pathname]);

  return (
    <div
      className={`tw-p-1 tw-uppercase tw-text-black tw-cursor-pointer tw-font-medium ${
        selected && "tw-border-b-2 tw-border-red-700"
      }`}
      onClick={() => handleClick()}
    >
      {label}
    </div>
  );
};

export default LinkBox;
