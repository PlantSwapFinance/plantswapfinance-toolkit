import "styled-components";
import { PlantTheme } from "./theme";

declare module "styled-components" {
  // The empty body is the point: this merges PlantTheme into styled-components'
  // DefaultTheme so `theme` is typed everywhere.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends PlantTheme {}
}
