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
        params: "all-about-youtube-live-chat",
        thumbnail:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1718206373/Frame_87_1_t5dl6q.png",
        title: "All about Youtube livechat",
        type: "Information",
        content: `"## All about Youtube livechat\\nNot all the words written below are from YouTube officially, I use them to make you all understand in a simple way\\n >  Components\\n\\nYoutube Livechat have **General chat** and **event chat**\\n- **General chat** :\\n    containing all chat sent by Viewers, Moderator, Member, and the Streamers.\\n\\n![YT-Default-General-Chat](https://res.cloudinary.com/dxcmt3zoc/image/upload/v1718205560/YT-Default-General-Chat_t9dcqj.png)\\n\\n\\n- **Event chat** :\\n    containing Superchat, Membership join and achievement (\"Member for xx months\"), Membership Gift, and superchat.\\n\\n![YT-Default-General-Chat](https://res.cloudinary.com/dxcmt3zoc/image/upload/v1718205598/YT-Default-Event-Chat_xoindp.png)\\n"`,
      },
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(guideItems);
}
