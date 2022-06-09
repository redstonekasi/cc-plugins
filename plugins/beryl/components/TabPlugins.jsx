import { batchFind, findByProps } from "@cumcord/modules/webpack";
import { importPlugin, installed } from "@cumcord/plugins";
import { showToast } from "@cumcord/ui/toasts";
import { useNest } from "@cumcord/utils";
import PluginCard from "./PluginCard";

const [Flex, FormItem, FormDivider, TextInput, Button, SearchBar] = batchFind(
  ({ findByProps, findByDisplayName }) => {
    findByDisplayName("Flex");
    findByDisplayName("FormItem");
    findByDisplayName("FormDivider");
    findByDisplayName("TextInput");
    findByProps("Sizes", "Colors", "Looks", "DropdownSizes");
    findByDisplayName("SearchBar");
  },
);

const classes = {
  wrapper: findByProps("notchWidth").wrapper,
  margins: findByProps("height24"),
};

const filterCount = (str, filter) => str.toLowerCase().split(filter.toLowerCase()).length - 1;

export default (props) => {
  const [searchFilter, setSearch] = React.useState("");
  const [input, setInput] = React.useState("");

  useNest(installed);

  const handleImport = () =>
    importPlugin(input).then(
      () => setInput(""),
      (err) =>
        showToast({
          title: "Failed to import plugin",
          content: err.message,
          duration: 3000,
        }),
    );

  const pluginIds = Object.keys(installed.ghost);
  const filteredPlugins = !searchFilter
    ? pluginIds
    : pluginIds.sort((a, b) => {
        const pluginA = Object.values(installed.ghost[a].manifest).join("");
        const pluginB = Object.values(installed.ghost[b].manifest).join("");

        return filterCount(pluginB, searchFilter) - filterCount(pluginA, searchFilter);
      });

  return (
    <>
      <FormItem title="Add plugin">
        <Flex basis="auto" grow={1} shrink={1}>
          <Flex.Child basis="auto" grow={1} shrink={1}>
            <TextInput
              className={classes.wrapper}
              placeholder="https://example.com/plugin"
              type="text"
              value={input}
              onChange={setInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleImport();
              }}
            />
          </Flex.Child>
          <Flex.Child basis="auto" grow={1} shrink={1}>
            <Button color={Button.Colors.BRAND} size={Button.Sizes.MEDIUM} onClick={handleImport}>
              Add plugin
            </Button>
          </Flex.Child>
        </Flex>
      </FormItem>
      <FormDivider className={classes.margins.marginTop20} />
      <FormItem
        title="Installed"
        className={[classes.margins.marginTop20, classes.margins.marginBottom20].join(" ")}>
        <SearchBar
          query={searchFilter}
          onQueryChange={setSearch}
          placeholder="Search..."
          size={SearchBar.Sizes.MEDIUM}
        />
      </FormItem>
      {filteredPlugins.map((i) => (
        <PluginCard pluginId={i} {...props} />
      ))}
    </>
  );
};
