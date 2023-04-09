// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function functions({
  rareMultiplier,
  veryRareMultiplier,
  extremelyCommonMultiplier,
  enabledPackages,
}: Settings) {
  if (!enabledPackages.has("java.util.function")) return [];

  return [
    ...repeat("BiConsumer", rareMultiplier),
    ...repeat("BiFunction", rareMultiplier),
    ...repeat("BiPredicate", rareMultiplier),
    ...repeat("BinaryOperator", rareMultiplier),
    ...repeat("BooleanSupplier", veryRareMultiplier),
    ...repeat("Consumer", extremelyCommonMultiplier),
    ...repeat("DoubleBinaryOperator", veryRareMultiplier),
    ...repeat("DoubleConsumer", veryRareMultiplier),
    ...repeat("DoubleFunction", veryRareMultiplier),
    ...repeat("DoublePredicate", veryRareMultiplier),
    ...repeat("DoubleSupplier", veryRareMultiplier),
    ...repeat("DoubleToIntFunction", veryRareMultiplier),
    ...repeat("DoubleToLongFunction", veryRareMultiplier),
    ...repeat("DoubleUnaryOperator", veryRareMultiplier),
    ...repeat("Function", extremelyCommonMultiplier),
    ...repeat("IntBinaryOperator", veryRareMultiplier),
    ...repeat("IntConsumer", veryRareMultiplier),
    ...repeat("IntFunction", veryRareMultiplier),
    ...repeat("IntPredicate", veryRareMultiplier),
    ...repeat("IntSupplier", veryRareMultiplier),
    ...repeat("IntToDoubleFunction", veryRareMultiplier),
    ...repeat("IntToLongFunction", veryRareMultiplier),
    ...repeat("IntUnaryOperator", veryRareMultiplier),
    ...repeat("LongBinaryOperator", veryRareMultiplier),
    ...repeat("LongConsumer", veryRareMultiplier),
    ...repeat("LongFunction", veryRareMultiplier),
    ...repeat("LongPredicate", veryRareMultiplier),
    ...repeat("LongSupplier", veryRareMultiplier),
    ...repeat("LongToDoubleFunction", veryRareMultiplier),
    ...repeat("LongToIntFunction", veryRareMultiplier),
    ...repeat("LongUnaryOperator", veryRareMultiplier),
    ...repeat("ObjDoubleConsumer", veryRareMultiplier),
    ...repeat("ObjIntConsumer", veryRareMultiplier),
    ...repeat("ObjLongConsumer", veryRareMultiplier),
    ...repeat("Predicate", extremelyCommonMultiplier),
    ...repeat("Supplier", extremelyCommonMultiplier),
    ...repeat("ToDoubleBiFunction", veryRareMultiplier),
    ...repeat("ToDoubleFunction", veryRareMultiplier),
    ...repeat("ToIntBiFunction", veryRareMultiplier),
    ...repeat("ToIntFunction", veryRareMultiplier),
    ...repeat("ToLongBiFunction", veryRareMultiplier),
    ...repeat("ToLongFunction", veryRareMultiplier),
    ...repeat("UnaryOperator", rareMultiplier),
  ];
}
