import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { ErrorBoundary } from "@cumcord/ui/components";

const ModalComponents = findByProps("ModalCloseButton");
const Header = findByProps("Sizes", "Tags");
const Flex = findByDisplayName("Flex");
const { openModal } = findByProps("openModal", "openModalLazy");

// Cumcord doesn't export it's copy of showPluginSettings which is why I need this copy.
export default (pluginName, settings) =>
  openModal((e) => (
    <ModalComponents.ModalRoot
      transitionState={e.transitionState}
      size="large"
      className="cumcord-settings-modal">
      <ErrorBoundary>
        <ModalComponents.ModalHeader separator={false}>
          <Flex.Child basis="auto" grow={1} shrink={1} wrap={false}>
            <Header tag="h2" size={Header.Sizes.SIZE_20}>
              {pluginName}
            </Header>
          </Flex.Child>
          <Flex.Child basis="auto" grow={0} shrink={1} wrap={false}>
            <ModalComponents.ModalCloseButton onClick={e.onClose} />
          </Flex.Child>
        </ModalComponents.ModalHeader>
        <ModalComponents.ModalContent>
          {typeof settings === "function" ? React.createElement(settings) : settings}
        </ModalComponents.ModalContent>
      </ErrorBoundary>
    </ModalComponents.ModalRoot>
  ));
