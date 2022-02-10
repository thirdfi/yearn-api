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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph,
                showOnGraph: true,
                tokenId: "ethereum"
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH",// series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
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
                chainlink: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "polygon",
                chainlink: "0xc907E116054Ad103354f2D350FD2514433D57F6f",
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
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
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
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
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
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
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
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    }
])