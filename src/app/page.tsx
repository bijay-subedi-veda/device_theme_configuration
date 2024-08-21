import dynamic from "next/dynamic";

const ThemeDetector = dynamic(() => import("./components/ThemeDetector"), {
  ssr: false,
});

export default function Home() {
  return <ThemeDetector />;
}
