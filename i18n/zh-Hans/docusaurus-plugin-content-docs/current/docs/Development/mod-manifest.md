---
sidebar_position: 2
---

# 模组清单

官方的 WukongMP SDK 模组模板包含一个名为 `manifest.json` 的文件。此文件是模组加载器识别包含你的模组 DLL 的文件夹为
WukongMP 模组所必需的，并包含解析模组依赖所需的信息。

一个示例 `manifest.json` 文件如下所示：

```json title="manifest.json"
{
  "uniqueId": "WukongMP.Coop",
  "version": "0.2.0",
  "name": "WukongMP Co-op mode",
  "author": "ReadyM Team",
  "description": "The official WukongMP Co-op mode.",
  "dependencies": [
    {
      "uniqueId": "WukongMP.SDK",
      "minimumVersion": "0.2.0"
    }
  ]
}
```

请参阅下表，了解清单文件中各字段的描述。

| 表单字段           | 类型     | 可选    | 描述                                                                   |
| -------------- | ------ | ----- | -------------------------------------------------------------------- |
| `uniqueId`     | string | 不     | 模组的唯一标识符。只能包含字母数字字符，`.` 或 `_`                                        |
| `version`      | string | 不     | 模组版本，采用 `MAJOR.MINOR.PATCH` 格式。                                      |
| `name`         | string | 不     | 模组名称（将在服务器管理员门户和启动器中显示）                                              |
| `author`       | string | 不     | 模组作者，将在服务器管理门户和启动器中显示。                                               |
| `description`  | string | **是** | 该模组的简短描述。                                                            |
| `dependencies` | 对象数组   | **是** | 为使你的模组正常工作所需的其他模组列表。每个依赖项必须指定所需模组的 `uniqueId`，以及一个 `minimumVersion`。 |
