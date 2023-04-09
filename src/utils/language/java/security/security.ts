// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function security({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.security")) return [];

  return [
    ...repeat("AccessControlContext", veryRareMultiplier),
    ...repeat("AccessControlException", veryRareMultiplier),
    ...repeat("AccessController", veryRareMultiplier),
    ...repeat("AlgorithmConstraints", veryRareMultiplier),
    ...repeat("AlgorithmParameterGenerator", veryRareMultiplier),
    ...repeat("AlgorithmParameterGeneratorSpi", veryRareMultiplier),
    ...repeat("AlgorithmParameters", veryRareMultiplier),
    ...repeat("AlgorithmParametersSpi", veryRareMultiplier),
    ...repeat("AllPermission", veryRareMultiplier),
    ...repeat("AllPermissionCollection", veryRareMultiplier),
    ...repeat("AuthProvider", veryRareMultiplier),
    ...repeat("BasicPermission", veryRareMultiplier),
    ...repeat("BasicPermissionCollection", veryRareMultiplier),
    ...repeat("Certificate", veryRareMultiplier),
    ...repeat("CodeSigner", veryRareMultiplier),
    ...repeat("CodeSource", veryRareMultiplier),
    ...repeat("CryptoPrimitive", veryRareMultiplier),
    ...repeat("DigestException", veryRareMultiplier),
    ...repeat("DigestInputStream", veryRareMultiplier),
    ...repeat("DigestOutputStream", veryRareMultiplier),
    ...repeat("DomainCombiner", veryRareMultiplier),
    ...repeat("DomainLoadStoreParameter", veryRareMultiplier),
    ...repeat("DrbgParameters", veryRareMultiplier),
    ...repeat("GeneralSecurityException", veryRareMultiplier),
    ...repeat("Guard", veryRareMultiplier),
    ...repeat("GuardedObject", veryRareMultiplier),
    ...repeat("Identity", veryRareMultiplier),
    ...repeat("IdentityScope", veryRareMultiplier),
    ...repeat("InvalidAlgorithmParameterException", veryRareMultiplier),
    ...repeat("InvalidKeyException", veryRareMultiplier),
    ...repeat("InvalidParameterException", veryRareMultiplier),
    ...repeat("Key", veryRareMultiplier),
    ...repeat("KeyException", veryRareMultiplier),
    ...repeat("KeyFactory", veryRareMultiplier),
    ...repeat("KeyFactorySpi", veryRareMultiplier),
    ...repeat("KeyManagementException", veryRareMultiplier),
    ...repeat("KeyPair", veryRareMultiplier),
    ...repeat("KeyPairGenerator", veryRareMultiplier),
    ...repeat("KeyPairGeneratorSpi", veryRareMultiplier),
    ...repeat("KeyRep", veryRareMultiplier),
    ...repeat("KeyStore", veryRareMultiplier),
    ...repeat("KeyStoreException", veryRareMultiplier),
    ...repeat("KeyStoreSpi", veryRareMultiplier),
    ...repeat("MessageDigest", veryRareMultiplier),
    ...repeat("MessageDigestSpi", veryRareMultiplier),
    ...repeat("NoSuchAlgorithmException", veryRareMultiplier),
    ...repeat("NoSuchProviderException", veryRareMultiplier),
    ...repeat("PKCS12Attribute", veryRareMultiplier),
    ...repeat("Permission", veryRareMultiplier),
    ...repeat("PermissionCollection", veryRareMultiplier),
    ...repeat("Permissions", veryRareMultiplier),
    ...repeat("Policy", veryRareMultiplier),
    ...repeat("PolicySpi", veryRareMultiplier),
    ...repeat("Principal", veryRareMultiplier),
    ...repeat("PrivateKey", veryRareMultiplier),
    ...repeat("PrivilegedAction", veryRareMultiplier),
    ...repeat("PrivilegedActionException", veryRareMultiplier),
    ...repeat("PrivilegedExceptionAction", veryRareMultiplier),
    ...repeat("ProtectionDomain", veryRareMultiplier),
    ...repeat("Provider", veryRareMultiplier),
    ...repeat("ProviderException", veryRareMultiplier),
    ...repeat("PublicKey", veryRareMultiplier),
    ...repeat("SecureClassLoader", veryRareMultiplier),
    ...repeat("SecureRandom", veryRareMultiplier),
    ...repeat("SecureRandomParameters", veryRareMultiplier),
    ...repeat("SecureRandomSpi", veryRareMultiplier),
    ...repeat("Security", veryRareMultiplier),
    ...repeat("SecurityPermission", veryRareMultiplier),
    ...repeat("Signature", veryRareMultiplier),
    ...repeat("SignatureException", veryRareMultiplier),
    ...repeat("SignatureSpi", veryRareMultiplier),
    ...repeat("SignedObject", veryRareMultiplier),
    ...repeat("Signer", veryRareMultiplier),
    ...repeat("Timestamp", veryRareMultiplier),
    ...repeat("URIParameter", veryRareMultiplier),
    ...repeat("UnrecoverableEntryException", veryRareMultiplier),
    ...repeat("UnrecoverableKeyException", veryRareMultiplier),
    ...repeat("UnresolvedPermission", veryRareMultiplier),
    ...repeat("UnresolvedPermissionCollection", veryRareMultiplier),
  ];
}
