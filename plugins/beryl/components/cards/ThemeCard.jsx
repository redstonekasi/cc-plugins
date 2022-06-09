import { batchFind } from "@cumcord/modules/webpack";
import { showConfirmationModal } from "@cumcord/ui/modals";
import { showToast } from "@cumcord/ui/toasts";
import { copyText } from "@cumcord/utils";

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
  const theme = cumstain.installed.ghost[props.themeId];
  if (!theme) return null;

  useNest(cumstain.enabled, false, (_event, data) => data.path[0] === props.themeId);

  return (
    <Card className="beryl-plugin-card" outline={false} editable={false}>
      <Flex justify={Flex.Justify.BETWEEN} align={Flex.Align.CENTER}>
        <div className="beryl-card-header">
          <Header className="beryl-card-title">{theme.manifest.name}</Header>
          <FormText className="beryl-card-author" tag="h5">
            {" by "}
            <strong>{theme.manifest.author}</strong>
          </FormText>
        </div>
        <div className="beryl-card-right">
          {/* Copy button */}
          <Tooltip position="top" text="Copy URL">
            {(tooltipProps) => (
              <svg
                {...tooltipProps}
                onClick={() => {
                  showToast({
                    title: "Copied theme URL to clipboard",
                    duration: 1500,
                  });
                  copyText(props.themeId);
                }}
                viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
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
                      content: `All of ${theme.manifest.name}'s data will be deleted and cannot be recovered`,
                      type: "danger",
                      confirmText: "Delete",
                    },
                    (confirm) => {
                      if (!confirm) return;
                      cumstain.removeTheme(props.themeId);
                    },
                  );
                }}
                viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            )}
          </Tooltip>

          <Switch
            checked={theme.enabled}
            onChange={() => {
              try {
                cumstain.toggleTheme(props.themeId);
              } catch {}
            }}
          />
        </div>
      </Flex>
      <Markdown className="beryl-card-description">{theme.manifest.description}</Markdown>
    </Card>
  );
};
