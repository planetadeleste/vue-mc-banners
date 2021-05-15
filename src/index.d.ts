import "@planetadeleste/vue-mc";
import { BannerData, SizeData, LinkType, TextPosition } from "./types";

declare module "@planetadeleste/vue-mc-banners" {
  import { Model, Collection } from "@planetadeleste/vue-mc";

  interface Size extends Model, SizeData {}
  class Size extends Model {}

  interface Banner extends Model, BannerData {}
  class Banner extends Model {}

  export { SizeData, Size, BannerData, Banner, LinkType, TextPosition };
  export class Sizes extends Collection<Size> {}
  export class Banners extends Collection<Banner> {}
}
