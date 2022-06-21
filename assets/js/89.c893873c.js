(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{516:function(a,s,t){"use strict";t.r(s);var e=t(57),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"磁盘使用优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘使用优化"}},[a._v("#")]),a._v(" 磁盘使用优化")]),a._v(" "),t("p",[a._v("自定义配置设置以降低验证器节点的磁盘要求")]),a._v(" "),t("p",[a._v("区块链数据库往往会随着时间的推移而增长，这取决于例如 在块速度和交易金额。")]),a._v(" "),t("p",[a._v("可以进行很少的配置来减少所需的磁盘使用率相当显着。 其中一些更改全面生效仅当您进行配置并从 start 开始同步时\n他们在使用中。")]),a._v(" "),t("h2",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),t("p",[a._v("如果您不需要从特定节点查询交易，您可以禁用索引。 在 "),t("code",[a._v("config.toml")]),a._v(" 设置")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("indexer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"null"')]),a._v("\n")])])]),t("p",[a._v("如果您在已同步的节点上执行此操作，则不会清除收集到的索引自动，您需要手动删除它。 该索引位于在名为“data/tx_index.db/”的数据库目录下。")]),a._v(" "),t("h2",{attrs:{id:"状态同步快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态同步快照"}},[a._v("#")]),a._v(" 状态同步快照")]),a._v(" "),t("p",[a._v("我相信这是默认情况下在 Plugchain 上禁用的。 在 "),t("code",[a._v("app.toml")]),a._v(" 设置")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("snapshot-interval")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),t("p",[a._v("请注意，如果在网络上启用了状态同步并且工作正常，它将允许一个人在几分钟内同步一个新节点。 但是这个节点不会有历史。")]),a._v(" "),t("h2",{attrs:{id:"配置-修剪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-修剪"}},[a._v("#")]),a._v(" 配置 修剪")]),a._v(" "),t("p",[a._v("默认情况下，每 500 个状态，最后 100 个状态被保留。 这从长远来看会消耗大量磁盘空间，并且可以通过以下方式进行优化\n以下自定义配置：")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pruning")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"custom"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pruning-keep-recent")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"100"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pruning-keep-every")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("pruning-interval")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10"')]),a._v("\n")])])]),t("p",[a._v("配置 "),t("code",[a._v('pruning-keep-recent = "0"')]),a._v(" 可能听起来很诱人，但这如果 "),t("code",[a._v("plugchaind")]),a._v(" 因任何原因被杀死，将面临数据库损坏的风险。\n因此，建议保留少数最新状态。")]),a._v(" "),t("h2",{attrs:{id:"日志记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志记录"}},[a._v("#")]),a._v(" 日志记录")]),a._v(" "),t("p",[a._v("默认情况下，日志记录级别设置为"),t("code",[a._v("info")]),a._v("，这会产生很多日志。 此日志级别在启动时可能会很好，以查看\n节点开始正确同步。 但是，在您看到同步后\n顺利进行，您可以将日志级别降低到"),t("code",[a._v("warn")]),a._v("或者"),t("code",[a._v("error")]),a._v("。 在\n"),t("code",[a._v("config.toml")]),a._v(" 设置如下")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[a._v("log_level")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"warn"')]),a._v("\n")])])]),t("p",[a._v("还要确保您的日志轮换配置正确。")]),a._v(" "),t("h2",{attrs:{id:"结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[a._v("#")]),a._v(" 结果")]),a._v(" "),t("p",[a._v("以下是 Plugchai 测试网两周后的磁盘使用情况。 默认\n配置导致磁盘使用量为 90GB。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(".3G    ./state.db\n70G     ./application.db\n20K     ./snapshots/metadata.db\n24K     ./snapshots\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(".0G    ./blockstore.db\n20K     ./evidence.db\n1018M   ./cs.wal\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(".7G    ./tx_index.db\n90G     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("p",[a._v("此优化配置已将磁盘使用量减少到 17 GB。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("17G     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".1G    ./cs.wal\n946M    ./application.db\n20K     ./evidence.db\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(".1G    ./blockstore.db\n24K     ./snapshots\n20K     ./snapshots/metadata.db\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(".3G    ./state.db\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);