import CheckBaseViewComponentAttributes from "../InitCheck/InitBaseViewComponentAttributes";
class BViewMutationObserver extends MutationObserver {
  constructor() {
    super((mutation: any) => {
      console.log(mutation);
      const target = mutation[0].target;
      CheckBaseViewComponentAttributes(target);
    });
  }
}
export default BViewMutationObserver;
