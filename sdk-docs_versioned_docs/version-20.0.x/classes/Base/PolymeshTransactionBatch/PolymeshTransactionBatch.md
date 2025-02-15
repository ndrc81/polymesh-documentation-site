---
id: "PolymeshTransactionBatch"
title: "Class: PolymeshTransactionBatch<ReturnValue, TransformedReturnValue, Args>"
sidebar_label: "PolymeshTransactionBatch"
---

[base/PolymeshTransactionBatch](../../../modules/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md).PolymeshTransactionBatch

Wrapper class for a batch of Polymesh Transactions

## Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `ReturnValue` |
| `TransformedReturnValue` | `ReturnValue` |
| `Args` | extends `unknown`[][] = `unknown`[][] |

## Hierarchy

- [`PolymeshTransactionBase`](../PolymeshTransactionBase/PolymeshTransactionBase.md)<`ReturnValue`, `TransformedReturnValue`\>

  ↳ **`PolymeshTransactionBatch`**

## Properties

### blockHash

• `Optional` **blockHash**: `string`

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#blockhash)

#### Defined in

[base/PolymeshTransactionBase.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L92)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[blockNumber](../PolymeshTransactionBase/PolymeshTransactionBase.md#blocknumber)

#### Defined in

[base/PolymeshTransactionBase.ts:97](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L97)

___

### error

• `Optional` **error**: [`PolymeshError`](../PolymeshError/PolymeshError.md)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[error](../PolymeshTransactionBase/PolymeshTransactionBase.md#error)

#### Defined in

[base/PolymeshTransactionBase.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L72)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[receipt](../PolymeshTransactionBase/PolymeshTransactionBase.md#receipt)

#### Defined in

[base/PolymeshTransactionBase.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L77)

___

### status

• **status**: [`TransactionStatus`](../../../enums/Types/TransactionStatus/TransactionStatus.md) = `TransactionStatus.Idle`

current status of the transaction

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[status](../PolymeshTransactionBase/PolymeshTransactionBase.md#status)

#### Defined in

[base/PolymeshTransactionBase.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L67)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txHash](../PolymeshTransactionBase/PolymeshTransactionBase.md#txhash)

#### Defined in

[base/PolymeshTransactionBase.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L82)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[txIndex](../PolymeshTransactionBase/PolymeshTransactionBase.md#txindex)

#### Defined in

[base/PolymeshTransactionBase.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/base/PolymeshTransactionBase.ts#L87)

## Accessors

### isSuccess

• `get` **isSuccess**(): `boolean`

returns true if transaction has completed successfully

#### Returns

`boolean`

#### Inherited from

PolymeshTransactionBase.isSuccess

___

### result

• `get` **result**(): `TransformedReturnValue`

returns the transaction result - this is the same value as the Promise run returns

**`Note`**

 it is generally preferable to `await` the `Promise` returned by [transaction.run()](../PolymeshTransactionBase/PolymeshTransactionBase.md#run) instead of reading this property

**`Throws`**

 if the [transaction.isSuccess](../PolymeshTransactionBase/PolymeshTransactionBase.md#issuccess) property is false — be sure to check that before accessing!

#### Returns

`TransformedReturnValue`

#### Inherited from

PolymeshTransactionBase.result

___

### transactions

• `get` **transactions**(): [`MapTxData`](../../../modules/Types/Types.md#maptxdata)<`Args`\>

transactions in the batch with their respective arguments

#### Returns

[`MapTxData`](../../../modules/Types/Types.md#maptxdata)<`Args`\>

## Methods

### getTotalFees

▸ **getTotalFees**(): `Promise`<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

**`Note`**

 these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Returns

`Promise`<[`PayingAccountFees`](../../../interfaces/Types/PayingAccountFees/PayingAccountFees.md)\>

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[getTotalFees](../PolymeshTransactionBase/PolymeshTransactionBase.md#gettotalfees)

___

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`): [`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

**`Note`**

 this event will be fired even if the queue fails

**`Throws`**

 if the middleware wasn't enabled when instantiating the SDK client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`err?`: [`PolymeshError`](../PolymeshError/PolymeshError.md)) => `void` | callback function that will be called whenever the middleware is updated with the latest data.   If there is an error (timeout or middleware offline) it will be passed to this callback |

#### Returns

[`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

unsubscribe function

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onProcessedByMiddleware](../PolymeshTransactionBase/PolymeshTransactionBase.md#onprocessedbymiddleware)

___

### onStatusChange

▸ **onStatusChange**(`listener`): [`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

Subscribe to status changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`transaction`: [`GenericPolymeshTransaction`](../../../modules/Types/Types.md#genericpolymeshtransaction)<`ReturnValue`, `TransformedReturnValue`\>) => `void` | callback function that will be called whenever the status changes |

#### Returns

[`UnsubCallback`](../../../modules/Types/Types.md#unsubcallback)

unsubscribe function

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[onStatusChange](../PolymeshTransactionBase/PolymeshTransactionBase.md#onstatuschange)

___

### run

▸ **run**(): `Promise`<`TransformedReturnValue`\>

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`<`TransformedReturnValue`\>

#### Inherited from

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[run](../PolymeshTransactionBase/PolymeshTransactionBase.md#run)

___

### splitTransactions

▸ **splitTransactions**(): ([`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)<`void`, `void`, `unknown`[]\> \| [`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)<`ReturnValue`, `TransformedReturnValue`, `unknown`[]\>)[]

Splits this batch into its individual transactions to be run separately. This is useful if the caller is being subsidized,
  since batches cannot be run by subsidized Accounts

**`Note`**

 the transactions returned by this method must be run in the same order they appear in the array to guarantee the same behavior. If run out of order,
  an error will be thrown. The result that would be obtained by running the batch is returned by running the last transaction in the array

**`Example`**

 ```typescript
const createAssetTx = await sdk.assets.createAsset(...);

let ticker: string;

if (isPolymeshTransactionBatch<Asset>(createAssetTx)) {
  const transactions = createAssetTx.splitTransactions();

  for (let i = 0; i < length; i += 1) {
    const result = await transactions[i].run();

    if (isAsset(result)) {
      ({ticker} = result)
    }
  }
} else {
  ({ ticker } = await createAssetTx.run());
}

console.log(`New Asset created! Ticker: ${ticker}`);
```

#### Returns

([`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)<`void`, `void`, `unknown`[]\> \| [`PolymeshTransaction`](../PolymeshTransaction/PolymeshTransaction.md)<`ReturnValue`, `TransformedReturnValue`, `unknown`[]\>)[]

___

### supportsSubsidy

▸ **supportsSubsidy**(): `boolean`

**`Note`**

 batches can't be subsidized. If the caller is subsidized, they should use `splitTransactions` and
  run each transaction separately

#### Returns

`boolean`

#### Overrides

[PolymeshTransactionBase](../PolymeshTransactionBase/PolymeshTransactionBase.md).[supportsSubsidy](../PolymeshTransactionBase/PolymeshTransactionBase.md#supportssubsidy)
