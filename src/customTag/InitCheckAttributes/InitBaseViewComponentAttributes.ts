import TextBoldFilter from "./AttributesFilter/TextBoldFilter";
import AnimationFilter from "./AttributesFilter/AnimationFilter";
function CheckBaseViewComponentAttributes(targetElement: HTMLElement) {
  TextBoldFilter(targetElement);
  AnimationFilter(targetElement);
}
export default CheckBaseViewComponentAttributes;
