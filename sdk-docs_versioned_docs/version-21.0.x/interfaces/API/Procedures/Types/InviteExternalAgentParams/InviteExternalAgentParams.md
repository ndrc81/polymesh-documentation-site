---
id: "InviteExternalAgentParams"
title: "Interface: InviteExternalAgentParams"
sidebar_label: "InviteExternalAgentParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).InviteExternalAgentParams

## Properties

### expiry

• `Optional` **expiry**: `Date`

date at which the authorization request for invitation expires (optional)

**`Note`**

 if expiry date is not set, the invitation will never expire

**`Note`**

 due to chain limitations, the expiry will be ignored if the passed `permissions` don't correspond to an existing Permission Group

#### Defined in

[api/procedures/types.ts:834](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L834)

___

### permissions

• **permissions**: [`CustomPermissionGroup`](../../../../../classes/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../../../../classes/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md) \| { `transactions`: ``null`` \| [`TransactionPermissions`](../../../../Types/TransactionPermissions/TransactionPermissions.md)  } \| { `transactionGroups`: [`TxGroup`](../../../../../enums/Types/TxGroup/TxGroup.md)[]  }

#### Defined in

[api/procedures/types.ts:819](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L819)

___

### target

• **target**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/procedures/types.ts:818](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L818)
