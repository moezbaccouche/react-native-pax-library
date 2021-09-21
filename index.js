import { NativeModules } from "react-native";

const { Pax } = NativeModules;

export default {
  FULL_CUT: 0,
  PARTIAL_CUT: 1,

  printStr(text, cutMode) {
    Pax.printStr(text, cutMode === undefined ? 0 : cutMode);
  },
  openDrawer() {
    return Pax.openDrawer();
  },
};
