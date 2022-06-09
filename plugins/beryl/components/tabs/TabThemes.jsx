import { batchFind, findByProps } from "@cumcord/modules/webpack";
import { showToast } from "@cumcord/ui/toasts";
import { useNest } from "@cumcord/utils";
import ThemeCard from "../cards/ThemeCard";

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

  useNest(cumstain.installed);

  const handleImport = () =>
    cumstain.importTheme(input).then(
      () => setInput(""),
      (err) =>
        showToast({
          title: "Failed to import plugin",
          content: err.message,
          duration: 3000,
        }),
    );

  const themeIds = Object.keys(cumstain.installed.ghost);
  const filteredThemes = !searchFilter
    ? themeIds
    : themeIds.sort((a, b) => {
        const themeA = Object.values(cumstain.installed.ghost[a].manifest).join("");
        const themeB = Object.values(cumstain.installed.ghost[b].manifest).join("");

        return filterCount(themeB, searchFilter) - filterCount(themeA, searchFilter);
      });

  return (
    <>
      <FormItem title="Add theme">
        <Flex basis="auto" grow={1} shrink={1}>
          <Flex.Child basis="auto" grow={1} shrink={1}>
            <TextInput
              className={classes.wrapper}
              placeholder="https://example.com/theme"
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
              Add theme
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
          placeholder="Search themes..."
          size={SearchBar.Sizes.MEDIUM}
        />
      </FormItem>
      {filteredThemes.map((i) => (
        <ThemeCard themeId={i} {...props} />
      ))}
    </>
  );
};
