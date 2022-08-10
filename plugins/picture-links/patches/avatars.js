import { findAsync, findByDisplayName, findByProps } from "@cumcord/modules/webpack";
import { after, findAndPatch } from "@cumcord/patcher";
import { findInReactTree } from "@cumcord/utils";

let classes = findByProps("relationshipButtons");

export default () =>
  findAndPatch(
    () => findByDisplayName("UserProfileModalHeader", false),
    (UserProfileModal) =>
      after("default", UserProfileModal, ([{ user }], res) => {
        if (!classes) classes = findByProps("relationshipButtons");
        const avatar = findInReactTree(res, (m) => m?.props?.className == classes.avatar);
        const image = user?.getAvatarURL?.(false, 4096, true)?.replace(".webp", ".png");

        if (avatar && image) {
          avatar.props.onClick = () => open(image);
        }

        return res;
      }),
  );
