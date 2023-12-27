import { findByName } from "@vendetta/metro";
import { i18n, React } from "@vendetta/metro/common";
import { after, before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { General } from "@vendetta/ui/components";
import { findInReactTree } from "@vendetta/utils";

import { LazyActionSheet, SuperAwesomeIcon } from "../../../../stuff/types";
import PinMessageLocallyAction from "../components/MessageActionSheetButton";

const { View } = General;
const ChannelSettingsModal = findByName("ChannelSettingsModal", false);
const ChannelPinsConnected = findByName("ChannelPinsConnected", false);

let chPinsHRCb: {
  filters?: () => void;
  clear?: () => void;
} = {};
export function setChPinsHRCb(x: typeof chPinsHRCb) {
  chPinsHRCb = x;
}

export const chPinsMessagesOverwrites: Record<
  string,
  (messages: any[]) => any[]
> = {};

export default function () {
  const patches = new Array<() => void>();

  patches.push(
    before("openLazy", LazyActionSheet, ([component, key, msg]) => {
      const message = msg?.message;
      if (key !== "MessageLongPressActionSheet" || !message) return;

      component.then((i) => {
        const unp = after("default", i, (_, comp) => {
          React.useEffect(
            () => () => {
              unp();
            },
            [],
          );

          const buttons = findInReactTree(
            comp,
            (x) => x?.[0]?.type?.name === "ButtonRow",
          );
          if (!buttons) return comp;

          const at = Math.max(
            buttons.findIndex(
              (x) => x.props.message === i18n.Messages.MARK_UNREAD,
            ),
            0,
          );
          buttons.splice(
            at,
            0,
            React.createElement(PinMessageLocallyAction, message),
          );
        });
      });
    }),
  );

  return () => patches.forEach((x) => x());
}
