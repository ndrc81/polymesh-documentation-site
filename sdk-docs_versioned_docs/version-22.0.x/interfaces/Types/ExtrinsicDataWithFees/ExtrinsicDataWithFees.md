---
id: "ExtrinsicDataWithFees"
title: "Interface: ExtrinsicDataWithFees"
sidebar_label: "ExtrinsicDataWithFees"
---

[types](../../../modules/Types/Types.md).ExtrinsicDataWithFees

## Hierarchy

- [`ExtrinsicData`](../ExtrinsicData/ExtrinsicData.md)

  ↳ **`ExtrinsicDataWithFees`**

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[address](../ExtrinsicData/ExtrinsicData.md#address)

#### Defined in

[types/index.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L349)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockHash](../ExtrinsicData/ExtrinsicData.md#blockhash)

#### Defined in

[types/index.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L343)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[blockNumber](../ExtrinsicData/ExtrinsicData.md#blocknumber)

#### Defined in

[types/index.ts:344](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L344)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicHash](../ExtrinsicData/ExtrinsicData.md#extrinsichash)

#### Defined in

[types/index.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L358)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[extrinsicIdx](../ExtrinsicData/ExtrinsicData.md#extrinsicidx)

#### Defined in

[types/index.ts:345](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L345)

___

### fee

• **fee**: [`Fees`](../Fees/Fees.md)

#### Defined in

[types/index.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L362)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[nonce](../ExtrinsicData/ExtrinsicData.md#nonce)

#### Defined in

[types/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L353)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[params](../ExtrinsicData/ExtrinsicData.md#params)

#### Defined in

[types/index.ts:355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L355)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[specVersionId](../ExtrinsicData/ExtrinsicData.md#specversionid)

#### Defined in

[types/index.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L357)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[success](../ExtrinsicData/ExtrinsicData.md#success)

#### Defined in

[types/index.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L356)

___

### txTag

• **txTag**: [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)

#### Inherited from

[ExtrinsicData](../ExtrinsicData/ExtrinsicData.md).[txTag](../ExtrinsicData/ExtrinsicData.md#txtag)

#### Defined in

[types/index.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L354)
