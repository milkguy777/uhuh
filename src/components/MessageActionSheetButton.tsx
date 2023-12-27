import { RedesignRow } from "@nexpid/vdp-shared";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";

import { hideActionSheet } from "../../../../stuff/types";

const FunModeActions = [{
            Label: "Flirt",
            verb: "flirts on",
            action: "flirting",
            color: "rgb(238, 130, 238)",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1188989895461572638/meltedws.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1188977002900893696/meltedps.png"
        },
        {
            Label: "Attack",
            verb: "attacks",
            action: "agression",
            color: "rgb(243, 63, 67)",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189237741444153354/angryw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189237563823759370/angry.png"
        },
        {
            Label: "Sarcase",
            verb: "uses sarcasm with",
            action: "sarcasm",
            color: "rgb(38, 185, 104)",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189246987204296734/vomitw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189246968493523114/vomit.png"
        },
        {
            Label: "Threaten",
            verb: "threatens",
            action: "threat",
            color: "rgb(155, 89, 182)",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189245563175194724/evilw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189245594657632387/evil.png"
        },
        {
            Label: "Manipulate",
            verb: "manipulates",
            action: "manipulation",
            color: "#fdc145",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189280177793024081/salutew.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189280177583292548/salute.png"
        },
        {
            Label: "Glaze",
            verb: "flatters",
            action: "cheer",
            color: "#266867",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189280177180655667/glassesw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189280177386168400/glasses.png"
        },
        {
            Label: "Doubt",
            verb: "cleverly doubts",
            action: "doubt",
            color: "#4e5058",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189567372911198289/output-onlinepngtools3.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189567373125099590/image_1-12.png"
        },
        {
            Label: "Challenge",
            verb: "challenges",
            action: "challenge",
            color: "#805101",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189568784571322368/challengew.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189571254664044624/challenge.png"
        },
        {
            Label: "Comfort",
            verb: "comforts",
            action: "comfort",
            color: "#03C2E0",
            onIcon: "https://cdn.discordapp.com/attachments/1174783297474281553/1189570144893161603/comfortw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189570880997703680/comfort.png"
        },
        {
            Label: "Joke",
            verb: "jokes to",
            action: "humor",
            color: "#7CFF00",
            onIcon: "https://cdn.discordapp.com/attachments/1174783297474281553/1189570568845017168/humorw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189571194123464754/humor.png"
        },
        {
            Label: "Put down",
            verb: "puts down",
            action: "sadness",
            color: "#BBC392",
            onIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189574209924505720/putdownw.png",
            offIcon: "https://cdn.discordapp.com/attachments/1187160638187913258/1189574138914934894/putdown.png"
        },
];


export default function (message: {
  channel_id: string;
  id: string;
  author: { globalName?: string; username: string };
  nick?: string;
}) {
  const isPinned = hasPin(message.channel_id, message.id);

  var rows = [];




  return null;
}
