---
id: "Claims"
title: "Class: Claims"
sidebar_label: "Claims"
---

[api/client/Claims](../../../../modules/API/Client/Claims/Claims.md).Claims

Handles all Claims related functionality

## Methods

### addClaims

▸ **addClaims**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Add claims to Identities

**`Note`**

 required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

 this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [addClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### editClaims

▸ **editClaims**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Edit claims associated to Identities (only the expiry date can be modified)

**`Note`**

 required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

 this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [editClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

___

### getCddClaims

▸ **getCddClaims**(`opts?`): `Promise`<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md)<[`CddClaim`](../../../../interfaces/Types/CddClaim/CddClaim.md)\>[]\>

Retrieve the list of CDD claims for a target Identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md)<[`CddClaim`](../../../../interfaces/Types/CddClaim/CddClaim.md)\>[]\>

___

### getClaimScopes

▸ **getClaimScopes**(`opts?`): `Promise`<[`ClaimScope`](../../../../interfaces/Types/ClaimScope/ClaimScope.md)[]\>

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ClaimScope`](../../../../interfaces/Types/ClaimScope/ClaimScope.md)[]\>

___

### getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`Note`**

 supports pagination

**`Note`**

 uses the middleware V2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.claimTypes?` | [`ClaimType`](../../../../enums/Types/ClaimType/ClaimType.md)[] | types of the claims to fetch. Defaults to any type |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../../../../interfaces/Types/Scope/Scope.md) | scope of the claims to fetch. Defaults to any scope |
| `opts.size?` | `BigNumber` | page size |
| `opts.start?` | `BigNumber` | page offset |
| `opts.targets?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | Identity IDs of claim issuers. Defaults to all claim issuers |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

___

### getIssuedClaims

▸ **getIssuedClaims**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md)<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

Retrieve all claims issued by an Identity

**`Note`**

 supports pagination

**`Note`**

 uses the middlewareV2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity (optional, defaults to the signing Identity) |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`ClaimData`](../../../../interfaces/Types/ClaimData/ClaimData.md)<[`Claim`](../../../../modules/Types/Types.md#claim)\>\>\>

___

### getTargetingClaims

▸ **getTargetingClaims**(`opts?`): `Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

Retrieve all claims issued about an Identity, grouped by claim issuer

**`Note`**

 supports pagination

**`Note`**

 uses the middlewareV2 (optional)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | - |
| `opts.includeExpired?` | `boolean` | whether to include expired claims. Defaults to true |
| `opts.scope?` | [`Scope`](../../../../interfaces/Types/Scope/Scope.md) | - |
| `opts.size?` | `BigNumber` | - |
| `opts.start?` | `BigNumber` | - |
| `opts.target?` | `string` \| [`Identity`](../../Entities/Identity/Identity.md) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
| `opts.trustedClaimIssuers?` | (`string` \| [`Identity`](../../Entities/Identity/Identity.md))[] | - |

#### Returns

`Promise`<[`ResultSet`](../../../../interfaces/Types/ResultSet/ResultSet.md)<[`IdentityWithClaims`](../../../../interfaces/Types/IdentityWithClaims/IdentityWithClaims.md)\>\>

___

### revokeClaims

▸ **revokeClaims**(`args`, `opts?`): `Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>

Revoke claims from Identities

**`Note`**

 required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`Note`**

 this method is of type [ProcedureMethod](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md), which means you can call [revokeClaims.checkAuthorization](../../../../interfaces/Types/ProcedureMethod/ProcedureMethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Pick`<[`ModifyClaimsParams`](../../../../modules/API/Procedures/Types/Types.md#modifyclaimsparams), ``"claims"``\> |
| `opts?` | [`ProcedureOpts`](../../../../interfaces/Types/ProcedureOpts/ProcedureOpts.md) |

#### Returns

`Promise`<[`GenericPolymeshTransaction`](../../../../modules/Types/Types.md#genericpolymeshtransaction)<`void`, `void`\>\>
