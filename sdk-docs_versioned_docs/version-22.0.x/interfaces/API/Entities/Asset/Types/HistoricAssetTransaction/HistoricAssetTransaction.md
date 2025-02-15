---
id: "HistoricAssetTransaction"
title: "Interface: HistoricAssetTransaction"
sidebar_label: "HistoricAssetTransaction"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).HistoricAssetTransaction

## Hierarchy

- [`EventIdentifier`](../../../../../Types/EventIdentifier/EventIdentifier.md)

  ↳ **`HistoricAssetTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

#### Defined in

[api/entities/Asset/types.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L65)

___

### asset

• **asset**: [`Asset`](../../../../../../classes/API/Entities/Asset/Asset.md)

#### Defined in

[api/entities/Asset/types.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L64)

___

### blockDate

• **blockDate**: `Date`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockDate](../../../../../Types/EventIdentifier/EventIdentifier.md#blockdate)

#### Defined in

[types/index.ts:717](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L717)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockHash](../../../../../Types/EventIdentifier/EventIdentifier.md#blockhash)

#### Defined in

[types/index.ts:716](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L716)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[blockNumber](../../../../../Types/EventIdentifier/EventIdentifier.md#blocknumber)

#### Defined in

[types/index.ts:715](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L715)

___

### event

• **event**: [`EventIdEnum`](../../../../../../enums/Types/EventIdEnum/EventIdEnum.md)

#### Defined in

[api/entities/Asset/types.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L68)

___

### eventIndex

• **eventIndex**: `BigNumber`

#### Inherited from

[EventIdentifier](../../../../../Types/EventIdentifier/EventIdentifier.md).[eventIndex](../../../../../Types/EventIdentifier/EventIdentifier.md#eventindex)

#### Defined in

[types/index.ts:718](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L718)

___

### extrinsicIndex

• **extrinsicIndex**: `BigNumber`

#### Defined in

[api/entities/Asset/types.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L69)

___

### from

• **from**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L66)

___

### to

• **to**: ``null`` \| [`NumberedPortfolio`](../../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

#### Defined in

[api/entities/Asset/types.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L67)
