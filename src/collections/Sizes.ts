import { Collection } from "@planetadeleste/vue-mc";
import Size from "../models/Size";

export default class Sizes extends Collection<Size> {
  model(): typeof Size {
    return Size;
  }

  routes(): Record<string, any> {
    return {
      fetch: "banners.sizes.index",
    };
  }
}
