"use client";

import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import ShopCard from "./ShopCard";

const venders_list = [
  {
    id: 4,
    name: "Co limited",
    shopImg: "/assets/shoplogo/11.webp",
    keyword:
      "Co-limiteddinnersteakbeefSpicyต้มแซ่บอีสานสเต๊กเนื้อวัวส้มตำก๋วยเตี๋ยว",
    about:
      "Full of deliciousness from delicious Thai food, meticulous from ingredients Steady with the meat menu, meat lovers have to ask for life along with a variety of cocktails that you must not miss.",
    aboutTH:
      "การเสิร์ฟอาหารอีสานและสตรีทฟู้ดที่ครีเอทจากวัตถุดิบชั้นดี อย่าง เนื้อจากประเทศออสเตรเลีย ซีฟู้ดจากภาคใต้ของเมืองไทย ปลาร้าทำเอง ผ่านกรรมวิธีดั้งเดิมผสมผสานกับความทันสมัย ปรุงรสให้จัดจ้านโดนใจคนไทย อีกทั้งเอาใจสายดื่มด้วยค็อกเทลจิบเพลิน",
    datetime: "10:00 AM - 23:00 PM \n Last order 22:30 PM",
    datetime2: "",
    tel: "02 255 2799",
    facebook: "https://www.facebook.com/colimited.restaurant/",
    ig: "https://www.instagram.com/colimited.restaurant/",
    line: "https://line.me/ti/p/%40colimited",
    deliver: "#",
    grabfood: "https://bit.ly/2G50kwy",
    lineman: "https://lin.ee/swo89N0",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Co limited/01_result.webp" },
      { src: "/assets/shop-gallery/Co limited/02_result.webp" },
      { src: "/assets/shop-gallery/Co limited/03_result.webp" },
      { src: "/assets/shop-gallery/Co limited/04_result.webp" },
      { src: "/assets/shop-gallery/Co limited/05_result.webp" },
      { src: "/assets/shop-gallery/Co limited/06_result.webp" },
      { src: "/assets/shop-gallery/Co limited/07_result.webp" },
      { src: "/assets/shop-gallery/Co limited/08_result.webp" },
      { src: "/assets/shop-gallery/Co limited/09_result.webp" },
      { src: "/assets/shop-gallery/Co limited/10_result.webp" },
      { src: "/assets/shop-gallery/Co limited/11_result.webp" },
    ],
  },

  {
    id: 1,
    name: "EL GAUCHO ARGENTINIAN STEAKHOUSE",
    shopImg: "/assets/shoplogo/06.webp",
    keyword:
      "EL GAUCHODinnerSteakArgentinianBeefWagyuAngusWineSaladเครื่องดื่มสเต๊กเนื้อวัวไวน์สลัดสปาเก็ตตี้",
    about:
      "Serve the finest steakhouse-style food, using only high-quality beef, natural Prime Black Angus US grain fed, Australian Black Angus grass fed, and Pure Blood Australian Wagyu. Combine your dinner with one of our Old and New World wines. Non-meat lovers could find something to indulge in – Argentinian style appetizers, homemade soups, fresh salads, seafood, pork and poultry dishes, and also a variety of savoury desserts.",
    aboutTH:
      "สเต็กคุณภาพจากเนื้อวัวเกรดพรีเมี่ยมนำเข้าจากอเมริกาและออสเตรเลียผ่านการปรุงแบบต้นตำรับสไตล์อาร์เจนติน่ามาเสิร์ฟในบรรยากาศและการบริการแบบพรีเมี่ยมเคียงคู่กับไวน์ชั้นดีและเครื่องเคียงที่มีให้เลือกอีกมากมาย",
    datetime: "11:00 AM - 21:00 PM ",
    datetime2: "",
    tel: "098 893 5336",
    facebook: "https://www.facebook.com/ElGauchoThailand/",
    ig: "https://www.instagram.com/elgauchothailand/",
    line: "#",
    deliver: "https://th.elgaucho.asia/delivery/",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/El gaucho/01_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/02_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/03_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/04_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/05_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/06_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/07_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/08_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/09_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/10_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/11_result.webp" },
      { src: "/assets/shop-gallery/El gaucho/12_result.webp" },
    ],
  },

  {
    id: 3,
    name: "Hoppe Coffeehouse",
    shopImg: "/assets/shoplogo/09.webp",
    keyword:
      "HoppecoffeehousecoffeelunchdinnerbeveragespaghettisteakSpicySaladไก่อบฮอปป์กาแฟร้านกาแฟยำเครื่องดื่มสปาเก็ตตี้",
    about:
      "HOPPE Coffeehouse Is not just about coffee -HOPPE Coffeehouse -IS a food shop -IS your neighbourhood kitchen -IS  a bar when sun down -IS another eating culture And Yes! We do have coffee",
    aboutTH:
      "ร้านอาหารที่ชื่อเหมือนจะขายแค่กาแฟ แต่จริงจังที่สุดในเรื่องอาหาร เพราะเมนูของเราครอบคลุมตั้งแต่อาหารไทยหาทานยากอย่าง แกงเผ็ดลิ้นจี่ไก่ ไปจนถึงอาหารฝรั่งจ๋าอย่าง สปาเกตตี้โบโลเนส",
    datetime: "10:00 AM - 22:00 PM \n Last order 21:30 PM",
    datetime2: "",
    tel: "099 442 1592",
    facebook: "https://www.facebook.com/hoppecoffeehouse/",
    ig: "https://www.instagram.com/hoppecoffeehouse/",
    line: "https://line.me/ti/p/%40hoppecoffeehouse",
    deliver: "https://linktr.ee/Hoppecoffeehouse",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/01_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/02_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/03_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/04_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/05_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/06_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/07_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/08_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/09_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/10_result.webp" },
      { src: "/assets/shop-gallery/Hoppe Coffeehouse/11_result.webp" },
    ],
  },

  {
    id: 19,
    name: "Kamui Hokkaido Eat & To Go",
    shopImg: "/assets/shoplogo/03.webp",
    keyword:
      "KamuiHokkaidojapanesefoodrestaurantTonaktsucurryRiceButadonkatsujapanesecurryทงคัตสึแกงกะหรี่เทปปันอาหารญี่ปุ่นข้าวแกงกะหรี่ญี่ปุ่นหมูทอด",
    about:
      "With a crispy layer of breadcrumbs around a juicy pork cutlet, tonkatsu has become one of the most common Japanese food favourites. Here are the places where you can find tonkatsu even curry rice.",
    aboutTH:
      "ร้านอาหารญี่ปุ่น ที่ทำอาหารสดใหม่ให้เห็นที่เคาน์เตอร์ เสิร์ฟพร้อมกับซุปมิโซะ และสลัดผักเป็นเซ็ต ราคาย่อมเยา คิดค้นสูตรอาหารโดยเชฟกระทะเหล็ก Yamamoto Masamitsu",
    datetime: "11:00 AM - 21:00 PM \n Last order 20:30 PM",
    datetime2: "",
    tel: "02 041 4044",
    facebook:
      "https://www.facebook.com/Kamui-Hokkaido-Eat-To-Go-101376358395502/",
    ig: "https://www.instagram.com/kamui_velaa_sindhorn/",
    line: "#",
    deliver: "#",
    grabfood: "https://bit.ly/39eB7e5",
    lineman: "https://lin.ee/sg95db9",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Kamui/01_result.webp" },
      { src: "/assets/shop-gallery/Kamui/02_result.webp" },
      { src: "/assets/shop-gallery/Kamui/03_result.webp" },
      { src: "/assets/shop-gallery/Kamui/04_result.webp" },
      { src: "/assets/shop-gallery/Kamui/05_result.webp" },
      { src: "/assets/shop-gallery/Kamui/06_result.webp" },
      { src: "/assets/shop-gallery/Kamui/07_result.webp" },
      { src: "/assets/shop-gallery/Kamui/08_result.webp" },
      { src: "/assets/shop-gallery/Kamui/09_result.webp" },
      { src: "/assets/shop-gallery/Kamui/10_result.webp" },
      { src: "/assets/shop-gallery/Kamui/11_result.webp" },
    ],
  },

  {
    id: 11,
    name: "Lim  Lao Ngow x Cloud Dragon",
    shopImg: "/assets/shoplogo/18.webp",
    keyword:
      "eggnoodlefishballsbraisedabalonefishwontonเย็นตาโฟบะหมี่ต้มยำก๋วยเตี๋ยวลูกชิ้นปลาหมูสะเต๊ะ",
    about:
      "'Lim Lao Ngow', a recipe of the legendary fishball and fish wonton, which have been awarded with the Michelin Bib Gourmand for four consecutive years (2017-2021) ensuring our taste and quality giving full confident to all customers.",
    aboutTH:
      "ก๋วยเตี๋ยวลูกชิ้นปลาสูตรดั้งเดิม แบบฉบับ 'ลิ้มเหล่าโหงว' ก๋วยเตี๋ยวระดับตำนาน กว่า 80 ปี! การันตี ด้วย รางวัล Michelin 4 ปี ซ้อน !! พร้อมกองทัพเมนูสูตรพิเศษ แสนอร่อย เฉพาะที่ Lim  Lao Ngow x Cloud Dragon เท่านั้น!! ",
    datetime: "10:00 AM - 20:00 PM",
    datetime2: "",
    tel: "085 140 9999",
    facebook: "https://www.facebook.com/limlaongowxcd",
    ig: "https://www.instagram.com/limlaongowxcd/",
    line: "https://lin.ee/ri9D9dB",
    deliver: "#",
    grabfood: "https://www.instagram.com/limlaongowxcd/",
    lineman: "https://wongn.ai/8ga8",
    robinhood:
      "https://static.robinhood.in.th/app_link.html?URI=robinhoodth://merchantlanding/id/142133",
    gallery: [
      { src: "/assets/shop-gallery/Cloud Dragon/01_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/02_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/03_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/04_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/05_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/06_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/07_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/08_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/09_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/10_result.webp" },
      { src: "/assets/shop-gallery/Cloud Dragon/11_result.webp" },
    ],
  },

  {
    id: 8,
    name: "Maison Saigon",
    shopImg: "/assets/shoplogo/15.webp",
    keyword:
      "MaisonSaigonvietnameserestaurantfoodvietnamSaigoneseNoodleBeefHealthyPhoOrganicออกานิคหมูยอเมซงไซ่ง่อนอาหารเวียดนามเฝอเต้าหู้อาหารสุขภาพกาแฟ",
    about:
      "Maison Saigon • Happy & Healthy Vietnamese Eatery We serve happiness and tasty authentic Vietnamese cuisine in our own style. To give you healthy bodies and minds.",
    aboutTH:
      "เมซง ไซ่ง่อน แฮปปี้ & เฮลท์ตี้ กับอาหารเวียดนามต้นตำรับ ปลอด MSG และสารปรุงรสอาหาร เราใส่ใจในการปรุงใช้วัตถุดิบคุณภาพ ผักสลัดอินทรีย์ เพื่อให้คุณมีความสุขทั้งกายและใจ",
    datetime: "11:00 AM - 22:00 PM \n Last order 21:00 PM",
    datetime2: "",
    tel: "02 656 4966",
    facebook: "https://www.facebook.com/maisonsaigon/",
    ig: "https://www.instagram.com/maison.saigon/",
    line: "https://line.me/ti/p/%40maison.saigon ",
    deliver: "#",
    grabfood: "https://bit.ly/2XBSZ02",
    lineman: "#",
    robinhood: "https://bit.ly/2VL8wd4",
    gallery: [
      { src: "/assets/shop-gallery/Maison Saigon/01_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/02_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/03_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/04_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/05_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/06_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/07_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/08_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/09_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/10_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/11_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/12_result.webp" },
      { src: "/assets/shop-gallery/Maison Saigon/13_result.webp" },
    ],
  },

  {
    id: 16,
    name: "Pizza Bar by Café Eiffel",
    shopImg: "/assets/shoplogo/14.webp",
    keyword:
      "CaféEiffelPizzabarParmahamSeafoodPepperoniMargheritaSmokedSalmonTruffleFriedchickenbeerlagerพิซซ่าเบียร์พามาแฮมไก่ทอดเฟรนส์ฟรายซีฟู้ดแซลมอน",
    about:
      "Step up your pizza taste and take a slice out of the wood-fired oven life with Pizza Bay by Café Eiffel.",
    aboutTH:
      "Pizza เตาฟืนแบบดั้งเดิม หลากหลายหน้าให้เลือก อาทิ Parma Ham, Seafood, Pepperoni, Margherita, Smoked salmon, Truffle",
    datetime: "11:00 AM - 21:00 PM",
    datetime2: "",
    tel: "061 018 5385",
    facebook: "https://www.facebook.com/EiffelBakery",
    ig: "https://www.instagram.com/cafeeiffel_bakery/",
    line: "https://lin.ee/nNP7vuS",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/1_result.webp" },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/Eiffel Pizza3419 (Medium)_result.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/Margherita_result.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/Pepperoni_result.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/Seafood_result.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/Smoked salmon_result.webp",
      },
    ],
  },

  {
    id: 12,
    name: "Petits Plats - French Mediterranean Cuisine",
    shopImg: "/assets/shoplogo/04.webp",
    keyword:
      "frenchmediterreancuisinepetitsplatsgrillseafoodwineอาหารฝรั่งเศสซีฟู้ดไวน์เมดิเตอร์เรเนียน",
    about: "At Petits Plats , The Best French Mediterranean Cuisine in Bangkok",
    aboutTH:
      "ร้านอาหารฝรั่งเศสแบบเมดิเตอร์เรเนียนในบรรยากาศที่รายล้อมไปด้วยงานศิลปะ",
    datetime:
      "Mon - Thu \n Lunch 12:00 AM - 14:30 PM \n Dinner 17:30 PM - 22:30 PM \n Fri-Sun 12:00 AM - 22:30 PM",
    datetime2: "",
    tel: "062 246 4466",
    facebook: "https://www.facebook.com/petitsplatsbangkok",
    ig: "https://www.instagram.com/petitsplatsbangkok/ ",
    line: "https://line.me/ti/p/%40petitsplatsbangkok",
    deliver: "https://linktr.ee/petitsplatsbangkok",
    grabfood: "#",
    lineman: "https://lin.ee/6F6tlb5",
    robinhood:
      "https://static.robinhood.in.th/app_link.html?URI=robinhoodth://merchantlanding/id/133442",
    gallery: [
      { src: "/assets/shop-gallery/PETITS PLATS/01_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/02_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/03_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/04_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/05_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/06_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/07_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/08_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/09_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/10_result.webp" },
      { src: "/assets/shop-gallery/PETITS PLATS/11_result.webp" },
    ],
  },

  {
    id: 14,
    name: "Quickie",
    shopImg: "/assets/shoplogo/19.webp",
    keyword:
      "QuickieBurgerhamburgershopBeefMilkshakefriedchickenorganicPlantbasecแฮมเบอร์เกอร์ไก่ทอดมิลเชคออกานิคเฟรนส์ฟรายเนื้อ",
    about:
      "Nothing is better than quickie burger, we use premium quality ingredients cooked with love.",
    aboutTH:
      "ร้านเบอร์เกอร์สไตล์อเมริกัน ให้เลือกสรรหลายเมนู โดดเด่นที่รสชาติ เพลินเพลินกับบรรยากาศสนุกสนานในโทนสีแดง",
    datetime: "10:00 AM - 22:00 PM",
    datetime2: "",
    tel: "061 632 6444",
    facebook: "https://www.facebook.com/Quickiebangkok",
    ig: "https://www.instagram.com/quickiebangkok/",
    line: "#",
    deliver: "https://opl.to/quickiebangkok/",
    grabfood: "#",
    lineman: "https://lin.ee/luNU6fh",
    robinhood:
      "https://static.robinhood.in.th/app_link.html?URI=robinhoodth://merchantlanding/id/186567",
    gallery: [
      { src: "/assets/shop-gallery/QUICKIE/01_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/02_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/03_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/04_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/05_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/06_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/07_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/08_result.webp" },
      { src: "/assets/shop-gallery/QUICKIE/09_result.webp" },
    ],
  },

  {
    id: 7,
    name: "Rongsi Pochana",
    shopImg: "/assets/shoplogo/13.webp",
    keyword:
      "โรงสีโภชนาอาหารจีนอาหารทะเลซีฟู้ดสดใหม่ไทยจีนขึ้นเหลาทะเลเผาข้าวต้มกุ๊ยเบียร์วุ้นRongsiPochanaSeafoodSpicysaladBoiledriceFishChineseCuisines",
    about: "Chinese & Seafood cuisines",
    aboutTH: "ซีฟู้ดสดใหม่ ไทยจีนขึ้นเหลา ทะเลเผา ข้าวต้มกุ๊ย & เบียร์วุ้น",
    datetime: "10:00 AM - 22:00 PM",
    datetime2: "",
    tel: "081 715 1941",
    facebook: "https://www.facebook.com/RongsiPochana/",
    ig: "https://www.instagram.com/RongsiPochana/",
    line: "http://bit.ly/2WJMsxw",
    deliver: "https://www.wongnai.com/delivery/businesses/461052mY/order",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Rongsi Pochana/01_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/02_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/03_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/04_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/05_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/06_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/07_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/08_result.webp" },
      { src: "/assets/shop-gallery/Rongsi Pochana/09_result.webp" },
    ],
  },

  {
    id: 15,
    name: "Shabu Baru",
    shopImg: "/assets/shoplogo/05.webp",
    keyword:
      "ShabuBaruSukiyakiUdonGomadareGyunikuWagyuKaniJapaneseHotpotเนื้อวากิวชาบูสุกี้ยากี้น้ำจิ้มงาคอมบุวากิวอุด้งญี่ปุ่น",
    about:
      "Shabu Baru, Traditional Japanese Shabu/Suki.Hugging yourself with our pot.Eating alone, together.",
    aboutTH:
      "Shabu Baru ชาบูต้นตำรับพรีเมี่ยมแบบญี่ปุ่น ด้วยเอกลักษณ์พร้อมเสิร์ฟแบบหม้อส่วนตัว รับประทานในสไตล์ของคุณ",
    datetime: "11:00 AM - 22:00 PM",
    datetime2: "",
    tel: "061 528 8288",
    facebook: "https://www.facebook.com/Shabu-baru-108729658228059",
    ig: "https://www.instagram.com/shabubaru_thailand/",
    line: "https://lin.ee/Ie5RHGK",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Shabu Baru/01_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/02_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/03_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/04_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/05_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/06_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/07_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/08_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/09_result.webp" },
      { src: "/assets/shop-gallery/Shabu Baru/10_result.webp" },
    ],
  },

  {
    id: 2,
    name: "Izakaya Teppen BBQ&SUSHI",
    shopImg: "/assets/shoplogo/08.webp",
    keyword:
      "TeppenIzakayaJapaneseLucnhdinnerBeerPartyปิ้งย่างอาหารญี่ปุ่นเนื้อวัวซูชิเบียร์เลี้ยงฉลอง",
    about:
      "Good Meat, Good Menu, Special service and share special moment. All we have at one place, Teppen Yakiniku.",
    aboutTH:
      "ร้านปิ้งย่างยากินิกุ บริหารภายใต้แบรนด์ TEPPEN ที่มุ่งเน้นพัฒนาเมนูเนื้อย่าง กับบรรยากาศร้านสุดพรีเมียม โดยเตาที่ร้านใช้จะเป็นเตาไฟฟ้าดูดกลิ่นทำให้มั่นใจได้ว่า จะไม่มีกลิ่นติดตัวหลังจากทาน",
    datetime:
      "Sun - Thu \n Lunch 11:00 AM - 14:00 PM \n Dinner 14:30 PM - 22:00 PM \n Fri-Sat 11:00 AM - 23:00 PM",
    datetime2: "",
    tel: "02 115 8008",
    facebook: "https://www.facebook.com/TeppenYakiniku",
    ig: "https://www.instagram.com/teppen_yakiniku/",
    line: "https://bit.ly/LINE_Yakiniku-Sushi",
    deliver: "https://bit.ly/3ux6qdf",
    grabfood: "https://bit.ly/3hkO1bP",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Teppen/01_result.webp" },
      { src: "/assets/shop-gallery/Teppen/02_result.webp" },
      { src: "/assets/shop-gallery/Teppen/03_result.webp" },
      { src: "/assets/shop-gallery/Teppen/04_result.webp" },
      { src: "/assets/shop-gallery/Teppen/05_result.webp" },
      { src: "/assets/shop-gallery/Teppen/06_result.webp" },
      { src: "/assets/shop-gallery/Teppen/07_result.webp" },
      { src: "/assets/shop-gallery/Teppen/08_result.webp" },
      { src: "/assets/shop-gallery/Teppen/09_result.webp" },
      { src: "/assets/shop-gallery/Teppen/10_result.webp" },
      { src: "/assets/shop-gallery/Teppen/11_result.webp" },
    ],
  },

  {
    id: 13,
    name: "Vaso",
    shopImg: "/assets/shoplogo/07.webp",
    keyword:
      "VasoSpanishTapasBarContemporaryCuisineMeatSrafoodEnsaladaCrudosร้านอาหารสเปนบาร์ไวน์ทาปาสบาร์ซีฟู้ดขนมชูโร",
    about: "Contemporary Spanish cuisine perfect for any occasions.",
    aboutTH:
      "ร้านอาหารสเปน สไตล์ทาปาสบาร์ แฮงค์เอาต์เก๋ๆกับกลุ่มเพื่อนในบรรยากาศสุดรื่นเริง คึกคัก",
    datetime: "18:00 PM - 02:00 AM",
    datetime2: "",
    tel: "098 914 4664",
    facebook: "https://www.facebook.com/vasobangkok",
    ig: "https://www.instagram.com/vasobangkok/",
    line: "https://bit.ly/LINE_Yakiniku-Sushi",
    deliver: "https://linktr.ee/vasobangkok",
    grabfood: "#",
    lineman: "https://lin.ee/9B5kTKb",
    robinhood:
      "https://static.robinhood.in.th/app_link.html?URI=robinhoodth://merchantlanding/id/133444OR",
    gallery: [
      { src: "/assets/shop-gallery/Vaso/01_result.webp" },
      { src: "/assets/shop-gallery/Vaso/02_result.webp" },
      { src: "/assets/shop-gallery/Vaso/03_result.webp" },
      { src: "/assets/shop-gallery/Vaso/04_result.webp" },
      { src: "/assets/shop-gallery/Vaso/05_result.webp" },
      { src: "/assets/shop-gallery/Vaso/06_result.webp" },
      { src: "/assets/shop-gallery/Vaso/07_result.webp" },
      { src: "/assets/shop-gallery/Vaso/08_result.webp" },
      { src: "/assets/shop-gallery/Vaso/09_result.webp" },
      { src: "/assets/shop-gallery/Vaso/10_result.webp" },
      { src: "/assets/shop-gallery/Vaso/11_result.webp" },
    ],
  },

  {
    id: 10,
    name: "Crimson Room (Jazz Bar)",
    shopImg: "/assets/shoplogo/17.webp",
    keyword:
      "Crimson Roomcocktailslivejazzmusicwinesparklingchampagnehangouthiddenbarแจ๊ซบาร์ลับค็อกเทลไวน์แชมเปญดนตรีสดเบียร์",
    about:
      "Exquisite cocktails, live jazz and music in a swanky, cabaret-style venue.",
    aboutTH:
      "เฉลิมฉลองในบรรยากาศความสนุกสนาน ไปกับดนตรีแจ๊ซแสดงสด พร้อมค็อกเทลที่อิงมาจากยุค 20s ในบาร์สไตล์โรงละครพร้อมม่านแดงทรงเสน่ห์",
    datetime: "10:00 AM - 22:00 PM",
    datetime2: "",
    tel: "062 259 2525",
    facebook: "https://www.facebook.com/crimsonroombkk/",
    ig: "https://www.instagram.com/crimsonroombkk/",
    line: "#",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Crimson Room/01_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/02_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/03_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/04_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/05_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/06_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/07_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/08_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/09_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/10_result.webp" },
      { src: "/assets/shop-gallery/Crimson Room/11_result.webp" },
    ],
  },

  {
    id: 18,
    name: "Acai Story",
    shopImg: "/assets/shoplogo/02.webp",
    keyword:
      "AcaiBerryAcaistoryhealthyhomemadeSmoothieBowlกราโนลาเนยถั่วอาซาอิเบอร์รี่ผลไม้อโวคาโดสุขภาพของกินเล่น",
    about:
      "Acai Story is ready to show you that health and the best dessert can go hand in hand. We prepare our bowls fresh daily, using the best quality of superfoods and fresh fruits to go hand in hand with our tasty Acai base. Our bowls are crafted with passion and care, and they taste just as great as they look!",
    aboutTH:
      "Acai Story ซุปเปอร์ฟู้ดคาเฟ่ที่จะทำให้ทุกคนอร่อยและฟิตกว่าที่เคย ด้วย“อาซาอิเบอร์รี่” (Acai Berry) จากป่าอะเมซอนมาให้ลิ้มลองกันในรูปแบบพูเรหรือบดละเอียดมาใส่ในทุกเมนูอัดแน่นจนเต็มถ้วย",
    datetime: "07:30 AM - 21:30 PM",
    datetime2: "",
    tel: "092 324 4553",
    facebook: "https://www.facebook.com/AcaiStoryBKK/",
    ig: "https://www.instagram.com/acaistory/",
    line: "https://line.me/ti/p/%40acaistory ",
    deliver: "https://www.acaistorybkk.com/",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Acai Story/1_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/2_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/3_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/4_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/5_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/6_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/7_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/8_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/9_result.webp" },
      { src: "/assets/shop-gallery/Acai Story/10_result.webp" },
    ],
  },

  {
    id: 6,
    name: "Peace Oriental Teahouse",
    shopImg: "/assets/shoplogo/12.webp",
    keyword:
      "peaceteahousejapanaesematchaHoujichaCoffeemilkteateamochibeverageชาเขียวมัทฉะเครื่องดื่มชาโฮจิฉะโมจิกาแฟ",
    about:
      "Peace Oriental Teahouse specializes in traditional oriental tea (source directly from local farmers in Japan, China, Taiwan), and creates unique oriental-culture-inspired beverages, ice-creams, and desserts.",
    aboutTH:
      "ห้องน้ำชาแบบตะวันออกที่โดดเด่นเรื่องการชงชาจีนและญี่ปุ่น ใช้แนวคิดมินิมอลและไม้เป็นวัสดุหลักในการตกแต่งร้าน ที่ให้คุณเพลิดเพลินไปกับวัฒนธรรมการชงชาแบบวิถี Zen แท้ ๆ",
    datetime: "08:30 AM - 22:00 PM",
    datetime2: "",
    tel: "098 383 9082",
    facebook: "https://www.facebook.com/peace.t.house/",
    ig: "https://www.instagram.com/peace.teahouse/",
    line: "https://line.me/ti/p/%40peaceteahouse",
    deliver: "https://linktr.ee/peace.teahouse",
    grabfood: "#",
    lineman: "http://bit.ly/3dbeeJq",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/01_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/02_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/03_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/04_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/05_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/06_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/07_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/08_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/09_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/10_result.webp" },
      { src: "/assets/shop-gallery/Peace Oriental Teahouse/11_result.webp" },
    ],
  },

  {
    id: 9,
    name: "The Coffee Academics",
    shopImg: "/assets/shoplogo/16.webp",
    keyword:
      "TheCoffeeAcademicsCoffeeshopCroissantBreakfastWineBeveragePizzaร้านกาแฟครัวซองอาหารเช้าเครื่องดื่มขนมปังไวน์สปาเก็ตตี้พิซซ่า",
    about:
      "The Coffee Academics is a specialty purveyor of coffee and roaster, founded in Hong Kong; the ideas space for a growing community of likeminded coffee lovers.",
    aboutTH:
      "เดอะ คอฟฟี่ อะคาเดมิคส์ ชวนคุณมาร่วมเป็นส่วนหนึ่งในการรังสรรค์เครื่องดื่มในมุมมองใหม่ๆ ในคาเฟ่สำหรับคอกาแฟ ดื่มด่ำไปกับบรรยากาศที่ผ่อนคลายกับกาแฟคุณภาพจากโรงคั่วของเรา ",
    datetime: "07:00 AM - 20:00 PM \n Last order 19:30 PM",
    datetime2: "",
    tel: "095 973 5436",
    facebook: "https://www.facebook.com/TheCoffeeAcademicsTH/",
    ig: "https://www.instagram.com/thecoffeeacademicsth/ ",
    line: "https://line.me/ti/p/%40tca-velaa",
    deliver: "https://m.impact.co.th/3txPx0I",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/The Coffee Academics/01_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/02_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/03_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/04_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/05_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/06_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/07_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/08_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/09_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/10_result.webp" },
      { src: "/assets/shop-gallery/The Coffee Academics/11_result.webp" },
    ],
  },

  {
    id: 17,
    name: "Pacamara coffee",
    shopImg: "/assets/shoplogo/01.webp",
    keyword:
      "pacamaracoffeshopcroissantbreakfastdrinkbeverageพาคามาร่ากาแฟร้านกาแฟครัวซองอาหารเช้าเครื่องดื่มขนมปัง",
    about:
      "Pacamara Coffee Roasters is a premium specialty coffee brand have our Coffee bean milling & roastery plant with professional specialty coffee team & Q-grader team with a processing plant and a grain mill. There is a wide selection of beverages, bakery, food and coffee beans to choose from.",
    aboutTH:
      "พาคามาร่า คอฟฟี่ โรสเตอร์ แบรนด์กาแฟสเปเชียลตี้ระดับพรีเมียมที่มีโรงงานแปรรูปและโรงสีเมล็ด โรงคั่วกาแฟของเราเองเพื่อควบคุมคุณภาพของวัตถุดิบ พร้อมการคัดสรรเมล็ดพันธุ์กาแฟชั้นดีที่ได้คัดเลือกจากแหล่งปลูกกาแฟสำคัญทั้งในประเทศและจากทั่วโลก มีเมนูหลากหลายให้เลือกทั้งเครื่องดื่ม เบเกอรี อาหาร รวมถึงเมล็ดกาแฟ",
    datetime: "06:30 AM - 20:00 PM",
    datetime2: "",
    tel: "097 086 0249",
    facebook: "https://www.facebook.com/pacamaracoffee/",
    ig: "https://www.instagram.com/pacamara_th/",
    line: "#",
    deliver: "#",
    grabfood: "https://bit.ly/3ANSnn7",
    lineman: "https://wongn.ai/kd7cx",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Pacamara/Chocolate Frappe_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/Cookies_Cream Frappe_result.webp" },
      {
        src: "/assets/shop-gallery/Pacamara/Frittata, Bacon _ Cheese with Multigrain Bun_result.webp",
      },
      { src: "/assets/shop-gallery/Pacamara/HOT AMERICANO_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/HOT CAPPUCCINO_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/HOT ESPRESSO_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/Iced Amaricano_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/Iced Cappuccino_result.webp" },
      {
        src: "/assets/shop-gallery/Pacamara/Iced Caramale Macchiato_result.webp",
      },
      { src: "/assets/shop-gallery/Pacamara/Iced Latte_result.webp" },
      { src: "/assets/shop-gallery/Pacamara/Matcha Latte Frappe_result.webp" },
      {
        src: "/assets/shop-gallery/Pacamara/SPAGHETTI CHICKEN BOLOGNESE_result.webp",
      },
    ],
  },

  {
    id: 5,
    name: "51' Avenue",
    shopImg: "/assets/shoplogo/10.webp",
    keyword:
      "Englishtea51avenueicedteahotteacultureicecreamsconejammacaroonoysterchampagneอาหารขนมชาอังกฤษไอศครีมแชมเปญ",
    about:
      "51 AVENUE Tea Salon First Flagship Store as part of your tea culture experience with more than 200 tea which can be paired with a diversity of foods, from Cold cut dishes to Assam Ice-cream with Earl Gray Tea desserts.",
    aboutTH:
      "แฟลกชิพสโตร์แห่งแรก '51 AVENUE' ทีซาลอน แหล่งชาคุณภาพรสเลิศมากกว่า 200 ชนิด ให้คนรักชาได้ลิ้มลอง พร้อมเสิร์ฟประสบการณ์การดื่มชาพร้อมเมนูคาว-หวานให้คุณได้สัมผัส",
    datetime: "08:30 AM - 21:00 PM",
    datetime2: "",
    tel: "062 446 2422",
    facebook: "https://www.facebook.com/51avenuebkk/",
    ig: "https://www.instagram.com/51avenuebkk/",
    line: "#",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/51 Avenue/01_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/02_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/03_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/04_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/05_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/06_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/07_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/08_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/09_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/10_result.webp" },
      { src: "/assets/shop-gallery/51 Avenue/11_result.webp" },
    ],
  },

  {
    id: 24,
    name: "Apex",
    shopImg: "/assets/shoplogo/24.webp",
    keyword:
      "ApexSlimbeautyFitFermSixpackVanquishEmsculptSlimmingTreatmentWeightlossลดความอ้วนลดน้ำหนักความสวยงามทรีทเม้นท์กระชับผิวกระชับสัดส่วน",
    about:
      "The Apex Slim Center offers a wide range of MD-designed weight management programs including metabolic testing and nutritional counseling. We also offer the latest state-of-the-art weight loss and body shaping technologies, facilities and services to support your effectively achieve better health and wellbeing outcomes.  ",
    aboutTH:
      "Apex Slim ภายใต้การบริหารงานของ Apex Medical Center ศูนย์การแพทย์เพื่อสุขภาพและความงาม ที่มีประสบการณ์ยาวนานกว่า 20 ปี โดยมีเทคโนโลยี U.S. FDA Approved มากที่สุดจากทั่วโลก",
    datetime: "10:00 AM - 20:30 PM",
    datetime2: "",
    tel: "095 102 8585",
    facebook: "https://www.facebook.com/ApexSlim/",
    ig: "https://www.instagram.com/apex_slim/",
    line: "https://line.me/ti/p/%40APEXslim",
    deliver: "https://www.apexslim.com/",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Apex Slim/01_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/02_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/03_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/04_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/05_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/06_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/07_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/08_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/09_result.webp" },
      { src: "/assets/shop-gallery/Apex Slim/10_result.webp" },
    ],
  },

  {
    id: 23,
    name: "HIVE Salon",
    shopImg: "/assets/shoplogo/22.webp",
    keyword:
      "hivesalonhairstyleshaircuthaircolorhairstylistundercutkoreanhairstyleร้านทำผมทำสีผมตัดผมหญิงตัดผมชายทรีตเมนต์ผมสระผมดัดผม",
    about: "HIVE Hair Salon",
    aboutTH:
      "ที่ไฮฟ์ ซาลอน ไม่ว่าคุณอยากจะดัดผม หรืออยากจะทำทรีตเมนต์ผมแบบไหน คุณจะได้รับการดูแลโดยทีมช่างผมมืออาชีพที่ใช้ผลิตภัณฑ์ชั้นนำ",
    datetime: "10:00 AM - 21:00 PM",
    datetime2: "",
    tel: "02 020 0956",
    facebook: "https://www.facebook.com/hivesociety/",
    ig: "https://www.instagram.com/hivesalon/",
    line: "#",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Hive Salon/01_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/02_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/03_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/04_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/05_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/06_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/07_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/08_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/09_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/10_result.webp" },
      { src: "/assets/shop-gallery/Hive Salon/11_result.webp" },
    ],
  },

  {
    id: 21,
    name: "MYKITA",
    shopImg: "/assets/shoplogo/21.webp",
    keyword:
      "MykitaofficialGlassesshopsMargielaSunglassesFashionerEyeStylistreLensแว่นตากันแดดล้างแว่นตาวัดสายตาประกอบแว่นเลนส์",
    about:
      "MYKITA is an independent eyewear design and manufacturing company combining handcraft with high technology. All frames are handmade at the MYKITA HAUS in Berlin. Visit the MYKITA Shop Bangkok to explore the full range of optical and sunglass frames.",
    aboutTH:
      "มายกีต้า เป็นผู้ผลิตแว่นตาที่ตั้งอยู่ในเบอร์ลิน ประเทศเยอรมนี ซึ่งรู้จักกันดีในระดับสากล ทั้งแว่นตาและแว่นกันแดดที่ทันสมัย พร้อมบริการจากผู้เชียวชาญระดับ high end",
    datetime: "11:00 AM - 20:00 PM",
    datetime2: "",
    tel: "084 659 9824",
    facebook: "https://www.facebook.com/MYKITAShopBangkok",
    ig: "https://www.instagram.com/mykitaofficial/",
    line: "https://line.me/ti/p/%40mykitashopbangkok",
    deliver: "https://mykita.com/en/shops/bangkok",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Mykita/01_result.webp" },
      { src: "/assets/shop-gallery/Mykita/02_result.webp" },
      { src: "/assets/shop-gallery/Mykita/03_result.webp" },
      { src: "/assets/shop-gallery/Mykita/04_result.webp" },
      { src: "/assets/shop-gallery/Mykita/05_result.webp" },
      { src: "/assets/shop-gallery/Mykita/06_result.webp" },
      { src: "/assets/shop-gallery/Mykita/07_result.webp" },
      { src: "/assets/shop-gallery/Mykita/08_result.webp" },
    ],
  },

  {
    id: 22,
    name: "NIC Nail Shop",
    shopImg: "/assets/shoplogo/23.webp",
    keyword:
      "NailpolishNailsNailstyleGelColorGelsalonHandnailsร้านทำเล็บมือเท้าสีเจลทาเล็บขัดเท้า",
    about:
      "N.I.C Nail Salon provides nail art services by passionate professional nail artists. Using only the highest quality nail products and accessories.",
    aboutTH:
      "ร้านทำเล็บที่ดูแลแบบ Full Service ครบวงจร ตั้งแต่การดูแลสุขภาพเล็บจนไปถึงการตกแต่งทำลวดลายสวยงามที่อัพเดตเทรนด์การทำเล็บใหม่ๆ",
    datetime: "09:00 AM - 20:00 PM",
    datetime2: "",
    tel: "02 250 0322",
    facebook: "https://www.facebook.com/NICNailSalon/",
    ig: "https://www.instagram.com/nicnailsalon1/",
    line: "#",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/NIC nail salon/01_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/02_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/03_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/04_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/05_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/06_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/07_result.webp" },
      { src: "/assets/shop-gallery/NIC nail salon/08_result.webp" },
    ],
  },

  {
    id: 20,
    name: "Skin Lab",
    shopImg: "/assets/shoplogo/20.webp",
    keyword:
      "SkinLabSkincarecreamtreatmentspa massageZelensดูแลผิวพรรณทรีตเมนต์บริการสกินแคร์ครีมบำรุง",
    about:
      "Beauty is More We believe beauty and wellness go hand in hand. And that’s why we advocate for true wellbeing that not only makes you ‘look good’ but makes you ‘feel good’.",
    aboutTH:
      "สกิน แล็บ ร้านมัลติแบรนด์ที่รวบรวมสกินแคร์เพื่อความงามจากแบรนด์ชั้นนำจากต่างประเทศ พร้อมสปาส่วนตัวที่ให้คุณได้ผ่อนคลาย",
    datetime: "11:00 AM - 19:00 PM",
    datetime2: "",
    tel: "083 636 3615",
    facebook: "https://www.facebook.com/skinlabthailand.official",
    ig: "https://www.instagram.com/skinlabthailand/",
    line: "https://line.me/ti/p/%40skinlab",
    deliver: "www.skinlabthailand.com",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Skin Lab/01_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/02_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/03_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/04_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/05_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/06_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/07_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/08_result.webp" },
      { src: "/assets/shop-gallery/Skin Lab/09_result.webp" },
    ],
  },

  {
    id: 25,
    name: "Villa Market",
    shopImg: "/assets/shoplogo/25.webp",
    keyword:
      "VillaMarketSupermarketfreshfruitsveggiescheesesnackskitchenwareorganicbeefhealthywineวิลล่ามาร์เก็ตซูเปอร์มาร์เก็ตผักผลไม้ของสดขนมเครื่องครัวออกานิคชีสไวน์เนื้อ",
    about:
      "As Thailand's original international supermarket, Villa Market direct-import more than 2,500 products from all over the world in order to offer our customers choice. We work with the largest local suppliers as well as our overseas suppliers to make available the largest range of fresh meat products available anywhere in Thailand.",
    aboutTH:
      "Villa Market ซูเปอร์มาร์เก็ตสัญชาติไทย ที่มีเอกลักษณ์เฉพาะตัว ด้วยสินค้าคุณภาพพรีเมียมอันหลากหลาย นำเข้าจากต่างประเทศที่ถูกคัดสรรมาอย่างดีจากทั่วโลก",
    datetime: "07:00 AM - 22:00 PM",
    datetime2: "",
    tel: "093 809 8052",
    facebook: "https://www.facebook.com/villamarketofficial/ ",
    ig: "https://www.instagram.com/villa.supermarket",
    line: "https://lin.ee/dz9RtDG ",
    deliver: "https://shop.villamarket.com/",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Villa Market/01_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/02_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/03_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/04_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/05_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/06_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/07_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/08_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/09_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/10_result.webp" },
      { src: "/assets/shop-gallery/Villa Market/11_result.webp" },
    ],
  },

  {
    id: 26,
    name: "Wash garage",
    shopImg: "/assets/shoplogo/26.webp",
    keyword:
      "WashGarageCarCareบริการล้างสีดูดฝุ่นเคลือบสีขจัดคราบลบลอยเคลือบแก้วซักฟอกเบาะ",
    about: "Wash Garage Car Care, wash & wax service",
    aboutTH:
      "Wash Garage บริการล้างสี ดูดฝุ่น เคลือบสี ขจัดคราบ ลบลอย เคลือบแก้ว ซัก/ฟอกเบาะ",
    datetime: "10:00 AM - 20:00 PM",
    datetime2: "",
    tel: "097 954 9616",
    facebook: "https://www.facebook.com/WashGarageLangsuan ",
    ig: "https://www.instagram.com/_washgarage/",
    line: "https://line.me/ti/p/%40washgarage",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Wash Garage/01_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/02_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/03_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/04_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/05_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/06_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/07_result.webp" },
      { src: "/assets/shop-gallery/Wash Garage/08_result.webp" },
    ],
  },
];

