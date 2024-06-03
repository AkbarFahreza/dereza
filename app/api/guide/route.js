import { NextResponse } from "next/server";
const guideItems = [
  {
    data: [
      {
        id: 1,
        params: "remove-heart-button",
        thumbnail:
          "https://pbs.twimg.com/media/GOtHA49a4AAQ37M?format=png&name=medium",
        title: "How to remove heart button on youtube livechat",
        type: "Source Code",
        content: `
[Figma](https://www.figma.com).
**In This DOCS:** 


\`\`\`css
ytd-sponsorships-live-chat-header-renderer #header-content-primary-column *,
yt-live-chat-membership-item-renderer #header-content-primary-column * {
  text-align: center !important;
}

ytd-sponsorships-live-chat-header-renderer #content,
yt-live-chat-membership-item-renderer #header-content-primary-column {
  margin: auto !important;
}
\`\`\`
          `,
      },

      {
        id: 2,
        params: "ga-tau",
        thumbnail:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1716960597/Frame_76_2_fgpvsz.png",
        title: "jangan lupa makan yaa",
        type: "Information",
        content: `
  makan bang \n\n lorem iadwid aiwdnaio diwndioa ndiw dina wdia doianw doian odiw adn oai dwioa iowd ad nawidnawd
  a ndioandw aoiwdn aoiwdnao wndia wdoian dowina oid waoidnwao wdna dnwa oidnao wd
  awda widnaiwndoainw dioanw doianw doina wdoinaw dna
  wdanwiodnaoiwd aoindw
  a iwndoaindowi
    
  \`\`\`css
  
  ytd-sponsorships-live-chat-header-renderer #content,
  yt-live-chat-membership-item-renderer #header-content-primary-column {
    margin: auto !important;
  }
  \`\`\`
          `,
      },
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(guideItems);
}
