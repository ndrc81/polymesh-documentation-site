---
id: "CreateCheckpointScheduleParams"
title: "Interface: CreateCheckpointScheduleParams"
sidebar_label: "CreateCheckpointScheduleParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateCheckpointScheduleParams

## Properties

### period

• **period**: ``null`` \| [`CalendarPeriod`](../../../../Types/CalendarPeriod/CalendarPeriod.md)

The cadence with which to make Checkpoints.

**`Note`**

 A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future

#### Defined in

[api/procedures/types.ts:617](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L617)

___

### repetitions

• **repetitions**: ``null`` \| `BigNumber`

The number of snapshots to take. A null value indicates snapshots should be made indefinitely

#### Defined in

[api/procedures/types.ts:621](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L621)

___

### start

• **start**: ``null`` \| `Date`

The date from which to begin creating snapshots. A null value indicates immediately

#### Defined in

[api/procedures/types.ts:612](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L612)
