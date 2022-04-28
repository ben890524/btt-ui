class BColMutationObserver extends MutationObserver {
  constructor() {
    super((mutation: any) => {
      const target = mutation[0].target;
      for (let index = 1; index <= 12; index++) {
        target.classList.remove(`col-${index}`);
      }
      let columnCount: number = parseInt(target.getAttribute("col")!) ?? 0;
      switch (columnCount) {
        case 1:
          target.classList.add("col-1");
          break;
        case 2:
          target.classList.add("col-2");
          break;
        case 3:
          target.classList.add("col-3");
          break;
        case 4:
          target.classList.add("col-4");
          break;
        case 5:
          target.classList.add("col-5");
          break;
        case 6:
          target.classList.add("col-6");
          break;
        case 7:
          target.classList.add("col-7");
          break;
        case 8:
          target.classList.add("col-8");
          break;
        case 9:
          target.classList.add("col-9");
          break;
        case 10:
          target.classList.add("col-10");
          break;
        case 11:
          target.classList.add("col-11");
          break;
        case 12:
          target.classList.add("col-12");
          break;
        default:
          break;
      }
    });
  }
}
export default BColMutationObserver;
