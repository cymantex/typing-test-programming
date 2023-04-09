// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function file({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.nio.file")) return [];

  return [
    ...repeat("AccessDeniedException", veryRareMultiplier),
    ...repeat("AccessMode", veryRareMultiplier),
    ...repeat("AtomicMoveNotSupportedException", veryRareMultiplier),
    ...repeat("ClosedDirectoryStreamException", veryRareMultiplier),
    ...repeat("ClosedFileSystemException", veryRareMultiplier),
    ...repeat("ClosedWatchServiceException", veryRareMultiplier),
    ...repeat("CopyOption", veryRareMultiplier),
    ...repeat("DirectoryIteratorException", veryRareMultiplier),
    ...repeat("DirectoryNotEmptyException", veryRareMultiplier),
    ...repeat("DirectoryStream", veryRareMultiplier),
    ...repeat("FileAlreadyExistsException", veryRareMultiplier),
    ...repeat("FileStore", veryRareMultiplier),
    ...repeat("FileSystem", veryRareMultiplier),
    ...repeat("FileSystemAlreadyExistsException", veryRareMultiplier),
    ...repeat("FileSystemException", veryRareMultiplier),
    ...repeat("FileSystemLoopException", veryRareMultiplier),
    ...repeat("FileSystemNotFoundException", veryRareMultiplier),
    ...repeat("FileSystems", veryRareMultiplier),
    ...repeat("FileVisitOption", veryRareMultiplier),
    ...repeat("FileVisitResult", veryRareMultiplier),
    ...repeat("FileVisitor", veryRareMultiplier),
    ...repeat("Files", veryRareMultiplier),
    ...repeat("InvalidPathException", veryRareMultiplier),
    ...repeat("LinkOption", veryRareMultiplier),
    ...repeat("LinkPermission", veryRareMultiplier),
    ...repeat("NoSuchFileException", veryRareMultiplier),
    ...repeat("NotDirectoryException", veryRareMultiplier),
    ...repeat("NotLinkException", veryRareMultiplier),
    ...repeat("OpenOption", veryRareMultiplier),
    ...repeat("Path", veryRareMultiplier),
    ...repeat("PathMatcher", veryRareMultiplier),
    ...repeat("Paths", veryRareMultiplier),
    ...repeat("ProviderMismatchException", veryRareMultiplier),
    ...repeat("ProviderNotFoundException", veryRareMultiplier),
    ...repeat("ReadOnlyFileSystemException", veryRareMultiplier),
    ...repeat("SecureDirectoryStream", veryRareMultiplier),
    ...repeat("SimpleFileVisitor", veryRareMultiplier),
    ...repeat("StandardCopyOption", veryRareMultiplier),
    ...repeat("StandardOpenOption", veryRareMultiplier),
    ...repeat("StandardWatchEventKinds", veryRareMultiplier),
    ...repeat("WatchEvent", veryRareMultiplier),
    ...repeat("WatchKey", veryRareMultiplier),
    ...repeat("WatchService", veryRareMultiplier),
    ...repeat("Watchable", veryRareMultiplier),
  ];
}
