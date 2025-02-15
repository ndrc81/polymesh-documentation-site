---
id: "ClaimPercentageTransferRestriction"
title: "Interface: ClaimPercentageTransferRestriction"
sidebar_label: "ClaimPercentageTransferRestriction"
---

[types](../../../modules/Types/Types.md).ClaimPercentageTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimPercentageTransferRestriction`**

## Properties

### claim

• **claim**: [`InputStatClaim`](../../../modules/Types/Types.md#inputstatclaim)

The type of investors this restriction applies to. e.g. Canadian investor

#### Defined in

[types/index.ts:1338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1338)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Scope/Identity IDs that are exempted from the Restriction

**`Note`**

 if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1305](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1305)

___

### issuer

• **issuer**: [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:1348](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1348)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1346)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1342)
