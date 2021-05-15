import { Collection } from "@planetadeleste/vue-mc";
import Banner from "../models/Banner";

export default class Banners extends Collection<Banner> {
  model(): typeof Banner {
    return Banner;
  }

  routes(): Record<string, any> {
    return {
      fetch: "banners.banners.index",
    };
  }
}
