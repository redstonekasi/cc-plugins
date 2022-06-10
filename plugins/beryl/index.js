import { findByDisplayName } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import { ReactDOM } from "@cumcord/modules/common";
import Beryl from "./components/Beryl";
import injectStyles from "./styles.css";

let originalSettings;

const uninjectStyles = injectStyles();

const unpatch = findAndPatch(
  () => findByDisplayName("SettingsView"),
  (SettingsView) =>
    after("getPredicateSections", SettingsView.prototype, (args, items) => {
      const index = items.findIndex((val) => val.section === "CUMCORD_PLUGINS");
      if (index > 0) {
        originalSettings = items[index].element;
        items[index].element = Beryl;
      }
      return items;
    }),
);

export const onUnload = () => {
  uninjectStyles();
  unpatch();

  // There has to be a better way to do this
  const view = document.getElementById("cumcord_plugins-tab");
  if (view) ReactDOM.render(React.createElement(originalSettings), view);
};