interface Props {}

const Venders: FC<Props> = (): JSX.Element => {
  const [postsPerPage, setPostsPerPage] = useState(12);

  const indexOfLastPost = postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const [search, setNewSearch] = useState("");

  const filtered = !search
    ? venders_list
    : venders_list.filter(
        (shop) =>
          shop.keyword.toLowerCase().includes(search.toLowerCase()) ||
          shop.name.toLowerCase().includes(search.toLowerCase())
      );

  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  const Loadmore = () => {
    setPostsPerPage(postsPerPage + 6);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl xs:text-4xl uppercase">
            OUR venders
          </h1>
        </div>

        <div className=" w-full max-w-md md:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>

          <form action="#" className="relative z-50">
            <button
              aria-label="search"
              type="submit"
              id="searchsubmit"
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              value={search}
              onChange={(e) => setNewSearch(e.target.value)}
              name="s"
              id="s"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/75 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
            />
          </form>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6  gap-x-6 gap-y-4 justify-items-center">
        {currentPosts.map((item, index) => (
          <ShopCard key={index} data={item} />
        ))}
      </div>

      <div className="w-full flex justify-center ">
        <button
          type="button"
          onClick={Loadmore}
          className="inline-flex px-4 py-2 gap-2 load-more "
        >
          <svg
            width={20}
            height={20}
            xmlns="http://w3.org/2000/svg"
            viewBox="0 0 341.333 341.333"
            fill="currentColor"
          >
            <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
          </svg>{" "}
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default Venders;
