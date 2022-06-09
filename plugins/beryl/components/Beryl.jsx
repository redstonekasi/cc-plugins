import { batchFind } from "@cumcord/modules/webpack";
import { loaded } from "@cumcord/plugins";
import { ErrorBoundary } from "@cumcord/ui/components";
import { useNest } from "@cumcord/utils";
import TabPlugins from "./TabPlugins";
import TabSettings from "./TabSettings";

const [Title, HeaderBarContainer, TabBar, Breadcrumbs, PanelButton, Retry] = batchFind(
  ({ findByDisplayName }) => {
    findByDisplayName("LegacyHeader");
    findByDisplayName("HeaderBarContainer");
    findByDisplayName("TabBar");
    findByDisplayName("Breadcrumbs");
    findByDisplayName("PanelButton");
    findByDisplayName("Retry");
  },
);

// TODO: make this better
const classes = {
  topPill: findByProps("topPill").topPill,
  topBar: findByProps("tabBar", "nowPlayingColumn").tabBar,
  toolbar: findByProps("hamburger"),
  h1Margin: findByProps("h1").defaultMarginh1,
  ...findByProps("size10"),
  breadcrumb: findByProps("breadcrumbActive"),
};

let tabs = [
  { label: "Plugins", component: TabPlugins },
  // I'm waiting with the themes integration until the Cumstain API works as intended.
  // {
  //   label: "Themes",
  //   component: TabThemes,
  //   predicate: () =>
  //     loaded.ghost[
  //       "https://cumcordplugins.github.io/Condom/yellowsink.github.io/cc-plugins/cumstain/"
  //     ] || loaded.ghost["https://yellowsink.github.io/cc-plugins/cumstain/"],
  // },
  { label: "Settings", component: TabSettings },
];

export default () => {
  const [subPage, setSubPage] = React.useState({ label: "", component: null });
  const [currentTab, goToTab] = React.useState(0);

  useNest(loaded);

  const hasSubPage = React.useMemo(
    () => typeof subPage.component === "function" && subPage.label,
    [subPage],
  );

  return (
    <ErrorBoundary>
      <div className={classes.toolbar.container}>
        <div className={[classes.toolbar.children, classes.h1Margin].join(" ")}>
          {hasSubPage ? (
            <Breadcrumbs
              activeId={hasSubPage ? 1 : 0}
              breadcrumbs={[
                { id: 0, label: "Cumcord" },
                { id: 1, label: subPage.label },
              ]}
              onBreadcrumbClick={({ id }) => {
                if (id === 0) setSubPage({ label: "", component: null });
              }}
              renderCustomBreadcrumb={({ label }, active) => (
                <Title
                  size={classes.size20}
                  className={
                    classes.breadcrumb[active ? "breadcrumbActive" : "breadcrumbInactive"]
                  }>
                  {label}
                </Title>
              )}
            />
          ) : (
            <>
              <Title size={classes.size20} className={classes.toolbar.title}>
                Cumcord
              </Title>
              <HeaderBarContainer.Divider />
              <TabBar
                type={classes.topPill}
                className={classes.tabBar}
                selectedItem={currentTab}
                onItemSelect={goToTab}>
                {tabs
                  .filter((t) => (t?.predicate ? t?.predicate() : true))
                  .map((tab, index) => (
                    <TabBar.Item id={index}>{tab.label}</TabBar.Item>
                  ))}
              </TabBar>
            </>
          )}
        </div>
      </div>
      <ErrorBoundary>
        {hasSubPage
          ? React.createElement(subPage.component)
          : React.createElement(tabs[currentTab].component, { setSubPage })}
      </ErrorBoundary>
    </ErrorBoundary>
  );
};
