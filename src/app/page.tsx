import dynamic from "next/dynamic";

const ThemeDetector = dynamic(() => import("./components/ThemeDetector"), {
  ssr: false,
});

export default function Home() {
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome")) return "chrome";
    if (userAgent.includes("firefox")) return "firefox";
    if (userAgent.includes("safari")) return "safari";
    return "unknown";
  };

  const browser = getBrowserInfo();
  return (
    <>
      <p>{`The current browser is ${browser}`}</p>
      <ThemeDetector />
    </>
  );
}
