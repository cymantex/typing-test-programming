// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function spec({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.security.spec")) return [];

  return [
    ...repeat("AlgorithmParameterSpec", veryRareMultiplier),
    ...repeat("DSAGenParameterSpec", veryRareMultiplier),
    ...repeat("DSAParameterSpec", veryRareMultiplier),
    ...repeat("DSAPrivateKeySpec", veryRareMultiplier),
    ...repeat("DSAPublicKeySpec", veryRareMultiplier),
    ...repeat("ECField", veryRareMultiplier),
    ...repeat("ECFieldF2m", veryRareMultiplier),
    ...repeat("ECFieldFp", veryRareMultiplier),
    ...repeat("ECGenParameterSpec", veryRareMultiplier),
    ...repeat("ECParameterSpec", veryRareMultiplier),
    ...repeat("ECPoint", veryRareMultiplier),
    ...repeat("ECPrivateKeySpec", veryRareMultiplier),
    ...repeat("ECPublicKeySpec", veryRareMultiplier),
    ...repeat("EdDSAParameterSpec", veryRareMultiplier),
    ...repeat("EdECPoint", veryRareMultiplier),
    ...repeat("EdECPrivateKeySpec", veryRareMultiplier),
    ...repeat("EdECPublicKeySpec", veryRareMultiplier),
    ...repeat("EllipticCurve", veryRareMultiplier),
    ...repeat("EncodedKeySpec", veryRareMultiplier),
    ...repeat("InvalidKeySpecException", veryRareMultiplier),
    ...repeat("InvalidParameterSpecException", veryRareMultiplier),
    ...repeat("KeySpec", veryRareMultiplier),
    ...repeat("MGF1ParameterSpec", veryRareMultiplier),
    ...repeat("NamedParameterSpec", veryRareMultiplier),
    ...repeat("PKCS8EncodedKeySpec", veryRareMultiplier),
    ...repeat("PSSParameterSpec", veryRareMultiplier),
    ...repeat("RSAKeyGenParameterSpec", veryRareMultiplier),
    ...repeat("RSAMultiPrimePrivateCrtKeySpec", veryRareMultiplier),
    ...repeat("RSAOtherPrimeInfo", veryRareMultiplier),
    ...repeat("RSAPrivateCrtKeySpec", veryRareMultiplier),
    ...repeat("RSAPrivateKeySpec", veryRareMultiplier),
    ...repeat("RSAPublicKeySpec", veryRareMultiplier),
    ...repeat("X509EncodedKeySpec", veryRareMultiplier),
    ...repeat("XECPrivateKeySpec", veryRareMultiplier),
    ...repeat("XECPublicKeySpec", veryRareMultiplier),
  ];
}
