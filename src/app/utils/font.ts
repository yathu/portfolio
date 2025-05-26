import { Doto, Poiret_One, Inter } from "next/font/google";

const doto = Doto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export { doto, poiretOne, inter };
