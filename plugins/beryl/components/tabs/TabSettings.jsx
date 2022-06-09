import { findByDisplayName } from "@cumcord/modules/webpack";
import { persist } from "@cumcord/pluginData";
import { useNest } from "@cumcord/utils";

const SwitchItem = findByDisplayName("SwitchItem");

export default () => {
  useNest(persist);

  return (
    <SwitchItem
      value={persist.ghost.pluginSettingsModal}
      onChange={(e) => (persist.store.pluginSettingsModal = e)}>
      Open plugin settings in modal
    </SwitchItem>
  );
};
