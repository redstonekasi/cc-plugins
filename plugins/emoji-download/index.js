import JSZip from "jszip";
import { findByProps } from "@cumcord/modules/webpack";
import { addCommand } from "@cumcord/commands";
import { showToast } from "@cumcord/ui/toasts";

const { getGuildEmoji } = findByProps("getGuildEmoji");

const removeCommand = addCommand({
  name: "emojidownload",
  description: "Download all emojis from the specificed guild",
  args: [
    {
      name: "guild",
      description: "Which guilds emojis to download, defaults to current",
      required: false,
    },
    {
      name: "as_png",
      type: "bool",
      description: "Download emojis as PNG",
      required: false,
    },
  ],
  async handler(info, send) {
    const guild = info.args.guild || info.guild.id;
    const emojis = getGuildEmoji(guild);
    if (emojis.length < 1) {
      showToast({
        title: "Invalid guild!",
        content: "The specifiec guild doesn't exist or doesn't have any emojis",
      });
      return;
    }

    const hideProg = showToast({ title: "Dowloading emojis..." });

    const archive = new JSZip();
    for (const emoji of emojis) {
      if (!emoji.animated && info.args.as_png) emoji.url = emoji.url.replace("webp", "png");

      archive.file(
        emoji.name + "." + new URL(emoji.url).pathname.split(".").pop().trim(),
        await fetch(emoji.url).then((r) => r.arrayBuffer()),
      );
    }

    hideProg();

    const hideDown = showToast({
      duration: Infinity,
      title: `${Object.keys(emojis).length} emoji(s) downloaded`,
      content: "Click here to save",
      onClick: () => {
        archive.generateAsync({ type: "uint8array" }).then((u8) => {
          if (window.DiscordNative) DiscordNative.fileManager.saveWithDialog(u8, `${guild}.zip`);
          else {
            const a = document.createElement("a");
            a.download = `${guild}.zip`;
            a.href = URL.createObjectURL(new Blob(u8));
            a.click();

            setTimout(() => URL.revokeObjectURL(a.href), 40000);
          }
        });
        hideDown();
      },
    });
  },
});

export const onUnload = () => {
  removeCommand();
};
