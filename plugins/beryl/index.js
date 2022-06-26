import { findByDisplayName } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import Beryl from "./components/Beryl";
import injectStyles from "./styles.css";

let ref;
let CumcordSettings;

const uninjectStyles = injectStyles();

const unpatch = findAndPatch(
  () => findByDisplayName("SettingsView"),
  (SettingsView) =>
    after(
      "getPredicateSections",
      SettingsView.prototype,
      (_, items) => {
        const index = items.findIndex((val) => val.section === "CUMCORD_PLUGINS");
        if (index > 0) {
          if (ref === undefined || CumcordSettings === undefined) {
            ref = items[index];
            CumcordSettings = items[index].element;
          }

          items[index].element = Beryl;
        }
        return items;
      },
      true,
    ),
);

export const onUnload = () => {
  uninjectStyles();
  unpatch();

  if (ref !== undefined && CumcordSettings !== undefined) ref.element = CumcordSettings;
};
