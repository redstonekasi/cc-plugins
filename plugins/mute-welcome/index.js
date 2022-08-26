import { findByProps } from "@cumcord/modules/webpack";
import { after } from "@cumcord/patcher";

const invites = findByProps("acceptInvite");
const { getChannels } = findByProps("getChannels");
const { updateChannelOverrideSettings } = findByProps("updateChannelOverrideSettings");

const matches = ["welcome", "newcomer"];

const unpatch = after("acceptInvite", invites, (args, res) => {
  res.then(
    (invite) => {
      const guildId = invite.guild.id;
      const channels = getChannels(guildId).SELECTABLE;

      for (const { channel } of channels) {
        if (matches.some((m) => channel.name.toLowerCase().includes(m))) {
          updateChannelOverrideSettings(guildId, channel.id, { muted: true });
        }
      }
    },
    () => {},
  );
});

export const onUnload = () => unpatch();
