---
id: "PercentageTransferRestrictionInput"
title: "Interface: PercentageTransferRestrictionInput"
sidebar_label: "PercentageTransferRestrictionInput"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).PercentageTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`PercentageTransferRestrictionInput`**

## Properties

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L162)

___

### percentage

• **percentage**: `BigNumber`

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once

#### Defined in

[api/procedures/types.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L176)
