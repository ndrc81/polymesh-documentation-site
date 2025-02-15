---
id: "CheckRolesResult"
title: "Interface: CheckRolesResult"
sidebar_label: "CheckRolesResult"
---

[types](../../../modules/Types/Types.md).CheckRolesResult

Result of a `checkRoles` call

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[types/index.ts:1020](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1020)

___

### missingRoles

• `Optional` **missingRoles**: [`Role`](../../../modules/Types/Types.md#role)[]

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[types/index.ts:1012](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1012)

___

### result

• **result**: `boolean`

whether the signer possesses all the required roles or not

#### Defined in

[types/index.ts:1016](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1016)
