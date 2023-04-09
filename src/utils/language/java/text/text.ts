// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function text({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.text")) return [];

  return [
    ...repeat("Annotation", veryRareMultiplier),
    ...repeat("AttributedCharacterIterator", veryRareMultiplier),
    ...repeat("AttributedString", veryRareMultiplier),
    ...repeat("Bidi", veryRareMultiplier),
    ...repeat("BreakIterator", veryRareMultiplier),
    ...repeat("CharacterIterator", veryRareMultiplier),
    ...repeat("ChoiceFormat", veryRareMultiplier),
    ...repeat("CollationElementIterator", veryRareMultiplier),
    ...repeat("CollationKey", veryRareMultiplier),
    ...repeat("Collator", veryRareMultiplier),
    ...repeat("CompactNumberFormat", veryRareMultiplier),
    ...repeat("DateFormat", veryRareMultiplier),
    ...repeat("DateFormatSymbols", veryRareMultiplier),
    ...repeat("DecimalFormat", veryRareMultiplier),
    ...repeat("DecimalFormatSymbols", veryRareMultiplier),
    ...repeat("EntryPair", veryRareMultiplier),
    ...repeat("FieldPosition", veryRareMultiplier),
    ...repeat("Format", veryRareMultiplier),
    ...repeat("MergeCollation", veryRareMultiplier),
    ...repeat("MessageFormat", veryRareMultiplier),
    ...repeat("Normalizer", veryRareMultiplier),
    ...repeat("NumberFormat", veryRareMultiplier),
    ...repeat("ParseException", veryRareMultiplier),
    ...repeat("ParsePosition", veryRareMultiplier),
    ...repeat("RBCollationTables", veryRareMultiplier),
    ...repeat("RBTableBuilder", veryRareMultiplier),
    ...repeat("RuleBasedCollator", veryRareMultiplier),
    ...repeat("SimpleDateFormat", veryRareMultiplier),
    ...repeat("StringCharacterIterator", veryRareMultiplier),
  ];
}
