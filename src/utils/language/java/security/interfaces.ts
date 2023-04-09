// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function interfaces({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.security.interfaces")) return [];

  return [
    ...repeat("DSAKey", veryRareMultiplier),
    ...repeat("DSAKeyPairGenerator", veryRareMultiplier),
    ...repeat("DSAParams", veryRareMultiplier),
    ...repeat("DSAPrivateKey", veryRareMultiplier),
    ...repeat("DSAPublicKey", veryRareMultiplier),
    ...repeat("ECKey", veryRareMultiplier),
    ...repeat("ECPrivateKey", veryRareMultiplier),
    ...repeat("ECPublicKey", veryRareMultiplier),
    ...repeat("EdECKey", veryRareMultiplier),
    ...repeat("EdECPrivateKey", veryRareMultiplier),
    ...repeat("EdECPublicKey", veryRareMultiplier),
    ...repeat("RSAKey", veryRareMultiplier),
    ...repeat("RSAMultiPrimePrivateCrtKey", veryRareMultiplier),
    ...repeat("RSAPrivateCrtKey", veryRareMultiplier),
    ...repeat("RSAPrivateKey", veryRareMultiplier),
    ...repeat("RSAPublicKey", veryRareMultiplier),
    ...repeat("XECKey", veryRareMultiplier),
    ...repeat("XECPrivateKey", veryRareMultiplier),
    ...repeat("XECPublicKey", veryRareMultiplier),
  ];
}
