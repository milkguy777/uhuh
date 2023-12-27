import { stylesheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { Forms, General } from "@vendetta/ui/components";

import { BetterTableRowGroup, SimpleText } from "../../../../stuff/types";
const { ScrollView } = General;
const { FormRow } = Forms;

export default () => {
  return (
    <ScrollView>
      <BetterTableRowGroup
        title="Settings"
        icon={getAssetIDByName("ic_cog_24px")}
      >
        <FormRow
          label="Emo percentage"
          subLabel="100 %"
          }
          leading={
            <FormRow.Icon source={getAssetIDByName("ic_message_edit")} />
          }
        />
      </BetterTableRowGroup>
    </ScrollView>
  );
};
