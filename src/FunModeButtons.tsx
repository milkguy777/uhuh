import { RedesignRow } from "@nexpid/vdp-shared";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { showToast } from "@vendetta/ui/toasts";

import { hideActionSheet } from "../../../../stuff/types";
import { addPin, hasPin, removePin } from "..";

export default function (message: {
  channel_id: string;
  id: string;
  author: { globalName?: string; username: string };
  nick?: string;
}) {
  const isPinned = hasPin(message.channel_id, message.id);

  return (
    <RedesignRow
      label={isPinned ? "Unpin Message Locally" : "Pin Message Locally"}
      icon={getAssetIDByName("ic_message_pin")}
      onPress={() => {
        if (isPinned) {
          removePin(message.channel_id, message.id);
          showToast(
            `Unpinned ${
              message.nick ??
              message.author.globalName ??
              message.author.username
            }'s message locally`,
            getAssetIDByName("ic_message_pin"),
          );
        } else {
          addPin(message.channel_id, message.id);
          showToast(
            `Pinned ${
              message.nick ??
              message.author.globalName ??
              message.author.username
            }'s message locally`,
            getAssetIDByName("ic_message_pin"),
          );
        }
        hideActionSheet();
      }}
    />
  );
}
