(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{501:function(t,v,_){"use strict";_.r(v);var d=_(57),r=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),_("p",[_("code",[t._v("plugchaind")]),t._v(" 是Plug Chain Hub网络的命令行客户端。Plug Chain Hub用户可以使用"),_("code",[t._v("plugchaind")]),t._v("发送交易和查询区块链数据。")]),t._v(" "),_("h2",{attrs:{id:"工作目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作目录"}},[t._v("#")]),t._v(" 工作目录")]),t._v(" "),_("p",[_("code",[t._v("plugchaind")]),t._v(" 默认工作目录是 "),_("code",[t._v("$HOME/.plugchain")]),t._v("，主要用于保存配置文件和数据。Plug Chain Hub “密钥”数据保存在"),_("code",[t._v("plugchaind")]),t._v("的工作目录中。您还可以通过"),_("code",[t._v("--home")]),t._v("指定"),_("code",[t._v("plugchaind")]),t._v("的工作目录。")]),t._v(" "),_("h2",{attrs:{id:"连接全节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接全节点"}},[t._v("#")]),t._v(" 连接全节点")]),t._v(" "),_("p",[_("code",[t._v("--node")]),t._v("用来指定所连接"),_("code",[t._v("plugchaind")]),t._v("节点的rpc地址，交易和查询的消息都发送到监听这个端口的plugchaind进程。默认值为"),_("code",[t._v("tcp://localhost:26657")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"全局标识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局标识"}},[t._v("#")]),t._v(" 全局标识")]),t._v(" "),_("h3",{attrs:{id:"get-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-请求"}},[t._v("#")]),t._v(" GET 请求")]),t._v(" "),_("p",[t._v("所有GET请求都有以下全局标识：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称，速记")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("必需")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--chain-id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v('""')]),t._v(" "),_("td",[t._v("tendermint节点的Chain ID")])]),t._v(" "),_("tr",[_("td",[t._v("--home")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("/Users/userName/.plugchaind")]),t._v(" "),_("td",[t._v("配置和数据的目录")])]),t._v(" "),_("tr",[_("td",[t._v("--trace")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("打印出错时的完整堆栈跟踪")])])])]),t._v(" "),_("h3",{attrs:{id:"post-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-请求"}},[t._v("#")]),t._v(" POST 请求")]),t._v(" "),_("p",[t._v("所有POST请求都有以下全局标识：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称，速记")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("必需")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--account-number")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("发起交易的账户的编号")])]),t._v(" "),_("tr",[_("td",[t._v("--broadcast-mode")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("sync")]),t._v(" "),_("td",[t._v("广播交易的节点")])]),t._v(" "),_("tr",[_("td",[t._v("--dry-run")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("模拟执行交易，并返回消耗的"),_("code",[t._v("gas")]),t._v("。"),_("code",[t._v("--gas")]),t._v("指定的值会被忽略")])]),t._v(" "),_("tr",[_("td",[t._v("--fees")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("交易费（指定交易费的上限）")])]),t._v(" "),_("tr",[_("td",[t._v("--from")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("签名交易的私钥名称")])]),t._v(" "),_("tr",[_("td",[t._v("--gas")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("50000")]),t._v(" "),_("td",[t._v('交易的gas上限；设置为"simulate"将自动计算相应的阈值')])]),t._v(" "),_("tr",[_("td",[t._v("--gas-adjustment")]),t._v(" "),_("td",[t._v("float")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("gas调整因子，这个值降乘以模拟执行消耗的"),_("code",[t._v("gas")]),t._v("，计算的结果返回给用户；如果"),_("code",[t._v("--gas")]),t._v("的值不是"),_("code",[t._v("simulate")]),t._v("，这个标志将被忽略")])]),t._v(" "),_("tr",[_("td",[t._v("--gas-prices")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("gas以十进制格式确定交易费")])]),t._v(" "),_("tr",[_("td",[t._v("--generate-only")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("是否仅仅构建一个未签名的交易便返回")])]),t._v(" "),_("tr",[_("td",[t._v("--help, -h")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("打印帮助信息")])]),t._v(" "),_("tr",[_("td",[t._v("--keyring-backend")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("os")]),t._v(" "),_("td",[t._v("选择钥匙圈后端")])]),t._v(" "),_("tr",[_("td",[t._v("--ledger")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("使用ledger设备")])]),t._v(" "),_("tr",[_("td",[t._v("--memo")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("指定交易的memo字段")])]),t._v(" "),_("tr",[_("td",[t._v("--node")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("tcp://localhost:26657")]),t._v(" "),_("td",[t._v("tendermint节点的rpc地址")])]),t._v(" "),_("tr",[_("td",[t._v("--offline")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("离线节点")])]),t._v(" "),_("tr",[_("td",[t._v("--sequence")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("发起交易的账户的sequence")])]),t._v(" "),_("tr",[_("td",[t._v("--sign-mode")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("选择签名节点，这是高级特性")])]),t._v(" "),_("tr",[_("td",[t._v("--trust-node")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("是否信任全节点返回的数据，如果不信任，客户端会验证查询结果的正确性")])]),t._v(" "),_("tr",[_("td",[t._v("--yes")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("跳过交易广播提示确认")])]),t._v(" "),_("tr",[_("td",[t._v("--chain-id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("tendermint节点的"),_("code",[t._v("Chain ID")])])]),t._v(" "),_("tr",[_("td",[t._v("--home")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v('配置文件和数据文件目录 (默认 "~/.plugchain")')])]),t._v(" "),_("tr",[_("td",[t._v("--trace")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("打印出完整的堆栈跟踪错误")])])])]),t._v(" "),_("h2",{attrs:{id:"模块命令列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块命令列表"}},[t._v("#")]),t._v(" 模块命令列表")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("子命令")])]),t._v(" "),_("th",[_("strong",[t._v("描述")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/bank.html"}},[t._v("bank")])],1),t._v(" "),_("td",[t._v("用于查询帐户和转账等的 Bank 子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/debug.html"}},[t._v("debug")])],1),t._v(" "),_("td",[t._v("调试子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/distribution.html"}},[t._v("distribution")])],1),t._v(" "),_("td",[t._v("收益管理子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/gov.html"}},[t._v("gov")])],1),t._v(" "),_("td",[t._v("治理和投票子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/keys.html"}},[t._v("keys")])],1),t._v(" "),_("td",[t._v("密钥管理子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/params.html"}},[t._v("params")])],1),t._v(" "),_("td",[t._v("查询治理参数子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/slashing.html"}},[t._v("slashing")])],1),t._v(" "),_("td",[t._v("Slashing 子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/staking.html"}},[t._v("staking")])],1),t._v(" "),_("td",[t._v("Staking 子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/status.html"}},[t._v("status")])],1),t._v(" "),_("td",[t._v("查询远程节点的状态")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/tendermint.html"}},[t._v("tendermint")])],1),t._v(" "),_("td",[t._v("Tendermint 状态查询子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/tx.html"}},[t._v("tx")])],1),t._v(" "),_("td",[t._v("Tx 子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/upgrade.html"}},[t._v("upgrade")])],1),t._v(" "),_("td",[t._v("软件升级子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/token.html"}},[t._v("token")])],1),t._v(" "),_("td",[t._v("Token子命令")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/zh/cli-client/liquidity.html"}},[t._v("liquidity")])],1),t._v(" "),_("td",[t._v("Liquidity子命令")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);