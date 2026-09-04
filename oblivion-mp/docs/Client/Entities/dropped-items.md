---
sidebar_position: 3
---

# Dropped items

Items lying in the game world, dropped by players or by the game itself, are represented as [ReadyDroppedItem](../../../api-reference/OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem) entities, reached through [`SDK.Sync`](../../../api-reference/OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionSyncApi).

```csharp
IEnumerable<ReadyDroppedItem> items = SDK.Sync.AllDroppedItems;

foreach (var item in items)
{
    FormId formId = item.FormId;
    int stackSize = item.StackSize;
}
```

## Spawning items

```csharp
SDK.Sync.SpawnDroppedItem(itemId, stackSize: 5, position);
```
