// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function attribute({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio.file.attribute")) return [];

  return [
    ...repeat("AclEntry", veryRareMultiplier),
    ...repeat("AclEntryFlag", veryRareMultiplier),
    ...repeat("AclEntryPermission", veryRareMultiplier),
    ...repeat("AclEntryType", veryRareMultiplier),
    ...repeat("AclFileAttributeView", veryRareMultiplier),
    ...repeat("AttributeView", veryRareMultiplier),
    ...repeat("BasicFileAttributeView", veryRareMultiplier),
    ...repeat("BasicFileAttributes", veryRareMultiplier),
    ...repeat("DosFileAttributeView", veryRareMultiplier),
    ...repeat("DosFileAttributes", veryRareMultiplier),
    ...repeat("FileAttribute", veryRareMultiplier),
    ...repeat("FileAttributeView", veryRareMultiplier),
    ...repeat("FileOwnerAttributeView", veryRareMultiplier),
    ...repeat("FileStoreAttributeView", veryRareMultiplier),
    ...repeat("FileTime", veryRareMultiplier),
    ...repeat("GroupPrincipal", veryRareMultiplier),
    ...repeat("PosixFileAttributeView", veryRareMultiplier),
    ...repeat("PosixFileAttributes", veryRareMultiplier),
    ...repeat("PosixFilePermission", veryRareMultiplier),
    ...repeat("PosixFilePermissions", veryRareMultiplier),
    ...repeat("UserDefinedFileAttributeView", veryRareMultiplier),
    ...repeat("UserPrincipal", veryRareMultiplier),
    ...repeat("UserPrincipalLookupService", veryRareMultiplier),
    ...repeat("UserPrincipalNotFoundException", veryRareMultiplier),
  ];
}
