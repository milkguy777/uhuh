import {
    logger
} from "@vendetta";
import { findByName } from "@vendetta/metro";
import { i18n, React } from "@vendetta/metro/common";
import { after, before } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { General } from "@vendetta/ui/components";
import { findInReactTree } from "@vendetta/utils";
import FunModeButtons from "../FunModeButtons";


import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello world!");
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

                    for (var BTN of FunModeButtons) {
                        buttons.push(React.createElement(BTN, message));
                    }
                });
            });
        }),
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}