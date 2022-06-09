import { findByDisplayName } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import Beryl from "./components/Beryl";
import injectStyles from "./styles.css";

const uninjectStyles = injectStyles();

const unpatch = findAndPatch(
  () => findByDisplayName("SettingsView"),
  (SettingsView) =>
    after("getPredicateSections", SettingsView.prototype, (args, items) => {
      const index = items.findIndex((val) => val.section === "CUMCORD_PLUGINS");
      if (index > 0) items[index].element = Beryl;
      return items;
    }),
);

export const onUnload = () => {
  uninjectStyles();
  unpatch();
};
