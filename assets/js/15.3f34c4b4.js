(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{443:function(t,a,s){"use strict";s.r(a);var e=s(57),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"liquidity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#liquidity"}},[t._v("#")]),t._v(" Liquidity")]),t._v(" "),s("p",[t._v("The liquidity module serves Automated Market Maker (AMM)-style decentralized liquidity by providing liquidity activities and coin swap functions.")]),t._v(" "),s("p",[t._v("The module enables users to create a liquidity pool, make deposits and withdrawals, and request coin swaps from the liquidity pool.")]),t._v(" "),s("h2",{attrs:{id:"可用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用命令"}},[t._v("#")]),t._v(" 可用命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-create-pool"}},[t._v("create-pool")])]),t._v(" "),s("td",[t._v("Create liquidity pool and deposit coins")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-deposit"}},[t._v("deposit")])]),t._v(" "),s("td",[t._v("Deposit coins to a liquidity pool")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-swap"}},[t._v("swap")])]),t._v(" "),s("td",[t._v("Swap offer coin with demand coin from the liquidity pool with the given order price")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-withdraw"}},[t._v("withdraw")])]),t._v(" "),s("td",[t._v("Withdraw pool coin from the specified liquidity pool")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-batch"}},[t._v("batch")])]),t._v(" "),s("td",[t._v("Query details of a liquidity pool batch")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-deposit"}},[t._v("deposit")])]),t._v(" "),s("td",[t._v("Query the deposit messages on the liquidity pool batch")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-deposits"}},[t._v("deposits")])]),t._v(" "),s("td",[t._v("Query all deposit messages of the liquidity pool batch")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-params"}},[t._v("params")])]),t._v(" "),s("td",[t._v("Query the values set as liquidity parameters")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-pool"}},[t._v("pool")])]),t._v(" "),s("td",[t._v("Query details of a liquidity pool")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-pools"}},[t._v("pools")])]),t._v(" "),s("td",[t._v("Query for all liquidity pools")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-swap"}},[t._v("swap")])]),t._v(" "),s("td",[t._v("Query for the swap message on the batch of the liquidity pool specified pool-id and msg-index")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-swaps"}},[t._v("swaps")])]),t._v(" "),s("td",[t._v("Query all swap messages in the liquidity pool batch")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-withdraw"}},[t._v("withdraw")])]),t._v(" "),s("td",[t._v("Query the withdraw messages in the liquidity pool batch")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-withdraws"}},[t._v("withdraws")])]),t._v(" "),s("td",[t._v("Query for all withdraw messages on the liquidity pool batch")])])])]),t._v(" "),s("h2",{attrs:{id:"plugchaind-tx-liquidity-create-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-create-pool"}},[t._v("#")]),t._v(" plugchaind tx liquidity create-pool")]),t._v(" "),s("p",[t._v("Create liquidity pool and deposit coins")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity create-pool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deposit-coins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Flags：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name, shorthand")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-type")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The id of the liquidity pool-type. The only supported pool type is 1")])]),t._v(" "),s("tr",[s("td",[t._v("deposit-coins")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The amount of coins to deposit to the liquidity pool. The number of deposit coins must be 2 in pool type 1.")])])])]),t._v(" "),s("h3",{attrs:{id:"create-liquidity-pool-and-deposit-coins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-liquidity-pool-and-deposit-coins"}},[t._v("#")]),t._v(" Create liquidity pool and deposit coins")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity create-pool "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 1000000000uatom,50000000000uusd  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-deposit"}},[t._v("#")]),t._v(" plugchaind tx liquidity deposit")]),t._v(" "),s("p",[t._v("Deposit coins to a liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deposit-coins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Flags：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name, shorthand")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The pool id of the liquidity pool")])]),t._v(" "),s("tr",[s("td",[t._v("deposit-coins")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The amount of coins to deposit to the liquidity pool")])])])]),t._v(" "),s("h3",{attrs:{id:"deposit-coins-to-a-liquidity-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposit-coins-to-a-liquidity-pool"}},[t._v("#")]),t._v(" Deposit coins to a liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity deposit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 100000000uatom,5000000000uusd  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-swap"}},[t._v("#")]),t._v(" plugchaind tx liquidity swap")]),t._v(" "),s("p",[t._v("Swap offer coin with demand coin from the liquidity pool with the given order price")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity swap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("swap-type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("offer-coin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("demand-coin-denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("order-price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("swap-fee-rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Flags：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name, shorthand")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The pool id of the liquidity pool")])]),t._v(" "),s("tr",[s("td",[t._v("swap-type")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The swap type of the swap message. The only supported swap type is 1 (instant swap).")])]),t._v(" "),s("tr",[s("td",[t._v("offer-coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The amount of offer coin to swap")])]),t._v(" "),s("tr",[s("td",[t._v("demand-coin-denom")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The denomination of the coin to exchange with offer coin")])]),t._v(" "),s("tr",[s("td",[t._v("order-price")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The limit order price for the swap order. The price is the exchange ratio of X/Y where X is the amount of the first coin and Y is the amount of the second coin when their denoms are sorted alphabetically")])]),t._v(" "),s("tr",[s("td",[t._v("swap-fee-rate")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The swap fee rate to pay for swap that is proportional to swap amount. The swap fee rate must be the value that set as liquidity parameter in the current network.")])])])]),t._v(" "),s("h3",{attrs:{id:"swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swap"}},[t._v("#")]),t._v(" swap")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity swap "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 50000000uusd uatom "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.019")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.003")]),t._v("  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-withdraw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-withdraw"}},[t._v("#")]),t._v(" plugchaind tx liquidity withdraw")]),t._v(" "),s("p",[t._v("Withdraw pool coin from the specified liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-coin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Flags：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name, shorthand")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The pool id of the liquidity pool")])]),t._v(" "),s("tr",[s("td",[t._v("pool-coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[t._v("The amount of pool coin to withdraw from the liquidity pool")])])])]),t._v(" "),s("h3",{attrs:{id:"withdraw-pool-coin-from-the-specified-liquidity-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withdraw-pool-coin-from-the-specified-liquidity-pool"}},[t._v("#")]),t._v(" Withdraw pool coin from the specified liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 10000pool96EF6EA6E5AC828ED87E8D07E7AE2A8180570ADD212117B2DA6F0B75D17A6295 --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-batch"}},[t._v("#")]),t._v(" plugchaind  q liquidity batch")]),t._v(" "),s("p",[t._v("Query details of a liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity batch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-details-of-a-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-details-of-a-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query details of a liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind q liquidity batch "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-deposit"}},[t._v("#")]),t._v(" plugchaind q liquidity deposit")]),t._v(" "),s("p",[t._v("Query the deposit messages on the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-the-deposit-messages-on-the-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-the-deposit-messages-on-the-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query the deposit messages on the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-deposits"}},[t._v("#")]),t._v(" plugchaind q liquidity deposits")]),t._v(" "),s("p",[t._v("Query all deposit messages of the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposits "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-all-deposit-messages-of-the-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-all-deposit-messages-of-the-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query all deposit messages of the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposits "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-params"}},[t._v("#")]),t._v(" plugchaind q liquidity params")]),t._v(" "),s("p",[t._v("Query the values set as liquidity parameters")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity params "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-pool"}},[t._v("#")]),t._v(" plugchaind q liquidity pool")]),t._v(" "),s("p",[t._v("Query details of a liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Flags：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name, shorthand")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--pool-coin-denom")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td",[t._v("The denomination of the pool coin")])]),t._v(" "),s("tr",[s("td",[t._v("--reserve-acc")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td",[t._v("The Bech32 address of the reserve account")])])])]),t._v(" "),s("h3",{attrs:{id:"query-details-of-a-liquidity-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-details-of-a-liquidity-pool"}},[t._v("#")]),t._v(" Query details of a liquidity pool")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pool "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-pools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-pools"}},[t._v("#")]),t._v(" plugchaind q liquidity pools")]),t._v(" "),s("p",[t._v("Query for all liquidity pools")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pools "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-swap"}},[t._v("#")]),t._v(" plugchaind q liquidity swap")]),t._v(" "),s("p",[t._v("Query for the swap message on the batch of the liquidity pool specified pool-id and msg-index")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-for-the-swap-message-on-the-batch-of-the-liquidity-pool-specified-pool-id-and-msg-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-the-swap-message-on-the-batch-of-the-liquidity-pool-specified-pool-id-and-msg-index"}},[t._v("#")]),t._v(" Query for the swap message on the batch of the liquidity pool specified pool-id and msg-index")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swap "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-swaps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-swaps"}},[t._v("#")]),t._v(" plugchaind q liquidity swaps")]),t._v(" "),s("p",[t._v("Query all swap messages in the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swaps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-all-swap-messages-in-the-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-all-swap-messages-in-the-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query all swap messages in the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swaps "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-withdraw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-withdraw"}},[t._v("#")]),t._v(" plugchaind q liquidity withdraw")]),t._v(" "),s("p",[t._v("Query the withdraw messages in the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-the-withdraw-messages-in-the-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-the-withdraw-messages-in-the-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query the withdraw messages in the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-withdraws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-withdraws"}},[t._v("#")]),t._v(" plugchaind q liquidity withdraws")]),t._v(" "),s("p",[t._v("Query for all withdraw messages on the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraws "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"query-for-all-withdraw-messages-on-the-liquidity-pool-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-all-withdraw-messages-on-the-liquidity-pool-batch"}},[t._v("#")]),t._v(" Query for all withdraw messages on the liquidity pool batch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraws "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"blocks-of-processed-orders-and-then-inspect-end-block-events-by-querying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocks-of-processed-orders-and-then-inspect-end-block-events-by-querying"}},[t._v("#")]),t._v(" Blocks of processed orders and then inspect end_block_events by querying")]),t._v(" "),s("p",[t._v("http://localhost:26657/block_search?query=%22swap_transacted.msg_index=%271%27%20AND%20swap_transacted.pool_id=%271%27%22")]),t._v(" "),s("p",[t._v("http://localhost:26657/block_results?height=...")])])}),[],!1,null,null,null);a.default=i.exports}}]);