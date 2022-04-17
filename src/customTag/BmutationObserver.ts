// const mutationObserver: any = window.MutationObserver;
class BmutationObserver extends MutationObserver {
  constructor() {
    super((mutation: any) => {
      const target = mutation[0].target;
      target.hasAttribute("text-bold")
        ? target.classList.add("bold")
        : target.classList.remove("bold");
    });
  }
}
export default BmutationObserver;
