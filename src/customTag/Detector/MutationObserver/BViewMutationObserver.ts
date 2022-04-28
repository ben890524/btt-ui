import ChangeCheckAttributes from "../ChangeCheckAttributes/ChangeCheckAttributes";
class BViewMutationObserver extends MutationObserver {
  constructor(targetElement: HTMLElement) {
    super((mutation: any) => {
      const target = mutation[0];
      ChangeCheckAttributes(targetElement, target);
    });
  }
}
export default BViewMutationObserver;
