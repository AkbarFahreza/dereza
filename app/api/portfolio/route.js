import { NextResponse } from "next/server";

const items = [
  {
    data: [
      {
        id: 1,
        name: "Nanami Chia",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700558447/FzFnjyUagAA1PCz_lpde9y.jpg",
        sourceLink: "https://x.com/Revernry/status/1671230836610572289?s=20",
        category: "YT Chat Commissions",
        Datecreated: "June 2023",
      },
      {
        id: 2,
        name: "Nekonyan Aimi",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700558869/FzYyB61akAAJB-v_b3uisg.jpg",
        sourceLink: "https://x.com/Revernry/status/1672579350674444288?s=20",
        category: "YT Chat Commissions",
        Datecreated: "June 2023",
      },
      {
        id: 3,
        name: "DYMAX",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559109/F0uoR6paYAAoOpU_e0bzbj.jpg",
        sourceLink: "https://x.com/Revernry/status/1678620351830568960?s=20",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 4,
        name: "Narumi Eiko",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559599/F1JBHMWaUAETYD2_ycojzs.jpg",
        sourceLink: "https://x.com/Revernry/status/1680477239748755456?s=20",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 5,
        name: "Aisu Rain",
        image:
          "https://pbs.twimg.com/media/F14c4mraEAAyu_h?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1683815123906097155?s=20",
        ytLink: "https://www.youtube.com/@Aisu_rain",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 6,
        name: "Winter Gea",
        image:
          "https://pbs.twimg.com/media/F2hs-FzakAAAjiU?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1686717913271554048?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 7,
        name: "Castella Eri",
        image:
          "https://pbs.twimg.com/media/F2q0JjtbwAAyyiG?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1687359118053662720?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 8,
        name: "Ade Deviela Ch",
        image:
          "https://pbs.twimg.com/media/F3aFwAKbYAAUdm8?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1690685799514431488?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 9,
        name: "Mahiru Rui",
        image:
          "https://pbs.twimg.com/media/F4g2arOasAAZPoo?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1695665154455970240?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 10,
        name: "Yukari Blackheart Ch.",
        image:
          "https://pbs.twimg.com/media/F6CbRMWbEAAYqjD?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1702531433225670664?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 11,
        name: " Taki Takahiro ",
        image:
          "https://pbs.twimg.com/media/F6iPu5oaYAAjPSz?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1704770531973808208?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 12,
        name: "Selene Aria",
        image:
          "https://pbs.twimg.com/media/F6mnBoea0AAmOL0?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1705077641546707234?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 13,
        name: "Céline Leonhart",
        image:
          "https://pbs.twimg.com/media/F7CFKOFaUAAU32d?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1707010711703138495?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 14,
        name: "Ayana Shan Elise Ch.",
        image:
          "https://pbs.twimg.com/media/F7GPGu0b0AAc5dW?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1707303127890936284?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 15,
        name: "Seina Ginevra Ch.",
        image:
          "https://pbs.twimg.com/media/F8eoN7Ya0AAp3fD?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1713523180261048648?s=20",
        category: "YT Chat Commissions",
        Datecreated: "October 2023",
      },
      {
        id: 16,
        name: "Eliza Hemlock Ch.",
        image:
          "https://pbs.twimg.com/media/F9NAF2HaAAAe2on?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1716786883265806588?s=20",
        category: "YT Chat Commissions",
        Datecreated: "October 2023",
      },

      {
        id: 17,
        name: "Brilian pendragon",
        image:
          "https://pbs.twimg.com/media/GKKuh7dbYAAHbD5?format=jpg&name=medium",
        sourceLink: "https://twitter.com/Revernry/status/1775174253106868355",
        category: "YT Chat Commissions",
        Datecreated: "Desember 2023",
      },

      {
        id: 19,
        name: "Vera Dinita",
        image:
          "https://pbs.twimg.com/media/GKAYojFa0AEWwcT?format=jpg&name=medium",
        sourceLink: "https://twitter.com/Revernry/status/1774445678384800176",
        category: "YT Chat Commissions",
        Datecreated: "March 2024",
      },
      {
        id: 20,
        name: "Nephil Sigurd",
        image:
          "https://pbs.twimg.com/media/GXBsOndaQAAQU8R?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1833084345827151878",
        category: "YT Chat Commissions",
        Datecreated: "June 2024",
      },
      {
        id: 21,
        name: "Mitsuki Rion",
        image:
          "https://pbs.twimg.com/media/GWoLHeYXsAAxWqC?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1831289056573174049",
        category: "YT Chat Commissions",
        Datecreated: "May 2024",
      },
      {
        id: 22,
        name: "Kiseki Miya",
        image:
          "https://pbs.twimg.com/media/GWoKVWUbsAAGLbt?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1831287582799597916",
        category: "YT Chat Commissions",
        Datecreated: "May 2024",
      },
      {
        id: 23,
        name: "Ookami Stela",
        image:
          "https://pbs.twimg.com/media/GWnbPDbaoAE4xW2?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1831236934737539139",
        category: "YT Chat Commissions",
        Datecreated: "August 2024",
      },
      {
        id: 24,
        name: "Nanimo Navi",
        image:
          "https://pbs.twimg.com/media/GSNgs-kb0AA2UwU?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1811399000249266313",
        category: "YT Chat Commissions",
        Datecreated: "June 2024",
      },
      {
        id: 25,
        name: "Airis Castafione",
        image:
          "https://pbs.twimg.com/media/GSNfWUlasAAx2N_?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1811397340273705364",
        category: "YT Chat Commissions",
        Datecreated: "June 2024",
      },
      {
        id: 26,
        name: "Sado Ren",
        image:
          "https://pbs.twimg.com/media/GRt8Q9dbYAAQSYS?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1809177969157407130",
        category: "YT Chat Commissions",
        Datecreated: "June 2024",
      },
      {
        id: 27,
        name: "Arterachi Lycheesan",
        image:
          "https://pbs.twimg.com/media/GOzfOzUbsAAR3RY?format=png&name=medium",
        sourceLink: "https://x.com/Revernry/status/1796055959141277758",
        category: "YT Chat Commissions",
        Datecreated: "April 2024",
      },
      {
        id: 28,
        name: "Faraby Nycxella",
        image:
          "https://pbs.twimg.com/media/GOzY-NMbsAAngDq?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1796049431776854196",
        category: "YT Chat Commissions",
        Datecreated: "April 2024",
      },
      {
        id: 29,
        name: "Arial Yuriko  CH. [VREVERIE]",
        image:
          "https://pbs.twimg.com/media/GM3PnMxaIAAvT9w?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1787315616598425985",
        category: "YT Chat Commissions",
        Datecreated: "March 2024",
      },
      {
        id: 30,
        name: "Asa Kaori",
        image:
          "https://pbs.twimg.com/media/GMzwRwRbQAAgUGa?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1787068702200041889",
        category: "YT Chat Commissions",
        Datecreated: "May 2024",
      },
      {
        id: 31,
        name: "Nemo Nevermore",
        image:
          "https://pbs.twimg.com/media/GooQDUqWUAAInjz?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1912359320903426487",
        category: "YT Chat Commissions",
        Datecreated: "December 2024",
      },
      {
        id: 32,
        name: "Merra Merona",
        image:
          "https://pbs.twimg.com/media/GojTwr8WYAA5JCu?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1912011370389971315",
        category: "YT Chat Commissions",
        Datecreated: "January 2025",
      },
      {
        id: 33,
        name: "Eros Adras",
        image:
          "https://pbs.twimg.com/media/Go54lEMbIAAJBXh?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1913605470939390192",
        category: "YT Chat Commissions",
        Datecreated: "January 2025",
      },
      // {
      //   id: 5,
      //   name: "",
      //   image: "",
      //   sourceLink: "",
      //   category: "YT Chat Commissions",
      //   Datecreated: "",
      // },
      // Add more items as needed
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(items);
}
