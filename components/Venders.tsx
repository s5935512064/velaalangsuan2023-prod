"use client";

import React, { useState, FC } from "react";
import ShopCard from "./ShopCard";

const venders_list = [
  {
    id: 51,
    name: "Vilas วิลาศ",
    shopImg: "/assets/shop-gallery/vilas/vilas-logo.webp",
    keyword: "Vilas",
    about:
      "Vilas Restaurant, located in Velaa Sindhorn Village, Bangkok, offers a unique dining experience that reimagines traditional Thai cuisine by blending new world ingredients with ancient cooking techniques. The restaurant draws inspiration from King Chulalongkorn's 1897 journey to Europe, during which Thai culinary traditions were enriched with exotic ingredients and cooking methods from abroad. This historical fusion is reflected in Vilas's intriguing menu, which combines exclusive ingredients from other lands with those from Thailand.",
    aboutTH:
      "ร้านอาหาร Vilas ตั้งอยู่ที่ Velaa Sindhorn Village กรุงเทพฯ นำเสนอประสบการณ์การรับประทานอาหารที่ไม่เหมือนใคร ด้วยการผสมผสานวัตถุดิบจากทั่วโลกเข้ากับเทคนิคการปรุงอาหารแบบดั้งเดิม ร้านได้แรงบันดาลใจจากการเสด็จประพาสยุโรปของรัชกาลที่ 5 ในปี พ.ศ. 2440 ซึ่งในครั้งนั้นได้มีการผสมผสานวัฒนธรรมการทำอาหารไทยเข้ากับวัตถุดิบและวิธีการปรุงอาหารจากต่างแดน การผสมผสานทางประวัติศาสตร์นี้สะท้อนให้เห็นในเมนูอันน่าสนใจของ Vilas ที่นำวัตถุดิบพิเศษจากต่างแดนมาผสมผสานกับวัตถุดิบจากประเทศไทย",
    datetime: "17:30 AM - 23:00 PM",
    datetime2: "",
    tel: "094-997-8631",
    facebook: "https://www.facebook.com/vilasbkk",
    ig: "https://www.instagram.com/vilasbkk/",
    line: "https://line.me/R/ti/p/@vilasbkk",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/vilas/vilas-1.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-2.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-3.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-4.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-5.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-6.jpg" },
      { src: "/assets/shop-gallery/vilas/vilas-7.jpg" },
    ],
    new: true,
  },
  {
    id: 50,
    name: "Louk In Louk Jaan - ลูกอินลูกจัน",
    shopImg: "/assets/shop-gallery/LILJ/lilj_logo-01.webp",
    keyword: "LoujkInLoukJaanThaiFood",
    about:
      "stands for a unique fruit with two distinct flavors growing harmoniously on the same tree just like our creative approach to blending authentic tastes with a playful twist, crafted by the talented chefs from Saneh Jaan. At 'Louk In Louk Jaan' we present a menu that combines time-honored 'recipes with the exciting creations' of our chefs, ensuring every guest enjoys a dining experience that is truly one of a kind. The moment you step into 'Louk In Louk Jaan' you'll be greeted with a warm yet modern ambiance. Our decor balances simplicity and charm, blending natural elements with vibrant colors to create an inviting atmosphere that feels like a casual gathering with close friends.",
    aboutTH:
      "ร้านอาหารไทยแท้ที่เกิดจากแรงบันดาลใจจากขนมไทย 'เสน่ห์จันทน์' ที่เป็น signature menu และชื่อร้านเสน่ห์จันทน์ ที่มาจากผลไม้ที่มีชื่อเดียวกัน 'ลูกอินลูกจัน' เป็นผลไม้ที่มีเอกลักษณ์ที่แตกต่างกัน แต่เกิดในต้นไม้ต้นเดียวกันอย่างลงตัว เปรียบเสมือนการสร้างสรรค์เมนูที่มีรสชาติแท้แต่เต็มไปด้วยความสนุกสนานจาก 'เมนูลับหลังร้าน' ของเชฟเสน่ห์จันทน์ 'ลูกอินลูกจัน' นำเสนอ เมนูที่เป็นการผสมผสานระหว่างสูตรดั้งเดิม และความสนุกของเชฟที่คิดสูตรลับหลังร้าน เพื่อให้ลูกค้าทุกคนได้สัมผัสกับความอร่อยที่ไม่เหมือนใคร เมื่อคุณก้าวเข้ามาที่ 'ลูกอินลูกจัน' คุณจะได้พบกับบรรยากาศที่อบอุ่น แต่มีความทันสมัย การตกแต่งที่เรียบง่ายแต่มีเสน่ห์ ผสมผสานระหว่างธรรมชาติ และสีสันที่สนุก สร้างความรู้สึกเหมือนกำลังสังสรรค์อย่างเป็นกันเองกับเพื่อนที่รู้ใจ",
    datetime: "11:00 AM - 22:00 PM",
    datetime2: "",
    tel: "092-254-6588",
    facebook: "https://www.facebook.com/loukinloukjaan",
    ig: "https://www.instagram.com/loukinloukjaan",
    line: "https://line.me/R/ti/p/@loukinloukjaan?from=page&searchId=loukinloukjaan",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/LILJ/166.webp" },
      { src: "/assets/shop-gallery/LILJ/172.webp" },
      { src: "/assets/shop-gallery/LILJ/174.webp" },
      { src: "/assets/shop-gallery/LILJ/178.webp" },
      { src: "/assets/shop-gallery/LILJ/180.webp" },
      { src: "/assets/shop-gallery/LILJ/181.webp" },
      { src: "/assets/shop-gallery/LILJ/182.webp" },
      { src: "/assets/shop-gallery/LILJ/183.webp" },
      { src: "/assets/shop-gallery/LILJ/189.webp" },
    ],
    new: true,
  },
  {
    id: 49,
    name: "PP SPACE",
    shopImg: "/assets/shop-gallery/PP/pp-sapce-01.webp",
    keyword: "PP SPACE",
    about:
      "A new Multi-Brand Store featuring products from Maison Kitsuné, Tory Burch, Off-White™ and other brands ready for you to shop today",
    aboutTH:
      "ร้าน Multi-Brand Store ใหม่ พร้อมสินค้าจากแบรนด์ Maison Kitsuné, Tory Burch, Off-White™ และแบรนด์อื่นๆ ให้คุณได้ช้อปแล้ววันนี้",
    datetime: "10:00 AM - 20:00 PM",
    datetime2: "",
    tel: "",
    facebook: "https://www.facebook.com/ppgroupthailand",
    ig: "https://www.instagram.com/ppgroupthailand",
    line: "#",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/PP/pp-gallery-1.jpg" },
      { src: "/assets/shop-gallery/PP/pp-gallery-2.jpg" },
      { src: "/assets/shop-gallery/PP/pp-gallery-3.jpg" },
      { src: "/assets/shop-gallery/PP/pp-gallery-4.jpg" },
      { src: "/assets/shop-gallery/PP/pp-gallery-5.jpg" },
    ],
    new: true,
  },
  {
    id: 16,
    name: "Pizza Bar by Café Eiffel",
    shopImg: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/logo_pizza.webp",
    keyword:
      "CaféEiffelPizzabarParmahamSeafoodPepperoniMargheritaSmokedSalmonTruffleFriedchickenbeerlagerพิซซ่าเบียร์พามาแฮมไก่ทอดเฟรนส์ฟรายซีฟู้ดแซลมอน",
    about:
      "Pizza and pasta, beloved foods that have captured hearts worldwide, are familiar to many. We know the thin, crispy pizza crust topped with tomato sauce, cheese, and various toppings, as well as the delectable pasta dishes. But have you ever wondered about the origins of these cherished meals? 'Sugo' the thick red sauce essential to both pizza and pasta, has a fascinating history. In Italian, 'sugo' simply means 'sauce', Its concept can be traced back to the tomato sauce invented by the Aztecs. When the Spanish occupied Mexico, they introduced this tomato sauce to Europe, where it evolved into the sugo we know today.",
    aboutTH:
      "พิซซ่าและพาสต้า อาหารยอดนิยมที่ครองใจผู้คนทั่วโลก ใครๆ ก็รู้จักแป้งพิซซ่าบางกรอบ ราดด้วยซอสมะเขือเทศ ชีส และท็อปปิ้งหลากหลาย รวมถึงเมนูพาสต้าแสนอร่อย แต่คุณเคยสงสัยไหมว่าอาหารเลิศรสเหล่านี้มีที่มาอย่างไร? ซอสแดงเข้มข้นที่เป็นหัวใจสำคัญของทั้งพิซซ่าและพาสต้า มีประวัติความเป็นมาที่น่าทึ่ง คำว่า 'ซูโก้' ในภาษาอิตาลีแปลว่า 'ซอส' โดยมีรากเหง้ามาจากซอสมะเขือเทศที่ชาวแอซเท็กคิดค้น เมื่อสเปนเข้ายึดครองเม็กซิโก พวกเขาได้นำซอสนี้เข้าสู่ยุโรป ซึ่งต่อมาได้วิวัฒนาการกลายเป็นซูโก้อย่างที่เรารู้จักในปัจจุบัน",
    datetime: "11:00 AM - 21:00 PM",
    datetime2: "",
    tel: "0610185385",
    facebook: "https://www.facebook.com/EiffelBakery",
    ig: "https://www.instagram.com/cafeeiffel_bakery/",
    line: "https://lin.ee/nNP7vuS",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/456_0.webp" },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/458_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/460_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/462_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/465.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/467_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/468_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/470_0.webp",
      },
      {
        src: "/assets/shop-gallery/Pizza Bar by Cafe Eiffel/471_0.webp",
      },
    ],
    new: false,
  },
  {
    id: 47,
    name: "Oyatsu no Jikan",
    shopImg: "/assets/shop-gallery/Oyatsu/logo_Oyatsu.webp",
    keyword: "OyatsunoJikanbyAzukitokouriKakigoriShavediceFrenchToast",
    about:
      "'Kakigori' Shaved ice is a summer tradition in Japan, essentially comprising of 2 main ingredients : Azuki (red beans) and Kouri (ice). Keeping up with the quality and inspiration of Florilege restaurant, various French cooking concepts such as texture, temperature difference, contrast, and dressing are applied to creating the best Kakigori for your enjoyment. 'Oyatsu no Jikan' ( literally 'time for snacks') is an extension of the original 'Azuki to Kouri' store in Tokyo, with more delectable snacks on offer incl. signature French Toast, Matcha beverages and more.",
    aboutTH:
      "สาขาแรกนอกญี่ปุ่น!!! Azuki to Kouri ร้าน Kakigori ขึ้นชื่อจากกรุงโตเกียว ที่ต้องจองคิวล่วงหน้าหลายเดือน โดยเชฟ Hiroyasu Kawate ระดับ 2 ดาวมิชลิน จาก “Florilege” และอันดับที่ 2 ร้านอาหารยอดเยี่ยมในเอเชีย จาก Asia's 50 Best Restaurant 2024 ภายใต้ชื่อร้าน Oyatsu no Jikan ที่รวมเมนูของหวาน สุด Exclusive อย่าง Kakigori ขึ้นชื่อทุกรสชาติ พลาดไม่ได้กับ French Toast สูตร Signature ของเชฟ และเมนูพิเศษเฉพาะที่ไทยเท่านั้น",
    datetime: "11:00 AM - 22:00 PM \n Last Booking at 20:00 PM",
    datetime2: "",
    tel: "099 654 8755",
    facebook:
      "https://www.facebook.com/profile.php?id=61558113950446&locale=th_TH",
    ig: "https://www.instagram.com/oyatsubk",
    line: "https://line.me/ti/p/%40oyatsubk",
    deliver: "https://www.oyatsubk.com",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (7).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (6).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (5).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (4).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (3).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (2).webp" },
      { src: "/assets/shop-gallery/Oyatsu/Oyatsu (1).webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9425.webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9418.webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9416.webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9395.webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9356.webp" },
      { src: "/assets/shop-gallery/Oyatsu/IMG_9342.webp" },
    ],
    new: false,
  },

  {
    id: 48,
    name: "Kad Kokoa",
    shopImg: "/assets/shop-gallery/kadkokoa/kadkokoa_logo.webp",
    keyword: "KadKokoaช๊อคโกแลตคาเฟ่ของหวานกาดโกเกา",
    about:
      "We are Thai Craft Chocolate Makers. Our chocolate highlights the natural and true taste of Thai cacao beans with as little intervention as possible through our 'Single Origin' style.",
    aboutTH:
      "เราเป็นผู้ผลิตช็อคโกแลตช่างไทย ช็อคโกแลตของเราเน้นทำให้รสชาติธรรมชาติและแท้ของเมล็ดกาแฟโกโก้ไทยเป็นหลัก โดยใช้วิธีการ 'Single Origin' โดยมีการแทรกแซงให้น้อยที่สุดเท่าที่จะเป็นไปได้",
    datetime: "10:00 AM - 20:00 PM",
    datetime2: "",
    tel: "061 396 3805",
    facebook: "https://www.facebook.com/kadkokoathailand",
    ig: "https://www.instagram.com/kadkokoa_chocolate/",
    line: "https://line.me/R/ti/p/@376qagtw?oat_content=url",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_06.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_01.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_02.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_03.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_05.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_04.webp" },
      { src: "/assets/shop-gallery/kadkokoa/kadkokoa_07.webp" },
    ],
    new: false,
  },

  {
    id: 45,
    name: "Umi",
    shopImg: "/assets/shop-gallery/UmiShop/logo_umi.webp",
    keyword:
      "UmiVelaaUmiBkkSushiOmakaseOmakaseBangkokซูชิแซลม่อนโอมากาเสะอาหารญี่ปุ่นอิซากายะ",
    about:
      "our new Velaa branch offers a meticulously curated Sushi Omakase experience that's reminiscent of Japan's most acclaimed dining spaces. This accessible location redefines convenience, surrounded by landmarks of business, arts, and culture. As the city buzzes with energy outside, our guests are transported to a serene & tranquil haven within our walls.",
    aboutTH:
      "ที่สาขาใหม่ของเรา Velaa เรามอบประสบการณ์ Sushi Omakase ที่คัดสรรมาอย่างพิถีพิถันซึ่งเป็นที่นึกถึงในพื้นที่อาหารที่ได้รับการยกย่องมากที่สุดของญี่ปุ่น ที่ตั้งที่เข้าถึงได้นี้ได้ปรับปรุงความสะดวกสบายให้ดีขึ้น โดยมีสถานที่สำคัญทางธุรกิจ ศิลปะ และวัฒนธรรมล้อมรอบ ขณะที่เมืองกำลังเต็มไปด้วยพลังงานภายนอก แขกของเราจะได้รับการนำไปสู่ที่พักสงบและเงียบสงบภายในกำแพงของเรา",
    datetime: "12:00 AM / 17:00 PM / 19:00 PM",
    datetime2: "",
    tel: "061 961 4949",
    facebook: "https://www.facebook.com/umi49/",
    ig: "https://www.instagram.com/umi_bkk/?hl=en",
    line: "https://page.line.me/elc1267w?openQrModal=true",
    deliver: "#",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/UmiShop/umi_01.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_03.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_04.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_05.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_02.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_06.webp" },
      { src: "/assets/shop-gallery/UmiShop/umi_07.webp" },
    ],
    new: false,
  },
  {
    id: 48,
    name: "KURA langsuan Premium Yakiniku & Sushi",
    shopImg: "/assets/shop-gallery/Kura/logo_kura.webp",
    keyword:
      "ENTERTAINMENTJAPANESEYAKINIKUDINNINGLucnhdinnerBeerPartyปิ้งย่างอาหารญี่ปุ่นเนื้อวัวซูชิเบียร์เลี้ยงฉลอง",
    about:
      "We chose to name our restaurant 'Kura', to symbolize our style of yakiniku grill dining, where we carefully gather the finest ingredients and prepare them with meticulous attention by professional chefs, allowing everyone to indulge in authentic Japanese-style dishes without barriers!",
    aboutTH:
      "'คุระ' สื่อถึงการเป็นร้านปิ้งย่างสไตล์ยากินิกุ ที่เก็บรวบรวมวัตถุดิบสุดล้ำค่าไว้ พร้อมนำมาปรุงด้วยความพิถีพิถันโดยเชฟมืออาชีพ เพื่อให้ทุกท่านได้เพลิดเพลินกับเมนูแสนอร่อยตามแบบฉบับญี่ปุ่นแท้ๆ แบบไม่มีอะไรมากั้นนั่นเอง!",
    datetime: "Daily 11.00 AM - 22.00 PM \nFri - Sat 11.00 AM -23.00 PM",
    datetime2: "",
    tel: "02 115 8008",
    facebook: "https://www.facebook.com/Kura.langsuan",
    ig: "https://www.instagram.com/kura_langsuan",
    line: "https://line.me/ti/p/%40kuraofficial",
    deliver: "https://linktr.ee/kura_premium",
    grabfood: "#",
    lineman: "#",
    robinhood: "#",
    gallery: [
      { src: "/assets/shop-gallery/Kura/Kura01.webp" },
      { src: "/assets/shop-gallery/Kura/Kura02.webp" },
      { src: "/assets/shop-gallery/Kura/Kura03.webp" },
      { src: "/assets/shop-gallery/Kura/Kura04.webp" },
      { src: "/assets/shop-gallery/Kura/Kura05.webp" },
      { src: "/assets/shop-gallery/Kura/Kura06.webp" },
      { src: "/assets/shop-gallery/Kura/Kura07.webp" },
      { src: "/assets/shop-gallery/Kura/Kura08.webp" },
      { src: "/assets/shop-gallery/Kura/Kura09.webp" },
      { src: "/assets/shop-gallery/Kura/Kura10.webp" },
    ],
    new: false,
  },
  // {
  //   id: 44,
  //   name: "Café Kitsuné",
  //   shopImg: "/assets/shop-gallery/kitsune/logo_kisune.webp",
  //   keyword:
  //     "CaféKitsunécaféandbarJapaneseFoxShortbreadmatchachocolateAvocadoToastCroqueMonsieurWineSake",
  //   about:
  //     "Café Kitsuné, Thailand's first café and bar, immerse yourself in our minimalist ambiance, where French elegance meets Japanese refinement. Admire our signature fox emblem décor, a symbol of Kitsuné's rich heritage. Savor our new menu items, featuring Fox Shortbread in matcha and chocolate flavors, Avocado Toast, Katsu Sando, and Croque Monsieur. Elevate your dining experience with our curated selection of Natural Wine and Sake, exclusively available at our Velaa Sindhorn Village branch.",
  //   aboutTH:
  //     "Café Kitsuné คาเฟ่และบาร์ แห่งแรกในไทย ตกแต่งในสไตล์โมเดิร์น และมินิมอล สื่อถึงการผสมผสานระหว่างฝรั่งเศสและญี่ปุ่น ยกระดับความโมเดิร์นด้วยไม้โอ๊กแกะสลักรูปทรงสุนัขจิ้งจอก ซึ่งเป็นสัญลักษณ์ของแบรนด์คิทสึเนะ พร้อมเมนูใหม่ อาทิ Fox Shortbread รสชาเขียวและช็อกโกแลต ไปจนถึง Avocado Toast, Katsu Sando และ Croque Monsieur เพิ่มความพิเศษของการเป็นคาเฟ่และบาร์แห่งแรกด้วย Natural Wine และ Sake ที่ถูกคัดสรรมา สำหรับสาขานี้โดยเฉพาะ",
  //   datetime: "09:00 AM - 21:00 PM",
  //   datetime2: "",
  //   tel: "02 000 0673",
  //   facebook: "https://www.facebook.com/profile.php?id=100089582513330",
  //   ig: "https://www.instagram.com/cafekitsune",
  //   line: "https://line.me/ti/p/%40CafeKitsune_TH",
  //   deliver: "#",
  //   grabfood: "#",
  //   lineman: "#",
  //   robinhood: "#",
  //   gallery: [
  //     { src: "/assets/shop-gallery/kitsune/09.webp" },
  //     { src: "/assets/shop-gallery/kitsune/10.webp" },
  //     { src: "/assets/shop-gallery/kitsune/11.webp" },
  //     { src: "/assets/shop-gallery/kitsune/12.webp" },
  //     { src: "/assets/shop-gallery/kitsune/08.webp" },
  //     { src: "/assets/shop-gallery/kitsune/07.webp" },
  //     { src: "/assets/shop-gallery/kitsune/06.webp" },
  //     { src: "/assets/shop-gallery/kitsune/05.webp" },
  //     { src: "/assets/shop-gallery/kitsune/04.webp" },
  //     { src: "/assets/shop-gallery/kitsune/03.webp" },
  //     { src: "/assets/shop-gallery/kitsune/01.webp" },
  //   ],
  //   new: false,
  // },

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
    new: false,
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
    new: false,
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
    new: false,
  },

  // {
  //   id: 19,
  //   name: "Kamui Hokkaido Eat & To Go",
  //   shopImg: "/assets/shoplogo/03.webp",
  //   keyword:
  //     "KamuiHokkaidojapanesefoodrestaurantTonaktsucurryRiceButadonkatsujapanesecurryทงคัตสึแกงกะหรี่เทปปันอาหารญี่ปุ่นข้าวแกงกะหรี่ญี่ปุ่นหมูทอด",
  //   about:
  //     "With a crispy layer of breadcrumbs around a juicy pork cutlet, tonkatsu has become one of the most common Japanese food favourites. Here are the places where you can find tonkatsu even curry rice.",
  //   aboutTH:
  //     "ร้านอาหารญี่ปุ่น ที่ทำอาหารสดใหม่ให้เห็นที่เคาน์เตอร์ เสิร์ฟพร้อมกับซุปมิโซะ และสลัดผักเป็นเซ็ต ราคาย่อมเยา คิดค้นสูตรอาหารโดยเชฟกระทะเหล็ก Yamamoto Masamitsu",
  //   datetime: "11:00 AM - 21:00 PM \n Last order 20:30 PM",
  //   datetime2: "",
  //   tel: "02 041 4044",
  //   facebook:
  //     "https://www.facebook.com/Kamui-Hokkaido-Eat-To-Go-101376358395502/",
  //   ig: "https://www.instagram.com/kamui_velaa_sindhorn/",
  //   line: "#",
  //   deliver: "#",
  //   grabfood: "https://bit.ly/39eB7e5",
  //   lineman: "https://lin.ee/sg95db9",
  //   robinhood: "#",
  //   gallery: [
  //     { src: "/assets/shop-gallery/Kamui/01_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/02_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/03_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/04_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/05_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/06_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/07_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/08_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/09_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/10_result.webp" },
  //     { src: "/assets/shop-gallery/Kamui/11_result.webp" },
  //   ],
  // },

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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
  },

  // {
  //   id: 2,
  //   name: "Izakaya Teppen BBQ&SUSHI",
  //   shopImg: "/assets/shoplogo/08.webp",
  //   keyword:
  //     "TeppenIzakayaJapaneseLucnhdinnerBeerPartyปิ้งย่างอาหารญี่ปุ่นเนื้อวัวซูชิเบียร์เลี้ยงฉลอง",
  //   about:
  //     "Good Meat, Good Menu, Special service and share special moment. All we have at one place, Teppen Yakiniku.",
  //   aboutTH:
  //     "ร้านปิ้งย่างยากินิกุ บริหารภายใต้แบรนด์ TEPPEN ที่มุ่งเน้นพัฒนาเมนูเนื้อย่าง กับบรรยากาศร้านสุดพรีเมียม โดยเตาที่ร้านใช้จะเป็นเตาไฟฟ้าดูดกลิ่นทำให้มั่นใจได้ว่า จะไม่มีกลิ่นติดตัวหลังจากทาน",
  //   datetime:
  //     "Sun - Thu \n Lunch 11:00 AM - 14:00 PM \n Dinner 14:30 PM - 22:00 PM \n Fri-Sat 11:00 AM - 23:00 PM",
  //   datetime2: "",
  //   tel: "02 115 8008",
  //   facebook: "https://www.facebook.com/TeppenYakiniku",
  //   ig: "https://www.instagram.com/teppen_yakiniku/",
  //   line: "https://bit.ly/LINE_Yakiniku-Sushi",
  //   deliver: "https://bit.ly/3ux6qdf",
  //   grabfood: "https://bit.ly/3hkO1bP",
  //   lineman: "#",
  //   robinhood: "#",
  //   gallery: [
  //     { src: "/assets/shop-gallery/Teppen/01_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/02_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/03_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/04_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/05_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/06_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/07_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/08_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/09_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/10_result.webp" },
  //     { src: "/assets/shop-gallery/Teppen/11_result.webp" },
  //   ],
  // },

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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
  },

  // {
  //   id: 5,
  //   name: "51' Avenue",
  //   shopImg: "/assets/shoplogo/10.webp",
  //   keyword:
  //     "Englishtea51avenueicedteahotteacultureicecreamsconejammacaroonoysterchampagneอาหารขนมชาอังกฤษไอศครีมแชมเปญ",
  //   about:
  //     "51 AVENUE Tea Salon First Flagship Store as part of your tea culture experience with more than 200 tea which can be paired with a diversity of foods, from Cold cut dishes to Assam Ice-cream with Earl Gray Tea desserts.",
  //   aboutTH:
  //     "แฟลกชิพสโตร์แห่งแรก '51 AVENUE' ทีซาลอน แหล่งชาคุณภาพรสเลิศมากกว่า 200 ชนิด ให้คนรักชาได้ลิ้มลอง พร้อมเสิร์ฟประสบการณ์การดื่มชาพร้อมเมนูคาว-หวานให้คุณได้สัมผัส",
  //   datetime: "08:30 AM - 21:00 PM",
  //   datetime2: "",
  //   tel: "062 446 2422",
  //   facebook: "https://www.facebook.com/51avenuebkk/",
  //   ig: "https://www.instagram.com/51avenuebkk/",
  //   line: "#",
  //   deliver: "#",
  //   grabfood: "#",
  //   lineman: "#",
  //   robinhood: "#",
  //   gallery: [
  //     { src: "/assets/shop-gallery/51 Avenue/01_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/02_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/03_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/04_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/05_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/06_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/07_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/08_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/09_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/10_result.webp" },
  //     { src: "/assets/shop-gallery/51 Avenue/11_result.webp" },
  //   ],
  // },

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
    new: false,
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
    new: false,
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
    new: false,
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
    new: false,
  },

  // {
  //   id: 20,
  //   name: "Skin Lab",
  //   shopImg: "/assets/shoplogo/20.webp",
  //   keyword:
  //     "SkinLabSkincarecreamtreatmentspa massageZelensดูแลผิวพรรณทรีตเมนต์บริการสกินแคร์ครีมบำรุง",
  //   about:
  //     "Beauty is More We believe beauty and wellness go hand in hand. And that’s why we advocate for true wellbeing that not only makes you ‘look good’ but makes you ‘feel good’.",
  //   aboutTH:
  //     "สกิน แล็บ ร้านมัลติแบรนด์ที่รวบรวมสกินแคร์เพื่อความงามจากแบรนด์ชั้นนำจากต่างประเทศ พร้อมสปาส่วนตัวที่ให้คุณได้ผ่อนคลาย",
  //   datetime: "11:00 AM - 19:00 PM",
  //   datetime2: "",
  //   tel: "083 636 3615",
  //   facebook: "https://www.facebook.com/skinlabthailand.official",
  //   ig: "https://www.instagram.com/skinlabthailand/",
  //   line: "https://line.me/ti/p/%40skinlab",
  //   deliver: "www.skinlabthailand.com",
  //   grabfood: "#",
  //   lineman: "#",
  //   robinhood: "#",
  //   gallery: [
  //     { src: "/assets/shop-gallery/Skin Lab/01_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/02_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/03_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/04_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/05_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/06_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/07_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/08_result.webp" },
  //     { src: "/assets/shop-gallery/Skin Lab/09_result.webp" },
  //   ],
  // },

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
    new: false,
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
    new: false,
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
            Our Vendors
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
