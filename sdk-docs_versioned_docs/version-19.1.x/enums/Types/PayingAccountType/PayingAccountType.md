---
id: "PayingAccountType"
title: "Enumeration: PayingAccountType"
sidebar_label: "PayingAccountType"
---

[types](../../../modules/Types/Types.md).PayingAccountType

Type of relationship between a paying account and a beneficiary

## Enumeration Members

### Caller

• **Caller** = ``"Caller"``

the caller Account is responsible of paying the fees

#### Defined in

[types/index.ts:767](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L767)

___

### Other

• **Other** = ``"Other"``

the paying Account is paying for a specific transaction because of
  chain-specific constraints (e.g. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

#### Defined in

[types/index.ts:763](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L763)

___

### Subsidy

• **Subsidy** = ``"Subsidy"``

the paying Account is currently subsidizing the caller

#### Defined in

[types/index.ts:757](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L757)
