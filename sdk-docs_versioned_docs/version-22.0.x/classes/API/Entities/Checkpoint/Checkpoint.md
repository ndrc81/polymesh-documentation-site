---
id: "Checkpoint"
title: "Class: Checkpoint"
sidebar_label: "Checkpoint"
---

[api/entities/Checkpoint](../../../../modules/API/Entities/Checkpoint/Checkpoint.md).Checkpoint

Represents a snapshot of the Asset's holders and their respective balances
  at a certain point in time

## Hierarchy

- [`Entity`](../Entity/Entity.md)<[`UniqueIdentifiers`](../../../../interfaces/API/Entities/Checkpoint/UniqueIdentifiers/UniqueIdentifiers.md), [`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)\>

  ↳ **`Checkpoint`**

## Properties

### asset

• **asset**: [`Asset`](../Asset/Asset.md)

Asset whose balances are being recorded in this Checkpoint

#### Defined in

[api/entities/Checkpoint.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Checkpoint.ts#L52)

___

### id

• **id**: `BigNumber`

Checkpoint identifier number

#### Defined in

[api/entities/Checkpoint.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Checkpoint.ts#L47)

___

### uuid

• **uuid**: `string`

#### Inherited from

[Entity](../Entity/Entity.md).[uuid](../Entity/Entity.md#uuid)

#### Defined in

[api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Entity.ts#L46)

## Methods

### allBalances

▸ **allBalances**(`paginationOpts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityBalance`](../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

Retrieve all Asset Holder balances at this Checkpoint

**`Note`**

 supports pagination

**`Note`**

 current Asset holders who didn't hold any tokens when the Checkpoint was created will be listed with a balance of 0.
This arises from a chain storage optimization and pagination.

**`See`**

 [balance](Checkpoint.md#balance) for a more detailed explanation of the logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `paginationOpts?` | [`PaginationOptions`](../../../../interfaces/Types/PaginationOptions/PaginationOptions.md) |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityBalance`](../../../../interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md)\>\>

___

### balance

▸ **balance**(`args?`): `Promise`<`BigNumber`\>

Retrieve the balance of a specific Asset Holder Identity at this Checkpoint

**`Note`**

 A checkpoint only records balances when they change. The implementation is to query for all balance updates for [ticker, did] pair.
If no balance updates have happened since the Checkpoint has been created, then the storage will not have an entry for the user. Instead the current balance should be used.
The balance is stored only when the Identity makes a transaction after a Checkpoint is created. This helps keep storage usage to a minimum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | `Object` | - |
| `args.identity` | `string` \| [`Identity`](../Identity/Identity.md) | defaults to the signing Identity |

#### Returns

`Promise`<`BigNumber`\>

___

### createdAt

▸ **createdAt**(): `Promise`<`Date`\>

Retrieve this Checkpoint's creation date

#### Returns

`Promise`<`Date`\>

___

### exists

▸ **exists**(): `Promise`<`boolean`\>

Determine whether this Checkpoint exists on chain

#### Returns

`Promise`<`boolean`\>

#### Overrides

[Entity](../Entity/Entity.md).[exists](../Entity/Entity.md#exists)

___

### isEqual

▸ **isEqual**(`entity`): `boolean`

Determine whether this Entity is the same as another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Entity`](../Entity/Entity.md)<`unknown`, `unknown`\> |

#### Returns

`boolean`

#### Inherited from

[Entity](../Entity/Entity.md).[isEqual](../Entity/Entity.md#isequal)

___

### toHuman

▸ **toHuman**(): [`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)

Return the Checkpoint's ticker and identifier

#### Returns

[`HumanReadable`](../../../../interfaces/API/Entities/Checkpoint/HumanReadable/HumanReadable.md)

#### Overrides

[Entity](../Entity/Entity.md).[toHuman](../Entity/Entity.md#tohuman)

___

### totalSupply

▸ **totalSupply**(): `Promise`<`BigNumber`\>

Retrieve the Asset's total supply at this checkpoint

#### Returns

`Promise`<`BigNumber`\>

___

### generateUuid

▸ `Static` **generateUuid**<`Identifiers`\>(`identifiers`): `string`

Generate the Entity's UUID from its identifying properties

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifiers` | `Identifiers` |

#### Returns

`string`

#### Inherited from

[Entity](../Entity/Entity.md).[generateUuid](../Entity/Entity.md#generateuuid)

___

### unserialize

▸ `Static` **unserialize**<`Identifiers`\>(`serialized`): `Identifiers`

Unserialize a UUID into its Unique Identifiers

#### Type parameters

| Name |
| :------ |
| `Identifiers` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | UUID to unserialize |

#### Returns

`Identifiers`

#### Inherited from

[Entity](../Entity/Entity.md).[unserialize](../Entity/Entity.md#unserialize)
