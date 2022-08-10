import avatars from "./patches/avatars";
import banners from "./patches/banners";
import styles from "./styles.css";

const patches = [avatars(), banners(), styles()];

export const onUnload = () => _.forEachRight(patches, (p) => p());
