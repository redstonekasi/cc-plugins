import { findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import { findInReactTree } from "@cumcord/utils";

export default () =>
  findAndPatch(
    () => findByDisplayName("UserBanner", false),
    (UserBanner) =>
      after("default", UserBanner, ([{ user, displayProfile }], res) => {
        const handler = findInReactTree(res.props.children, (p) => p?.onClick);
        const image =
          user.banner === "_"
            ? res.props.style.backgroundImage?.match?.(/^url\((.*)\)$/)?.[1]
            : displayProfile
                ?.getBannerURL({
                  size: 4096,
                  canAnimate: true,
                })
                ?.replace(".webp", ".png");

        if (!handler?.children && image) {
          res.props.onClick = () => open(image);
          res.props.className = [res.props.className, "kasi-pl-clickable"].join(" ");
        }
      }),
  );
