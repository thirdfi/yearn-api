// Mainnet
// symbol = strategy vault symbol
// series = array of graph lines
// db = price property name in db , btc_price or eth_price 
// network = chainlink contract network, kovan & ethereum = ethereum, polygon & mumbai = polygon, avalanche & fuji = avalanche , bsc test & bsc main = bsc
// chainlink = chainlink address
// decimals = decimals from chainlink address
// name = series label on the frontend graph

db.strategy_pnl_series.insertMany([
    {
        symbol: 'daoCDV',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "Citadel",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "ethereum", 
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph,
                showOnGraph: true,
                tokenId: "ethereum"
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin"
            }
        ]
    },
    {
        symbol: 'daoSTO',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "FAANG Stonk",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH",// series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoCDV2',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "Citadel V2",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoSTO2',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "DAO Stonks",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoMVF',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "Metaverse",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoTAS',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "DAO Golden Cross",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoCUB',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "Cuban",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoELO',
        series: [
            {
                db: 'lp', 
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "Elon",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoMPT',
        series: [
            {
                db: 'lp', 
                network: "polygon",
                chainlink: "", 
                decimals: 18, 
                name: "Money Printer",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "polygon",
                chainlink: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "polygon",
                chainlink: "0x007A22900a3B98143368Bd5906f8E17e9867581b",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoSAFU',
        series: [
            {
                db: 'lp', 
                network: "bsc",
                chainlink: "", 
                decimals: 18, 
                name: "DAO BSC Citadel",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "bsc",
                chainlink: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "bsc",
                chainlink: "0x5741306c21795FdCBb9b265Ea0255F499DFe515C",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoDEGEN',
        series: [
            {
                db: 'lp', 
                network: "bsc",
                chainlink: "", 
                decimals: 18, 
                name: "DAO BSC Spaceship",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "bsc",
                chainlink: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "bsc",
                chainlink: "0x5741306c21795FdCBb9b265Ea0255F499DFe515C",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'bnb2x',
        series: [
            {
                db: 'lp', 
                network: "bsc",
                chainlink: "", 
                decimals: 18, 
                name: "Leverage BNB",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "bsc",
                chainlink: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "bsc",
                chainlink: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            },
            {
                db: 'bnb', // refer to lp_token_price_usd in collection data
                network: "bsc",
                chainlink: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
                decimals: 8, // decimals from chainlink contract
                name: "BNB", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "binancecoin" 
            }
        ]
    },
    {
        symbol: 'daoAXA',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "DAO AXA",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoAXS',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "DAO AXS",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoA2S',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "DAO A2S",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'daoASA',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "DAO ASA",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    }
])