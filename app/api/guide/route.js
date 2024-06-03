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
To remove reactions button/heart button you can just copy code bellow and paste to the end/bottom of your Custom CSS 


\`\`\`css
#reaction-control-panel-overlay {
  display: none !important;
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
        content: `# hello\n\nApa kabar Semua aku baik aja sih wkwk `,
      },
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(guideItems);
}
