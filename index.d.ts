declare var Pax: {
  FULL_CUT: number;
  PARTIAL_CUT: number;

  printStr: (text: string, cutMode?: number) => void;
  printBitmap: (base64: string, cutMode?: number) => void;
  openDrawer: () => Promise<any>;
};

export default Pax;
