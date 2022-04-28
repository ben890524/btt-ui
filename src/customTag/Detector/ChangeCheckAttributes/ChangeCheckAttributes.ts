function ChangeCheckAttributes(
  targetElement: HTMLElement,
  targetRecord: MutationRecord
) {
  const changeAttribute = targetRecord.attributeName ?? "";
  const oldValue = targetRecord.oldValue ?? "";
  if (oldValue !== "") targetElement.classList.remove(oldValue);
  const newValue = targetElement.getAttribute(changeAttribute) ?? "";
  if (newValue !== "") targetElement.classList.add(newValue);
  targetElement.hasAttribute("text-bold")
    ? targetElement.classList.add("bold")
    : targetElement.classList.remove("bold");
}
export default ChangeCheckAttributes;
