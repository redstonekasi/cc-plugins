import idbKeyval from "@cumcord/modules/internal/idbKeyval";
import { batchFind } from "@cumcord/modules/webpack";
import { persist } from "@cumcord/pluginData";
import { installed, loaded, removePlugin, togglePlugin } from "@cumcord/plugins";
import { showConfirmationModal } from "@cumcord/ui/modals";
import { showToast } from "@cumcord/ui/toasts";
import { copyText, useNest } from "@cumcord/utils";
import showPluginSettings from "./showPluginSettings";

const [Card, Flex, Header, FormText, Switch, [, Markdown], Tooltip] = batchFind(
  ({ findByProps, findByDisplayName, findByDisplayNameAll }) => {
    findByDisplayName("Card");
    findByDisplayName("Flex");
    findByProps("Sizes", "Tags");
    findByDisplayName("FormText");
    findByDisplayName("Switch");
    findByDisplayNameAll("Markdown");
    findByDisplayName("Tooltip");
  },
);

export default (props) => {
  const plugin = installed.ghost[props.pluginId];
  if (!plugin) return null;

  useNest(loaded, false, (_event, data) => data.path[0] === props.pluginId);

  return (
    <Card className="beryl-plugin-card" outline={false} editable={false}>
      <Flex justify={Flex.Justify.BETWEEN} align={Flex.Align.CENTER}>
        <div className="beryl-card-header">
          <Header className="beryl-card-title">{plugin.manifest.name}</Header>
          <FormText className="beryl-card-author" tag="h5">
            {" by "}
            <strong>{plugin.manifest.author}</strong>
          </FormText>
        </div>
        <div className="beryl-card-right">
          {/* Settings button if plugin has settings */}
          {loaded.ghost[props.pluginId] && loaded.ghost[props.pluginId].settings ? (
            <Tooltip position="top" text="Open settings">
              {(tooltipProps) => (
                <svg
                  {...tooltipProps}
                  onClick={() =>
                    persist.ghost.pluginSettingsModal
                      ? showPluginSettings(
                          plugin.manifest.name,
                          loaded.ghost[props.pluginId].settings,
                        )
                      : props.setSubPage({
                          label: plugin.manifest.name,
                          component: loaded.ghost[props.pluginId].settings,
                        })
                  }
                  viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              )}
            </Tooltip>
          ) : null}

          {/* Copy button */}
          <Tooltip position="top" text="Copy URL">
            {(tooltipProps) => (
              <svg
                {...tooltipProps}
                onClick={() => {
                  showToast({
                    title: "Copied plugin URL to clipboard",
                    duration: 1500,
                  });
                  copyText(props.pluginId);
                }}
                viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            )}
          </Tooltip>

          {/* Update button */}
          <Tooltip position="top" text="Toggle updates">
            {(tooltipProps) => (
              <svg
                {...tooltipProps}
                onClick={() => {
                  installed.store[props.pluginId].update = !installed.store[props.pluginId].update;
                }}
                viewBox="0 0 24 24">
                <path
                  d={
                    plugin.update
                      ? "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"
                      : "M8.67 5.84 7.22 4.39C8.6 3.51 10.24 3 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3C15.39 20.48 13.76 21 12 21c-4.97 0-9-4.03-9-9 0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67C5.31 9.66 5 10.8 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85zM20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79z"
                  }
                />
              </svg>
            )}
          </Tooltip>

          {/* Delete button */}
          <Tooltip position="top" text="Delete">
            {(tooltipProps) => (
              <svg
                {...tooltipProps}
                onClick={() => {
                  showConfirmationModal(
                    {
                      header: "Do you want to delete this plugin?",
                      content: `All of ${plugin.manifest.name}'s data will be deleted and cannot be recovered`,
                      type: "danger",
                      confirmText: "Delete",
                    },
                    (confirm) => {
                      if (!confirm) return;
                      removePlugin(props.pluginId);
                      idbKeyval.del(`${props.pluginId}_CHAOS_STORE`, idbStore);
                    },
                  );
                }}
                viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            )}
          </Tooltip>

          <Switch
            checked={plugin.enabled}
            onChange={() => {
              try {
                togglePlugin(props.pluginId);
              } catch {}
            }}
          />
        </div>
      </Flex>
      <Markdown className="beryl-card-description">{plugin.manifest.description}</Markdown>
    </Card>
  );
};
