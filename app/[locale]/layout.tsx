import { prompt } from "@utils/font";
import Transition from "@/components/Transition";
import type { Metadata } from "next";
import { AOSInit } from "@/components/aos";
import CookieConsent from "@/components/CookieConsent";
import { Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "../globals.css";
import "../cookieconsent.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_API_URL)),
  title: "Velaa Sindhorn Village Langsuan",
  description:
    "Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า",
  keywords: [
    "VelaaSindhornVillageLangsuan",
    "VelaaLangsuan",
    "Velaa",
    "Langsuan",
    "SindhornVillage",
    "SindhornKempinski",
    "KimptonMaaLaiBangkok",
    "SindhornMidtown",
    "Lumpini",
    "Lumpinipark",
    "Wirelessroad",
    "เวลาแอทสินธรวิลเลจ",
    "เวลาหลังสวน",
    "หลังสวน",
    "ซอยหลังสวน",
    "สินธรวิลเลจ",
    "สินธรเคมปินสกี้",
    "คิมป์ตันมาลัย",
    "คิมป์ตัน",
    "สินธรมิดทาวน์",
    "สวนลุมพินี",
    "ลุมพินี",
    "ถนนวิทยุ",
    "Communitymall",
    "restaurant",
    "cafe",
    "Bistro",
    "Supermarket",
    "salon",
    "spa",
    "ร้านอาหารหลังสวน",
    "food langsuan",
    "restaurant langsuan",
  ],
  authors: [{ name: "Siam Sindhorn Co.,Ltd." }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Velaa Sindhorn Village Langsuan",
    description:
      "Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า",
    url: "https://velaalangsuan.com",
    images: "/assets/header/04.webp",
    siteName: "Velaa Sindhorn Village Langsuan",
    locale: "en_EN",
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: Props) {
  const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang={params.locale} className={`${prompt.variable} `}>
      <GoogleAnalytics gaId={String(ga_id)} />
      <GoogleTagManager gtmId={String(ga_id)} />

      <CookieConsent />
      <AOSInit />

      <body className="w-full h-full overflow-x-hidden flex justify-center items-center ">
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
