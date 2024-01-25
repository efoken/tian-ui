import { useSlot } from "@atomico/hooks/use-slot"
import { AtomicoElement, Ref, useRef } from "atomico"

export function useAssignedNodes<T extends ChildNode>(
  filter?: (node: ChildNode) => boolean,
): [
  assignedNodes: (T extends AtomicoElement ? InstanceType<T> : T)[],
  ref: Ref<HTMLSlotElement>,
] {
  const ref = useRef<HTMLSlotElement>()
  const assignedNodes = useSlot<T>(ref, filter)
  return [assignedNodes, ref]
}
