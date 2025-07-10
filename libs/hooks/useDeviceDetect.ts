import { useEffect, useState } from "react";

const useDeviceDetect = (): "mobile" | "desktop" => {
  const [device, setDevice] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent.toLowerCase()
    );

    setDevice(isMobile ? "mobile" : "desktop");
  }, []); // ✅ Run only once after mount

  return device;
};

export default useDeviceDetect;
