const { generateLineData } = require('../frontend/src/utils/generateLineData')

const uniqueCoinsUser = ['bitcoin', 'ethereum']

let bitcoin = {
    "time": 1680220800000,
    "coin": {
        "info": {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "asset_platform_id": null,
            "platforms": {
                "": ""
            },
            "detail_platforms": {
                "": {
                    "decimal_place": null,
                    "contract_address": ""
                }
            },
            "block_time_in_minutes": 10,
            "hashing_algorithm": "SHA-256",
            "categories": [
                "Cryptocurrency",
                "Layer 1 (L1)"
            ],
            "public_notice": null,
            "additional_notices": [],
            "localization": {
                "en": "Bitcoin",
                "de": "Bitcoin",
                "es": "Bitcoin",
                "fr": "Bitcoin",
                "it": "Bitcoin",
                "pl": "Bitcoin",
                "ro": "Bitcoin",
                "hu": "Bitcoin",
                "nl": "Bitcoin",
                "pt": "Bitcoin",
                "sv": "Bitcoin",
                "vi": "Bitcoin",
                "tr": "Bitcoin",
                "ru": "Биткоин",
                "ja": "ビットコイン",
                "zh": "比特币",
                "zh-tw": "比特幣",
                "ko": "비트코인",
                "ar": "بيتكوين",
                "th": "บิตคอยน์",
                "id": "Bitcoin",
                "cs": "Bitcoin",
                "da": "Bitcoin",
                "el": "Bitcoin",
                "hi": "Bitcoin",
                "no": "Bitcoin",
                "sk": "Bitcoin",
                "uk": "Bitcoin",
                "he": "Bitcoin",
                "fi": "Bitcoin",
                "bg": "Bitcoin",
                "hr": "Bitcoin",
                "lt": "Bitcoin",
                "sl": "Bitcoin"
            },
            "description": {
                "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "de": "",
                "es": "",
                "fr": "",
                "it": "",
                "pl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "ro": "",
                "hu": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "nl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "pt": "",
                "sv": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "vi": "",
                "tr": "",
                "ru": "",
                "ja": "",
                "zh": "",
                "zh-tw": "",
                "ko": "비트코인은 2009년 나카모토 사토시가 만든 디지털 통화로, 통화를 발행하고 관리하는 중앙 장치가 존재하지 않는 구조를 가지고 있다. 대신, 비트코인의 거래는 P2P 기반 분산 데이터베이스에 의해 이루어지며, 공개 키 암호 방식 기반으로 거래를 수행한다. 비트코인은 공개성을 가지고 있다. 비트코인은 지갑 파일의 형태로 저장되며, 이 지갑에는 각각의 고유 주소가 부여되며, 그 주소를 기반으로 비트코인의 거래가 이루어진다. 비트코인은 1998년 웨이따이가 사이버펑크 메일링 리스트에 올린 암호통화란 구상을 최초로 구현한 것 중의 하나이다.\r\n\r\n비트코인은 최초로 구현된 가상화폐입니다. 발행 및 유통을 관리하는 중앙권력이나 중간상인 없이, P2P 네트워크 기술을 이용하여 네트워크에 참여하는 사용자들이 주체적으로 화폐를 발행하고 이체내용을 공동으로 관리합니다. 이를 가능하게 한 블록체인 기술을 처음으로 코인에 도입한 것이 바로 비트코인입니다.\r\n\r\n비트코인을 사용하는 개인과 사업자의 수는 꾸준히 증가하고 있으며, 여기에는 식당, 아파트, 법률사무소, 온라인 서비스를 비롯한 소매상들이 포함됩니다. 비트코인은 새로운 사회 현상이지만 아주 빠르게 성장하고 있습니다. 이를 바탕으로 가치 증대는 물론, 매일 수백만 달러의 비트코인이 교환되고 있습니다. \r\n\r\n비트코인은 가상화폐 시장에서 현재 유통시가총액과 코인의 가치가 가장 크고, 거래량 또한 안정적입니다. 이더리움이 빠르게 추격하고 있지만 아직은 가장 견고한 가상화폐라고 볼 수 있습니다. \r\n\r\n코인 특징\r\n1. 중앙주체 없이 사용자들에 의해 거래내용이 관리될 수 있는 비트코인의 운영 시스템은 블록체인 기술에서 기인합니다. 블록체인은 쉽게 말해 다 같이 장부를 공유하고, 항상 서로의 컴퓨터에 있는 장부 파일을 비교함으로써 같은 내용만 인정하는 방식으로 운영됩니다. 따라서 전통적인 금융기관에서 장부에 대한 접근을 튼튼하게 방어하던 것과는 정반대의 작업을 통해 보안을 달성합니다. 장부를 해킹하려면 51%의 장부를 동시에 조작해야 하는데, 이는 사실상 불가능합니다. 왜냐하면, 이를 실행하기 위해서는 컴퓨팅 파워가 어마어마하게 소요되고, 이것이 가능한 슈퍼컴퓨터는 세상에 존재하지 않기 때문입니다. 또한, 장부의 자료들은 줄글로 기록되는 것이 아니라 암호화 해시 함수형태로 블록에 저장되고, 이 블록들은 서로 연결되어 있어서 더 강력한 보안을 제공합니다. \r\n\r\n2. 비트코인은 블록발행보상을 채굴자에게 지급하는 방식으로 신규 코인을 발행합니다. 블록발행보상은 매 21만 블록(약 4년)을 기준으로 발행량이 절반으로 줄어듭니다. 처음에는 50비트코인씩 발행이 되었고, 4년마다 계속 반으로 감소하고 있습니다. 코인의 총량이 2,100만 개에 도달하면 신규 발행은 종료되고, 이후에는 거래 수수료만을 통해 시스템이 지탱될 것입니다. \r\n\r\n핵심 가치\r\n(키워드: 통화로 사용될 수 있는 보편성 및 편의성)\r\n\r\n1. 다양한 알트코인들의 등장에 앞서 비트코인은 가상화폐 시장에서 독보적이었기 때문에, 현재 가장 보편적인 결제수단으로 사용됩니다. 실생활에서 이를 활용할 수 있는 가맹점이 알트코인들보다 압도적으로 많을 뿐만 아니라, 이 또한 증가하고 있습니다. 일례로 일본 업체들이 비트코인 결제 시스템을 도입하면서 곧 비트코인을 오프라인 점포 26만 곳에서 이용할 수 있게 될 것입니다. \r\n\r\n2. 여러 나라에서 비트코인을 정식 결제 수단으로 인정하면서, 실물화폐와 가상화폐를 거래할 때 더는 부가가치세가 부과되지 않게 된다고 합니다. 실제로 일본과 호주에서는 이미 비트코인을 합법적 결제 수단으로 인정하면서 제도권 안으로 들여오고 있고, 미국에서는 비트코인 ETF 승인 노력도 진행되고 있습니다. 각국에 비트코인을 기반으로 한 ATM 기계도 설치되었다고 합니다. ",
                "ar": "",
                "th": "",
                "id": "",
                "cs": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "da": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "el": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "hi": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "no": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "sk": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "uk": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "he": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "fi": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "bg": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "hr": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "lt": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                "sl": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>."
            },
            "links": {
                "homepage": [
                    "http://www.bitcoin.org",
                    "",
                    ""
                ],
                "blockchain_site": [
                    "https://blockchair.com/bitcoin/",
                    "https://btc.com/",
                    "https://btc.tokenview.io/",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "official_forum_url": [
                    "https://bitcointalk.org/",
                    "",
                    ""
                ],
                "chat_url": [
                    "",
                    "",
                    ""
                ],
                "announcement_url": [
                    "",
                    ""
                ],
                "twitter_screen_name": "bitcoin",
                "facebook_username": "bitcoins",
                "bitcointalk_thread_identifier": null,
                "telegram_channel_identifier": "",
                "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
                "repos_url": {
                    "github": [
                        "https://github.com/bitcoin/bitcoin",
                        "https://github.com/bitcoin/bips"
                    ],
                    "bitbucket": []
                }
            },
            "image": {
                "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
                "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
                "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            },
            "country_origin": "",
            "genesis_date": "2009-01-03",
            "sentiment_votes_up_percentage": 80.24,
            "sentiment_votes_down_percentage": 19.76,
            "market_cap_rank": 1,
            "coingecko_rank": 1,
            "coingecko_score": 83.151,
            "developer_score": 99.241,
            "community_score": 83.341,
            "liquidity_score": 100.011,
            "public_interest_score": 0.073,
            "market_data": {
                "current_price": {
                    "aed": 103045,
                    "ars": 5852328,
                    "aud": 41857,
                    "bch": 230.475,
                    "bdt": 3009689,
                    "bhd": 10579.41,
                    "bmd": 28058,
                    "bnb": 88.719,
                    "brl": 142935,
                    "btc": 1,
                    "cad": 37983,
                    "chf": 25653,
                    "clp": 22119706,
                    "cny": 192628,
                    "czk": 605407,
                    "dkk": 191687,
                    "dot": 4525,
                    "eos": 23749,
                    "eth": 15.613214,
                    "eur": 25734,
                    "gbp": 22637,
                    "hkd": 220254,
                    "huf": 9805670,
                    "idr": 420398020,
                    "ils": 101282,
                    "inr": 2305797,
                    "jpy": 3734317,
                    "krw": 36484214,
                    "kwd": 8604.16,
                    "lkr": 9112729,
                    "ltc": 315.268,
                    "mmk": 58929976,
                    "mxn": 507546,
                    "myr": 123693,
                    "ngn": 12916429,
                    "nok": 291336,
                    "nzd": 44747,
                    "php": 1523920,
                    "pkr": 7959969,
                    "pln": 120294,
                    "rub": 2163540,
                    "sar": 105332,
                    "sek": 290042,
                    "sgd": 37246,
                    "thb": 955370,
                    "try": 538469,
                    "twd": 855077,
                    "uah": 1035974,
                    "usd": 28058,
                    "vef": 2809.43,
                    "vnd": 658325850,
                    "xag": 1174.98,
                    "xau": 14.15,
                    "xdr": 20917,
                    "xlm": 254070,
                    "xrp": 51534,
                    "yfi": 3.213569,
                    "zar": 500479,
                    "bits": 999867,
                    "link": 3805,
                    "sats": 99986698
                },
                "total_value_locked": null,
                "mcap_to_tvl_ratio": null,
                "fdv_to_tvl_ratio": null,
                "roi": null,
                "ath": {
                    "aed": 253608,
                    "ars": 6913791,
                    "aud": 93482,
                    "bch": 233.951,
                    "bdt": 5922005,
                    "bhd": 26031,
                    "bmd": 69045,
                    "bnb": 143062,
                    "brl": 380542,
                    "btc": 1.003301,
                    "cad": 85656,
                    "chf": 62992,
                    "clp": 55165171,
                    "cny": 440948,
                    "czk": 1505245,
                    "dkk": 444134,
                    "dot": 5526,
                    "eos": 26798,
                    "eth": 624.203,
                    "eur": 59717,
                    "gbp": 51032,
                    "hkd": 537865,
                    "huf": 21673371,
                    "idr": 984115318,
                    "ils": 216131,
                    "inr": 5128383,
                    "jpy": 7828814,
                    "krw": 81339064,
                    "kwd": 20832,
                    "lkr": 14190616,
                    "ltc": 578.455,
                    "mmk": 126473151,
                    "mxn": 1409247,
                    "myr": 286777,
                    "ngn": 28379648,
                    "nok": 591777,
                    "nzd": 97030,
                    "php": 3454759,
                    "pkr": 11814869,
                    "pln": 275506,
                    "rub": 6075508,
                    "sar": 258938,
                    "sek": 596346,
                    "sgd": 91123,
                    "thb": 2258593,
                    "try": 850326,
                    "twd": 1914232,
                    "uah": 1815814,
                    "usd": 69045,
                    "vef": 8618768857,
                    "vnd": 1563347910,
                    "xag": 2815.08,
                    "xau": 37.72,
                    "xdr": 48913,
                    "xlm": 324982,
                    "xrp": 159288,
                    "yfi": 11.593182,
                    "zar": 1057029,
                    "bits": 1058236,
                    "link": 74906,
                    "sats": 105823579
                },
                "ath_change_percentage": {
                    "aed": -59.31165,
                    "ars": -15.23434,
                    "aud": -55.17757,
                    "bch": -1.37734,
                    "bdt": -49.10743,
                    "bhd": -59.30175,
                    "bmd": -59.3065,
                    "bnb": -99.93799,
                    "brl": -62.3885,
                    "btc": -0.32896,
                    "cad": -55.60249,
                    "chf": -59.24817,
                    "clp": -59.8472,
                    "cny": -56.2601,
                    "czk": -59.71052,
                    "dkk": -56.78113,
                    "dot": -18.23799,
                    "eos": -11.31069,
                    "eth": -97.49877,
                    "eur": -56.84692,
                    "gbp": -55.56868,
                    "hkd": -58.99398,
                    "huf": -54.68817,
                    "idr": -57.20444,
                    "ils": -53.04251,
                    "inr": -54.97387,
                    "jpy": -52.21462,
                    "krw": -55.10415,
                    "kwd": -58.64157,
                    "lkr": -35.69442,
                    "ltc": -45.57851,
                    "mmk": -53.34057,
                    "mxn": -63.92342,
                    "myr": -56.80816,
                    "ngn": -54.42392,
                    "nok": -50.71496,
                    "nzd": -53.85115,
                    "php": -55.80413,
                    "pkr": -32.53416,
                    "pln": -56.27501,
                    "rub": -64.31644,
                    "sar": -59.26768,
                    "sek": -51.25153,
                    "sgd": -59.06704,
                    "thb": -57.59352,
                    "try": -36.61858,
                    "twd": -55.25645,
                    "uah": -42.86804,
                    "usd": -59.3065,
                    "vef": -99.99997,
                    "vnd": -57.83163,
                    "xag": -58.20179,
                    "xau": -62.42755,
                    "xdr": -57.17811,
                    "xlm": -21.69189,
                    "xrp": -67.69373,
                    "yfi": -72.25553,
                    "zar": -52.6152,
                    "bits": -5.49378,
                    "link": -94.91625,
                    "sats": -5.49378
                },
                "ath_date": {
                    "aed": "2021-11-10T14:24:11.849Z",
                    "ars": "2021-11-10T14:24:11.849Z",
                    "aud": "2021-11-10T14:24:11.849Z",
                    "bch": "2023-03-30T09:40:17.296Z",
                    "bdt": "2021-11-10T14:24:11.849Z",
                    "bhd": "2021-11-10T14:24:11.849Z",
                    "bmd": "2021-11-10T14:24:11.849Z",
                    "bnb": "2017-10-19T00:00:00.000Z",
                    "brl": "2021-11-09T04:09:45.771Z",
                    "btc": "2019-10-15T16:00:56.136Z",
                    "cad": "2021-11-10T14:24:11.849Z",
                    "chf": "2021-11-10T17:30:22.767Z",
                    "clp": "2021-11-09T04:09:45.771Z",
                    "cny": "2021-11-10T14:24:11.849Z",
                    "czk": "2021-11-10T14:24:11.849Z",
                    "dkk": "2021-11-10T14:24:11.849Z",
                    "dot": "2020-12-27T11:42:47.567Z",
                    "eos": "2022-06-13T09:14:54.961Z",
                    "eth": "2015-10-20T00:00:00.000Z",
                    "eur": "2021-11-10T14:24:11.849Z",
                    "gbp": "2021-11-10T14:24:11.849Z",
                    "hkd": "2021-11-10T14:24:11.849Z",
                    "huf": "2021-11-10T16:54:53.781Z",
                    "idr": "2021-11-10T14:24:11.849Z",
                    "ils": "2021-10-20T14:54:17.702Z",
                    "inr": "2021-11-10T14:24:11.849Z",
                    "jpy": "2021-11-10T14:24:11.849Z",
                    "krw": "2021-11-10T14:24:11.849Z",
                    "kwd": "2021-11-10T14:24:11.849Z",
                    "lkr": "2022-03-29T12:14:23.745Z",
                    "ltc": "2022-06-13T07:48:18.897Z",
                    "mmk": "2021-10-20T14:54:17.702Z",
                    "mxn": "2021-11-10T17:30:22.767Z",
                    "myr": "2021-11-10T14:24:11.849Z",
                    "ngn": "2021-11-09T04:09:45.771Z",
                    "nok": "2021-11-10T17:30:22.767Z",
                    "nzd": "2021-11-10T14:24:11.849Z",
                    "php": "2021-11-10T14:24:11.849Z",
                    "pkr": "2021-11-10T14:24:11.849Z",
                    "pln": "2021-11-10T14:24:11.849Z",
                    "rub": "2022-03-07T16:43:46.826Z",
                    "sar": "2021-11-10T14:24:11.849Z",
                    "sek": "2021-11-10T17:30:22.767Z",
                    "sgd": "2021-11-09T00:00:00.000Z",
                    "thb": "2021-11-10T14:24:11.849Z",
                    "try": "2021-12-20T16:44:25.022Z",
                    "twd": "2021-11-10T14:24:11.849Z",
                    "uah": "2021-04-14T06:52:46.198Z",
                    "usd": "2021-11-10T14:24:11.849Z",
                    "vef": "2021-01-03T12:04:17.372Z",
                    "vnd": "2021-11-10T14:24:11.849Z",
                    "xag": "2021-11-09T04:09:45.771Z",
                    "xau": "2021-10-20T14:54:17.702Z",
                    "xdr": "2021-11-10T14:24:11.849Z",
                    "xlm": "2023-03-21T10:20:18.157Z",
                    "xrp": "2021-01-03T07:54:40.240Z",
                    "yfi": "2020-07-18T00:00:00.000Z",
                    "zar": "2021-11-10T17:49:04.400Z",
                    "bits": "2021-05-19T16:00:11.072Z",
                    "link": "2017-12-12T00:00:00.000Z",
                    "sats": "2021-05-19T16:00:11.072Z"
                },
                "atl": {
                    "aed": 632.31,
                    "ars": 1478.98,
                    "aud": 72.61,
                    "bch": 3.513889,
                    "bdt": 9390.25,
                    "bhd": 45.91,
                    "bmd": 121.77,
                    "bnb": 52.17,
                    "brl": 149.66,
                    "btc": 0.99895134,
                    "cad": 69.81,
                    "chf": 63.26,
                    "clp": 107408,
                    "cny": 407.23,
                    "czk": 4101.56,
                    "dkk": 382.47,
                    "dot": 991.882,
                    "eos": 908.141,
                    "eth": 6.779735,
                    "eur": 51.3,
                    "gbp": 43.9,
                    "hkd": 514.37,
                    "huf": 46598,
                    "idr": 658780,
                    "ils": 672.18,
                    "inr": 3993.42,
                    "jpy": 6641.83,
                    "krw": 75594,
                    "kwd": 50.61,
                    "lkr": 22646,
                    "ltc": 20.707835,
                    "mmk": 117588,
                    "mxn": 859.32,
                    "myr": 211.18,
                    "ngn": 10932.64,
                    "nok": 1316.03,
                    "nzd": 84.85,
                    "php": 2880.5,
                    "pkr": 17315.84,
                    "pln": 220.11,
                    "rub": 2206.43,
                    "sar": 646.04,
                    "sek": 443.81,
                    "sgd": 84.47,
                    "thb": 5644.35,
                    "try": 392.91,
                    "twd": 1998.66,
                    "uah": 553.37,
                    "usd": 67.81,
                    "vef": 766.19,
                    "vnd": 3672339,
                    "xag": 3.37,
                    "xau": 0.0531,
                    "xdr": 44.39,
                    "xlm": 21608,
                    "xrp": 9908,
                    "yfi": 0.23958075,
                    "zar": 666.26,
                    "bits": 950993,
                    "link": 598.477,
                    "sats": 95099268
                },
                "atl_change_percentage": {
                    "aed": 16219.27144,
                    "ars": 396154.96565,
                    "aud": 57607.47479,
                    "bch": 6466.19292,
                    "bdt": 31995.6218,
                    "bhd": 22974.09796,
                    "bmd": 22973.6084,
                    "bnb": 70.05784,
                    "brl": 95536.10974,
                    "btc": 0.10498,
                    "cad": 54377.9538,
                    "chf": 40478.57365,
                    "clp": 20522.59838,
                    "cny": 47261.99428,
                    "czk": 14685.97494,
                    "dkk": 50087.17999,
                    "dot": 355.51752,
                    "eos": 2517.14227,
                    "eth": 130.28546,
                    "eur": 50134.80096,
                    "gbp": 51547.07912,
                    "hkd": 42778.65166,
                    "huf": 20975.13724,
                    "idr": 63829.94241,
                    "ils": 14998.50347,
                    "inr": 57722.93766,
                    "jpy": 56225.25503,
                    "krw": 48208.02022,
                    "kwd": 16923.264,
                    "lkr": 40195.14587,
                    "ltc": 1420.21696,
                    "mmk": 50085.11362,
                    "mxn": 59064.11565,
                    "myr": 58554.60431,
                    "ngn": 118209.28399,
                    "nok": 22061.99485,
                    "nzd": 52670.54004,
                    "php": 52906.75378,
                    "pkr": 45932.98916,
                    "pln": 54629.05352,
                    "rub": 98156.2215,
                    "sar": 16225.85503,
                    "sek": 65403.79195,
                    "sgd": 44059.02288,
                    "thb": 16869.00366,
                    "try": 137068.72443,
                    "twd": 42753.56844,
                    "uah": 187372.03143,
                    "usd": 41335.10883,
                    "vef": 267.18408,
                    "vnd": 17851.45262,
                    "xag": 34818.66006,
                    "xau": 26586.60501,
                    "xdr": 47084.06012,
                    "xlm": 1077.73018,
                    "xrp": 419.37955,
                    "yfi": 1242.53967,
                    "zar": 75076.02788,
                    "bits": 5.16365,
                    "link": 536.28978,
                    "sats": 5.16365
                },
                "atl_date": {
                    "aed": "2015-01-14T00:00:00.000Z",
                    "ars": "2015-01-14T00:00:00.000Z",
                    "aud": "2013-07-05T00:00:00.000Z",
                    "bch": "2017-08-02T00:00:00.000Z",
                    "bdt": "2013-09-08T00:00:00.000Z",
                    "bhd": "2013-09-08T00:00:00.000Z",
                    "bmd": "2013-09-08T00:00:00.000Z",
                    "bnb": "2022-11-27T02:35:06.345Z",
                    "brl": "2013-07-05T00:00:00.000Z",
                    "btc": "2019-10-21T00:00:00.000Z",
                    "cad": "2013-07-05T00:00:00.000Z",
                    "chf": "2013-07-05T00:00:00.000Z",
                    "clp": "2015-01-14T00:00:00.000Z",
                    "cny": "2013-07-05T00:00:00.000Z",
                    "czk": "2015-01-14T00:00:00.000Z",
                    "dkk": "2013-07-05T00:00:00.000Z",
                    "dot": "2021-05-19T11:04:48.978Z",
                    "eos": "2019-04-11T00:00:00.000Z",
                    "eth": "2017-06-12T00:00:00.000Z",
                    "eur": "2013-07-05T00:00:00.000Z",
                    "gbp": "2013-07-05T00:00:00.000Z",
                    "hkd": "2013-07-05T00:00:00.000Z",
                    "huf": "2015-01-14T00:00:00.000Z",
                    "idr": "2013-07-05T00:00:00.000Z",
                    "ils": "2015-01-14T00:00:00.000Z",
                    "inr": "2013-07-05T00:00:00.000Z",
                    "jpy": "2013-07-05T00:00:00.000Z",
                    "krw": "2013-07-05T00:00:00.000Z",
                    "kwd": "2015-01-14T00:00:00.000Z",
                    "lkr": "2015-01-14T00:00:00.000Z",
                    "ltc": "2013-11-28T00:00:00.000Z",
                    "mmk": "2013-09-08T00:00:00.000Z",
                    "mxn": "2013-07-05T00:00:00.000Z",
                    "myr": "2013-07-05T00:00:00.000Z",
                    "ngn": "2013-07-06T00:00:00.000Z",
                    "nok": "2015-01-14T00:00:00.000Z",
                    "nzd": "2013-07-05T00:00:00.000Z",
                    "php": "2013-07-05T00:00:00.000Z",
                    "pkr": "2015-01-14T00:00:00.000Z",
                    "pln": "2013-07-05T00:00:00.000Z",
                    "rub": "2013-07-05T00:00:00.000Z",
                    "sar": "2015-01-14T00:00:00.000Z",
                    "sek": "2013-07-05T00:00:00.000Z",
                    "sgd": "2013-07-05T00:00:00.000Z",
                    "thb": "2015-01-14T00:00:00.000Z",
                    "try": "2015-01-14T00:00:00.000Z",
                    "twd": "2013-07-05T00:00:00.000Z",
                    "uah": "2013-07-06T00:00:00.000Z",
                    "usd": "2013-07-06T00:00:00.000Z",
                    "vef": "2013-09-08T00:00:00.000Z",
                    "vnd": "2015-01-14T00:00:00.000Z",
                    "xag": "2013-07-05T00:00:00.000Z",
                    "xau": "2013-07-05T00:00:00.000Z",
                    "xdr": "2013-07-05T00:00:00.000Z",
                    "xlm": "2018-11-20T00:00:00.000Z",
                    "xrp": "2018-12-25T00:00:00.000Z",
                    "yfi": "2020-09-12T20:09:36.122Z",
                    "zar": "2013-07-05T00:00:00.000Z",
                    "bits": "2021-05-19T13:14:13.071Z",
                    "link": "2020-08-16T08:13:13.338Z",
                    "sats": "2021-05-19T13:14:13.071Z"
                },
                "market_cap": {
                    "aed": 1992320730092,
                    "ars": 113153620956815,
                    "aud": 809329998245,
                    "bch": 4456591575,
                    "bdt": 58190696081111,
                    "bhd": 204547051207,
                    "bmd": 542483102572,
                    "bnb": 1715424941,
                    "brl": 2763572211917,
                    "btc": 19333106,
                    "cad": 734531885579,
                    "chf": 495825758369,
                    "clp": 427672405678150,
                    "cny": 3723441271126,
                    "czk": 11708304848682,
                    "dkk": 3706209295373,
                    "dot": 87472981320,
                    "eos": 459007075483,
                    "eth": 301845290,
                    "eur": 497535665109,
                    "gbp": 437771386665,
                    "hkd": 4258481505531,
                    "huf": 189635209500180,
                    "idr": 8128898023087526,
                    "ils": 1959186404670,
                    "inr": 44577186236330,
                    "jpy": 72193199222886,
                    "krw": 705252065345517,
                    "kwd": 166356783269,
                    "lkr": 176189624757317,
                    "ltc": 6093474098,
                    "mmk": 1139378844925878,
                    "mxn": 9810752661711,
                    "myr": 2391536757690,
                    "ngn": 249732096269188,
                    "nok": 5634313588197,
                    "nzd": 865798691841,
                    "php": 29464698474667,
                    "pkr": 153901637050295,
                    "pln": 2325979302194,
                    "rub": 41830870954389,
                    "sar": 2036533645435,
                    "sek": 5611918258274,
                    "sgd": 720243423140,
                    "thb": 18468294743974,
                    "try": 10409329059572,
                    "twd": 16533149562960,
                    "uah": 20029994557176,
                    "usd": 542483102572,
                    "vef": 54318833061,
                    "vnd": 12728370071237048,
                    "xag": 22737045455,
                    "xau": 273585078,
                    "xdr": 404412473238,
                    "xlm": 4912048528645,
                    "xrp": 996493821542,
                    "yfi": 62150920,
                    "zar": 9672533392007,
                    "bits": 19329448055342,
                    "link": 73589270284,
                    "sats": 1932944805534200
                },
                "market_cap_rank": 1,
                "fully_diluted_valuation": {
                    "aed": 2164097963976,
                    "ars": 122909688701501,
                    "aud": 879110162802,
                    "bch": 4840837425,
                    "bdt": 63207878635918,
                    "bhd": 222183030256,
                    "bmd": 589255816113,
                    "bnb": 1863328312,
                    "brl": 3001846493278,
                    "btc": 21000000,
                    "cad": 797862981621,
                    "chf": 538575691136,
                    "clp": 464546178934784,
                    "cny": 4044475145051,
                    "czk": 12717791017249,
                    "dkk": 4025757434053,
                    "dot": 95014872815,
                    "eos": 498582513598,
                    "eth": 327870291,
                    "eur": 540433025469,
                    "gbp": 475515890719,
                    "hkd": 4625646371367,
                    "huf": 205985494493424,
                    "idr": 8829768919946854,
                    "ils": 2128106807983,
                    "inr": 48420616478435,
                    "jpy": 78417672963703,
                    "krw": 766058664978915,
                    "kwd": 180700010057,
                    "lkr": 191380635884563,
                    "ltc": 6618851418,
                    "mmk": 1237615711797340,
                    "mxn": 10656632508813,
                    "myr": 2597734265332,
                    "ngn": 271263914947394,
                    "nok": 6120102240796,
                    "nzd": 940447568469,
                    "php": 32005135024243,
                    "pkr": 167170985254836,
                    "pln": 2526524467722,
                    "rub": 45437514801924,
                    "sar": 2212122902245,
                    "sek": 6095775992939,
                    "sgd": 782342572680,
                    "thb": 20060625003734,
                    "try": 11306817965567,
                    "twd": 17958632245753,
                    "uah": 21756974057903,
                    "usd": 589255816113,
                    "vef": 59002184867,
                    "vnd": 13825805925647850,
                    "xag": 24697425988,
                    "xau": 297173493,
                    "xdr": 439280782819,
                    "xlm": 5335563726881,
                    "xrp": 1082411188992,
                    "yfi": 67509551,
                    "zar": 10506496019426,
                    "bits": 20996026668564,
                    "link": 79934112810,
                    "sats": 2099602666856438
                },
                "total_volume": {
                    "aed": 69955730156,
                    "ars": 3973055063369,
                    "aud": 28416225422,
                    "bch": 156466081,
                    "bdt": 2043231579703,
                    "bhd": 7182196171,
                    "bmd": 19048038282,
                    "bnb": 60229894,
                    "brl": 97036421422,
                    "btc": 678794,
                    "cad": 25786300873,
                    "chf": 17415183297,
                    "clp": 15016726451101,
                    "cny": 130772402024,
                    "czk": 411001483967,
                    "dkk": 130133340339,
                    "dot": 3071930838,
                    "eos": 16122508565,
                    "eth": 10599570,
                    "eur": 17470098791,
                    "gbp": 15368052526,
                    "hkd": 149526719556,
                    "huf": 6656918076281,
                    "idr": 285401721103625,
                    "ils": 68758846670,
                    "inr": 1565369747994,
                    "jpy": 2535170083136,
                    "krw": 24768569235109,
                    "kwd": 5841233324,
                    "lkr": 6186490789153,
                    "ltc": 214030360,
                    "mmk": 40006650443797,
                    "mxn": 344565240797,
                    "myr": 83973276768,
                    "ngn": 8768764423292,
                    "nok": 197783781662,
                    "nzd": 30377830501,
                    "php": 1034565589154,
                    "pkr": 5403899698173,
                    "pln": 81665930747,
                    "rub": 1468794193858,
                    "sar": 71508164324,
                    "sek": 196904886128,
                    "sgd": 25286004147,
                    "thb": 648585703515,
                    "try": 365558045691,
                    "twd": 580498471627,
                    "uah": 703306888845,
                    "usd": 19048038282,
                    "vef": 1907280073,
                    "vnd": 446927248497746,
                    "xag": 797673366,
                    "xau": 9603640,
                    "xdr": 14200007771,
                    "xlm": 172484037974,
                    "xrp": 34985545235,
                    "yfi": 2181642,
                    "zar": 339767306626,
                    "bits": 678794247688,
                    "link": 2582924878,
                    "sats": 67879424768762
                },
                "high_24h": {
                    "aed": 105817,
                    "ars": 6001443,
                    "aud": 42928,
                    "bch": 233.951,
                    "bdt": 3081580,
                    "bhd": 10865.36,
                    "bmd": 28812,
                    "bnb": 91.569,
                    "brl": 147997,
                    "btc": 1,
                    "cad": 39020,
                    "chf": 26429,
                    "clp": 22822940,
                    "cny": 198181,
                    "czk": 624372,
                    "dkk": 197853,
                    "dot": 4666,
                    "eos": 24974,
                    "eth": 15.933329,
                    "eur": 26564,
                    "gbp": 23342,
                    "hkd": 226174,
                    "huf": 10114184,
                    "idr": 433395843,
                    "ils": 103228,
                    "inr": 2367749,
                    "jpy": 3813065,
                    "krw": 37406406,
                    "kwd": 8838.05,
                    "lkr": 9357821,
                    "ltc": 319.202,
                    "mmk": 60492013,
                    "mxn": 520611,
                    "myr": 127294,
                    "ngn": 13262960,
                    "nok": 300048,
                    "nzd": 46142,
                    "php": 1567730,
                    "pkr": 8166032,
                    "pln": 124559,
                    "rub": 2222315,
                    "sar": 108164,
                    "sek": 300477,
                    "sgd": 38262,
                    "thb": 987115,
                    "try": 551978,
                    "twd": 877959,
                    "uah": 1063837,
                    "usd": 28812,
                    "vef": 2884.99,
                    "vnd": 676666917,
                    "xag": 1220.17,
                    "xau": 14.65,
                    "xdr": 21472,
                    "xlm": 278559,
                    "xrp": 53916,
                    "yfi": 3.25537,
                    "zar": 521763,
                    "bits": 1002712,
                    "link": 3913,
                    "sats": 100271202
                },
                "low_24h": {
                    "aed": 102103,
                    "ars": 5798653,
                    "aud": 41496,
                    "bch": 230.375,
                    "bdt": 2982169,
                    "bhd": 10480.89,
                    "bmd": 27801,
                    "bnb": 88.261,
                    "brl": 142055,
                    "btc": 1,
                    "cad": 37642,
                    "chf": 25406,
                    "clp": 21961190,
                    "cny": 191042,
                    "czk": 599871,
                    "dkk": 190020,
                    "dot": 4510,
                    "eos": 23423,
                    "eth": 15.596104,
                    "eur": 25509,
                    "gbp": 22451,
                    "hkd": 218237,
                    "huf": 9680863,
                    "idr": 417934822,
                    "ils": 99796,
                    "inr": 2283231,
                    "jpy": 3681065,
                    "krw": 36057570,
                    "kwd": 8522.9,
                    "lkr": 9029402,
                    "ltc": 312.707,
                    "mmk": 58391120,
                    "mxn": 503098,
                    "myr": 122951,
                    "ngn": 12830293,
                    "nok": 289409,
                    "nzd": 44471,
                    "php": 1511723,
                    "pkr": 7882637,
                    "pln": 119259,
                    "rub": 2148344,
                    "sar": 104363,
                    "sek": 288491,
                    "sgd": 36918,
                    "thb": 948580,
                    "try": 532978,
                    "twd": 847169,
                    "uah": 1026501,
                    "usd": 27801,
                    "vef": 2783.74,
                    "vnd": 652765698,
                    "xag": 1168.36,
                    "xau": 14.04,
                    "xdr": 20725,
                    "xlm": 249963,
                    "xrp": 51232,
                    "yfi": 3.190666,
                    "zar": 495905,
                    "bits": 998190,
                    "link": 3798,
                    "sats": 99819017
                },
                "price_change_24h": -566.8036890282,
                "price_change_percentage_24h": -1.98012,
                "price_change_percentage_7d": -1.41213,
                "price_change_percentage_14d": 11.51203,
                "price_change_percentage_30d": 21.17118,
                "price_change_percentage_60d": 17.90269,
                "price_change_percentage_200d": 29.06209,
                "price_change_percentage_1y": -40.38283,
                "market_cap_change_24h": -10918761927.894,
                "market_cap_change_percentage_24h": -1.97303,
                "price_change_24h_in_currency": {
                    "aed": -2081.7835175561195,
                    "ars": -110816.30751840211,
                    "aud": -822.6401680297859,
                    "bch": -2.5637857907160253,
                    "bdt": -48322.90214476781,
                    "bhd": -214.20391762140753,
                    "bmd": -566.8036890281255,
                    "bnb": -2.8144376223315817,
                    "brl": -4066.80360697172,
                    "btc": 0,
                    "cad": -802.7770019936506,
                    "chf": -620.090705221377,
                    "clp": -554451.9582056887,
                    "cny": -4286.354214628926,
                    "czk": -16700.550768377725,
                    "dkk": -5208.201566889329,
                    "dot": -126.61433790138744,
                    "eos": -1051.31230116784,
                    "eth": -0.3201153712277076,
                    "eur": -702.875682590915,
                    "gbp": -579.4986805500193,
                    "hkd": -4448.538883301662,
                    "huf": -246183.55165024474,
                    "idr": -10403612.054156363,
                    "ils": -1275.1634639569675,
                    "inr": -47278.255253626034,
                    "jpy": -52458.017883447,
                    "krw": -703405.54981675,
                    "kwd": -175.5037400113215,
                    "lkr": -184088.55281829461,
                    "ltc": -2.1173904415779248,
                    "mmk": -1167692.026948303,
                    "mxn": -10050.692660988716,
                    "myr": -2770.6882366865175,
                    "ngn": -260069.33874849044,
                    "nok": -7573.499485825887,
                    "nzd": -1127.6693533190555,
                    "php": -33275.46419231128,
                    "pkr": -152829.6719660638,
                    "pln": -3639.5727620692487,
                    "rub": -43706.231327349786,
                    "sar": -2156.6891088185366,
                    "sek": -8483.45852096309,
                    "sgd": -789.2352616445714,
                    "thb": -25797.46112810471,
                    "try": -9908.082133741584,
                    "twd": -17081.89735345554,
                    "uah": -20927.97868243407,
                    "usd": -566.8036890281255,
                    "vef": -56.754053382389884,
                    "vnd": -13614324.845698595,
                    "xag": -38.2922053525665,
                    "xau": -0.3888198234060294,
                    "xdr": -415.0434230499195,
                    "xlm": -24489.58480868381,
                    "xrp": -1577.4463616436988,
                    "yfi": -0.03754994107985033,
                    "zar": -18197.30647333956,
                    "bits": -91.24589595221914,
                    "link": -60.17032612560388,
                    "sats": -9124.589595228434
                },
                "price_change_percentage_1h_in_currency": {
                    "aed": 0.00475,
                    "ars": 0.01405,
                    "aud": 0.07907,
                    "bch": -0.33152,
                    "bdt": 0.01306,
                    "bhd": 0.01677,
                    "bmd": 0.01306,
                    "bnb": -0.16768,
                    "brl": 0.00324,
                    "btc": 0,
                    "cad": 0.05186,
                    "chf": -0.05996,
                    "clp": 0.01306,
                    "cny": -0.02044,
                    "czk": -0.18492,
                    "dkk": -0.09767,
                    "dot": -0.40737,
                    "eos": -0.00335,
                    "eth": 0.00547,
                    "eur": -0.09925,
                    "gbp": -0.10877,
                    "hkd": 0.01344,
                    "huf": 0.19403,
                    "idr": 0.05557,
                    "ils": 0.0764,
                    "inr": -0.03026,
                    "jpy": 0.15648,
                    "krw": 0.0002,
                    "kwd": 0.00849,
                    "lkr": 0.01306,
                    "ltc": 0.44289,
                    "mmk": 0.01306,
                    "mxn": -0.07244,
                    "myr": 0.01079,
                    "ngn": 0.01306,
                    "nok": -0.30292,
                    "nzd": 0.16178,
                    "php": -0.02745,
                    "pkr": 0.01306,
                    "pln": -0.06748,
                    "rub": 0.02472,
                    "sar": 0.02622,
                    "sek": -0.37008,
                    "sgd": -0.04823,
                    "thb": -0.1043,
                    "try": 0.04264,
                    "twd": 0.03176,
                    "uah": 0.01306,
                    "usd": 0.01306,
                    "vef": 0.01306,
                    "vnd": 0.01306,
                    "xag": -0.04139,
                    "xau": -0.13946,
                    "xdr": 0.01306,
                    "xlm": 0.48768,
                    "xrp": -0.1854,
                    "yfi": -0.07407,
                    "zar": -0.05227,
                    "bits": -0.02279,
                    "link": -0.67846,
                    "sats": -0.02279
                },
                "price_change_percentage_24h_in_currency": {
                    "aed": -1.98026,
                    "ars": -1.85835,
                    "aud": -1.92747,
                    "bch": -1.10015,
                    "bdt": -1.58021,
                    "bhd": -1.98454,
                    "bmd": -1.98012,
                    "bnb": -3.07477,
                    "brl": -2.7665,
                    "btc": 0,
                    "cad": -2.06975,
                    "chf": -2.36021,
                    "clp": -2.4453,
                    "cny": -2.17676,
                    "czk": -2.68451,
                    "dkk": -2.64516,
                    "dot": -2.72196,
                    "eos": -4.23919,
                    "eth": -2.00909,
                    "eur": -2.65874,
                    "gbp": -2.49604,
                    "hkd": -1.97975,
                    "huf": -2.44914,
                    "idr": -2.41494,
                    "ils": -1.24337,
                    "inr": -2.00921,
                    "jpy": -1.3853,
                    "krw": -1.8915,
                    "kwd": -1.99898,
                    "lkr": -1.98012,
                    "ltc": -0.66714,
                    "mmk": -1.94299,
                    "mxn": -1.9418,
                    "myr": -2.1909,
                    "ngn": -1.97374,
                    "nok": -2.53371,
                    "nzd": -2.45817,
                    "php": -2.13688,
                    "pkr": -1.88381,
                    "pln": -2.93671,
                    "rub": -1.98012,
                    "sar": -2.00644,
                    "sek": -2.84179,
                    "sgd": -2.07499,
                    "thb": -2.62926,
                    "try": -1.8068,
                    "twd": -1.95858,
                    "uah": -1.98012,
                    "usd": -1.98012,
                    "vef": -1.98012,
                    "vnd": -2.02612,
                    "xag": -3.15612,
                    "xau": -2.67505,
                    "xdr": -1.94566,
                    "xlm": -8.79151,
                    "xrp": -2.97008,
                    "yfi": -1.15499,
                    "zar": -3.50841,
                    "bits": -0.00912,
                    "link": -1.55687,
                    "sats": -0.00912
                },
                "price_change_percentage_7d_in_currency": {
                    "aed": -1.4073,
                    "ars": -0.07179,
                    "aud": -1.72366,
                    "bch": 4.56614,
                    "bdt": 0.73551,
                    "bhd": -1.45081,
                    "bmd": -1.41213,
                    "bnb": 3.15525,
                    "brl": -5.20984,
                    "btc": 0,
                    "cad": -2.73855,
                    "chf": -1.69191,
                    "clp": -3.725,
                    "cny": -0.75439,
                    "czk": -2.44277,
                    "dkk": -2.04373,
                    "dot": 0.98067,
                    "eos": -2.69852,
                    "eth": 0.12001,
                    "eur": -2.03899,
                    "gbp": -2.32184,
                    "hkd": -1.40673,
                    "huf": -2.73733,
                    "idr": -2.07348,
                    "ils": 0.26965,
                    "inr": -1.51454,
                    "jpy": 0.32622,
                    "krw": -0.36807,
                    "kwd": -1.20336,
                    "lkr": 0.17332,
                    "ltc": 4.19253,
                    "mmk": -1.29029,
                    "mxn": -4.04799,
                    "myr": -1.62412,
                    "ngn": -1.37106,
                    "nok": -1.61878,
                    "nzd": -1.78319,
                    "php": -1.36946,
                    "pkr": -1.01061,
                    "pln": -2.21562,
                    "rub": 0.04377,
                    "sar": -1.46851,
                    "sek": -1.40426,
                    "sgd": -1.44131,
                    "thb": -1.42077,
                    "try": -0.75135,
                    "twd": -1.01425,
                    "uah": -0.84279,
                    "usd": -1.41213,
                    "vef": -1.41213,
                    "vnd": -1.5625,
                    "xag": -4.8126,
                    "xau": -0.98597,
                    "xdr": -1.79508,
                    "xlm": -16.92183,
                    "xrp": -18.81311,
                    "yfi": -1.31906,
                    "zar": -2.86426,
                    "bits": -0.0228,
                    "link": 2.38886,
                    "sats": -0.0228
                },
                "price_change_percentage_14d_in_currency": {
                    "aed": 11.50581,
                    "ars": 14.60994,
                    "aud": 10.86874,
                    "bch": 16.42199,
                    "bdt": 11.49023,
                    "bhd": 11.51174,
                    "bmd": 11.51203,
                    "bnb": 16.89976,
                    "brl": 8.57925,
                    "btc": 0,
                    "cad": 10.05263,
                    "chf": 9.73697,
                    "clp": 6.37317,
                    "cny": 10.97698,
                    "czk": 6.46018,
                    "dkk": 8.62387,
                    "dot": 10.23713,
                    "eos": 2.68969,
                    "eth": 4.23543,
                    "eur": 8.56934,
                    "gbp": 8.97673,
                    "hkd": 11.51814,
                    "huf": 4.82586,
                    "idr": 8.29355,
                    "ils": 9.84897,
                    "inr": 10.91448,
                    "jpy": 11.28321,
                    "krw": 11.37296,
                    "kwd": 11.35371,
                    "lkr": 5.85309,
                    "ltc": -0.4792,
                    "mmk": 11.48661,
                    "mxn": 7.47991,
                    "myr": 9.1476,
                    "ngn": 11.50025,
                    "nok": 7.70655,
                    "nzd": 10.3361,
                    "php": 10.91673,
                    "pkr": 12.06044,
                    "pln": 8.0185,
                    "rub": 12.38491,
                    "sar": 11.42231,
                    "sek": 9.75369,
                    "sgd": 9.9742,
                    "thb": 10.28129,
                    "try": 12.589,
                    "twd": 11.18914,
                    "uah": 11.9887,
                    "usd": 11.51203,
                    "vef": 11.51203,
                    "vnd": 10.97563,
                    "xag": 1.59343,
                    "xau": 8.04054,
                    "xdr": 10.28168,
                    "xlm": -14.03484,
                    "xrp": -24.55336,
                    "yfi": 6.38892,
                    "zar": 8.20102,
                    "bits": -0.03834,
                    "link": 1.4174,
                    "sats": -0.03834
                },
                "price_change_percentage_30d_in_currency": {
                    "aed": 21.16244,
                    "ars": 28.19288,
                    "aud": 21.69071,
                    "bch": 30.99977,
                    "bdt": 24.4017,
                    "bhd": 21.1805,
                    "bmd": 21.17118,
                    "bnb": 15.53893,
                    "brl": 17.86721,
                    "btc": 0,
                    "cad": 20.21294,
                    "chf": 17.59326,
                    "clp": 15.5872,
                    "cny": 19.98278,
                    "czk": 17.66507,
                    "dkk": 17.64703,
                    "dot": 24.04301,
                    "eos": 17.83947,
                    "eth": 8.32285,
                    "eur": 17.55032,
                    "gbp": 17.6343,
                    "hkd": 21.18268,
                    "huf": 18.44311,
                    "idr": 19.06521,
                    "ils": 19.61394,
                    "inr": 20.50305,
                    "jpy": 18.32732,
                    "krw": 19.18333,
                    "kwd": 21.03147,
                    "lkr": 8.73476,
                    "ltc": 27.61552,
                    "mmk": 21.20347,
                    "mxn": 19.74384,
                    "myr": 19.03803,
                    "ngn": 21.22905,
                    "nok": 21.12596,
                    "nzd": 19.50066,
                    "php": 18.66626,
                    "pkr": 31.45747,
                    "pln": 16.72714,
                    "rub": 24.50225,
                    "sar": 21.24356,
                    "sek": 19.65529,
                    "sgd": 19.30223,
                    "thb": 17.1459,
                    "try": 23.1448,
                    "twd": 20.22635,
                    "uah": 21.15962,
                    "usd": 21.17118,
                    "vef": 21.17118,
                    "vnd": 19.6322,
                    "xag": 5.99429,
                    "xau": 11.57557,
                    "xdr": 19.82805,
                    "xlm": -4.25921,
                    "xrp": -15.78372,
                    "yfi": 26.59556,
                    "zar": 17.84856,
                    "bits": -0.01571,
                    "link": 18.19826,
                    "sats": -0.01571
                },
                "price_change_percentage_60d_in_currency": {
                    "aed": 17.89065,
                    "ars": 32.51992,
                    "aud": 25.00211,
                    "bch": 32.68457,
                    "bdt": 19.25361,
                    "bhd": 17.95086,
                    "bmd": 17.90269,
                    "bnb": 18.33945,
                    "brl": 17.56287,
                    "btc": 0,
                    "cad": 19.9739,
                    "chf": 17.05983,
                    "clp": 15.4381,
                    "cny": 19.31796,
                    "czk": 16.18023,
                    "dkk": 17.73052,
                    "dot": 25.89074,
                    "eos": 11.38404,
                    "eth": 8.06712,
                    "eur": 17.55853,
                    "gbp": 17.93397,
                    "hkd": 18.22381,
                    "huf": 14.68843,
                    "idr": 17.92854,
                    "ils": 23.97332,
                    "inr": 18.86704,
                    "jpy": 20.8559,
                    "krw": 24.63903,
                    "kwd": 18.45468,
                    "lkr": 5.1484,
                    "ltc": 25.96515,
                    "mmk": 17.86165,
                    "mxn": 13.59595,
                    "myr": 22.47267,
                    "ngn": 18.08282,
                    "nok": 24.10728,
                    "nzd": 22.06513,
                    "php": 17.56033,
                    "pkr": 32.17291,
                    "pln": 16.62466,
                    "rub": 28.54677,
                    "sar": 17.90884,
                    "sek": 18.17575,
                    "sgd": 19.25843,
                    "thb": 22.48246,
                    "try": 20.25667,
                    "twd": 19.02667,
                    "uah": 18.41503,
                    "usd": 17.90269,
                    "vef": 17.90269,
                    "vnd": 17.88885,
                    "xag": 16.71031,
                    "xau": 14.61549,
                    "xdr": 18.82654,
                    "xlm": 1.02993,
                    "xrp": -10.13967,
                    "yfi": 5.21911,
                    "zar": 22.20488,
                    "bits": -0.08413,
                    "link": 18.17132,
                    "sats": -0.08413
                },
                "price_change_percentage_200d_in_currency": {
                    "aed": 29.04698,
                    "ars": 90.75184,
                    "aud": 31.84776,
                    "bch": 38.67882,
                    "bdt": 46.82471,
                    "bhd": 29.88468,
                    "bmd": 29.06209,
                    "bnb": 20.27479,
                    "brl": 27.7208,
                    "btc": 0,
                    "cad": 34.17465,
                    "chf": 22.97506,
                    "clp": 12.36857,
                    "cny": 27.92361,
                    "czk": 14.27342,
                    "dkk": 19.45057,
                    "dot": 59.97165,
                    "eos": 86.62483,
                    "eth": 26.49642,
                    "eur": 19.24922,
                    "gbp": 21.03706,
                    "hkd": 29.0789,
                    "huf": 14.64451,
                    "idr": 30.39502,
                    "ils": 36.94073,
                    "inr": 33.15165,
                    "jpy": 20.51599,
                    "krw": 21.60486,
                    "kwd": 28.76061,
                    "lkr": 17.34401,
                    "ltc": -9.80247,
                    "mmk": 30.08614,
                    "mxn": 17.48389,
                    "myr": 26.49405,
                    "ngn": 39.05756,
                    "nok": 35.76036,
                    "nzd": 25.83418,
                    "php": 23.36876,
                    "pkr": 61.7986,
                    "pln": 18.73398,
                    "rub": 59.94822,
                    "sar": 28.93831,
                    "sek": 26.11294,
                    "sgd": 22.53889,
                    "thb": 21.06237,
                    "try": 35.91453,
                    "twd": 27.43339,
                    "uah": 30.03467,
                    "usd": 29.06209,
                    "vef": 29.06209,
                    "vnd": 28.72897,
                    "xag": 2.47331,
                    "xau": 11.83001,
                    "xdr": 30.31669,
                    "xlm": 33.75107,
                    "xrp": -15.9757,
                    "yfi": 49.97111,
                    "zar": 33.38109,
                    "bits": -0.08349,
                    "link": 40.06737,
                    "sats": -0.08349
                },
                "price_change_percentage_1y_in_currency": {
                    "aed": -40.39103,
                    "ars": 12.13269,
                    "aud": -33.32582,
                    "bch": 85.89578,
                    "bdt": -25.83221,
                    "bhd": -40.37856,
                    "bmd": -40.38283,
                    "bnb": -16.53013,
                    "brl": -36.34563,
                    "btc": 0,
                    "cad": -35.36475,
                    "chf": -40.9609,
                    "clp": -40.30875,
                    "cny": -35.52063,
                    "czk": -41.24386,
                    "dkk": -38.88635,
                    "dot": 116.44268,
                    "eos": 48.37821,
                    "eth": 12.25576,
                    "eur": -38.97865,
                    "gbp": -36.8201,
                    "hkd": -40.20971,
                    "huf": -36.68931,
                    "idr": -37.63395,
                    "ils": -32.33153,
                    "inr": -35.38874,
                    "jpy": -35.01527,
                    "krw": -35.96125,
                    "kwd": -39.81525,
                    "lkr": -34.36236,
                    "ltc": -12.22357,
                    "mmk": -29.58019,
                    "mxn": -45.76822,
                    "myr": -37.49024,
                    "ngn": -34.0096,
                    "nok": -27.80589,
                    "nzd": -33.76669,
                    "php": -37.70648,
                    "pkr": -7.3536,
                    "pln": -38.56259,
                    "rub": -44.94515,
                    "sar": -40.34407,
                    "sek": -33.39737,
                    "sgd": -41.49841,
                    "thb": -39.0584,
                    "try": -21.9292,
                    "twd": -36.25266,
                    "uah": -25.50651,
                    "usd": -40.38283,
                    "vef": -40.38283,
                    "vnd": -38.79518,
                    "xag": -37.87875,
                    "xau": -41.88588,
                    "xdr": -38.07309,
                    "xlm": 26.76557,
                    "xrp": -5.76548,
                    "yfi": 64.14336,
                    "zar": -26.62259,
                    "bits": 0.00618,
                    "link": 39.17353,
                    "sats": 0.00618
                },
                "market_cap_change_24h_in_currency": {
                    "aed": -40102957471.90039,
                    "ars": -2123595598744.8438,
                    "aud": -15450732774.880615,
                    "bch": -49086336.862802505,
                    "bdt": -930015361313.8281,
                    "bhd": -4141345298.28302,
                    "bmd": -10918761927.894592,
                    "bnb": -54239656.83581352,
                    "brl": -78589083782.94385,
                    "btc": 950,
                    "cad": -15145018203.73767,
                    "chf": -11754431750.215698,
                    "clp": -10688279229794.562,
                    "cny": -82192670669.43701,
                    "czk": -309113815742.4199,
                    "dkk": -96461179438.24219,
                    "dot": -2450936671.5681458,
                    "eos": -20407716579.036377,
                    "eth": -6165686.310295701,
                    "eur": -13000244369.202026,
                    "gbp": -10819485110.5578,
                    "hkd": -85676091637.54883,
                    "huf": -4550308303792.125,
                    "idr": -197765639415934,
                    "ils": -18788073445.733887,
                    "inr": -901517338767.0781,
                    "jpy": -1024449994377,
                    "krw": -13100667565056.5,
                    "kwd": -3310694368.4983215,
                    "lkr": -3546235003022.3438,
                    "ltc": -46088786.50155449,
                    "mmk": -22492543902677.75,
                    "mxn": -190101705782.60156,
                    "myr": -53392679671.86279,
                    "ngn": -5009849997571.375,
                    "nok": -141108357931.82422,
                    "nzd": -20785959406.206787,
                    "php": -635659591701.1367,
                    "pkr": -2943519386368.5,
                    "pln": -66964670821.02051,
                    "rub": -897291984292.8906,
                    "sar": -41536841520.582275,
                    "sek": -161871152355.05762,
                    "sgd": -14820904410.263672,
                    "thb": -494185056883.4258,
                    "try": -191784815092.39258,
                    "twd": -321755683937.4199,
                    "uah": -403151251992.41797,
                    "usd": -10918761927.894592,
                    "vef": -1093295631.8400955,
                    "vnd": -262284740696862,
                    "xag": -696053677.2591705,
                    "xau": -7211027.758136392,
                    "xdr": -7994771028.554749,
                    "xlm": -475936931084.1592,
                    "xrp": -30714380092.263916,
                    "yfi": -688309.7323310897,
                    "zar": -344976711402.8887,
                    "bits": 624278713,
                    "link": -1115794564.2624817,
                    "sats": 62427871344
                },
                "market_cap_change_percentage_24h_in_currency": {
                    "aed": -1.97316,
                    "ars": -1.84216,
                    "aud": -1.87331,
                    "bch": -1.08943,
                    "bdt": -1.57308,
                    "bhd": -1.98446,
                    "bmd": -1.97303,
                    "bnb": -3.06497,
                    "brl": -2.76512,
                    "btc": 0.00491,
                    "cad": -2.02021,
                    "chf": -2.31578,
                    "clp": -2.43824,
                    "cny": -2.15976,
                    "czk": -2.57221,
                    "dkk": -2.53667,
                    "dot": -2.72557,
                    "eos": -4.2568,
                    "eth": -2.00177,
                    "eur": -2.54639,
                    "gbp": -2.41188,
                    "hkd": -1.97221,
                    "huf": -2.34328,
                    "idr": -2.37509,
                    "ils": -0.94986,
                    "inr": -1.98228,
                    "jpy": -1.39918,
                    "krw": -1.82371,
                    "kwd": -1.95128,
                    "lkr": -1.97303,
                    "ltc": -0.75069,
                    "mmk": -1.93589,
                    "mxn": -1.90085,
                    "myr": -2.18381,
                    "ngn": -1.96664,
                    "nok": -2.44326,
                    "nzd": -2.3445,
                    "php": -2.1118,
                    "pkr": -1.8767,
                    "pln": -2.79842,
                    "rub": -2.1,
                    "sar": -1.99882,
                    "sek": -2.80355,
                    "sgd": -2.01627,
                    "thb": -2.60612,
                    "try": -1.8091,
                    "twd": -1.90897,
                    "uah": -1.97303,
                    "usd": -1.97303,
                    "vef": -1.97303,
                    "vnd": -2.01903,
                    "xag": -2.97039,
                    "xau": -2.56807,
                    "xdr": -1.93856,
                    "xlm": -8.8333,
                    "xrp": -2.99008,
                    "yfi": -1.09535,
                    "zar": -3.44374,
                    "bits": 0.00323,
                    "link": -1.4936,
                    "sats": 0.00323
                },
                "total_supply": 21000000,
                "max_supply": 21000000,
                "circulating_supply": 19333106,
                "last_updated": "2023-03-31T07:11:05.487Z"
            },
            "community_data": {
                "facebook_likes": null,
                "twitter_followers": 5744392,
                "reddit_average_posts_48h": 0,
                "reddit_average_comments_48h": 0,
                "reddit_subscribers": 0,
                "reddit_accounts_active_48h": 0,
                "telegram_channel_user_count": null
            },
            "developer_data": {
                "forks": 33982,
                "stars": 68804,
                "subscribers": 3926,
                "total_issues": 7364,
                "closed_issues": 6994,
                "pull_requests_merged": 10561,
                "pull_request_contributors": 822,
                "code_additions_deletions_4_weeks": {
                    "additions": 4300,
                    "deletions": -2618
                },
                "commit_count_4_weeks": 211,
                "last_4_weeks_commit_activity_series": [
                    3,
                    4,
                    5,
                    4,
                    4,
                    4,
                    0,
                    0,
                    2,
                    8,
                    2,
                    1,
                    1,
                    0,
                    2,
                    1,
                    14,
                    4,
                    5,
                    5,
                    0,
                    4,
                    3,
                    2,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "public_interest_stats": {
                "alexa_rank": 9440,
                "bing_matches": null
            },
            "status_updates": [],
            "last_updated": "2023-03-31T07:11:05.487Z",
            "tickers": [
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 28087.95,
                    "volume": 79641.16036488135,
                    "converted_last": {
                        "btc": 1.000128,
                        "eth": 15.613205,
                        "usd": 28114
                    },
                    "converted_volume": {
                        "btc": 79651,
                        "eth": 1243454,
                        "usd": 2239020609
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:04:05+00:00",
                    "last_traded_at": "2023-03-31T07:04:05+00:00",
                    "last_fetch_at": "2023-03-31T07:04:05+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/BTC_USDT?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 28045.45,
                    "volume": 4969.26218,
                    "converted_last": {
                        "btc": 0.99861489,
                        "eth": 15.592003,
                        "usd": 28069
                    },
                    "converted_volume": {
                        "btc": 4962,
                        "eth": 77481,
                        "usd": 139484364
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010107,
                    "timestamp": "2023-03-31T07:07:20+00:00",
                    "last_traded_at": "2023-03-31T07:07:20+00:00",
                    "last_fetch_at": "2023-03-31T07:07:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 28035.37,
                    "volume": 17062.0647705,
                    "converted_last": {
                        "btc": 0.9981979,
                        "eth": 15.588111,
                        "usd": 28035
                    },
                    "converted_volume": {
                        "btc": 17031,
                        "eth": 265965,
                        "usd": 478341299
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.015957,
                    "timestamp": "2023-03-31T07:08:15+00:00",
                    "last_traded_at": "2023-03-31T07:08:15+00:00",
                    "last_fetch_at": "2023-03-31T07:08:15+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/BTC-USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 28055.3,
                    "volume": 9901.4524,
                    "converted_last": {
                        "btc": 0.9989425,
                        "eth": 15.597118,
                        "usd": 28079
                    },
                    "converted_volume": {
                        "btc": 9891,
                        "eth": 154434,
                        "usd": 278019317
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010071,
                    "timestamp": "2023-03-31T07:07:20+00:00",
                    "last_traded_at": "2023-03-31T07:07:20+00:00",
                    "last_fetch_at": "2023-03-31T07:07:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=BTC_USDC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 27993,
                    "volume": 1611.04875227,
                    "converted_last": {
                        "btc": 0.9974836,
                        "eth": 15.576506,
                        "usd": 27993
                    },
                    "converted_volume": {
                        "btc": 1607,
                        "eth": 25095,
                        "usd": 45098088
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.035727,
                    "timestamp": "2023-03-31T07:10:34+00:00",
                    "last_traded_at": "2023-03-31T07:10:34+00:00",
                    "last_fetch_at": "2023-03-31T07:10:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/BTCUSD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Dcoin",
                        "identifier": "dcoin",
                        "has_trading_incentive": false
                    },
                    "last": 27991.21,
                    "volume": 8835,
                    "converted_last": {
                        "btc": 0.99966072,
                        "eth": 15.610503,
                        "usd": 28054
                    },
                    "converted_volume": {
                        "btc": 8832,
                        "eth": 137919,
                        "usd": 247857955
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.018534,
                    "timestamp": "2023-03-31T07:10:54+00:00",
                    "last_traded_at": "2023-03-31T07:10:54+00:00",
                    "last_fetch_at": "2023-03-31T07:10:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.dcoin.com/currencyTrading/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "BTCEX",
                        "identifier": "btcex",
                        "has_trading_incentive": false
                    },
                    "last": 28046.307,
                    "volume": 2435.87267,
                    "converted_last": {
                        "btc": 0.9986454,
                        "eth": 15.5951,
                        "usd": 28048
                    },
                    "converted_volume": {
                        "btc": 2449,
                        "eth": 38250,
                        "usd": 68793093
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011795,
                    "timestamp": "2023-03-31T07:08:11+00:00",
                    "last_traded_at": "2023-03-31T07:08:11+00:00",
                    "last_fetch_at": "2023-03-31T07:08:11+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.btcex.com/spot?target=BTC-USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 28026.12947361,
                    "volume": 7352.73514276,
                    "converted_last": {
                        "btc": 0.99792694,
                        "eth": 15.58388,
                        "usd": 28028
                    },
                    "converted_volume": {
                        "btc": 7337,
                        "eth": 114584,
                        "usd": 206080694
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010035,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 28000.06,
                    "volume": 4931.074525,
                    "converted_last": {
                        "btc": 0.99997679,
                        "eth": 15.615439,
                        "usd": 28063
                    },
                    "converted_volume": {
                        "btc": 4975,
                        "eth": 77682,
                        "usd": 139605068
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010643,
                    "timestamp": "2023-03-31T07:10:07+00:00",
                    "last_traded_at": "2023-03-31T07:10:07+00:00",
                    "last_fetch_at": "2023-03-31T07:10:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/btc_usdt",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 28078.41,
                    "volume": 22630.50543061189,
                    "converted_last": {
                        "btc": 0.99911896,
                        "eth": 15.597722,
                        "usd": 28084
                    },
                    "converted_volume": {
                        "btc": 22611,
                        "eth": 352984,
                        "usd": 635551015
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:05:55+00:00",
                    "last_traded_at": "2023-03-31T07:05:55+00:00",
                    "last_fetch_at": "2023-03-31T07:05:55+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/BTC_BUSD?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "BTC",
                    "target": "TUSD",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 28086.15,
                    "volume": 24310.93742252381,
                    "converted_last": {
                        "btc": 1.000282,
                        "eth": 15.6156,
                        "usd": 28118
                    },
                    "converted_volume": {
                        "btc": 24318,
                        "eth": 379630,
                        "usd": 683579152
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.013355,
                    "timestamp": "2023-03-31T07:04:17+00:00",
                    "last_traded_at": "2023-03-31T07:04:17+00:00",
                    "last_fetch_at": "2023-03-31T07:04:17+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/BTC_TUSD?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "true-usd"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 28055.68,
                    "volume": 1158.06353,
                    "converted_last": {
                        "btc": 1.001963,
                        "eth": 15.646458,
                        "usd": 28119
                    },
                    "converted_volume": {
                        "btc": 1160,
                        "eth": 18120,
                        "usd": 32563256
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.019287,
                    "timestamp": "2023-03-31T07:10:54+00:00",
                    "last_traded_at": "2023-03-31T07:10:54+00:00",
                    "last_fetch_at": "2023-03-31T07:10:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "WhiteBIT",
                        "identifier": "whitebit",
                        "has_trading_incentive": false
                    },
                    "last": 28078.08,
                    "volume": 39.700115,
                    "converted_last": {
                        "btc": 0.99892257,
                        "eth": 15.596807,
                        "usd": 28078
                    },
                    "converted_volume": {
                        "btc": 39.657341,
                        "eth": 619.195,
                        "usd": 1114703
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.023372,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://whitebit.com/trade/BTC_USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "XRP",
                    "target": "BTC",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 0.00001933,
                    "volume": 22737115.5831,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 439.508,
                        "eth": 6863,
                        "usd": 12334198
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.257865,
                    "timestamp": "2023-03-31T07:10:35+00:00",
                    "last_traded_at": "2023-03-31T07:10:35+00:00",
                    "last_fetch_at": "2023-03-31T07:10:35+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/xrp_btc",
                    "token_info_url": null,
                    "coin_id": "ripple",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 28046.11843478,
                    "volume": 2012.14563153,
                    "converted_last": {
                        "btc": 0.99884995,
                        "eth": 15.598294,
                        "usd": 28054
                    },
                    "converted_volume": {
                        "btc": 2010,
                        "eth": 31386,
                        "usd": 56448096
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.100715,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "WOO X",
                        "identifier": "wootrade",
                        "has_trading_incentive": false
                    },
                    "last": 28049.73,
                    "volume": 1120.51248119,
                    "converted_last": {
                        "btc": 0.99876728,
                        "eth": 15.594382,
                        "usd": 28074
                    },
                    "converted_volume": {
                        "btc": 1119,
                        "eth": 17474,
                        "usd": 31456948
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.020321,
                    "timestamp": "2023-03-31T07:07:32+00:00",
                    "last_traded_at": "2023-03-31T07:07:32+00:00",
                    "last_fetch_at": "2023-03-31T07:07:32+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://x.woo.network/spot",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 28096.98,
                    "volume": 962.15671,
                    "converted_last": {
                        "btc": 0.99982172,
                        "eth": 15.592899,
                        "usd": 28100
                    },
                    "converted_volume": {
                        "btc": 961.985,
                        "eth": 15003,
                        "usd": 27036206
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010107,
                    "timestamp": "2023-03-31T06:45:45+00:00",
                    "last_traded_at": "2023-03-31T06:45:45+00:00",
                    "last_fetch_at": "2023-03-31T06:45:45+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=BTC_BUSD",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "WBTC",
                    "target": "BTC",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 1.0011,
                    "volume": 148.78198543602036,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.614473,
                        "usd": 28099
                    },
                    "converted_volume": {
                        "btc": 148.946,
                        "eth": 2326,
                        "usd": 4185209
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.019988,
                    "timestamp": "2023-03-31T06:58:56+00:00",
                    "last_traded_at": "2023-03-31T06:58:56+00:00",
                    "last_fetch_at": "2023-03-31T06:58:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/WBTC_BTC?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "wrapped-bitcoin",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "WhiteBIT",
                        "identifier": "whitebit",
                        "has_trading_incentive": false
                    },
                    "last": 28048.82,
                    "volume": 10351.949779,
                    "converted_last": {
                        "btc": 0.99873488,
                        "eth": 15.593877,
                        "usd": 28073
                    },
                    "converted_volume": {
                        "btc": 10339,
                        "eth": 161427,
                        "usd": 290608261
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.017312,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://whitebit.com/trade/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 28063,
                    "volume": 2260.80962248,
                    "converted_last": {
                        "btc": 0.99838608,
                        "eth": 15.58843,
                        "usd": 28063
                    },
                    "converted_volume": {
                        "btc": 2257,
                        "eth": 35242,
                        "usd": 63445100
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.050363,
                    "timestamp": "2023-03-31T07:07:33+00:00",
                    "last_traded_at": "2023-03-31T07:07:33+00:00",
                    "last_fetch_at": "2023-03-31T07:07:33+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/btc/usd/",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "CoinTR Pro",
                        "identifier": "cointr",
                        "has_trading_incentive": false
                    },
                    "last": 28029.22,
                    "volume": 17189.43114,
                    "converted_last": {
                        "btc": 0.99803699,
                        "eth": 15.585172,
                        "usd": 28010
                    },
                    "converted_volume": {
                        "btc": 17284,
                        "eth": 269911,
                        "usd": 485089811
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010464,
                    "timestamp": "2023-03-31T07:09:14+00:00",
                    "last_traded_at": "2023-03-31T07:09:14+00:00",
                    "last_fetch_at": "2023-03-31T07:09:14+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.cointr.com/en-us/spot/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "MEXC Global",
                        "identifier": "mxc",
                        "has_trading_incentive": false
                    },
                    "last": 28020.4,
                    "volume": 27919.874712,
                    "converted_last": {
                        "btc": 1.000703,
                        "eth": 15.626783,
                        "usd": 28083
                    },
                    "converted_volume": {
                        "btc": 27940,
                        "eth": 436298,
                        "usd": 784083710
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011036,
                    "timestamp": "2023-03-31T07:10:03+00:00",
                    "last_traded_at": "2023-03-31T07:10:03+00:00",
                    "last_fetch_at": "2023-03-31T07:10:03+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.mexc.com/exchange/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "BKEX",
                        "identifier": "bkex",
                        "has_trading_incentive": false
                    },
                    "last": 28016.25,
                    "volume": 6887.1747,
                    "converted_last": {
                        "btc": 1.000555,
                        "eth": 15.624468,
                        "usd": 28079
                    },
                    "converted_volume": {
                        "btc": 6941,
                        "eth": 108386,
                        "usd": 194784261
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010464,
                    "timestamp": "2023-03-31T07:10:00+00:00",
                    "last_traded_at": "2023-03-31T07:10:00+00:00",
                    "last_fetch_at": "2023-03-31T07:10:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bkex.com/trade/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 28053.3,
                    "volume": 5699.94060016,
                    "converted_last": {
                        "btc": 0.99804098,
                        "eth": 15.583042,
                        "usd": 28053
                    },
                    "converted_volume": {
                        "btc": 5689,
                        "eth": 88822,
                        "usd": 159902144
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010356,
                    "timestamp": "2023-03-31T07:07:42+00:00",
                    "last_traded_at": "2023-03-31T07:07:42+00:00",
                    "last_fetch_at": "2023-03-31T07:07:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/BTC-USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 27980,
                    "volume": 11900.93958067,
                    "converted_last": {
                        "btc": 0.99926038,
                        "eth": 15.604252,
                        "usd": 28043
                    },
                    "converted_volume": {
                        "btc": 11980,
                        "eth": 187078,
                        "usd": 336202739
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010357,
                    "timestamp": "2023-03-31T07:10:40+00:00",
                    "last_traded_at": "2023-03-31T07:10:40+00:00",
                    "last_fetch_at": "2023-03-31T07:10:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/btc-usdt",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 25733,
                    "volume": 555.78968586,
                    "converted_last": {
                        "btc": 0.99819833,
                        "eth": 15.585499,
                        "usd": 28058
                    },
                    "converted_volume": {
                        "btc": 554.788,
                        "eth": 8662,
                        "usd": 15594193
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.067198,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/btc/eur/",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Binance US",
                        "identifier": "binance_us",
                        "has_trading_incentive": false
                    },
                    "last": 28040.15,
                    "volume": 13757.055855458782,
                    "converted_last": {
                        "btc": 0.99911061,
                        "eth": 15.601937,
                        "usd": 28040
                    },
                    "converted_volume": {
                        "btc": 13745,
                        "eth": 214637,
                        "usd": 385749910
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.018018,
                    "timestamp": "2023-03-31T07:09:07+00:00",
                    "last_traded_at": "2023-03-31T07:09:07+00:00",
                    "last_fetch_at": "2023-03-31T07:09:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.us/trade/pro/BTC_USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Crypto.com Exchange",
                        "identifier": "crypto_com",
                        "has_trading_incentive": false
                    },
                    "last": 28056.57,
                    "volume": 1541.5101,
                    "converted_last": {
                        "btc": 0.99901084,
                        "eth": 15.59681,
                        "usd": 28081
                    },
                    "converted_volume": {
                        "btc": 1540,
                        "eth": 24043,
                        "usd": 43287212
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.012566,
                    "timestamp": "2023-03-31T07:06:24+00:00",
                    "last_traded_at": "2023-03-31T07:06:24+00:00",
                    "last_fetch_at": "2023-03-31T07:06:24+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://crypto.com/exchange/trade/spot/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 25724.7,
                    "volume": 1916.02479665,
                    "converted_last": {
                        "btc": 0.99787636,
                        "eth": 15.580472,
                        "usd": 28049
                    },
                    "converted_volume": {
                        "btc": 1912,
                        "eth": 29853,
                        "usd": 53741953
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010389,
                    "timestamp": "2023-03-31T07:07:42+00:00",
                    "last_traded_at": "2023-03-31T07:07:42+00:00",
                    "last_fetch_at": "2023-03-31T07:07:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/BTC-EUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "GBP",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 22620,
                    "volume": 40.47996666,
                    "converted_last": {
                        "btc": 0.99882123,
                        "eth": 15.597394,
                        "usd": 28031
                    },
                    "converted_volume": {
                        "btc": 40.43225,
                        "eth": 631.382,
                        "usd": 1134675
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.088496,
                    "timestamp": "2023-03-31T07:10:41+00:00",
                    "last_traded_at": "2023-03-31T07:10:41+00:00",
                    "last_fetch_at": "2023-03-31T07:10:41+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/BTCGBP",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 25701,
                    "volume": 53.81332844,
                    "converted_last": {
                        "btc": 0.99854661,
                        "eth": 15.593106,
                        "usd": 28023
                    },
                    "converted_volume": {
                        "btc": 53.735,
                        "eth": 839.117,
                        "usd": 1508002
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.077821,
                    "timestamp": "2023-03-31T07:10:36+00:00",
                    "last_traded_at": "2023-03-31T07:10:36+00:00",
                    "last_fetch_at": "2023-03-31T07:10:36+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/BTCEUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 28055.68,
                    "volume": 410.104856,
                    "converted_last": {
                        "btc": 0.9997171,
                        "eth": 15.611384,
                        "usd": 28056
                    },
                    "converted_volume": {
                        "btc": 409.989,
                        "eth": 6402,
                        "usd": 11505771
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.052349,
                    "timestamp": "2023-03-31T07:10:54+00:00",
                    "last_traded_at": "2023-03-31T07:10:54+00:00",
                    "last_fetch_at": "2023-03-31T07:10:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064101,
                    "volume": 3708.92936223,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 237.746,
                        "eth": 3713,
                        "usd": 6672015
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031192,
                    "timestamp": "2023-03-31T07:10:34+00:00",
                    "last_traded_at": "2023-03-31T07:10:34+00:00",
                    "last_fetch_at": "2023-03-31T07:10:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/ETHBTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 28049.74,
                    "volume": 13379.1566,
                    "converted_last": {
                        "btc": 0.99876764,
                        "eth": 15.594388,
                        "usd": 28074
                    },
                    "converted_volume": {
                        "btc": 13363,
                        "eth": 208640,
                        "usd": 375602765
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:07:48+00:00",
                    "last_traded_at": "2023-03-31T07:07:48+00:00",
                    "last_fetch_at": "2023-03-31T07:07:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/btc_usdt",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Bitget",
                        "identifier": "bitget",
                        "has_trading_incentive": false
                    },
                    "last": 28056.13,
                    "volume": 8744.5683,
                    "converted_last": {
                        "btc": 0.99899517,
                        "eth": 15.596565,
                        "usd": 28081
                    },
                    "converted_volume": {
                        "btc": 8793,
                        "eth": 137274,
                        "usd": 247153476
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.013671,
                    "timestamp": "2023-03-31T07:06:30+00:00",
                    "last_traded_at": "2023-03-31T07:06:30+00:00",
                    "last_fetch_at": "2023-03-31T07:06:30+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitget.com/en/spot/BTCUSDT_SPBL",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Gate.io",
                        "identifier": "gate",
                        "has_trading_incentive": false
                    },
                    "last": 28060,
                    "volume": 7518.1849673318,
                    "converted_last": {
                        "btc": 0.99913297,
                        "eth": 15.598716,
                        "usd": 28084
                    },
                    "converted_volume": {
                        "btc": 7552,
                        "eth": 117905,
                        "usd": 212280214
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010356,
                    "timestamp": "2023-03-31T07:06:56+00:00",
                    "last_traded_at": "2023-03-31T07:06:56+00:00",
                    "last_fetch_at": "2023-03-31T07:06:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://gate.io/trade/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 0.064098,
                    "volume": 70670.6331236544,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 4530,
                        "eth": 70737,
                        "usd": 127123880
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011561,
                    "timestamp": "2023-03-31T07:10:45+00:00",
                    "last_traded_at": "2023-03-31T07:10:45+00:00",
                    "last_fetch_at": "2023-03-31T07:10:45+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Ace",
                        "identifier": "ace",
                        "has_trading_incentive": false
                    },
                    "last": 0.064163,
                    "volume": 20.003,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615826,
                        "usd": 28065
                    },
                    "converted_volume": {
                        "btc": 1.269738,
                        "eth": 19.828007,
                        "usd": 35635
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.107483,
                    "timestamp": "2023-03-31T07:09:12+00:00",
                    "last_traded_at": "2023-03-31T07:09:12+00:00",
                    "last_fetch_at": "2023-03-31T07:09:12+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://ace.io/trade/ETH/BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Huobi",
                        "identifier": "huobi",
                        "has_trading_incentive": false
                    },
                    "last": 28005,
                    "volume": 4050.504249666094,
                    "converted_last": {
                        "btc": 0.99717458,
                        "eth": 15.571704,
                        "usd": 27986
                    },
                    "converted_volume": {
                        "btc": 4075,
                        "eth": 63632,
                        "usd": 114360645
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:09:23+00:00",
                    "last_traded_at": "2023-03-31T07:09:23+00:00",
                    "last_fetch_at": "2023-03-31T07:09:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.huobi.com/en-us/exchange/btc_usdt",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "ApeX Pro",
                        "identifier": "apex_pro",
                        "has_trading_incentive": false
                    },
                    "last": 28042,
                    "volume": 1601.891,
                    "converted_last": {
                        "btc": 0.99846893,
                        "eth": 15.592344,
                        "usd": 28043
                    },
                    "converted_volume": {
                        "btc": 1611,
                        "eth": 25156,
                        "usd": 45242628
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011783,
                    "timestamp": "2023-03-31T07:08:36+00:00",
                    "last_traded_at": "2023-03-31T07:08:36+00:00",
                    "last_fetch_at": "2023-03-31T07:08:36+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.apex.exchange/trade/BTC-USDC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 27997,
                    "volume": 454.70927435,
                    "converted_last": {
                        "btc": 0.9998675,
                        "eth": 15.613732,
                        "usd": 28060
                    },
                    "converted_volume": {
                        "btc": 454.649,
                        "eth": 7100,
                        "usd": 12759097
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.071429,
                    "timestamp": "2023-03-31T07:10:42+00:00",
                    "last_traded_at": "2023-03-31T07:10:42+00:00",
                    "last_fetch_at": "2023-03-31T07:10:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/BTCUST",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "JPY",
                    "market": {
                        "name": "bitFlyer",
                        "identifier": "bitflyer",
                        "has_trading_incentive": false
                    },
                    "last": 3734929,
                    "volume": 2167.7084588,
                    "converted_last": {
                        "btc": 0.99926952,
                        "eth": 15.604846,
                        "usd": 28065
                    },
                    "converted_volume": {
                        "btc": 2166,
                        "eth": 33827,
                        "usd": 60837751
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01755,
                    "timestamp": "2023-03-31T07:08:40+00:00",
                    "last_traded_at": "2023-03-31T07:08:40+00:00",
                    "last_fetch_at": "2023-03-31T07:08:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://bitflyer.com/en-jp/ex/simpleex",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "JPY",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 3725300,
                    "volume": 21.61647651,
                    "converted_last": {
                        "btc": 0.99748759,
                        "eth": 15.576568,
                        "usd": 27993
                    },
                    "converted_volume": {
                        "btc": 21.562167,
                        "eth": 336.711,
                        "usd": 605112
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.080472,
                    "timestamp": "2023-03-31T07:10:37+00:00",
                    "last_traded_at": "2023-03-31T07:10:37+00:00",
                    "last_fetch_at": "2023-03-31T07:10:37+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/BTCJPY",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 28071.99,
                    "volume": 564.251284,
                    "converted_last": {
                        "btc": 0.99977135,
                        "eth": 15.612231,
                        "usd": 28057
                    },
                    "converted_volume": {
                        "btc": 564.122,
                        "eth": 8809,
                        "usd": 15831313
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010857,
                    "timestamp": "2023-03-31T07:10:54+00:00",
                    "last_traded_at": "2023-03-31T07:10:54+00:00",
                    "last_fetch_at": "2023-03-31T07:10:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 0.06407314,
                    "volume": 1716.5829999,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 109.987,
                        "eth": 1717,
                        "usd": 3091551
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.040661,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/eth/btc/",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "JPY",
                    "market": {
                        "name": "GMO Japan",
                        "identifier": "gmo_japan",
                        "has_trading_incentive": false
                    },
                    "last": 3735000,
                    "volume": 273.8429,
                    "converted_last": {
                        "btc": 1.00005,
                        "eth": 15.61607,
                        "usd": 28063
                    },
                    "converted_volume": {
                        "btc": 273.857,
                        "eth": 4276,
                        "usd": 7684847
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.037144,
                    "timestamp": "2023-03-31T07:11:03+00:00",
                    "last_traded_at": "2023-03-31T07:11:03+00:00",
                    "last_fetch_at": "2023-03-31T07:11:03+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://coin.z.com/jp/corp/information/btc-market/",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064103,
                    "volume": 6393.2800533,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.616253,
                        "usd": 28086
                    },
                    "converted_volume": {
                        "btc": 409.828,
                        "eth": 6400,
                        "usd": 11510435
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011559,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 0.0641,
                    "volume": 3163.316726,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 201.136,
                        "eth": 3141,
                        "usd": 5644617
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.015601,
                    "timestamp": "2023-03-31T07:10:44+00:00",
                    "last_traded_at": "2023-03-31T07:10:44+00:00",
                    "last_fetch_at": "2023-03-31T07:10:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/eth-btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Binance US",
                        "identifier": "binance_us",
                        "has_trading_incentive": false
                    },
                    "last": 28035.62,
                    "volume": 3963.322055968864,
                    "converted_last": {
                        "btc": 0.99826487,
                        "eth": 15.58873,
                        "usd": 28016
                    },
                    "converted_volume": {
                        "btc": 3956,
                        "eth": 61783,
                        "usd": 111038073
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031697,
                    "timestamp": "2023-03-31T07:09:07+00:00",
                    "last_traded_at": "2023-03-31T07:09:07+00:00",
                    "last_fetch_at": "2023-03-31T07:09:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.us/trade/pro/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Bybit",
                        "identifier": "bybit_spot",
                        "has_trading_incentive": false
                    },
                    "last": 28039.87,
                    "volume": 8195.321426,
                    "converted_last": {
                        "btc": 0.9984162,
                        "eth": 15.588901,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 8182,
                        "eth": 127756,
                        "usd": 229992244
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:07:41+00:00",
                    "last_traded_at": "2023-03-31T07:07:41+00:00",
                    "last_fetch_at": "2023-03-31T07:07:41+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bybit.com/trade/spot/BTC/USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 28062.88,
                    "volume": 491.255173,
                    "converted_last": {
                        "btc": 0.99944691,
                        "eth": 15.607189,
                        "usd": 28050
                    },
                    "converted_volume": {
                        "btc": 493.64,
                        "eth": 7709,
                        "usd": 13854058
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010285,
                    "timestamp": "2023-03-31T07:09:09+00:00",
                    "last_traded_at": "2023-03-31T07:09:09+00:00",
                    "last_fetch_at": "2023-03-31T07:09:09+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/btc_busd",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 25700,
                    "volume": 645.40833301,
                    "converted_last": {
                        "btc": 0.99845468,
                        "eth": 15.591694,
                        "usd": 28022
                    },
                    "converted_volume": {
                        "btc": 644.411,
                        "eth": 10063,
                        "usd": 18085465
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.033663,
                    "timestamp": "2023-03-31T07:09:25+00:00",
                    "last_traded_at": "2023-03-31T07:09:25+00:00",
                    "last_fetch_at": "2023-03-31T07:09:25+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/BTC-EUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Crypto.com Exchange",
                        "identifier": "crypto_com",
                        "has_trading_incentive": false
                    },
                    "last": 28042.04,
                    "volume": 4015.9854,
                    "converted_last": {
                        "btc": 0.99843539,
                        "eth": 15.59182,
                        "usd": 28042
                    },
                    "converted_volume": {
                        "btc": 4010,
                        "eth": 62617,
                        "usd": 112616423
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.019361,
                    "timestamp": "2023-03-31T07:08:23+00:00",
                    "last_traded_at": "2023-03-31T07:08:23+00:00",
                    "last_fetch_at": "2023-03-31T07:08:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://crypto.com/exchange/trade/spot/BTC_USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "XRP",
                    "target": "BTC",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 0.00001936,
                    "volume": 85294763.25981405,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 1651,
                        "eth": 25786,
                        "usd": 46341640
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.051626,
                    "timestamp": "2023-03-31T07:10:48+00:00",
                    "last_traded_at": "2023-03-31T07:10:48+00:00",
                    "last_fetch_at": "2023-03-31T07:10:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/XRP_BTC?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ripple",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Dex-Trade",
                        "identifier": "dextrade",
                        "has_trading_incentive": false
                    },
                    "last": 28034.43,
                    "volume": 1143.22677859,
                    "converted_last": {
                        "btc": 0.9982225,
                        "eth": 15.585876,
                        "usd": 28058
                    },
                    "converted_volume": {
                        "btc": 1141,
                        "eth": 17818,
                        "usd": 32077117
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.10792,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "KuCoin",
                        "identifier": "kucoin",
                        "has_trading_incentive": false
                    },
                    "last": 28048.2,
                    "volume": 6501.18791045,
                    "converted_last": {
                        "btc": 0.99871281,
                        "eth": 15.593532,
                        "usd": 28072
                    },
                    "converted_volume": {
                        "btc": 6493,
                        "eth": 101376,
                        "usd": 182502542
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010357,
                    "timestamp": "2023-03-31T07:07:57+00:00",
                    "last_traded_at": "2023-03-31T07:07:57+00:00",
                    "last_fetch_at": "2023-03-31T07:07:57+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.kucoin.com/trade/BTC-USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Pionex",
                        "identifier": "pionex",
                        "has_trading_incentive": false
                    },
                    "last": 28034.19,
                    "volume": 7159.521014,
                    "converted_last": {
                        "btc": 0.99821395,
                        "eth": 15.587935,
                        "usd": 28015
                    },
                    "converted_volume": {
                        "btc": 7199,
                        "eth": 112424,
                        "usd": 202051498
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010107,
                    "timestamp": "2023-03-31T07:09:20+00:00",
                    "last_traded_at": "2023-03-31T07:09:20+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.pionex.com/en/trade/BTC_USDT/Bot",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "GBP",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 22643,
                    "volume": 35.49115263,
                    "converted_last": {
                        "btc": 0.9982452,
                        "eth": 15.586231,
                        "usd": 28059
                    },
                    "converted_volume": {
                        "btc": 35.428873,
                        "eth": 553.173,
                        "usd": 995848
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.069359,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/btc/gbp/",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 25848.85,
                    "volume": 1576.4552186821888,
                    "converted_last": {
                        "btc": 1.002996,
                        "eth": 15.661255,
                        "usd": 28183
                    },
                    "converted_volume": {
                        "btc": 1581,
                        "eth": 24689,
                        "usd": 44429373
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011876,
                    "timestamp": "2023-03-31T06:58:46+00:00",
                    "last_traded_at": "2023-03-31T06:58:46+00:00",
                    "last_fetch_at": "2023-03-31T06:58:46+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/BTC_EUR?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "LBank",
                        "identifier": "lbank",
                        "has_trading_incentive": false
                    },
                    "last": 28007.71,
                    "volume": 9132.9103,
                    "converted_last": {
                        "btc": 0.997248,
                        "eth": 15.572827,
                        "usd": 27986
                    },
                    "converted_volume": {
                        "btc": 9108,
                        "eth": 142225,
                        "usd": 255597172
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.013643,
                    "timestamp": "2023-03-31T07:10:38+00:00",
                    "last_traded_at": "2023-03-31T07:10:38+00:00",
                    "last_fetch_at": "2023-03-31T07:10:38+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.lbank.info/exchange/btc/usdc",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 0.06409,
                    "volume": 92468.536,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 5926,
                        "eth": 92531,
                        "usd": 166578840
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01156,
                    "timestamp": "2023-03-31T07:07:47+00:00",
                    "last_traded_at": "2023-03-31T07:07:47+00:00",
                    "last_fetch_at": "2023-03-31T07:07:47+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "LATOKEN",
                        "identifier": "latoken",
                        "has_trading_incentive": false
                    },
                    "last": 27999.99,
                    "volume": 1290.72634000255,
                    "converted_last": {
                        "btc": 0.99997429,
                        "eth": 15.6154,
                        "usd": 28063
                    },
                    "converted_volume": {
                        "btc": 1291,
                        "eth": 20155,
                        "usd": 36221521
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.020037,
                    "timestamp": "2023-03-31T07:10:42+00:00",
                    "last_traded_at": "2023-03-31T07:10:42+00:00",
                    "last_fetch_at": "2023-03-31T07:10:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://latoken.com/exchange/USDT-BTC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 0.06409589,
                    "volume": 194432.2674,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 12462,
                        "eth": 194609,
                        "usd": 349737501
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01493,
                    "timestamp": "2023-03-31T07:10:35+00:00",
                    "last_traded_at": "2023-03-31T07:10:35+00:00",
                    "last_fetch_at": "2023-03-31T07:10:35+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Pionex",
                        "identifier": "pionex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064084,
                    "volume": 11318.2311,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615826,
                        "usd": 28065
                    },
                    "converted_volume": {
                        "btc": 719.002,
                        "eth": 11228,
                        "usd": 20178873
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.026526,
                    "timestamp": "2023-03-31T07:09:20+00:00",
                    "last_traded_at": "2023-03-31T07:09:20+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.pionex.com/en/trade/ETH_BTC/Bot",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "TRY",
                    "market": {
                        "name": "CoinTR Pro",
                        "identifier": "cointr",
                        "has_trading_incentive": false
                    },
                    "last": 549266,
                    "volume": 1090.85937,
                    "converted_last": {
                        "btc": 1.019951,
                        "eth": 15.927381,
                        "usd": 28625
                    },
                    "converted_volume": {
                        "btc": 1121,
                        "eth": 17501,
                        "usd": 31453677
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.053768,
                    "timestamp": "2023-03-31T07:09:14+00:00",
                    "last_traded_at": "2023-03-31T07:09:14+00:00",
                    "last_fetch_at": "2023-03-31T07:09:14+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.cointr.com/en-us/spot/BTC_TRY",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Cryptology",
                        "identifier": "cryptology",
                        "has_trading_incentive": false
                    },
                    "last": 28033.99,
                    "volume": 336.9222553,
                    "converted_last": {
                        "btc": 0.99894421,
                        "eth": 15.599315,
                        "usd": 28034
                    },
                    "converted_volume": {
                        "btc": 336.567,
                        "eth": 5256,
                        "usd": 9445275
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031432,
                    "timestamp": "2023-03-31T07:10:39+00:00",
                    "last_traded_at": "2023-03-31T07:10:39+00:00",
                    "last_fetch_at": "2023-03-31T07:10:39+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://cryptology.com/app/next/trading/BTC_USD",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Currency.com",
                        "identifier": "currency",
                        "has_trading_incentive": false
                    },
                    "last": 28018.6,
                    "volume": 1121.7458,
                    "converted_last": {
                        "btc": 0.99834275,
                        "eth": 15.589946,
                        "usd": 28019
                    },
                    "converted_volume": {
                        "btc": 1120,
                        "eth": 17488,
                        "usd": 31429747
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.101178,
                    "timestamp": "2023-03-31T07:10:00+00:00",
                    "last_traded_at": "2023-03-31T07:10:00+00:00",
                    "last_fetch_at": "2023-03-31T07:10:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://exchange.currency.com/btc-to-usd",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "BitMart",
                        "identifier": "bitmart",
                        "has_trading_incentive": false
                    },
                    "last": 28063.06,
                    "volume": 4909.4371,
                    "converted_last": {
                        "btc": 1.002227,
                        "eth": 15.650062,
                        "usd": 28124
                    },
                    "converted_volume": {
                        "btc": 4920,
                        "eth": 76833,
                        "usd": 138073325
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010071,
                    "timestamp": "2023-03-31T07:11:03+00:00",
                    "last_traded_at": "2023-03-31T07:11:03+00:00",
                    "last_fetch_at": "2023-03-31T07:11:03+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 28000.71,
                    "volume": 1095.93587397,
                    "converted_last": {
                        "btc": 0.99702183,
                        "eth": 15.569319,
                        "usd": 27982
                    },
                    "converted_volume": {
                        "btc": 1093,
                        "eth": 17063,
                        "usd": 30665961
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.030113,
                    "timestamp": "2023-03-31T07:09:42+00:00",
                    "last_traded_at": "2023-03-31T07:09:42+00:00",
                    "last_fetch_at": "2023-03-31T07:09:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/BTC-USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Pionex",
                        "identifier": "pionex",
                        "has_trading_incentive": false
                    },
                    "last": 28057.32,
                    "volume": 82.969066,
                    "converted_last": {
                        "btc": 0.99924889,
                        "eth": 15.604096,
                        "usd": 28044
                    },
                    "converted_volume": {
                        "btc": 83.641,
                        "eth": 1306,
                        "usd": 2347380
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.04031,
                    "timestamp": "2023-03-31T07:09:20+00:00",
                    "last_traded_at": "2023-03-31T07:09:20+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.pionex.com/en/trade/BTC_BUSD/Bot",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "Bybit",
                        "identifier": "bybit_spot",
                        "has_trading_incentive": false
                    },
                    "last": 28045.17,
                    "volume": 4418.290602,
                    "converted_last": {
                        "btc": 0.99858181,
                        "eth": 15.591486,
                        "usd": 28069
                    },
                    "converted_volume": {
                        "btc": 4412,
                        "eth": 68888,
                        "usd": 124014797
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.017258,
                    "timestamp": "2023-03-31T07:07:41+00:00",
                    "last_traded_at": "2023-03-31T07:07:41+00:00",
                    "last_fetch_at": "2023-03-31T07:07:41+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bybit.com/trade/spot/BTC/USDC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 0.064099,
                    "volume": 7131.0918,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 453.308,
                        "eth": 7079,
                        "usd": 12721465
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.017161,
                    "timestamp": "2023-03-31T07:10:06+00:00",
                    "last_traded_at": "2023-03-31T07:10:06+00:00",
                    "last_fetch_at": "2023-03-31T07:10:06+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Coinsbit",
                        "identifier": "coinsbit",
                        "has_trading_incentive": false
                    },
                    "last": 27999.24562873,
                    "volume": 5567.00922581,
                    "converted_last": {
                        "btc": 0.9999477,
                        "eth": 15.614474,
                        "usd": 28060
                    },
                    "converted_volume": {
                        "btc": 5567,
                        "eth": 86926,
                        "usd": 156210898
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.030506,
                    "timestamp": "2023-03-31T07:11:05+00:00",
                    "last_traded_at": "2023-03-31T07:11:05+00:00",
                    "last_fetch_at": "2023-03-31T07:11:05+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://coinsbit.io/trade/BTC_USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "BitMart",
                        "identifier": "bitmart",
                        "has_trading_incentive": false
                    },
                    "last": 0.064055,
                    "volume": 17432.3392,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615291,
                        "usd": 28062
                    },
                    "converted_volume": {
                        "btc": 1117,
                        "eth": 17436,
                        "usd": 31334358
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01404,
                    "timestamp": "2023-03-31T07:11:04+00:00",
                    "last_traded_at": "2023-03-31T07:11:04+00:00",
                    "last_fetch_at": "2023-03-31T07:11:04+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=ETH_BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 28037.6,
                    "volume": 549.79323733,
                    "converted_last": {
                        "btc": 0.99833537,
                        "eth": 15.587639,
                        "usd": 28062
                    },
                    "converted_volume": {
                        "btc": 548.878,
                        "eth": 8570,
                        "usd": 15428064
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.03317,
                    "timestamp": "2023-03-31T07:07:44+00:00",
                    "last_traded_at": "2023-03-31T07:07:44+00:00",
                    "last_fetch_at": "2023-03-31T07:07:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/BTC-USDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "FNB",
                    "target": "BTC",
                    "market": {
                        "name": "FinexBox",
                        "identifier": "finexbox",
                        "has_trading_incentive": false
                    },
                    "last": 0.00002992,
                    "volume": 392224.4,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615291,
                        "usd": 28062
                    },
                    "converted_volume": {
                        "btc": 11.735354,
                        "eth": 183.251,
                        "usd": 329313
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.167001,
                    "timestamp": "2023-03-31T07:11:03+00:00",
                    "last_traded_at": "2023-03-31T07:11:03+00:00",
                    "last_fetch_at": "2023-03-31T07:11:03+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.finexbox.com/Home/Orders/market/pair/FNB-BTC.html",
                    "token_info_url": null,
                    "coin_id": "finexbox-token",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USD",
                    "market": {
                        "name": "Gemini",
                        "identifier": "gemini",
                        "has_trading_incentive": false
                    },
                    "last": 28010,
                    "volume": 336.97194219,
                    "converted_last": {
                        "btc": 0.99803632,
                        "eth": 15.585161,
                        "usd": 28010
                    },
                    "converted_volume": {
                        "btc": 336.31,
                        "eth": 5252,
                        "usd": 9438584
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:09:39+00:00",
                    "last_traded_at": "2023-03-31T07:09:39+00:00",
                    "last_fetch_at": "2023-03-31T07:09:39+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Dex-Trade",
                        "identifier": "dextrade",
                        "has_trading_incentive": false
                    },
                    "last": 28051.8,
                    "volume": 27.14993109,
                    "converted_last": {
                        "btc": 0.9990523,
                        "eth": 15.598833,
                        "usd": 28082
                    },
                    "converted_volume": {
                        "btc": 27.124201,
                        "eth": 423.507,
                        "usd": 762417
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.102721,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Txbit",
                        "identifier": "txbit",
                        "has_trading_incentive": false
                    },
                    "last": 0.06299499,
                    "volume": 942.6905,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 59.385,
                        "eth": 927.212,
                        "usd": 1669209
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011587,
                    "timestamp": "2023-03-31T07:07:50+00:00",
                    "last_traded_at": "2023-03-31T07:07:50+00:00",
                    "last_fetch_at": "2023-03-31T07:07:50+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://txbit.io/Trade/ETH/BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "TRX",
                    "target": "BTC",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 0.00000232,
                    "volume": 15350341.03154732,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.616253,
                        "usd": 28086
                    },
                    "converted_volume": {
                        "btc": 35.612791,
                        "eth": 556.138,
                        "usd": 1000220
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.431034,
                    "timestamp": "2023-03-31T07:08:57+00:00",
                    "last_traded_at": "2023-03-31T07:08:57+00:00",
                    "last_fetch_at": "2023-03-31T07:08:57+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "tron",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Currency.com",
                        "identifier": "currency",
                        "has_trading_incentive": false
                    },
                    "last": 25700.3,
                    "volume": 93.4464,
                    "converted_last": {
                        "btc": 0.99846634,
                        "eth": 15.591876,
                        "usd": 28022
                    },
                    "converted_volume": {
                        "btc": 93.303,
                        "eth": 1457,
                        "usd": 2618561
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.119052,
                    "timestamp": "2023-03-31T07:10:00+00:00",
                    "last_traded_at": "2023-03-31T07:10:00+00:00",
                    "last_fetch_at": "2023-03-31T07:10:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://exchange.currency.com/btc-to-eur",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Cryptology",
                        "identifier": "cryptology",
                        "has_trading_incentive": false
                    },
                    "last": 25701.46,
                    "volume": 212.28564001,
                    "converted_last": {
                        "btc": 0.99856448,
                        "eth": 15.593385,
                        "usd": 28023
                    },
                    "converted_volume": {
                        "btc": 211.981,
                        "eth": 3310,
                        "usd": 5948951
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031313,
                    "timestamp": "2023-03-31T07:10:39+00:00",
                    "last_traded_at": "2023-03-31T07:10:39+00:00",
                    "last_fetch_at": "2023-03-31T07:10:39+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://cryptology.com/app/next/trading/BTC_EUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "Cryptology",
                        "identifier": "cryptology",
                        "has_trading_incentive": false
                    },
                    "last": 28012.75,
                    "volume": 78.36585821,
                    "converted_last": {
                        "btc": 0.99742745,
                        "eth": 15.575629,
                        "usd": 27991
                    },
                    "converted_volume": {
                        "btc": 78.164,
                        "eth": 1221,
                        "usd": 2193572
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.229068,
                    "timestamp": "2023-03-31T07:10:39+00:00",
                    "last_traded_at": "2023-03-31T07:10:39+00:00",
                    "last_fetch_at": "2023-03-31T07:10:39+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://cryptology.com/app/next/trading/BTC_USDC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "BTC",
                    "target": "JPY",
                    "market": {
                        "name": "Coincheck",
                        "identifier": "coincheck",
                        "has_trading_incentive": false
                    },
                    "last": 3738449,
                    "volume": 1632.71694411,
                    "converted_last": {
                        "btc": 1.000211,
                        "eth": 15.619553,
                        "usd": 28092
                    },
                    "converted_volume": {
                        "btc": 1633,
                        "eth": 25502,
                        "usd": 45866150
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.023834,
                    "timestamp": "2023-03-31T07:08:53+00:00",
                    "last_traded_at": "2023-03-31T07:08:53+00:00",
                    "last_fetch_at": "2023-03-31T07:08:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "BUSD",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 28071.98,
                    "volume": 1176.31969,
                    "converted_last": {
                        "btc": 0.999771,
                        "eth": 15.608677,
                        "usd": 28102
                    },
                    "converted_volume": {
                        "btc": 1176,
                        "eth": 18361,
                        "usd": 33057419
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.023156,
                    "timestamp": "2023-03-31T07:07:00+00:00",
                    "last_traded_at": "2023-03-31T07:07:00+00:00",
                    "last_fetch_at": "2023-03-31T07:07:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/btc_busd",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "XRP",
                    "target": "BTC",
                    "market": {
                        "name": "WhiteBIT",
                        "identifier": "whitebit",
                        "has_trading_incentive": false
                    },
                    "last": 0.00001934,
                    "volume": 423269,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 8.186022,
                        "eth": 127.814,
                        "usd": 230096
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.051653,
                    "timestamp": "2023-03-31T07:07:52+00:00",
                    "last_traded_at": "2023-03-31T07:07:52+00:00",
                    "last_fetch_at": "2023-03-31T07:07:52+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://whitebit.com/trade/XRP_BTC",
                    "token_info_url": null,
                    "coin_id": "ripple",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "LTC",
                    "target": "BTC",
                    "market": {
                        "name": "Coinsbit",
                        "identifier": "coinsbit",
                        "has_trading_incentive": false
                    },
                    "last": 0.00317406,
                    "volume": 11801.7277994,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615826,
                        "usd": 28065
                    },
                    "converted_volume": {
                        "btc": 37.459392,
                        "eth": 584.959,
                        "usd": 1051302
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.020155,
                    "timestamp": "2023-03-31T07:09:05+00:00",
                    "last_traded_at": "2023-03-31T07:09:05+00:00",
                    "last_fetch_at": "2023-03-31T07:09:05+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://coinsbit.io/trade/LTC_BTC",
                    "token_info_url": null,
                    "coin_id": "litecoin",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "JPY",
                    "market": {
                        "name": "Bitbank",
                        "identifier": "bitbank",
                        "has_trading_incentive": false
                    },
                    "last": 3738001,
                    "volume": 386.5276,
                    "converted_last": {
                        "btc": 1.000091,
                        "eth": 15.617681,
                        "usd": 28089
                    },
                    "converted_volume": {
                        "btc": 386.563,
                        "eth": 6037,
                        "usd": 10857000
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010027,
                    "timestamp": "2023-03-31T07:09:00+00:00",
                    "last_traded_at": "2023-03-31T07:09:00+00:00",
                    "last_fetch_at": "2023-03-31T07:09:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://bitbank.cc/app/trade/BTC_JPY",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "WBTC",
                    "target": "BTC",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 1.0011,
                    "volume": 188.9006,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 189.108,
                        "eth": 2953,
                        "usd": 5315528
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.109835,
                    "timestamp": "2023-03-31T06:55:51+00:00",
                    "last_traded_at": "2023-03-31T06:55:51+00:00",
                    "last_fetch_at": "2023-03-31T07:07:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/wbtc_btc",
                    "token_info_url": null,
                    "coin_id": "wrapped-bitcoin",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "XBT",
                    "target": "USD",
                    "market": {
                        "name": "itBit",
                        "identifier": "itbit",
                        "has_trading_incentive": false
                    },
                    "last": 28040,
                    "volume": 179.0561865,
                    "converted_last": {
                        "btc": 0.99836275,
                        "eth": 15.590686,
                        "usd": 28040
                    },
                    "converted_volume": {
                        "btc": 178.763,
                        "eth": 2792,
                        "usd": 5020735
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.019809,
                    "timestamp": "2023-03-31T07:08:54+00:00",
                    "last_traded_at": "2023-03-31T07:08:54+00:00",
                    "last_fetch_at": "2023-03-31T07:08:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "KRW",
                    "market": {
                        "name": "Upbit",
                        "identifier": "upbit",
                        "has_trading_incentive": false
                    },
                    "last": 37140000,
                    "volume": 5302.71997273,
                    "converted_last": {
                        "btc": 1.017928,
                        "eth": 15.895783,
                        "usd": 28568
                    },
                    "converted_volume": {
                        "btc": 5398,
                        "eth": 84291,
                        "usd": 151489468
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.051158,
                    "timestamp": "2023-03-31T07:07:49+00:00",
                    "last_traded_at": "2023-03-31T07:07:49+00:00",
                    "last_fetch_at": "2023-03-31T07:09:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "EXMO",
                        "identifier": "exmo",
                        "has_trading_incentive": false
                    },
                    "last": 0.06408372,
                    "volume": 8558.40932444,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615826,
                        "usd": 28065
                    },
                    "converted_volume": {
                        "btc": 548.455,
                        "eth": 8565,
                        "usd": 15392442
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.070203,
                    "timestamp": "2023-03-31T07:09:30+00:00",
                    "last_traded_at": "2023-03-31T07:09:30+00:00",
                    "last_fetch_at": "2023-03-31T07:09:30+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://exmo.com/en/trade/ETH_BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "TRY",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 549722,
                    "volume": 624.6705065953519,
                    "converted_last": {
                        "btc": 1.020039,
                        "eth": 15.929194,
                        "usd": 28649
                    },
                    "converted_volume": {
                        "btc": 637.189,
                        "eth": 9950,
                        "usd": 17896067
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.025649,
                    "timestamp": "2023-03-31T07:08:05+00:00",
                    "last_traded_at": "2023-03-31T07:08:05+00:00",
                    "last_fetch_at": "2023-03-31T07:08:05+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/BTC_TRY?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 27997.5,
                    "volume": 731.64948424,
                    "converted_last": {
                        "btc": 0.99688446,
                        "eth": 15.56715,
                        "usd": 27976
                    },
                    "converted_volume": {
                        "btc": 734.699,
                        "eth": 11473,
                        "usd": 20618309
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011785,
                    "timestamp": "2023-03-31T07:10:48+00:00",
                    "last_traded_at": "2023-03-31T07:10:48+00:00",
                    "last_fetch_at": "2023-03-31T07:10:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/btc-usdc",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Bitvavo",
                        "identifier": "bitvavo",
                        "has_trading_incentive": false
                    },
                    "last": 25760,
                    "volume": 436.67949269,
                    "converted_last": {
                        "btc": 1.000042,
                        "eth": 15.616908,
                        "usd": 28087
                    },
                    "converted_volume": {
                        "btc": 436.698,
                        "eth": 6820,
                        "usd": 12265088
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.062143,
                    "timestamp": "2023-03-31T07:08:03+00:00",
                    "last_traded_at": "2023-03-31T07:08:03+00:00",
                    "last_fetch_at": "2023-03-31T07:08:03+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://account.bitvavo.com/markets/BTC-EUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "USDC",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 28085,
                    "volume": 117.67842542,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.61363,
                        "usd": 28108
                    },
                    "converted_volume": {
                        "btc": 117.678,
                        "eth": 1837,
                        "usd": 3307748
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.024926,
                    "timestamp": "2023-03-31T07:07:45+00:00",
                    "last_traded_at": "2023-03-31T07:07:45+00:00",
                    "last_fetch_at": "2023-03-31T07:07:45+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/BTC-USDC",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "BTC",
                    "target": "USDT",
                    "market": {
                        "name": "Phemex",
                        "identifier": "phemex",
                        "has_trading_incentive": false
                    },
                    "last": 28055.68,
                    "volume": 436.07135594,
                    "converted_last": {
                        "btc": 0.99897915,
                        "eth": 15.59769,
                        "usd": 28080
                    },
                    "converted_volume": {
                        "btc": 435.626,
                        "eth": 6802,
                        "usd": 12244740
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010036,
                    "timestamp": "2023-03-31T07:07:16+00:00",
                    "last_traded_at": "2023-03-31T07:07:16+00:00",
                    "last_fetch_at": "2023-03-31T07:07:16+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://phemex.com/spot/trade/BTCUSDT",
                    "token_info_url": null,
                    "coin_id": "bitcoin",
                    "target_coin_id": "tether"
                },
                {
                    "base": "DASH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 0.00200584,
                    "volume": 242276.3422,
                    "converted_last": {
                        "btc": 1,
                        "eth": 15.615802,
                        "usd": 28064
                    },
                    "converted_volume": {
                        "btc": 485.968,
                        "eth": 7589,
                        "usd": 13638009
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.633031,
                    "timestamp": "2023-03-31T07:10:35+00:00",
                    "last_traded_at": "2023-03-31T07:10:35+00:00",
                    "last_fetch_at": "2023-03-31T07:10:35+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/dash_btc",
                    "token_info_url": null,
                    "coin_id": "dash",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "GBP",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 22650.3,
                    "volume": 230.64673162,
                    "converted_last": {
                        "btc": 0.99856703,
                        "eth": 15.591256,
                        "usd": 28068
                    },
                    "converted_volume": {
                        "btc": 230.316,
                        "eth": 3596,
                        "usd": 6473812
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010441,
                    "timestamp": "2023-03-31T07:07:42+00:00",
                    "last_traded_at": "2023-03-31T07:07:42+00:00",
                    "last_fetch_at": "2023-03-31T07:07:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/BTC-GBP",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                },
                {
                    "base": "BTC",
                    "target": "EUR",
                    "market": {
                        "name": "Kanga",
                        "identifier": "kanga",
                        "has_trading_incentive": false
                    },
                    "last": 25728.37,
                    "volume": 0,
                    "converted_last": {
                        "btc": 0.99881402,
                        "eth": 15.597733,
                        "usd": 28053
                    },
                    "converted_volume": {
                        "btc": 18.939275,
                        "eth": 295.761,
                        "usd": 531928
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.961665,
                    "timestamp": "2023-03-31T07:08:29+00:00",
                    "last_traded_at": "2023-03-31T07:08:29+00:00",
                    "last_fetch_at": "2023-03-31T07:08:29+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://trade.kanga.exchange/market/BTC-EUR",
                    "token_info_url": null,
                    "coin_id": "bitcoin"
                }
            ]
        },
        "dailyChart": [
            {
                "id": "daily",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "07:15:18 GMT",
                        "y": 28642.24
                    },
                    {
                        "x": "08:15:08 GMT",
                        "y": 28739.7
                    },
                    {
                        "x": "09:16:02 GMT",
                        "y": 28594.35
                    },
                    {
                        "x": "10:15:29 GMT",
                        "y": 28646.99
                    },
                    {
                        "x": "11:15:03 GMT",
                        "y": 28628.41
                    },
                    {
                        "x": "12:15:20 GMT",
                        "y": 28643.57
                    },
                    {
                        "x": "13:15:19 GMT",
                        "y": 28664.7
                    },
                    {
                        "x": "14:15:58 GMT",
                        "y": 28394.64
                    },
                    {
                        "x": "15:15:00 GMT",
                        "y": 28482.58
                    },
                    {
                        "x": "16:15:42 GMT",
                        "y": 28240.7
                    },
                    {
                        "x": "17:15:23 GMT",
                        "y": 28281.16
                    },
                    {
                        "x": "18:15:56 GMT",
                        "y": 27805.31
                    },
                    {
                        "x": "19:16:14 GMT",
                        "y": 27973.77
                    },
                    {
                        "x": "20:15:41 GMT",
                        "y": 27979.65
                    },
                    {
                        "x": "21:16:17 GMT",
                        "y": 28157.67
                    },
                    {
                        "x": "22:15:59 GMT",
                        "y": 28123.99
                    },
                    {
                        "x": "23:15:16 GMT",
                        "y": 27962.28
                    },
                    {
                        "x": "00:15:07 GMT",
                        "y": 28028.6
                    },
                    {
                        "x": "01:14:51 GMT",
                        "y": 28359.47
                    },
                    {
                        "x": "02:15:16 GMT",
                        "y": 28120.79
                    },
                    {
                        "x": "03:15:09 GMT",
                        "y": 28186.56
                    },
                    {
                        "x": "04:14:57 GMT",
                        "y": 28142.43
                    },
                    {
                        "x": "05:15:36 GMT",
                        "y": 28157.29
                    },
                    {
                        "x": "06:15:55 GMT",
                        "y": 28108.68
                    },
                    {
                        "x": "07:11:57 GMT",
                        "y": 28057.78
                    }
                ]
            }
        ],
        "monthlyChart": [
            {
                "id": "monthly",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "03 Jan 2023",
                        "y": 16674.34
                    },
                    {
                        "x": "07 Jan 2023",
                        "y": 16960.23
                    },
                    {
                        "x": "11 Jan 2023",
                        "y": 17436.9
                    },
                    {
                        "x": "15 Jan 2023",
                        "y": 21019.21
                    },
                    {
                        "x": "19 Jan 2023",
                        "y": 20726.84
                    },
                    {
                        "x": "23 Jan 2023",
                        "y": 22736.66
                    },
                    {
                        "x": "27 Jan 2023",
                        "y": 23024.75
                    },
                    {
                        "x": "31 Jan 2023",
                        "y": 22840.39
                    },
                    {
                        "x": "04 Feb 2023",
                        "y": 23451.58
                    },
                    {
                        "x": "08 Feb 2023",
                        "y": 23294.91
                    },
                    {
                        "x": "12 Feb 2023",
                        "y": 21889.43
                    },
                    {
                        "x": "16 Feb 2023",
                        "y": 24307.88
                    },
                    {
                        "x": "20 Feb 2023",
                        "y": 24284.48
                    },
                    {
                        "x": "24 Feb 2023",
                        "y": 23951.11
                    },
                    {
                        "x": "28 Feb 2023",
                        "y": 23518.12
                    },
                    {
                        "x": "04 Mar 2023",
                        "y": 22367.43
                    },
                    {
                        "x": "08 Mar 2023",
                        "y": 22217.21
                    },
                    {
                        "x": "12 Mar 2023",
                        "y": 20521.56
                    },
                    {
                        "x": "16 Mar 2023",
                        "y": 24470.88
                    },
                    {
                        "x": "20 Mar 2023",
                        "y": 28186.84
                    },
                    {
                        "x": "24 Mar 2023",
                        "y": 28459.74
                    },
                    {
                        "x": "28 Mar 2023",
                        "y": 27182.3
                    },
                    {
                        "x": "31 Mar 2023",
                        "y": 28146.9
                    }
                ]
            }
        ],
        "yearlyChart": [
            {
                "id": "yearly",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "14 Apr 2022",
                        "y": 41205.17
                    },
                    {
                        "x": "30 Apr 2022",
                        "y": 38650.55
                    },
                    {
                        "x": "16 May 2022",
                        "y": 31319.31
                    },
                    {
                        "x": "01 Jun 2022",
                        "y": 31865.75
                    },
                    {
                        "x": "17 Jun 2022",
                        "y": 20408.69
                    },
                    {
                        "x": "03 Jul 2022",
                        "y": 19268.23
                    },
                    {
                        "x": "19 Jul 2022",
                        "y": 22395.37
                    },
                    {
                        "x": "04 Aug 2022",
                        "y": 22860.42
                    },
                    {
                        "x": "20 Aug 2022",
                        "y": 20945.83
                    },
                    {
                        "x": "05 Sep 2022",
                        "y": 19980.01
                    },
                    {
                        "x": "21 Sep 2022",
                        "y": 18869.93
                    },
                    {
                        "x": "07 Oct 2022",
                        "y": 19949.05
                    },
                    {
                        "x": "23 Oct 2022",
                        "y": 19203.87
                    },
                    {
                        "x": "08 Nov 2022",
                        "y": 20597.76
                    },
                    {
                        "x": "24 Nov 2022",
                        "y": 16608.01
                    },
                    {
                        "x": "10 Dec 2022",
                        "y": 17149.82
                    },
                    {
                        "x": "26 Dec 2022",
                        "y": 16842.18
                    },
                    {
                        "x": "11 Jan 2023",
                        "y": 17436.9
                    },
                    {
                        "x": "27 Jan 2023",
                        "y": 23024.75
                    },
                    {
                        "x": "12 Feb 2023",
                        "y": 21889.43
                    },
                    {
                        "x": "28 Feb 2023",
                        "y": 23518.12
                    },
                    {
                        "x": "16 Mar 2023",
                        "y": 24470.88
                    },
                    {
                        "x": "31 Mar 2023",
                        "y": 28101.51
                    }
                ]
            }
        ],
        "yearlyRaw": [
            [
                1680243593000,
                28101.513234657174
            ],
            [
                1680220800000,
                28041.123080088284
            ],
            [
                1680134400000,
                28394.997780199057
            ],
            [
                1680048000000,
                27291.3500210497
            ],
            [
                1679961600000,
                27182.299559950465
            ],
            [
                1679875200000,
                28048.46997853496
            ],
            [
                1679788800000,
                27670.199498496833
            ],
            [
                1679702400000,
                27595.4947483755
            ],
            [
                1679616000000,
                28459.735113552502
            ],
            [
                1679529600000,
                27449.254830807356
            ],
            [
                1679443200000,
                28264.23961052235
            ],
            [
                1679356800000,
                27929.167733140293
            ],
            [
                1679270400000,
                28186.842652360127
            ],
            [
                1679184000000,
                27107.792183504385
            ],
            [
                1679097600000,
                27466.677829829863
            ],
            [
                1679011200000,
                25161.272017520052
            ],
            [
                1678924800000,
                24470.88205445031
            ],
            [
                1678838400000,
                24758.765085827567
            ],
            [
                1678752000000,
                24178.95532797469
            ],
            [
                1678665600000,
                22095.71339833569
            ],
            [
                1678579200000,
                20521.55615175117
            ],
            [
                1678492800000,
                20195.2289502733
            ],
            [
                1678406400000,
                20376.320007428807
            ],
            [
                1678320000000,
                21712.65119391273
            ],
            [
                1678233600000,
                22217.209884905325
            ],
            [
                1678147200000,
                22415.113659694827
            ],
            [
                1678060800000,
                22421.885805853268
            ],
            [
                1677974400000,
                22348.32991538815
            ],
            [
                1677888000000,
                22367.43302246967
            ],
            [
                1677801600000,
                23464.33654185282
            ],
            [
                1677715200000,
                23634.333489123786
            ],
            [
                1677628800000,
                23155.543746825795
            ],
            [
                1677542400000,
                23518.12390627588
            ],
            [
                1677456000000,
                23541.115854493557
            ],
            [
                1677369600000,
                23157.038107459524
            ],
            [
                1677283200000,
                23172.286538018925
            ],
            [
                1677196800000,
                23951.11098423326
            ],
            [
                1677110400000,
                24146.101364545222
            ],
            [
                1677024000000,
                24417.38703630947
            ],
            [
                1676937600000,
                24786.665940845705
            ],
            [
                1676851200000,
                24284.478003714703
            ],
            [
                1676764800000,
                24642.79087073843
            ],
            [
                1676678400000,
                24628.82455217312
            ],
            [
                1676592000000,
                23756.907281577434
            ],
            [
                1676505600000,
                24307.875101631602
            ],
            [
                1676419200000,
                22220.070997481067
            ],
            [
                1676332800000,
                21807.834274723064
            ],
            [
                1676246400000,
                21779.87440384417
            ],
            [
                1676160000000,
                21889.432080049624
            ],
            [
                1676073600000,
                21630.132979576298
            ],
            [
                1675987200000,
                21820.886508092775
            ],
            [
                1675900800000,
                22947.50782856846
            ],
            [
                1675814400000,
                23294.9136483527
            ],
            [
                1675728000000,
                22786.483006387727
            ],
            [
                1675641600000,
                22946.286578591233
            ],
            [
                1675555200000,
                23340.34958553934
            ],
            [
                1675468800000,
                23451.577650774634
            ],
            [
                1675382400000,
                23539.676770196525
            ],
            [
                1675296000000,
                23725.161796142238
            ],
            [
                1675209600000,
                23137.323554088376
            ],
            [
                1675123200000,
                22840.385858797104
            ],
            [
                1675036800000,
                23797.460894881242
            ],
            [
                1674950400000,
                23022.23299135344
            ],
            [
                1674864000000,
                23082.858382122955
            ],
            [
                1674777600000,
                23024.74618081709
            ],
            [
                1674691200000,
                23180.422697874263
            ],
            [
                1674604800000,
                22610.010598272846
            ],
            [
                1674518400000,
                22984.87497643721
            ],
            [
                1674432000000,
                22736.66142892971
            ],
            [
                1674345600000,
                22771.023287021784
            ],
            [
                1674259200000,
                22705.83367889906
            ],
            [
                1674172800000,
                21081.671022204326
            ],
            [
                1674086400000,
                20726.844969426445
            ],
            [
                1674000000000,
                21156.78393116713
            ],
            [
                1673913600000,
                21175.33773662521
            ],
            [
                1673827200000,
                20853.230569490253
            ],
            [
                1673740800000,
                21019.20661402266
            ],
            [
                1673654400000,
                19941.780543296303
            ],
            [
                1673568000000,
                18866.810330617045
            ],
            [
                1673481600000,
                17996.832553741606
            ],
            [
                1673395200000,
                17436.90232978116
            ],
            [
                1673308800000,
                17194.90932945318
            ],
            [
                1673222400000,
                17074.61539572674
            ],
            [
                1673136000000,
                16950.861521853905
            ],
            [
                1673049600000,
                16960.23206247515
            ],
            [
                1672963200000,
                16832.098988497855
            ],
            [
                1672876800000,
                16855.1747387671
            ],
            [
                1672790400000,
                16677.646185850346
            ],
            [
                1672704000000,
                16674.342536301097
            ],
            [
                1672617600000,
                16615.969318012816
            ],
            [
                1672531200000,
                16540.693624776803
            ],
            [
                1672444800000,
                16604.020520373393
            ],
            [
                1672358400000,
                16644.379087037905
            ],
            [
                1672272000000,
                16538.906094001977
            ],
            [
                1672185600000,
                16701.840210667935
            ],
            [
                1672099200000,
                16900.081871938084
            ],
            [
                1672012800000,
                16842.177039905502
            ],
            [
                1671926400000,
                16848.568708323422
            ],
            [
                1671840000000,
                16791.45543916491
            ],
            [
                1671753600000,
                16824.790162441503
            ],
            [
                1671667200000,
                16816.85370118997
            ],
            [
                1671580800000,
                16899.331969046758
            ],
            [
                1671494400000,
                16422.562273279298
            ],
            [
                1671408000000,
                16742.816663834055
            ],
            [
                1671321600000,
                16806.48559206152
            ],
            [
                1671235200000,
                16623.75782614431
            ],
            [
                1671148800000,
                17338.358126632633
            ],
            [
                1671062400000,
                17808.71617265881
            ],
            [
                1670976000000,
                17784.162894053265
            ],
            [
                1670889600000,
                17179.596038203494
            ],
            [
                1670803200000,
                17101.038019732932
            ],
            [
                1670716800000,
                17125.364927688952
            ],
            [
                1670630400000,
                17149.824203925327
            ],
            [
                1670544000000,
                17235.014157992136
            ],
            [
                1670457600000,
                16851.30346863184
            ],
            [
                1670371200000,
                17085.64314125141
            ],
            [
                1670284800000,
                16973.372577553495
            ],
            [
                1670198400000,
                17149.93175096291
            ],
            [
                1670112000000,
                16923.38287008033
            ],
            [
                1670025600000,
                17084.87334047068
            ],
            [
                1669939200000,
                16972.73406077455
            ],
            [
                1669852800000,
                17186.502572066118
            ],
            [
                1669766400000,
                16441.979978419113
            ],
            [
                1669680000000,
                16222.210728731225
            ],
            [
                1669593600000,
                16459.149543755877
            ],
            [
                1669507200000,
                16456.156062496684
            ],
            [
                1669420800000,
                16524.449007720887
            ],
            [
                1669334400000,
                16596.03575847268
            ],
            [
                1669248000000,
                16608.00998544357
            ],
            [
                1669161600000,
                16171.628978315088
            ],
            [
                1669075200000,
                15814.335280855257
            ],
            [
                1668988800000,
                16304.07685562355
            ],
            [
                1668902400000,
                16712.729525794817
            ],
            [
                1668816000000,
                16707.022778986535
            ],
            [
                1668729600000,
                16718.361228055077
            ],
            [
                1668643200000,
                16689.39673273771
            ],
            [
                1668556800000,
                16890.52938386464
            ],
            [
                1668470400000,
                16645.828500283515
            ],
            [
                1668384000000,
                16344.342316001042
            ],
            [
                1668297600000,
                16797.98748257006
            ],
            [
                1668211200000,
                17080.215260565037
            ],
            [
                1668124800000,
                17594.923500278233
            ],
            [
                1668038400000,
                15742.444335961438
            ],
            [
                1667952000000,
                18562.353215089643
            ],
            [
                1667865600000,
                20597.755017060834
            ],
            [
                1667779200000,
                20906.99792695512
            ],
            [
                1667692800000,
                21282.985109422694
            ],
            [
                1667606400000,
                21150.315583912397
            ],
            [
                1667520000000,
                20210.912417111318
            ],
            [
                1667433600000,
                20162.980904822525
            ],
            [
                1667347200000,
                20489.646203160763
            ],
            [
                1667260800000,
                20494.60120983709
            ],
            [
                1667174400000,
                20623.871497040946
            ],
            [
                1667088000000,
                20800.70708772471
            ],
            [
                1667001600000,
                20591.241208098614
            ],
            [
                1666915200000,
                20278.36623205219
            ],
            [
                1666828800000,
                20774.247496426033
            ],
            [
                1666742400000,
                20095.152230674925
            ],
            [
                1666656000000,
                19316.94062294213
            ],
            [
                1666569600000,
                19574.824231840797
            ],
            [
                1666483200000,
                19203.86547117714
            ],
            [
                1666396800000,
                19173.28046885863
            ],
            [
                1666310400000,
                19031.15987195947
            ],
            [
                1666224000000,
                19134.242664465204
            ],
            [
                1666137600000,
                19348.029368810374
            ],
            [
                1666051200000,
                19557.895548868444
            ],
            [
                1665964800000,
                19272.921847772006
            ],
            [
                1665878400000,
                19072.780513358884
            ],
            [
                1665792000000,
                19198.107144951755
            ],
            [
                1665705600000,
                19383.9432200889
            ],
            [
                1665619200000,
                19153.039779986986
            ],
            [
                1665532800000,
                19058.628039738272
            ],
            [
                1665446400000,
                19142.694767392895
            ],
            [
                1665360000000,
                19448.14900175761
            ],
            [
                1665273600000,
                19418.037989243952
            ],
            [
                1665187200000,
                19457.308951251147
            ],
            [
                1665100800000,
                19949.051041418512
            ],
            [
                1665014400000,
                20161.830614985047
            ],
            [
                1664928000000,
                20345.398520106643
            ],
            [
                1664841600000,
                19620.567543591394
            ],
            [
                1664755200000,
                19065.153837148988
            ],
            [
                1664668800000,
                19314.463835217448
            ],
            [
                1664582400000,
                19476.92659600407
            ],
            [
                1664496000000,
                19563.765161776904
            ],
            [
                1664409600000,
                19444.787771362975
            ],
            [
                1664323200000,
                19116.331160710437
            ],
            [
                1664236800000,
                19219.727780656474
            ],
            [
                1664150400000,
                18809.41143933244
            ],
            [
                1664064000000,
                18939.970580499372
            ],
            [
                1663977600000,
                19291.904802452067
            ],
            [
                1663891200000,
                19464.322663348466
            ],
            [
                1663804800000,
                18539.63523831258
            ],
            [
                1663718400000,
                18869.928809390534
            ],
            [
                1663632000000,
                19570.386709523507
            ],
            [
                1663545600000,
                19437.157867982634
            ],
            [
                1663459200000,
                20131.675305714027
            ],
            [
                1663372800000,
                19764.411712043777
            ],
            [
                1663286400000,
                19702.169889811717
            ],
            [
                1663200000000,
                20255.922978327133
            ],
            [
                1663113600000,
                20184.96749189655
            ],
            [
                1663027200000,
                22339.67050262336
            ],
            [
                1662940800000,
                21739.80437979554
            ],
            [
                1662854400000,
                21707.38731931814
            ],
            [
                1662768000000,
                21359.58252557909
            ],
            [
                1662681600000,
                19322.77774937157
            ],
            [
                1662595200000,
                19280.62547645678
            ],
            [
                1662508800000,
                18859.500087680277
            ],
            [
                1662422400000,
                19785.73350185514
            ],
            [
                1662336000000,
                19980.013222242276
            ],
            [
                1662249600000,
                19814.5642451146
            ],
            [
                1662163200000,
                19941.451370047158
            ],
            [
                1662076800000,
                20153.975977982507
            ],
            [
                1661990400000,
                20023.55444491251
            ],
            [
                1661904000000,
                19805.35069885804
            ],
            [
                1661817600000,
                20308.861447891457
            ],
            [
                1661731200000,
                19659.24670619362
            ],
            [
                1661644800000,
                20069.953331596196
            ],
            [
                1661558400000,
                20271.322951706014
            ],
            [
                1661472000000,
                21618.009019176647
            ],
            [
                1661385600000,
                21395.45846975991
            ],
            [
                1661299200000,
                21562.45153991356
            ],
            [
                1661212800000,
                21387.747114773963
            ],
            [
                1661126400000,
                21615.761693416986
            ],
            [
                1661040000000,
                21175.232732989512
            ],
            [
                1660953600000,
                20945.8339660496
            ],
            [
                1660867200000,
                23248.38422819264
            ],
            [
                1660780800000,
                23359.418837070007
            ],
            [
                1660694400000,
                23913.333725628458
            ],
            [
                1660608000000,
                24179.014652309197
            ],
            [
                1660521600000,
                24312.541424891562
            ],
            [
                1660435200000,
                24433.653747243658
            ],
            [
                1660348800000,
                24411.379871522615
            ],
            [
                1660262400000,
                23948.75170368143
            ],
            [
                1660176000000,
                23948.829553271633
            ],
            [
                1660089600000,
                23203.680696781623
            ],
            [
                1660003200000,
                23823.679442453606
            ],
            [
                1659916800000,
                23197.603469525384
            ],
            [
                1659830400000,
                22984.57953144855
            ],
            [
                1659744000000,
                23225.036201942938
            ],
            [
                1659657600000,
                22678.363633874185
            ],
            [
                1659571200000,
                22860.42098438317
            ],
            [
                1659484800000,
                23053.846847482677
            ],
            [
                1659398400000,
                23333.749243312184
            ],
            [
                1659312000000,
                23379.70052509082
            ],
            [
                1659225600000,
                23653.459549430798
            ],
            [
                1659139200000,
                23847.58331873861
            ],
            [
                1659052800000,
                23822.067597823116
            ],
            [
                1658966400000,
                22908.884260468687
            ],
            [
                1658880000000,
                21235.612316085775
            ],
            [
                1658793600000,
                21330.295450788173
            ],
            [
                1658707200000,
                22613.719208248454
            ],
            [
                1658620800000,
                22506.199573628986
            ],
            [
                1658534400000,
                22696.902754290055
            ],
            [
                1658448000000,
                23155.207555248304
            ],
            [
                1658361600000,
                23313.296731959555
            ],
            [
                1658275200000,
                23366.90769792785
            ],
            [
                1658188800000,
                22395.365383103952
            ],
            [
                1658102400000,
                20824.36275165164
            ],
            [
                1658016000000,
                21193.08334336837
            ],
            [
                1657929600000,
                20794.811981436706
            ],
            [
                1657843200000,
                20574.84059150044
            ],
            [
                1657756800000,
                20225.23866433186
            ],
            [
                1657670400000,
                19350.73735007727
            ],
            [
                1657584000000,
                19998.467839575842
            ],
            [
                1657497600000,
                20859.81407965063
            ],
            [
                1657411200000,
                21589.628101459668
            ],
            [
                1657324800000,
                21858.818749217564
            ],
            [
                1657238400000,
                21660.596837075183
            ],
            [
                1657152000000,
                20566.68722377
            ],
            [
                1657065600000,
                20188.779663973284
            ],
            [
                1656979200000,
                20257.012328592882
            ],
            [
                1656892800000,
                19310.233218521833
            ],
            [
                1656806400000,
                19268.227002666128
            ],
            [
                1656720000000,
                19407.447430262473
            ],
            [
                1656633600000,
                19608.397493423083
            ],
            [
                1656547200000,
                20108.529472889782
            ],
            [
                1656460800000,
                20282.542479269694
            ],
            [
                1656374400000,
                20751.477530790766
            ],
            [
                1656288000000,
                21052.80539783573
            ],
            [
                1656201600000,
                21525.88036221139
            ],
            [
                1656115200000,
                21262.71348295613
            ],
            [
                1656028800000,
                21100.270533511088
            ],
            [
                1655942400000,
                19983.566482863105
            ],
            [
                1655856000000,
                20700.923933039136
            ],
            [
                1655769600000,
                20636.75891240637
            ],
            [
                1655683200000,
                20516.41197977524
            ],
            [
                1655596800000,
                19047.41782828195
            ],
            [
                1655510400000,
                20473.05288079512
            ],
            [
                1655424000000,
                20408.690490591813
            ],
            [
                1655337600000,
                22529.198114649807
            ],
            [
                1655251200000,
                22244.848968001315
            ],
            [
                1655164800000,
                22525.768350391198
            ],
            [
                1655078400000,
                26767.269173221313
            ],
            [
                1654992000000,
                28374.14499732395
            ],
            [
                1654905600000,
                29101.2982596468
            ],
            [
                1654819200000,
                30101.187521431468
            ],
            [
                1654732800000,
                30229.236836130378
            ],
            [
                1654646400000,
                31265.469277693348
            ],
            [
                1654560000000,
                31372.5847629755
            ],
            [
                1654473600000,
                29917.764052456198
            ],
            [
                1654387200000,
                29872.3603087139
            ],
            [
                1654300800000,
                29714.143487149733
            ],
            [
                1654214400000,
                30481.013996026013
            ],
            [
                1654128000000,
                29833.450330205254
            ],
            [
                1654041600000,
                31865.749621173167
            ],
            [
                1653955200000,
                31740.94072516695
            ],
            [
                1653868800000,
                29492.503214953642
            ],
            [
                1653782400000,
                29088.236452817226
            ],
            [
                1653696000000,
                28646.65218193245
            ],
            [
                1653609600000,
                29346.781442431617
            ],
            [
                1653523200000,
                29584.949851985926
            ],
            [
                1653436800000,
                29655.02613175249
            ],
            [
                1653350400000,
                29163.167775739188
            ],
            [
                1653264000000,
                30351.050417138096
            ],
            [
                1653177600000,
                29491.507947760598
            ],
            [
                1653091200000,
                29256.813374416255
            ],
            [
                1653004800000,
                30382.40624219559
            ],
            [
                1652918400000,
                28772.200501112577
            ],
            [
                1652832000000,
                30502.19328027689
            ],
            [
                1652745600000,
                29923.606993639707
            ],
            [
                1652659200000,
                31319.309111130002
            ],
            [
                1652572800000,
                30189.333177005963
            ],
            [
                1652486400000,
                29310.728959858257
            ],
            [
                1652400000000,
                29126.11597686014
            ],
            [
                1652313600000,
                28913.48836365432
            ],
            [
                1652227200000,
                31026.93386836242
            ],
            [
                1652140800000,
                30269.586956629482
            ],
            [
                1652054400000,
                34070.31219757961
            ],
            [
                1651968000000,
                35573.31019883488
            ],
            [
                1651881600000,
                36116.394294982965
            ],
            [
                1651795200000,
                36612.229548803036
            ],
            [
                1651708800000,
                39699.02404125388
            ],
            [
                1651622400000,
                37758.496107734
            ],
            [
                1651536000000,
                38561.56539902362
            ],
            [
                1651449600000,
                38537.65476669535
            ],
            [
                1651363200000,
                37820.61176529208
            ],
            [
                1651276800000,
                38650.55013809267
            ],
            [
                1651190400000,
                39741.766645809636
            ],
            [
                1651104000000,
                39237.94931747103
            ],
            [
                1651017600000,
                38134.21545068938
            ],
            [
                1650931200000,
                40488.877917622376
            ],
            [
                1650844800000,
                39469.04986198146
            ],
            [
                1650758400000,
                39561.78019075613
            ],
            [
                1650672000000,
                39756.848993471016
            ],
            [
                1650585600000,
                40528.54148675958
            ],
            [
                1650499200000,
                41397.220477279625
            ],
            [
                1650412800000,
                41498.12244669832
            ],
            [
                1650326400000,
                40833.5379650337
            ],
            [
                1650240000000,
                39739.11925622209
            ],
            [
                1650153600000,
                40450.37930543977
            ],
            [
                1650067200000,
                40586.59730938673
            ],
            [
                1649980800000,
                39959.457069033735
            ],
            [
                1649894400000,
                41205.16871904067
            ],
            [
                1649808000000,
                40205.67794073206
            ],
            [
                1649721600000,
                39603.965159284155
            ],
            [
                1649635200000,
                42274.907370256085
            ],
            [
                1649548800000,
                42796.39747810973
            ],
            [
                1649462400000,
                42315.70972421807
            ],
            [
                1649376000000,
                43515.15032279806
            ],
            [
                1649289600000,
                43198.77526936491
            ],
            [
                1649203200000,
                45635.45438126673
            ],
            [
                1649116800000,
                46622.63571309101
            ],
            [
                1649030400000,
                46434.562982661664
            ],
            [
                1648944000000,
                45842.14476317382
            ],
            [
                1648857600000,
                46270.20070585378
            ],
            [
                1648771200000,
                45528.40715313835
            ]
        ]
    }
}

let ethereum = {
    "time": 1680220800000,
    "coin": {
        "info": {
            "id": "ethereum",
            "symbol": "eth",
            "name": "Ethereum",
            "asset_platform_id": null,
            "platforms": {
                "": ""
            },
            "detail_platforms": {
                "": {
                    "decimal_place": null,
                    "contract_address": ""
                }
            },
            "block_time_in_minutes": 0,
            "hashing_algorithm": "Ethash",
            "categories": [
                "Smart Contract Platform",
                "Layer 1 (L1)",
                "Ethereum Ecosystem"
            ],
            "public_notice": null,
            "additional_notices": [],
            "localization": {
                "en": "Ethereum",
                "de": "Ethereum",
                "es": "Ethereum",
                "fr": "Ethereum",
                "it": "Ethereum",
                "pl": "Ethereum",
                "ro": "Ethereum",
                "hu": "Ethereum",
                "nl": "Ethereum",
                "pt": "Ethereum",
                "sv": "Ethereum",
                "vi": "Ethereum",
                "tr": "Ethereum",
                "ru": "Эфириум",
                "ja": "イーサリアム",
                "zh": "以太坊",
                "zh-tw": "以太幣",
                "ko": "이더리움",
                "ar": "يثريوم",
                "th": "Ethereum",
                "id": "Ethereum",
                "cs": "Ethereum",
                "da": "Ethereum",
                "el": "Ethereum",
                "hi": "Ethereum",
                "no": "Ethereum",
                "sk": "Ethereum",
                "uk": "Ethereum",
                "he": "Ethereum",
                "fi": "Ethereum",
                "bg": "Ethereum",
                "hr": "Ethereum",
                "lt": "Ethereum",
                "sl": "Ethereum"
            },
            "description": {
                "en": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "de": "",
                "es": "",
                "fr": "",
                "it": "",
                "pl": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "ro": "",
                "hu": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "nl": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "pt": "",
                "sv": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "vi": "",
                "tr": "",
                "ru": "",
                "ja": "イーサリアム (Ethereum, ETH)・プロジェクトにより開発が進められている、分散型アプリケーション（DApps）やスマート・コントラクトを構築するためのプラットフォームの名称、及び関連するオープンソース・ソフトウェア・プロジェクトの総称である。\r\n\r\nイーサリアムでは、イーサリアム・ネットワークと呼ばれるP2Pのネットワーク上でスマート・コントラクトの履行履歴をブロックチェーンに記録していく。またイーサリアムは、スマート・コントラクトを記述するチューリング完全なプログラミング言語を持ち、ネットワーク参加者はこのネットワーク上のブロックチェーンに任意のDAppsやスマート・コントラクトを記述しそれを実行することが可能になる。ネットワーク参加者が「Ether」と呼ばれるイーサリアム内部通貨の報酬を目当てに、採掘と呼ばれるブロックチェーンへのスマート・コントラクトの履行結果の記録を行うことで、その正統性を保証していく。このような仕組みにより特定の中央管理組織に依拠せず、P2P全体を実行環境としてプログラムの実行とその結果を共有することが可能になった。",
                "zh": "Ethereum（以太坊）是一个平台和一种编程语言，使开发人员能够建立和发布下一代分布式应用。Ethereum 是使用甲醚作为燃料，以激励其网络的第一个图灵完备cryptocurrency。\r\nEthereum（以太坊） 是由Vitalik Buterin的创建。该项目于2014年8月获得了美国1800万$比特币的价值及其crowdsale期间。\r\n在2016年，Ethereum（以太坊）的价格上涨超过50倍。",
                "zh-tw": "",
                "ko": "이더리움(Ethereum/ETH)은 블록체인 기술에 기반한 클라우드 컴퓨팅 플랫폼 또는 프로그래밍 언어이다. 비탈릭 부테린이 개발하였다.\r\n\r\n비탈릭 부테린은 가상화폐인 비트코인에 사용된 핵심 기술인 블록체인(blockchain)에 화폐 거래 기록뿐 아니라 계약서 등의 추가 정보를 기록할 수 있다는 점에 착안하여, 전 세계 수많은 사용자들이 보유하고 있는 컴퓨팅 자원을 활용해 분산 네트워크를 구성하고, 이 플랫폼을 이용하여 SNS, 이메일, 전자투표 등 다양한 정보를 기록하는 시스템을 창안했다. 이더리움은 C++, 자바, 파이썬, GO 등 주요 프로그래밍 언어를 지원한다.\r\n\r\n이더리움을 사물 인터넷(IoT)에 적용하면 기계 간 금융 거래도 가능해진다. 예를 들어 고장난 청소로봇이 정비로봇에 돈을 내고 정비를 받고, 청소로봇은 돈을 벌기 위해 정비로봇의 집을 청소하는 것도 가능해진다.",
                "ar": "",
                "th": "",
                "id": "",
                "cs": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "da": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "el": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "hi": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "no": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "sk": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "uk": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "he": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "fi": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "bg": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "hr": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "lt": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
                "sl": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand."
            },
            "links": {
                "homepage": [
                    "https://www.ethereum.org/",
                    "",
                    ""
                ],
                "blockchain_site": [
                    "https://etherscan.io/",
                    "https://ethplorer.io/",
                    "https://blockchair.com/ethereum",
                    "https://eth.tokenview.io/",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "official_forum_url": [
                    "",
                    "",
                    ""
                ],
                "chat_url": [
                    "",
                    "https://discord.com/invite/CetY6Y4",
                    ""
                ],
                "announcement_url": [
                    "",
                    ""
                ],
                "twitter_screen_name": "ethereum",
                "facebook_username": "",
                "bitcointalk_thread_identifier": null,
                "telegram_channel_identifier": "",
                "subreddit_url": "https://www.reddit.com/r/ethereum",
                "repos_url": {
                    "github": [
                        "https://github.com/ethereum/go-ethereum",
                        "https://github.com/ethereum/py-evm",
                        "https://github.com/ethereum/aleth",
                        "https://github.com/ethereum/web3.py",
                        "https://github.com/ethereum/solidity",
                        "https://github.com/ethereum/sharding",
                        "https://github.com/ethereum/casper",
                        "https://github.com/paritytech/parity"
                    ],
                    "bitbucket": []
                }
            },
            "image": {
                "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
                "small": "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
                "large": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            },
            "country_origin": "",
            "genesis_date": "2015-07-30",
            "sentiment_votes_up_percentage": 72.77,
            "sentiment_votes_down_percentage": 27.23,
            "ico_data": {
                "ico_start_date": "2014-07-20T00:00:00.000Z",
                "ico_end_date": "2014-09-01T00:00:00.000Z",
                "short_desc": "A decentralized platform for applications",
                "description": null,
                "links": {},
                "softcap_currency": "",
                "hardcap_currency": "",
                "total_raised_currency": "",
                "softcap_amount": null,
                "hardcap_amount": null,
                "total_raised": null,
                "quote_pre_sale_currency": "",
                "base_pre_sale_amount": null,
                "quote_pre_sale_amount": null,
                "quote_public_sale_currency": "BTC",
                "base_public_sale_amount": 1,
                "quote_public_sale_amount": 0.00074794,
                "accepting_currencies": "",
                "country_origin": "",
                "pre_sale_start_date": null,
                "pre_sale_end_date": null,
                "whitelist_url": "",
                "whitelist_start_date": null,
                "whitelist_end_date": null,
                "bounty_detail_url": "",
                "amount_for_sale": null,
                "kyc_required": true,
                "whitelist_available": null,
                "pre_sale_available": null,
                "pre_sale_ended": false
            },
            "market_cap_rank": 2,
            "coingecko_rank": 2,
            "coingecko_score": 78.783,
            "developer_score": 97.494,
            "community_score": 72.746,
            "liquidity_score": 95.183,
            "public_interest_score": 0.236,
            "market_data": {
                "current_price": {
                    "aed": 6600.03,
                    "ars": 374848,
                    "aud": 2681.1,
                    "bch": 14.764115,
                    "bdt": 192770,
                    "bhd": 677.61,
                    "bmd": 1797.1,
                    "bnb": 5.682816,
                    "brl": 9154.98,
                    "btc": 0.06403675,
                    "cad": 2433.31,
                    "chf": 1642.54,
                    "clp": 1416765,
                    "cny": 12334.77,
                    "czk": 38787,
                    "dkk": 12277.69,
                    "dot": 289.822,
                    "eos": 1521,
                    "eth": 1,
                    "eur": 1648.2,
                    "gbp": 1450.22,
                    "hkd": 14107.22,
                    "huf": 628211,
                    "idr": 26928886,
                    "ils": 6490.27,
                    "inr": 147672,
                    "jpy": 239157,
                    "krw": 2336313,
                    "kwd": 551.1,
                    "lkr": 583670,
                    "ltc": 20.189312,
                    "mmk": 3774460,
                    "mxn": 32500,
                    "myr": 7922.53,
                    "ngn": 827296,
                    "nok": 18664.99,
                    "nzd": 2868.16,
                    "php": 97609,
                    "pkr": 509835,
                    "pln": 7705.35,
                    "rub": 138575,
                    "sar": 6746.5,
                    "sek": 18590.8,
                    "sgd": 2385.98,
                    "thb": 61181,
                    "try": 34483,
                    "twd": 54770,
                    "uah": 66354,
                    "usd": 1797.1,
                    "vef": 179.94,
                    "vnd": 42165719,
                    "xag": 75.32,
                    "xau": 0.906315,
                    "xdr": 1339.71,
                    "xlm": 16273,
                    "xrp": 3301,
                    "yfi": 0.20587367,
                    "zar": 32043,
                    "bits": 64037,
                    "link": 243.791,
                    "sats": 6403675
                },
                "total_value_locked": null,
                "mcap_to_tvl_ratio": null,
                "fdv_to_tvl_ratio": null,
                "roi": {
                    "times": 84.61748970308945,
                    "currency": "btc",
                    "percentage": 8461.748970308945
                },
                "ath": {
                    "aed": 17918.33,
                    "ars": 488484,
                    "aud": 6693.75,
                    "bch": 14.918323,
                    "bdt": 418411,
                    "bhd": 1839.17,
                    "bmd": 4878.26,
                    "bnb": 7747,
                    "brl": 26931,
                    "btc": 0.1474984,
                    "cad": 6108.18,
                    "chf": 4452.99,
                    "clp": 3990223,
                    "cny": 31155,
                    "czk": 107973,
                    "dkk": 31448,
                    "dot": 295.949,
                    "eos": 1613,
                    "eth": 1.003981,
                    "eur": 4228.93,
                    "gbp": 3610.11,
                    "hkd": 38002,
                    "huf": 1542639,
                    "idr": 69531233,
                    "ils": 15168.65,
                    "inr": 362338,
                    "jpy": 553787,
                    "krw": 5790811,
                    "kwd": 1471.83,
                    "lkr": 1064769,
                    "ltc": 32.998587,
                    "mmk": 8917781,
                    "mxn": 102241,
                    "myr": 20262,
                    "ngn": 2008213,
                    "nok": 43275,
                    "nzd": 6993.89,
                    "php": 244091,
                    "pkr": 839917,
                    "pln": 19645.56,
                    "rub": 403838,
                    "sar": 18294.87,
                    "sek": 43214,
                    "sgd": 6489.66,
                    "thb": 161550,
                    "try": 70272,
                    "twd": 135247,
                    "uah": 130195,
                    "usd": 4878.26,
                    "vef": 283483138,
                    "vnd": 110456068,
                    "xag": 211.07,
                    "xau": 2.69,
                    "xdr": 3455.91,
                    "xlm": 20808,
                    "xrp": 5418,
                    "yfi": 0.29805191,
                    "zar": 75832,
                    "bits": 147498,
                    "link": 2891,
                    "sats": 14749840
                },
                "ath_change_percentage": {
                    "aed": -63.11237,
                    "ars": -23.15235,
                    "aud": -59.9041,
                    "bch": -0.92057,
                    "bdt": -53.86134,
                    "bhd": -63.1034,
                    "bmd": -63.1077,
                    "bnb": -99.92664,
                    "brl": -65.95797,
                    "btc": -56.57135,
                    "cad": -60.12054,
                    "chf": -63.07457,
                    "clp": -64.44274,
                    "cny": -60.34587,
                    "czk": -64.02261,
                    "dkk": -60.90356,
                    "dot": -2.19097,
                    "eos": -5.63562,
                    "eth": -0.39652,
                    "eur": -60.96784,
                    "gbp": -59.76943,
                    "hkd": -62.82438,
                    "huf": -59.22272,
                    "idr": -61.202,
                    "ils": -57.1432,
                    "inr": -59.17978,
                    "jpy": -56.72938,
                    "krw": -59.60658,
                    "kwd": -62.50488,
                    "lkr": -45.10418,
                    "ltc": -38.88803,
                    "mmk": -57.61369,
                    "mxn": -68.14848,
                    "myr": -60.84274,
                    "ngn": -58.7448,
                    "nok": -56.82964,
                    "nzd": -58.98984,
                    "php": -59.93249,
                    "pkr": -39.21155,
                    "pln": -60.72275,
                    "rub": -65.61346,
                    "sar": -63.07251,
                    "sek": -56.90977,
                    "sgd": -63.18522,
                    "thb": -62.02418,
                    "try": -50.87432,
                    "twd": -59.43597,
                    "uah": -48.96099,
                    "usd": -63.1077,
                    "vef": -99.99994,
                    "vnd": -61.77061,
                    "xag": -64.29188,
                    "xau": -66.23055,
                    "xdr": -61.17813,
                    "xlm": -21.61294,
                    "xrp": -39.1438,
                    "yfi": -30.87395,
                    "zar": -57.69219,
                    "bits": -56.57135,
                    "link": -91.55697,
                    "sats": -56.57135
                },
                "ath_date": {
                    "aed": "2021-11-10T14:24:19.604Z",
                    "ars": "2021-11-10T14:24:19.604Z",
                    "aud": "2021-12-01T08:38:24.623Z",
                    "bch": "2023-03-30T20:46:25.881Z",
                    "bdt": "2021-11-10T14:24:19.604Z",
                    "bhd": "2021-11-10T14:24:19.604Z",
                    "bmd": "2021-11-10T14:24:19.604Z",
                    "bnb": "2017-10-19T00:00:00.000Z",
                    "brl": "2021-11-09T04:03:16.303Z",
                    "btc": "2017-06-12T00:00:00.000Z",
                    "cad": "2021-12-01T08:38:24.623Z",
                    "chf": "2021-11-10T16:19:02.090Z",
                    "clp": "2021-12-01T16:19:01.053Z",
                    "cny": "2021-11-10T14:24:19.604Z",
                    "czk": "2021-12-01T08:38:24.623Z",
                    "dkk": "2021-12-01T08:38:24.623Z",
                    "dot": "2023-03-26T00:24:54.666Z",
                    "eos": "2023-01-20T20:30:14.748Z",
                    "eth": "2019-10-15T16:26:30.106Z",
                    "eur": "2021-12-01T08:38:24.623Z",
                    "gbp": "2021-11-12T02:17:36.494Z",
                    "hkd": "2021-11-10T14:24:19.604Z",
                    "huf": "2021-12-01T08:38:24.623Z",
                    "idr": "2021-11-10T14:24:19.604Z",
                    "ils": "2021-11-10T14:24:19.604Z",
                    "inr": "2021-11-10T14:24:19.604Z",
                    "jpy": "2021-11-10T16:19:02.090Z",
                    "krw": "2021-11-08T23:48:45.609Z",
                    "kwd": "2021-11-10T14:24:19.604Z",
                    "lkr": "2022-04-03T22:43:06.993Z",
                    "ltc": "2022-05-12T05:31:14.227Z",
                    "mmk": "2021-11-10T14:24:19.604Z",
                    "mxn": "2021-12-01T08:38:24.623Z",
                    "myr": "2021-11-10T14:24:19.604Z",
                    "ngn": "2021-11-09T04:03:16.303Z",
                    "nok": "2021-12-01T08:38:24.623Z",
                    "nzd": "2021-12-01T08:38:24.623Z",
                    "php": "2021-11-10T14:24:19.604Z",
                    "pkr": "2021-12-01T08:38:24.623Z",
                    "pln": "2021-12-01T08:38:24.623Z",
                    "rub": "2022-03-07T16:44:57.811Z",
                    "sar": "2021-11-10T14:24:19.604Z",
                    "sek": "2021-12-01T08:38:24.623Z",
                    "sgd": "2021-11-09T00:00:00.000Z",
                    "thb": "2021-12-01T08:38:24.623Z",
                    "try": "2021-12-20T16:43:34.305Z",
                    "twd": "2021-11-10T14:24:19.604Z",
                    "uah": "2021-12-01T08:38:24.623Z",
                    "usd": "2021-11-10T14:24:19.604Z",
                    "vef": "2021-01-04T06:47:56.457Z",
                    "vnd": "2021-11-10T14:24:19.604Z",
                    "xag": "2021-12-01T16:19:01.053Z",
                    "xau": "2021-12-01T08:38:24.623Z",
                    "xdr": "2021-11-10T14:24:19.604Z",
                    "xlm": "2023-03-18T12:55:22.278Z",
                    "xrp": "2021-12-04T07:02:03.517Z",
                    "yfi": "2020-07-19T00:00:00.000Z",
                    "zar": "2021-12-01T08:38:24.623Z",
                    "bits": "2017-06-12T00:00:00.000Z",
                    "link": "2017-11-29T00:00:00.000Z",
                    "sats": "2017-06-12T00:00:00.000Z"
                },
                "atl": {
                    "aed": 1.59,
                    "ars": 4.1,
                    "aud": 0.596152,
                    "bch": 0.20411961,
                    "bdt": 33.7,
                    "bhd": 0.163288,
                    "bmd": 0.432979,
                    "bnb": 3.541506,
                    "brl": 1.69,
                    "btc": 0.00160204,
                    "cad": 0.561954,
                    "chf": 0.413801,
                    "clp": 297.03,
                    "cny": 2.81,
                    "czk": 10.33,
                    "dkk": 2.84,
                    "dot": 40.15685,
                    "eos": 30.013555,
                    "eth": 0.99987722,
                    "eur": 0.381455,
                    "gbp": 0.280314,
                    "hkd": 3.35,
                    "huf": 118.42,
                    "idr": 5876.48,
                    "ils": 1.67,
                    "inr": 28.13,
                    "jpy": 51.85,
                    "krw": 489.4,
                    "kwd": 0.130639,
                    "lkr": 61.02,
                    "ltc": 0.13982924,
                    "mmk": 468.1,
                    "mxn": 7.16,
                    "myr": 1.85,
                    "ngn": 86.13,
                    "nok": 3.52,
                    "nzd": 0.641302,
                    "php": 20.05,
                    "pkr": 45.2,
                    "pln": 1.62,
                    "rub": 26.88,
                    "sar": 1.62,
                    "sek": 3.59,
                    "sgd": 0.601615,
                    "thb": 15.33,
                    "try": 1.26,
                    "twd": 14.02,
                    "uah": 9.54,
                    "usd": 0.432979,
                    "vef": 2.74,
                    "vnd": 9662,
                    "xag": 0.02721328,
                    "xau": 0.00036799,
                    "xdr": 0.306291,
                    "xlm": 664.668,
                    "xrp": 286.238,
                    "yfi": 0.00878891,
                    "zar": 5.74,
                    "bits": 7718.95,
                    "link": 21.519699,
                    "sats": 771895
                },
                "atl_change_percentage": {
                    "aed": 415508.96394,
                    "ars": 9145861.56073,
                    "aud": 450107.35294,
                    "bch": 7141.3371,
                    "bdt": 572735.46791,
                    "bhd": 415478.77538,
                    "bmd": 415555.92688,
                    "bnb": 60.47161,
                    "brl": 541898.7298,
                    "btc": 3898.42775,
                    "cad": 433371.53176,
                    "chf": 397261.26382,
                    "clp": 477571.82482,
                    "cny": 439125.88288,
                    "czk": 375894.75204,
                    "dkk": 432087.50301,
                    "dot": 620.83604,
                    "eos": 4972.204,
                    "eth": 0.01228,
                    "eur": 432622.31209,
                    "gbp": 518021.32795,
                    "hkd": 421055.98971,
                    "huf": 531119.49647,
                    "idr": 458962.91275,
                    "ils": 389662.02735,
                    "inr": 525676.08674,
                    "jpy": 462096.89286,
                    "krw": 477849.64413,
                    "kwd": 422335.17929,
                    "lkr": 957779.94143,
                    "ltc": 14321.93878,
                    "mmk": 807407.92391,
                    "mxn": 454925.71398,
                    "myr": 428747.61234,
                    "ngn": 961762.75819,
                    "nok": 531267.19363,
                    "nzd": 447146.97373,
                    "php": 487762.38939,
                    "pkr": 1129608.05202,
                    "pln": 475033.99646,
                    "rub": 516490.9654,
                    "sar": 415964.91323,
                    "sek": 518021.9661,
                    "sgd": 397023.34153,
                    "thb": 400107.28468,
                    "try": 2749384.42839,
                    "twd": 391224.9372,
                    "uah": 696115.84757,
                    "usd": 415555.92688,
                    "vef": 6484.59652,
                    "vnd": 436938.90247,
                    "xag": 276857.1354,
                    "xau": 246559.05556,
                    "xdr": 437931.24893,
                    "xlm": 2354.00235,
                    "xrp": 1051.94292,
                    "yfi": 2244.22119,
                    "zar": 558592.992,
                    "bits": 729.86141,
                    "link": 1034.11994,
                    "sats": 729.86141
                },
                "atl_date": {
                    "aed": "2015-10-20T00:00:00.000Z",
                    "ars": "2015-10-20T00:00:00.000Z",
                    "aud": "2015-10-20T00:00:00.000Z",
                    "bch": "2017-11-12T00:00:00.000Z",
                    "bdt": "2015-10-20T00:00:00.000Z",
                    "bhd": "2015-10-20T00:00:00.000Z",
                    "bmd": "2015-10-20T00:00:00.000Z",
                    "bnb": "2021-04-12T21:29:59.636Z",
                    "brl": "2015-10-20T00:00:00.000Z",
                    "btc": "2015-10-20T00:00:00.000Z",
                    "cad": "2015-10-20T00:00:00.000Z",
                    "chf": "2015-10-20T00:00:00.000Z",
                    "clp": "2015-10-20T00:00:00.000Z",
                    "cny": "2015-10-20T00:00:00.000Z",
                    "czk": "2015-10-20T00:00:00.000Z",
                    "dkk": "2015-10-20T00:00:00.000Z",
                    "dot": "2021-03-03T00:43:22.672Z",
                    "eos": "2019-04-16T00:00:00.000Z",
                    "eth": "2019-10-22T00:00:00.000Z",
                    "eur": "2015-10-20T00:00:00.000Z",
                    "gbp": "2015-10-20T00:00:00.000Z",
                    "hkd": "2015-10-20T00:00:00.000Z",
                    "huf": "2015-10-20T00:00:00.000Z",
                    "idr": "2015-10-20T00:00:00.000Z",
                    "ils": "2015-10-20T00:00:00.000Z",
                    "inr": "2015-10-20T00:00:00.000Z",
                    "jpy": "2015-10-20T00:00:00.000Z",
                    "krw": "2015-10-20T00:00:00.000Z",
                    "kwd": "2015-10-20T00:00:00.000Z",
                    "lkr": "2015-10-20T00:00:00.000Z",
                    "ltc": "2015-10-20T00:00:00.000Z",
                    "mmk": "2015-10-20T00:00:00.000Z",
                    "mxn": "2015-10-20T00:00:00.000Z",
                    "myr": "2015-10-20T00:00:00.000Z",
                    "ngn": "2015-10-20T00:00:00.000Z",
                    "nok": "2015-10-20T00:00:00.000Z",
                    "nzd": "2015-10-20T00:00:00.000Z",
                    "php": "2015-10-20T00:00:00.000Z",
                    "pkr": "2015-10-20T00:00:00.000Z",
                    "pln": "2015-10-20T00:00:00.000Z",
                    "rub": "2015-10-20T00:00:00.000Z",
                    "sar": "2015-10-20T00:00:00.000Z",
                    "sek": "2015-10-20T00:00:00.000Z",
                    "sgd": "2015-10-20T00:00:00.000Z",
                    "thb": "2015-10-20T00:00:00.000Z",
                    "try": "2015-10-20T00:00:00.000Z",
                    "twd": "2015-10-20T00:00:00.000Z",
                    "uah": "2015-10-20T00:00:00.000Z",
                    "usd": "2015-10-20T00:00:00.000Z",
                    "vef": "2015-10-20T00:00:00.000Z",
                    "vnd": "2015-10-20T00:00:00.000Z",
                    "xag": "2015-10-20T00:00:00.000Z",
                    "xau": "2015-10-20T00:00:00.000Z",
                    "xdr": "2015-10-20T00:00:00.000Z",
                    "xlm": "2018-11-20T00:00:00.000Z",
                    "xrp": "2018-12-20T00:00:00.000Z",
                    "yfi": "2020-09-14T08:23:43.987Z",
                    "zar": "2015-10-20T00:00:00.000Z",
                    "bits": "2016-12-27T00:00:00.000Z",
                    "link": "2020-08-16T08:12:39.777Z",
                    "sats": "2016-12-27T00:00:00.000Z"
                },
                "market_cap": {
                    "aed": 795009604055,
                    "ars": 45152476725026,
                    "aud": 322952580745,
                    "bch": 1778344746,
                    "bdt": 23220238364429,
                    "bhd": 81621833139,
                    "bmd": 216470807169,
                    "bnb": 684517951,
                    "brl": 1102767449432,
                    "btc": 7713164,
                    "cad": 293105369381,
                    "chf": 197852802457,
                    "clp": 170657095902291,
                    "cny": 1485790679166,
                    "czk": 4672046353438,
                    "dkk": 1478914483976,
                    "dot": 34904952397,
                    "eos": 183160787230,
                    "eth": 120447241,
                    "eur": 198535118441,
                    "gbp": 174686962557,
                    "hkd": 1699291506861,
                    "huf": 75671457181827,
                    "idr": 3243730741304795,
                    "ils": 781787783624,
                    "inr": 17787944804446,
                    "jpy": 28807754626435,
                    "krw": 281421638976479,
                    "kwd": 66382504785,
                    "lkr": 70306171943733,
                    "ltc": 2431521369,
                    "mmk": 454654268608312,
                    "mxn": 3914852900571,
                    "myr": 954311553405,
                    "ngn": 99652336080257,
                    "nok": 2248299356233,
                    "nzd": 345485676475,
                    "php": 11757503655982,
                    "pkr": 61412441122931,
                    "pln": 928151705771,
                    "rub": 16692063507861,
                    "sar": 812652191310,
                    "sek": 2239362791900,
                    "sgd": 287403744791,
                    "thb": 7369532159262,
                    "try": 4153707005672,
                    "twd": 6597337712399,
                    "uah": 7992708102469,
                    "usd": 216470807169,
                    "vef": 21675221922,
                    "vnd": 5079090077094322,
                    "xag": 9072921459,
                    "xau": 109170557,
                    "xdr": 161375523212,
                    "xlm": 1960088903797,
                    "xrp": 397637863493,
                    "yfi": 24800514,
                    "zar": 3859698303612,
                    "bits": 7713164157244,
                    "link": 29364838576,
                    "sats": 771316415724359
                },
                "market_cap_rank": 2,
                "fully_diluted_valuation": {
                    "aed": 795009604055,
                    "ars": 45152476725026,
                    "aud": 322952580745,
                    "bch": 1778344746,
                    "bdt": 23220238364429,
                    "bhd": 81621833139,
                    "bmd": 216470807169,
                    "bnb": 684517951,
                    "brl": 1102767449432,
                    "btc": 7713164,
                    "cad": 293105369381,
                    "chf": 197852802457,
                    "clp": 170657095902291,
                    "cny": 1485790679166,
                    "czk": 4672046353438,
                    "dkk": 1478914483976,
                    "dot": 34904952397,
                    "eos": 183160787230,
                    "eth": 120447241,
                    "eur": 198535118441,
                    "gbp": 174686962557,
                    "hkd": 1699291506861,
                    "huf": 75671457181827,
                    "idr": 3243730741304795,
                    "ils": 781787783624,
                    "inr": 17787944804446,
                    "jpy": 28807754626435,
                    "krw": 281421638976479,
                    "kwd": 66382504785,
                    "lkr": 70306171943733,
                    "ltc": 2431521369,
                    "mmk": 454654268608312,
                    "mxn": 3914852900571,
                    "myr": 954311553405,
                    "ngn": 99652336080257,
                    "nok": 2248299356233,
                    "nzd": 345485676475,
                    "php": 11757503655982,
                    "pkr": 61412441122931,
                    "pln": 928151705771,
                    "rub": 16692063507861,
                    "sar": 812652191310,
                    "sek": 2239362791900,
                    "sgd": 287403744791,
                    "thb": 7369532159262,
                    "try": 4153707005672,
                    "twd": 6597337712399,
                    "uah": 7992708102469,
                    "usd": 216470807169,
                    "vef": 21675221922,
                    "vnd": 5079090077094322,
                    "xag": 9072921459,
                    "xau": 109170557,
                    "xdr": 161375523212,
                    "xlm": 1960088903797,
                    "xrp": 397637863493,
                    "yfi": 24800514,
                    "zar": 3859698303612,
                    "bits": 7713164157244,
                    "link": 29364838576,
                    "sats": 771316415724359
                },
                "total_volume": {
                    "aed": 33472383386,
                    "ars": 1901060067781,
                    "aud": 13597310703,
                    "bch": 74876942,
                    "bdt": 977644442138,
                    "bhd": 3436533694,
                    "bmd": 9114095996,
                    "bnb": 28820681,
                    "brl": 46429948349,
                    "btc": 324766,
                    "cad": 12340650033,
                    "chf": 8330219942,
                    "clp": 7185195892554,
                    "cny": 62556420691,
                    "czk": 196707720186,
                    "dkk": 62266911432,
                    "dot": 1469845905,
                    "eos": 7712877192,
                    "eth": 5071474,
                    "eur": 8358947573,
                    "gbp": 7354865845,
                    "hkd": 71545471290,
                    "huf": 3186004311463,
                    "idr": 136571179040333,
                    "ils": 32915703517,
                    "inr": 748927943899,
                    "jpy": 1212896300158,
                    "krw": 11848728549837,
                    "kwd": 2794910450,
                    "lkr": 2960109072526,
                    "ltc": 102391098,
                    "mmk": 19142362443617,
                    "mxn": 164827514686,
                    "myr": 40179492200,
                    "ngn": 4195674091965,
                    "nok": 94660413704,
                    "nzd": 14546024298,
                    "php": 495027566999,
                    "pkr": 2585655271908,
                    "pln": 39078081041,
                    "rub": 702787924058,
                    "sar": 34215191324,
                    "sek": 94284156479,
                    "sgd": 12100593858,
                    "thb": 310280284103,
                    "try": 174884017323,
                    "twd": 277768489979,
                    "uah": 336517934544,
                    "usd": 9114095996,
                    "vef": 912594432,
                    "vnd": 213845530224806,
                    "xag": 381998285,
                    "xau": 4596421,
                    "xdr": 6794412740,
                    "xlm": 82528671271,
                    "xrp": 16740270279,
                    "yfi": 1044099,
                    "zar": 162505334167,
                    "bits": 324765523955,
                    "link": 1236397911,
                    "sats": 32476552395547
                },
                "high_24h": {
                    "aed": 6672.15,
                    "ars": 378878,
                    "aud": 2704.43,
                    "bch": 14.918323,
                    "bdt": 194861,
                    "bhd": 684.94,
                    "bmd": 1816.59,
                    "bnb": 5.762037,
                    "brl": 9312.74,
                    "btc": 0.06423418,
                    "cad": 2456.39,
                    "chf": 1663.08,
                    "clp": 1436140,
                    "cny": 12482.88,
                    "czk": 39289,
                    "dkk": 12449.93,
                    "dot": 294.299,
                    "eos": 1572,
                    "eth": 1,
                    "eur": 1671.54,
                    "gbp": 1468.78,
                    "hkd": 14259.8,
                    "huf": 636438,
                    "idr": 27294443,
                    "ils": 6520.85,
                    "inr": 149144,
                    "jpy": 242014,
                    "krw": 2358061,
                    "kwd": 557.11,
                    "lkr": 589998,
                    "ltc": 20.294428,
                    "mmk": 3815388,
                    "mxn": 32873,
                    "myr": 8020.24,
                    "ngn": 836267,
                    "nok": 18880.64,
                    "nzd": 2903.49,
                    "php": 98711,
                    "pkr": 515364,
                    "pln": 7837.91,
                    "rub": 140377,
                    "sar": 6820.44,
                    "sek": 18907.59,
                    "sgd": 2411.77,
                    "thb": 62115,
                    "try": 34859,
                    "twd": 55318,
                    "uah": 67074,
                    "usd": 1816.59,
                    "vef": 181.9,
                    "vnd": 42652964,
                    "xag": 76.78,
                    "xau": 0.921638,
                    "xdr": 1354.24,
                    "xlm": 17468,
                    "xrp": 3414,
                    "yfi": 0.20730241,
                    "zar": 32832,
                    "bits": 64234,
                    "link": 248.91,
                    "sats": 6423418
                },
                "low_24h": {
                    "aed": 6486.04,
                    "ars": 368346,
                    "aud": 2635.08,
                    "bch": 14.57529,
                    "bdt": 189441,
                    "bhd": 665.85,
                    "bmd": 1766.06,
                    "bnb": 5.632215,
                    "brl": 9021.57,
                    "btc": 0.06280025,
                    "cad": 2390.53,
                    "chf": 1614.44,
                    "clp": 1396118,
                    "cny": 12135.85,
                    "czk": 38124,
                    "dkk": 12074.65,
                    "dot": 288.809,
                    "eos": 1479,
                    "eth": 1,
                    "eur": 1621,
                    "gbp": 1426.39,
                    "hkd": 13863.51,
                    "huf": 615393,
                    "idr": 26548591,
                    "ils": 6339.47,
                    "inr": 145054,
                    "jpy": 233854,
                    "krw": 2290809,
                    "kwd": 541.48,
                    "lkr": 573588,
                    "ltc": 19.860134,
                    "mmk": 3709265,
                    "mxn": 31970,
                    "myr": 7810.41,
                    "ngn": 815038,
                    "nok": 18391.85,
                    "nzd": 2824.55,
                    "php": 96038,
                    "pkr": 500740,
                    "pln": 7578.4,
                    "rub": 136472,
                    "sar": 6629.25,
                    "sek": 18325.26,
                    "sgd": 2345.29,
                    "thb": 60257,
                    "try": 33857,
                    "twd": 53822,
                    "uah": 65208,
                    "usd": 1766.06,
                    "vef": 176.84,
                    "vnd": 41466596,
                    "xag": 74.17,
                    "xau": 0.891278,
                    "xdr": 1316.57,
                    "xlm": 16021,
                    "xrp": 3242,
                    "yfi": 0.20261759,
                    "zar": 31481,
                    "bits": 62800,
                    "link": 242.574,
                    "sats": 6280025
                },
                "price_change_24h": -0.82726180947,
                "price_change_percentage_24h": -0.04601,
                "price_change_percentage_7d": -1.52627,
                "price_change_percentage_14d": 6.98362,
                "price_change_percentage_30d": 11.85524,
                "price_change_percentage_60d": 9.14579,
                "price_change_percentage_200d": 2.03175,
                "price_change_percentage_1y": -46.89081,
                "market_cap_change_24h": 55662721,
                "market_cap_change_percentage_24h": 0.02572,
                "price_change_24h_in_currency": {
                    "aed": -3.0471872355828964,
                    "ars": 299.58,
                    "aud": 0.349785,
                    "bch": 0.16283257,
                    "bdt": 694.92,
                    "bhd": -0.34248966771372125,
                    "bmd": -0.8272618094615609,
                    "bnb": -0.06341844450221412,
                    "brl": -78.28724268162114,
                    "btc": 0.0012365,
                    "cad": -2.867715433874764,
                    "chf": -7.665556861323466,
                    "clp": -7410.982960524969,
                    "cny": -33.54599336705178,
                    "czk": -288.40894576026767,
                    "dkk": -89.40657449474566,
                    "dot": -2.122945984602495,
                    "eos": -34.47513015030631,
                    "eth": 0,
                    "eur": -12.28165301646618,
                    "gbp": -8.033700855857887,
                    "hkd": -6.4400507561222184,
                    "huf": -3151.2811352310237,
                    "idr": -130002.81299221888,
                    "ils": 48.59,
                    "inr": -125.52810554855387,
                    "jpy": 1307.52,
                    "krw": 538.33,
                    "kwd": -0.3597643276193594,
                    "lkr": -268.6810835094657,
                    "ltc": 0.27770931,
                    "mmk": -307.4663510718383,
                    "mxn": -10.119121349787747,
                    "myr": -20.727319597450332,
                    "ngn": -326.8920711124083,
                    "nok": -109.7076579685563,
                    "nzd": -13.23159011473308,
                    "php": -199.55250186208286,
                    "pkr": 266.01,
                    "pln": -79.00074391115777,
                    "rub": -63.790156472532544,
                    "sar": -4.917933786435242,
                    "sek": -159.73686963789442,
                    "sgd": -3.0634757266720953,
                    "thb": -447.08101337153494,
                    "try": 39.5,
                    "twd": -10.828852775004634,
                    "uah": -30.544821510629845,
                    "usd": -0.8272618094615609,
                    "vef": -0.08283372498109999,
                    "vnd": -39215.40623423457,
                    "xag": -0.8842668372537048,
                    "xau": -0.006638042807345147,
                    "xdr": -0.14565275765153274,
                    "xlm": -1195.3475012942,
                    "xrp": -30.898675962326706,
                    "yfi": 0.00176069,
                    "zar": -535.790310835404,
                    "bits": 1236.5,
                    "link": 1.209715,
                    "sats": 123650
                },
                "price_change_percentage_1h_in_currency": {
                    "aed": -0.00037,
                    "ars": 0.01067,
                    "aud": 0.15199,
                    "bch": -0.3103,
                    "bdt": 0.00793,
                    "bhd": 0.01165,
                    "bmd": 0.00793,
                    "bnb": -0.16076,
                    "brl": 0.0001,
                    "btc": -0.03302,
                    "cad": 0.09938,
                    "chf": -0.05538,
                    "clp": 0.00793,
                    "cny": -0.02411,
                    "czk": -0.10822,
                    "dkk": -0.07156,
                    "dot": -0.40366,
                    "eos": 0.00151,
                    "eth": 0,
                    "eur": -0.07716,
                    "gbp": -0.07318,
                    "hkd": 0.00927,
                    "huf": 0.21259,
                    "idr": 0.0353,
                    "ils": 0.10023,
                    "inr": -0.02495,
                    "jpy": 0.11149,
                    "krw": 0.0749,
                    "kwd": 0.00337,
                    "lkr": 0.00793,
                    "ltc": 0.42411,
                    "mmk": 0.00793,
                    "mxn": -0.06225,
                    "myr": 0.00566,
                    "ngn": 0.00793,
                    "nok": -0.2096,
                    "nzd": 0.29947,
                    "php": -0.03073,
                    "pkr": 0.00793,
                    "pln": -0.01965,
                    "rub": 0.07282,
                    "sar": 0.01619,
                    "sek": -0.28082,
                    "sgd": -0.00148,
                    "thb": -0.08591,
                    "try": 0.00463,
                    "twd": -0.01995,
                    "uah": 0.00793,
                    "usd": 0.00793,
                    "vef": 0.00793,
                    "vnd": 0.00793,
                    "xag": 0.18819,
                    "xau": -0.09112,
                    "xdr": 0.00793,
                    "xlm": 0.48045,
                    "xrp": -0.19607,
                    "yfi": -0.08254,
                    "zar": -0.09371,
                    "bits": -0.03302,
                    "link": -0.61931,
                    "sats": -0.03302
                },
                "price_change_percentage_24h_in_currency": {
                    "aed": -0.04615,
                    "ars": 0.07998,
                    "aud": 0.01305,
                    "bch": 1.11519,
                    "bdt": 0.3618,
                    "bhd": -0.05052,
                    "bmd": -0.04601,
                    "bnb": -1.10365,
                    "brl": -0.84788,
                    "btc": 1.96894,
                    "cad": -0.11771,
                    "chf": -0.46452,
                    "clp": -0.52037,
                    "cny": -0.27123,
                    "czk": -0.73809,
                    "dkk": -0.72294,
                    "dot": -0.72717,
                    "eos": -2.21664,
                    "eth": 0,
                    "eur": -0.73964,
                    "gbp": -0.55091,
                    "hkd": -0.04563,
                    "huf": -0.49912,
                    "idr": -0.48044,
                    "ils": 0.75427,
                    "inr": -0.08493,
                    "jpy": 0.54972,
                    "krw": 0.02305,
                    "kwd": -0.06524,
                    "lkr": -0.04601,
                    "ltc": 1.39471,
                    "mmk": -0.00815,
                    "mxn": -0.03113,
                    "myr": -0.26094,
                    "ngn": -0.0395,
                    "nok": -0.58434,
                    "nzd": -0.45921,
                    "php": -0.20402,
                    "pkr": 0.0522,
                    "pln": -1.01487,
                    "rub": -0.04601,
                    "sar": -0.07284,
                    "sek": -0.85191,
                    "sgd": -0.12823,
                    "thb": -0.72546,
                    "try": 0.11469,
                    "twd": -0.01977,
                    "uah": -0.04601,
                    "usd": -0.04601,
                    "vef": -0.04601,
                    "vnd": -0.09292,
                    "xag": -1.16036,
                    "xau": -0.7271,
                    "xdr": -0.01087,
                    "xlm": -6.84298,
                    "xrp": -0.92741,
                    "yfi": 0.86261,
                    "zar": -1.64462,
                    "bits": 1.96894,
                    "link": 0.49868,
                    "sats": 1.96894
                },
                "price_change_percentage_7d_in_currency": {
                    "aed": -1.52145,
                    "ars": -0.18567,
                    "aud": -1.83218,
                    "bch": 4.4606,
                    "bdt": 0.61889,
                    "bhd": -1.56491,
                    "bmd": -1.52627,
                    "bnb": 3.04265,
                    "brl": -5.31957,
                    "btc": -0.14581,
                    "cad": -2.832,
                    "chf": -1.83623,
                    "clp": -3.83646,
                    "cny": -0.89384,
                    "czk": -2.52999,
                    "dkk": -2.15592,
                    "dot": 0.86307,
                    "eos": -2.82897,
                    "eth": 0,
                    "eur": -2.15401,
                    "gbp": -2.41412,
                    "hkd": -1.52088,
                    "huf": -2.82537,
                    "idr": -2.17804,
                    "ils": 0.20228,
                    "inr": -1.63768,
                    "jpy": 0.19928,
                    "krw": -0.50462,
                    "kwd": -1.31775,
                    "lkr": 0.05734,
                    "ltc": 4.05356,
                    "mmk": -1.40457,
                    "mxn": -4.18227,
                    "myr": -1.73802,
                    "ngn": -1.48525,
                    "nok": -1.7068,
                    "nzd": -1.82363,
                    "php": -1.48183,
                    "pkr": -1.12522,
                    "pln": -2.32232,
                    "rub": -0.07206,
                    "sar": -1.58259,
                    "sek": -1.44608,
                    "sgd": -1.5411,
                    "thb": -1.55225,
                    "try": -0.88213,
                    "twd": -1.12463,
                    "uah": -0.95759,
                    "usd": -1.52627,
                    "vef": -1.52627,
                    "vnd": -1.67646,
                    "xag": -4.84112,
                    "xau": -1.07315,
                    "xdr": -1.90878,
                    "xlm": -17.01943,
                    "xrp": -18.90514,
                    "yfi": -1.41183,
                    "zar": -3.01632,
                    "bits": -0.14581,
                    "link": 2.31346,
                    "sats": -0.14581
                },
                "price_change_percentage_14d_in_currency": {
                    "aed": 6.97765,
                    "ars": 9.95773,
                    "aud": 6.37215,
                    "bch": 11.71094,
                    "bdt": 6.9627,
                    "bhd": 6.98334,
                    "bmd": 6.98362,
                    "bnb": 12.18033,
                    "brl": 4.16995,
                    "btc": -4.10468,
                    "cad": 5.60431,
                    "chf": 5.24794,
                    "clp": 2.05345,
                    "cny": 6.44394,
                    "czk": 2.1639,
                    "dkk": 4.21404,
                    "dot": 5.76174,
                    "eos": -1.50162,
                    "eth": 0,
                    "eur": 4.15872,
                    "gbp": 4.57357,
                    "hkd": 6.98948,
                    "huf": 0.59439,
                    "idr": 3.9052,
                    "ils": 5.43936,
                    "inr": 6.40048,
                    "jpy": 6.7526,
                    "krw": 6.82744,
                    "kwd": 6.83173,
                    "lkr": 1.55448,
                    "ltc": -4.53879,
                    "mmk": 6.95923,
                    "mxn": 3.09029,
                    "myr": 4.71521,
                    "ngn": 6.97232,
                    "nok": 3.35989,
                    "nzd": 5.93449,
                    "php": 6.41446,
                    "pkr": 7.50975,
                    "pln": 3.63887,
                    "rub": 7.82106,
                    "sar": 6.89754,
                    "sek": 5.37402,
                    "sgd": 5.52358,
                    "thb": 5.78421,
                    "try": 7.99956,
                    "twd": 6.6784,
                    "uah": 7.44093,
                    "usd": 6.98362,
                    "vef": 6.98362,
                    "vnd": 6.46901,
                    "xag": -2.44845,
                    "xau": 3.68189,
                    "xdr": 5.80323,
                    "xlm": -17.51943,
                    "xrp": -27.59864,
                    "yfi": 2.07343,
                    "zar": 3.76469,
                    "bits": -4.10468,
                    "link": -2.66355,
                    "sats": -4.10468
                },
                "price_change_percentage_30d_in_currency": {
                    "aed": 11.84717,
                    "ars": 18.33925,
                    "aud": 12.34086,
                    "bch": 20.94616,
                    "bdt": 14.83739,
                    "bhd": 11.86385,
                    "bmd": 11.85524,
                    "bnb": 6.66308,
                    "brl": 8.80531,
                    "btc": -7.70946,
                    "cad": 10.99256,
                    "chf": 8.51868,
                    "clp": 6.70057,
                    "cny": 10.73079,
                    "czk": 8.64737,
                    "dkk": 8.60339,
                    "dot": 14.50549,
                    "eos": 8.75976,
                    "eth": 0,
                    "eur": 8.51098,
                    "gbp": 8.61344,
                    "hkd": 11.86586,
                    "huf": 9.36456,
                    "idr": 9.92109,
                    "ils": 10.47144,
                    "inr": 11.22817,
                    "jpy": 9.21826,
                    "krw": 9.99679,
                    "kwd": 11.72627,
                    "lkr": 0.37496,
                    "ltc": 17.78337,
                    "mmk": 11.88504,
                    "mxn": 10.51089,
                    "myr": 9.88609,
                    "ngn": 11.90866,
                    "nok": 11.84294,
                    "nzd": 10.39554,
                    "php": 9.54493,
                    "pkr": 21.3507,
                    "pln": 7.76005,
                    "rub": 14.93021,
                    "sar": 11.92205,
                    "sek": 10.53703,
                    "sgd": 10.14599,
                    "thb": 8.12038,
                    "try": 13.65891,
                    "twd": 10.98779,
                    "uah": 11.84456,
                    "usd": 11.85524,
                    "vef": 11.85524,
                    "vnd": 10.43458,
                    "xag": -2.07075,
                    "xau": 3.02596,
                    "xdr": 10.61537,
                    "xlm": -11.6215,
                    "xrp": -22.2566,
                    "yfi": 16.88804,
                    "zar": 8.74366,
                    "bits": -7.70946,
                    "link": 9.15691,
                    "sats": -7.70946
                },
                "price_change_percentage_60d_in_currency": {
                    "aed": 9.13464,
                    "ars": 22.6796,
                    "aud": 15.72412,
                    "bch": 22.79311,
                    "bdt": 10.39638,
                    "bhd": 9.19038,
                    "bmd": 9.14579,
                    "bnb": 9.52155,
                    "brl": 8.83123,
                    "btc": -7.54717,
                    "cad": 11.08507,
                    "chf": 8.33187,
                    "clp": 6.86425,
                    "cny": 10.42859,
                    "czk": 7.57966,
                    "dkk": 8.98776,
                    "dot": 16.48255,
                    "eos": 3.01773,
                    "eth": 0,
                    "eur": 8.82541,
                    "gbp": 9.19802,
                    "hkd": 9.44305,
                    "huf": 6.19711,
                    "idr": 9.17955,
                    "ils": 14.82137,
                    "inr": 10.02832,
                    "jpy": 11.86761,
                    "krw": 15.35723,
                    "kwd": 9.65678,
                    "lkr": -2.66121,
                    "ltc": 16.54439,
                    "mmk": 9.1078,
                    "mxn": 5.13348,
                    "myr": 13.37634,
                    "ngn": 9.31254,
                    "nok": 14.91981,
                    "nzd": 13.08346,
                    "php": 8.83086,
                    "pkr": 22.35613,
                    "pln": 7.96988,
                    "rub": 18.99931,
                    "sar": 9.15149,
                    "sek": 9.47893,
                    "sgd": 10.41689,
                    "thb": 13.36543,
                    "try": 11.30711,
                    "twd": 10.191,
                    "uah": 9.62007,
                    "usd": 9.14579,
                    "vef": 9.14579,
                    "vnd": 9.13297,
                    "xag": 8.13479,
                    "xau": 6.1322,
                    "xdr": 10.00102,
                    "xlm": -6.52573,
                    "xrp": -16.86298,
                    "yfi": -2.61425,
                    "zar": 13.08227,
                    "bits": -7.54717,
                    "link": 9.38123,
                    "sats": -7.54717
                },
                "price_change_percentage_200d_in_currency": {
                    "aed": 2.0198,
                    "ars": 50.80414,
                    "aud": 4.23958,
                    "bch": 9.64766,
                    "bdt": 16.07422,
                    "bhd": 2.68206,
                    "bmd": 2.03175,
                    "bnb": -4.89766,
                    "brl": 0.97139,
                    "btc": -21.0155,
                    "cad": 6.09447,
                    "chf": -2.81064,
                    "clp": -11.16554,
                    "cny": 1.10666,
                    "czk": -9.63578,
                    "dkk": -5.5656,
                    "dot": 26.46702,
                    "eos": 47.50154,
                    "eth": 0,
                    "eur": -5.7275,
                    "gbp": -4.29215,
                    "hkd": 2.04503,
                    "huf": -9.34334,
                    "idr": 3.09479,
                    "ils": 8.31297,
                    "inr": 5.25504,
                    "jpy": -4.73475,
                    "krw": -3.88415,
                    "kwd": 1.79341,
                    "lkr": -7.23214,
                    "ltc": -28.70369,
                    "mmk": 2.84132,
                    "mxn": -7.14403,
                    "myr": 0.00154,
                    "ngn": 9.9338,
                    "nok": 7.35542,
                    "nzd": -0.44583,
                    "php": -2.46739,
                    "pkr": 27.91203,
                    "pln": -6.12702,
                    "rub": 26.44918,
                    "sar": 1.93389,
                    "sek": -0.22651,
                    "sgd": -3.11117,
                    "thb": -4.30941,
                    "try": 7.43182,
                    "twd": 0.74846,
                    "uah": 2.80063,
                    "usd": 2.03175,
                    "vef": 2.03175,
                    "vnd": 1.76839,
                    "xag": -18.91876,
                    "xau": -11.56676,
                    "xdr": 3.02358,
                    "xlm": 5.72663,
                    "xrp": -33.56965,
                    "yfi": 18.58925,
                    "zar": 5.40315,
                    "bits": -21.0155,
                    "link": 10.81449,
                    "sats": -21.0155
                },
                "price_change_percentage_1y_in_currency": {
                    "aed": -46.89811,
                    "ars": -0.10621,
                    "aud": -40.60097,
                    "bch": 65.62899,
                    "bdt": -33.92858,
                    "bhd": -46.88701,
                    "bmd": -46.89081,
                    "bnb": -25.61514,
                    "brl": -43.29431,
                    "btc": -10.91645,
                    "cad": -42.40916,
                    "chf": -47.42211,
                    "clp": -46.82481,
                    "cny": -42.5736,
                    "czk": -47.64402,
                    "dkk": -45.55701,
                    "dot": 92.92739,
                    "eos": 32.15781,
                    "eth": 0,
                    "eur": -45.6408,
                    "gbp": -43.70499,
                    "hkd": -46.73658,
                    "huf": -43.58622,
                    "idr": -44.437,
                    "ils": -39.68908,
                    "inr": -42.44722,
                    "jpy": -42.11542,
                    "krw": -42.96405,
                    "kwd": -46.38518,
                    "lkr": -41.52755,
                    "ltc": -21.7979,
                    "mmk": -37.26742,
                    "mxn": -51.7,
                    "myr": -44.31398,
                    "ngn": -41.2133,
                    "nok": -35.66986,
                    "nzd": -40.95284,
                    "php": -44.5056,
                    "pkr": -17.46714,
                    "pln": -45.26562,
                    "rub": -50.95509,
                    "sar": -46.85628,
                    "sek": -40.62432,
                    "sgd": -47.87703,
                    "thb": -45.72053,
                    "try": -30.46276,
                    "twd": -43.20908,
                    "uah": -33.63843,
                    "usd": -46.89081,
                    "vef": -46.89081,
                    "vnd": -45.47647,
                    "xag": -44.61253,
                    "xau": -48.21541,
                    "xdr": -44.8332,
                    "xlm": 12.92658,
                    "xrp": -16.0496,
                    "yfi": 46.25819,
                    "zar": -34.65936,
                    "bits": -10.91645,
                    "link": 24.05987,
                    "sats": -10.91645
                },
                "market_cap_change_24h_in_currency": {
                    "aed": 203344556,
                    "ars": 71791109823,
                    "aud": 411128517,
                    "bch": 16339595,
                    "bdt": 100299442252,
                    "bhd": 11465752,
                    "bmd": 55662721,
                    "bnb": -7532879.225284696,
                    "brl": -8697449422.716309,
                    "btc": 154371,
                    "cad": -65734347.625427246,
                    "chf": -643168030.6252747,
                    "clp": -769668317643.0312,
                    "cny": -2452986172.1516113,
                    "czk": -27524723176.711914,
                    "dkk": -8170278263.354248,
                    "dot": -260989298.3065567,
                    "eos": -4320730506.138184,
                    "eth": -1557.2745990008116,
                    "eur": -1116725332.9231262,
                    "gbp": -740452023.3631287,
                    "hkd": 451018233,
                    "huf": -267366991006.15625,
                    "idr": -12521604204763,
                    "ils": 8274610187,
                    "inr": 2894129946,
                    "jpy": 175021077938,
                    "krw": 500268034497,
                    "kwd": 31785649,
                    "lkr": 18078340008,
                    "ltc": 30563813,
                    "mmk": 289040420875,
                    "mxn": 3886058245,
                    "myr": -1810554765.446289,
                    "ngn": 32116788079,
                    "nok": -10256053310.3125,
                    "nzd": -1225019084.0672607,
                    "php": -13640889662.216797,
                    "pkr": 76060883556,
                    "pln": -7640796560.277466,
                    "rub": -17351742684.054688,
                    "sar": -4854963.372680664,
                    "sek": -18554192966.55713,
                    "sgd": -52917048.50860596,
                    "thb": -45997256952.43164,
                    "try": 8000715788,
                    "twd": 6003299469,
                    "uah": 2055223470,
                    "usd": 55662721,
                    "vef": 5573508,
                    "vnd": -1077912823841,
                    "xag": -90902985.90319061,
                    "xau": -638486.82129848,
                    "xdr": 98196436,
                    "xlm": -146954325272.74805,
                    "xrp": -4065537949.475342,
                    "yfi": 226399,
                    "zar": -57781985315.921875,
                    "bits": 154371066799,
                    "link": 150431403,
                    "sats": 15437106679895
                },
                "market_cap_change_percentage_24h_in_currency": {
                    "aed": 0.02558,
                    "ars": 0.15925,
                    "aud": 0.12747,
                    "bch": 0.92733,
                    "bdt": 0.43382,
                    "bhd": 0.01405,
                    "bmd": 0.02572,
                    "bnb": -1.08849,
                    "brl": -0.78252,
                    "btc": 2.04227,
                    "cad": -0.02242,
                    "chf": -0.32402,
                    "clp": -0.44898,
                    "cny": -0.16482,
                    "czk": -0.58569,
                    "dkk": -0.54942,
                    "dot": -0.74216,
                    "eos": -2.30462,
                    "eth": -0.00129,
                    "eur": -0.55934,
                    "gbp": -0.42208,
                    "hkd": 0.02655,
                    "huf": -0.35208,
                    "idr": -0.38454,
                    "ils": 1.06974,
                    "inr": 0.01627,
                    "jpy": 0.61126,
                    "krw": 0.17808,
                    "kwd": 0.04791,
                    "lkr": 0.02572,
                    "ltc": 1.27298,
                    "mmk": 0.06361,
                    "mxn": 0.09936,
                    "myr": -0.18936,
                    "ngn": 0.03224,
                    "nok": -0.4541,
                    "nzd": -0.35333,
                    "php": -0.11588,
                    "pkr": 0.12401,
                    "pln": -0.81651,
                    "rub": -0.10384,
                    "sar": -0.0006,
                    "sek": -0.82174,
                    "sgd": -0.01841,
                    "thb": -0.62028,
                    "try": 0.19299,
                    "twd": 0.09108,
                    "uah": 0.02572,
                    "usd": 0.02572,
                    "vef": 0.02572,
                    "vnd": -0.02122,
                    "xag": -0.99198,
                    "xau": -0.58145,
                    "xdr": 0.06089,
                    "xlm": -6.97443,
                    "xrp": -1.01207,
                    "yfi": 0.92129,
                    "zar": -1.47498,
                    "bits": 2.04227,
                    "link": 0.51492,
                    "sats": 2.04227
                },
                "total_supply": 120447240.701977,
                "max_supply": null,
                "circulating_supply": 120447240.701977,
                "last_updated": "2023-03-31T07:10:49.489Z"
            },
            "community_data": {
                "facebook_likes": null,
                "twitter_followers": 3061168,
                "reddit_average_posts_48h": 0,
                "reddit_average_comments_48h": 0,
                "reddit_subscribers": 0,
                "reddit_accounts_active_48h": 0,
                "telegram_channel_user_count": null
            },
            "developer_data": {
                "forks": 16276,
                "stars": 41658,
                "subscribers": 2191,
                "total_issues": 7162,
                "closed_issues": 6917,
                "pull_requests_merged": 5145,
                "pull_request_contributors": 808,
                "code_additions_deletions_4_weeks": {
                    "additions": 4635,
                    "deletions": -3214
                },
                "commit_count_4_weeks": 81,
                "last_4_weeks_commit_activity_series": [
                    0,
                    5,
                    11,
                    3,
                    5,
                    6,
                    0,
                    0,
                    5,
                    4,
                    1,
                    3,
                    4,
                    0,
                    0,
                    4,
                    6,
                    1,
                    6,
                    2,
                    0,
                    1,
                    3,
                    6,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "public_interest_stats": {
                "alexa_rank": 8793,
                "bing_matches": null
            },
            "status_updates": [],
            "last_updated": "2023-03-31T07:10:49.489Z",
            "tickers": [
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 1797.77,
                    "volume": 446353.44699085364,
                    "converted_last": {
                        "btc": 0.06401323,
                        "eth": 0.99939074,
                        "usd": 1799.34
                    },
                    "converted_volume": {
                        "btc": 28573,
                        "eth": 446082,
                        "usd": 803140804
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:06:45+00:00",
                    "last_traded_at": "2023-03-31T07:06:45+00:00",
                    "last_fetch_at": "2023-03-31T07:06:45+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_USDT?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 1798.47,
                    "volume": 110927.29712297,
                    "converted_last": {
                        "btc": 0.06398344,
                        "eth": 0.99901381,
                        "usd": 1798.47
                    },
                    "converted_volume": {
                        "btc": 7098,
                        "eth": 110818,
                        "usd": 199499416
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:28+00:00",
                    "last_traded_at": "2023-03-31T07:07:28+00:00",
                    "last_fetch_at": "2023-03-31T07:07:28+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/ETH-USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.3,
                    "volume": 3963.29209857,
                    "converted_last": {
                        "btc": 0.06399277,
                        "eth": 0.99932737,
                        "usd": 1797.3
                    },
                    "converted_volume": {
                        "btc": 253.622,
                        "eth": 3961,
                        "usd": 7123225
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.055617,
                    "timestamp": "2023-03-31T07:08:29+00:00",
                    "last_traded_at": "2023-03-31T07:08:29+00:00",
                    "last_fetch_at": "2023-03-31T07:08:29+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/ETHUSD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 1798.74,
                    "volume": 113783.78579578704,
                    "converted_last": {
                        "btc": 0.06406132,
                        "eth": 1.000092,
                        "usd": 1800.67
                    },
                    "converted_volume": {
                        "btc": 7289,
                        "eth": 113794,
                        "usd": 204887387
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:05:57+00:00",
                    "last_traded_at": "2023-03-31T07:05:57+00:00",
                    "last_fetch_at": "2023-03-31T07:05:57+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_BUSD?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Gate.io",
                        "identifier": "gate",
                        "has_trading_incentive": false
                    },
                    "last": 1797.8,
                    "volume": 102195.15985782,
                    "converted_last": {
                        "btc": 0.0640143,
                        "eth": 0.99940742,
                        "usd": 1799.37
                    },
                    "converted_volume": {
                        "btc": 6525,
                        "eth": 101863,
                        "usd": 183397361
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:06:56+00:00",
                    "last_traded_at": "2023-03-31T07:06:56+00:00",
                    "last_fetch_at": "2023-03-31T07:06:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://gate.io/trade/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 1798.02,
                    "volume": 22092.57863563,
                    "converted_last": {
                        "btc": 0.06396744,
                        "eth": 0.99876384,
                        "usd": 1798.02
                    },
                    "converted_volume": {
                        "btc": 1413,
                        "eth": 22065,
                        "usd": 39722898
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:42+00:00",
                    "last_traded_at": "2023-03-31T07:07:42+00:00",
                    "last_fetch_at": "2023-03-31T07:07:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/ETH-USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 1648.78,
                    "volume": 8609.58944307,
                    "converted_last": {
                        "btc": 0.06395715,
                        "eth": 0.99860331,
                        "usd": 1797.73
                    },
                    "converted_volume": {
                        "btc": 550.645,
                        "eth": 8598,
                        "usd": 15477726
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011213,
                    "timestamp": "2023-03-31T07:07:42+00:00",
                    "last_traded_at": "2023-03-31T07:07:42+00:00",
                    "last_fetch_at": "2023-03-31T07:07:42+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/ETH-EUR",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.76,
                    "volume": 113811.28738,
                    "converted_last": {
                        "btc": 0.06401288,
                        "eth": 0.99933547,
                        "usd": 1799.31
                    },
                    "converted_volume": {
                        "btc": 7266,
                        "eth": 113437,
                        "usd": 204244205
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:05:58+00:00",
                    "last_traded_at": "2023-03-31T07:05:58+00:00",
                    "last_fetch_at": "2023-03-31T07:05:58+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/eth-usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064108,
                    "volume": 3708.72241597,
                    "converted_last": {
                        "btc": 0.064108,
                        "eth": 1.001127,
                        "usd": 1800.54
                    },
                    "converted_volume": {
                        "btc": 237.759,
                        "eth": 3713,
                        "usd": 6677689
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031187,
                    "timestamp": "2023-03-31T07:08:29+00:00",
                    "last_traded_at": "2023-03-31T07:08:29+00:00",
                    "last_fetch_at": "2023-03-31T07:08:29+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/ETHBTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Binance US",
                        "identifier": "binance_us",
                        "has_trading_incentive": false
                    },
                    "last": 1797.66,
                    "volume": 79719.25312463536,
                    "converted_last": {
                        "btc": 0.06405319,
                        "eth": 1.000244,
                        "usd": 1797.66
                    },
                    "converted_volume": {
                        "btc": 5106,
                        "eth": 79739,
                        "usd": 143308113
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.023938,
                    "timestamp": "2023-03-31T07:09:07+00:00",
                    "last_traded_at": "2023-03-31T07:09:07+00:00",
                    "last_fetch_at": "2023-03-31T07:09:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.us/trade/pro/ETH_USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 0.064109,
                    "volume": 70457.91569779594,
                    "converted_last": {
                        "btc": 0.064109,
                        "eth": 1.001142,
                        "usd": 1800.56
                    },
                    "converted_volume": {
                        "btc": 4517,
                        "eth": 70538,
                        "usd": 126864009
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011561,
                    "timestamp": "2023-03-31T07:08:46+00:00",
                    "last_traded_at": "2023-03-31T07:08:46+00:00",
                    "last_fetch_at": "2023-03-31T07:08:46+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Ace",
                        "identifier": "ace",
                        "has_trading_incentive": false
                    },
                    "last": 0.064163,
                    "volume": 20.003,
                    "converted_last": {
                        "btc": 0.064163,
                        "eth": 1.001958,
                        "usd": 1800.74
                    },
                    "converted_volume": {
                        "btc": 1.269738,
                        "eth": 19.828007,
                        "usd": 35635
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.107483,
                    "timestamp": "2023-03-31T07:09:12+00:00",
                    "last_traded_at": "2023-03-31T07:09:12+00:00",
                    "last_fetch_at": "2023-03-31T07:09:12+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://ace.io/trade/ETH/BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "WOO X",
                        "identifier": "wootrade",
                        "has_trading_incentive": false
                    },
                    "last": 1797.62,
                    "volume": 9932.112006,
                    "converted_last": {
                        "btc": 0.06400789,
                        "eth": 0.99939549,
                        "usd": 1799.16
                    },
                    "converted_volume": {
                        "btc": 635.734,
                        "eth": 9926,
                        "usd": 17869430
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.020579,
                    "timestamp": "2023-03-31T07:07:32+00:00",
                    "last_traded_at": "2023-03-31T07:07:32+00:00",
                    "last_fetch_at": "2023-03-31T07:07:32+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://x.woo.network/spot",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Bitfinex",
                        "identifier": "bitfinex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.2,
                    "volume": 2755.80125582,
                    "converted_last": {
                        "btc": 0.06399294,
                        "eth": 0.99932989,
                        "usd": 1797.3
                    },
                    "converted_volume": {
                        "btc": 176.352,
                        "eth": 2754,
                        "usd": 4953014
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.055648,
                    "timestamp": "2023-03-31T07:08:38+00:00",
                    "last_traded_at": "2023-03-31T07:08:38+00:00",
                    "last_fetch_at": "2023-03-31T07:08:38+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitfinex.com/t/ETHUST",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 1649.7,
                    "volume": 2692.80314002,
                    "converted_last": {
                        "btc": 0.06399284,
                        "eth": 0.99916052,
                        "usd": 1798.73
                    },
                    "converted_volume": {
                        "btc": 172.32,
                        "eth": 2691,
                        "usd": 4843637
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.087397,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/eth/eur/",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 0.06407314,
                    "volume": 1716.5829999,
                    "converted_last": {
                        "btc": 0.06407314,
                        "eth": 1.000414,
                        "usd": 1800.99
                    },
                    "converted_volume": {
                        "btc": 109.987,
                        "eth": 1717,
                        "usd": 3091551
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.040661,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/eth/btc/",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Bitget",
                        "identifier": "bitget",
                        "has_trading_incentive": false
                    },
                    "last": 1797.91,
                    "volume": 49023.6763,
                    "converted_last": {
                        "btc": 0.06401822,
                        "eth": 0.99946857,
                        "usd": 1799.48
                    },
                    "converted_volume": {
                        "btc": 3133,
                        "eth": 48912,
                        "usd": 88062628
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:06:30+00:00",
                    "last_traded_at": "2023-03-31T07:06:30+00:00",
                    "last_fetch_at": "2023-03-31T07:06:30+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitget.com/en/spot/ETHUSDT_SPBL",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 0.06406,
                    "volume": 3165.254501,
                    "converted_last": {
                        "btc": 0.06406,
                        "eth": 1.000121,
                        "usd": 1800.65
                    },
                    "converted_volume": {
                        "btc": 201.255,
                        "eth": 3142,
                        "usd": 5657044
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.015608,
                    "timestamp": "2023-03-31T07:06:02+00:00",
                    "last_traded_at": "2023-03-31T07:06:02+00:00",
                    "last_fetch_at": "2023-03-31T07:06:02+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/eth-btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064103,
                    "volume": 6393.2800533,
                    "converted_last": {
                        "btc": 0.064103,
                        "eth": 1.001049,
                        "usd": 1800.4
                    },
                    "converted_volume": {
                        "btc": 409.828,
                        "eth": 6400,
                        "usd": 11510435
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011559,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 1800,
                    "volume": 8853.98899785,
                    "converted_last": {
                        "btc": 0.06404096,
                        "eth": 0.99962603,
                        "usd": 1800
                    },
                    "converted_volume": {
                        "btc": 567.018,
                        "eth": 8851,
                        "usd": 15937180
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.077859,
                    "timestamp": "2023-03-31T06:50:50+00:00",
                    "last_traded_at": "2023-03-31T06:50:50+00:00",
                    "last_fetch_at": "2023-03-31T06:50:50+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/eth/usd/",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.130139,
                    "volume": 40710.2133686,
                    "converted_last": {
                        "btc": 0.06399045,
                        "eth": 0.99929104,
                        "usd": 1797.23
                    },
                    "converted_volume": {
                        "btc": 2605,
                        "eth": 40681,
                        "usd": 73165807
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.100075,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Coinzoom",
                        "identifier": "coinzoom",
                        "has_trading_incentive": false
                    },
                    "last": 1797.86,
                    "volume": 1087.68705,
                    "converted_last": {
                        "btc": 0.06396174,
                        "eth": 0.99867496,
                        "usd": 1797.86
                    },
                    "converted_volume": {
                        "btc": 69.57,
                        "eth": 1086,
                        "usd": 1955509
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.021135,
                    "timestamp": "2023-03-31T07:07:27+00:00",
                    "last_traded_at": "2023-03-31T07:07:27+00:00",
                    "last_fetch_at": "2023-03-31T07:07:27+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://trade.coinzoom.com/landing",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "0X7F39C581F595B53C5CB19BD0B3F8DA6C935E2CA0",
                    "target": "ETH",
                    "market": {
                        "name": "Balancer (v2)",
                        "identifier": "balancer",
                        "has_trading_incentive": false
                    },
                    "last": 1.11577967999956,
                    "volume": 2524.07429106461,
                    "converted_last": {
                        "btc": 0.06406,
                        "eth": 1.00035,
                        "usd": 1797.85
                    },
                    "converted_volume": {
                        "btc": 180.413,
                        "eth": 2817,
                        "usd": 5063307
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.602712,
                    "timestamp": "2023-03-31T06:55:27+00:00",
                    "last_traded_at": "2023-03-31T06:55:27+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://app.balancer.fi/#/ethereum/swap/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0/ETH",
                    "token_info_url": null,
                    "coin_id": "wrapped-steth",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "JPY",
                    "market": {
                        "name": "GMO Japan",
                        "identifier": "gmo_japan",
                        "has_trading_incentive": false
                    },
                    "last": 239459,
                    "volume": 1398.609,
                    "converted_last": {
                        "btc": 0.06401445,
                        "eth": 0.99940983,
                        "usd": 1799.37
                    },
                    "converted_volume": {
                        "btc": 89.531,
                        "eth": 1398,
                        "usd": 2516619
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.062668,
                    "timestamp": "2023-03-31T07:06:23+00:00",
                    "last_traded_at": "2023-03-31T07:06:23+00:00",
                    "last_fetch_at": "2023-03-31T07:06:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://coin.z.com/jp/corp/information/eth-market/",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 1797.74,
                    "volume": 132189.699,
                    "converted_last": {
                        "btc": 0.06401216,
                        "eth": 0.99946221,
                        "usd": 1799.28
                    },
                    "converted_volume": {
                        "btc": 8462,
                        "eth": 132119,
                        "usd": 237845916
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:48+00:00",
                    "last_traded_at": "2023-03-31T07:07:48+00:00",
                    "last_fetch_at": "2023-03-31T07:07:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/eth_usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.88,
                    "volume": 311420.0043,
                    "converted_last": {
                        "btc": 0.06401715,
                        "eth": 0.99945189,
                        "usd": 1799.45
                    },
                    "converted_volume": {
                        "btc": 19936,
                        "eth": 311249,
                        "usd": 560384193
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:06:08+00:00",
                    "last_traded_at": "2023-03-31T07:06:08+00:00",
                    "last_fetch_at": "2023-03-31T07:06:08+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/eth_usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 1797.74,
                    "volume": 7783.2217,
                    "converted_last": {
                        "btc": 0.06401216,
                        "eth": 0.99946221,
                        "usd": 1799.28
                    },
                    "converted_volume": {
                        "btc": 498.221,
                        "eth": 7779,
                        "usd": 14004174
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011669,
                    "timestamp": "2023-03-31T07:07:20+00:00",
                    "last_traded_at": "2023-03-31T07:07:20+00:00",
                    "last_fetch_at": "2023-03-31T07:07:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Crypto.com Exchange",
                        "identifier": "crypto_com",
                        "has_trading_incentive": false
                    },
                    "last": 1797.85,
                    "volume": 11947.947,
                    "converted_last": {
                        "btc": 0.06401608,
                        "eth": 0.99943521,
                        "usd": 1799.42
                    },
                    "converted_volume": {
                        "btc": 764.861,
                        "eth": 11941,
                        "usd": 21499354
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01723,
                    "timestamp": "2023-03-31T07:06:26+00:00",
                    "last_traded_at": "2023-03-31T07:06:26+00:00",
                    "last_fetch_at": "2023-03-31T07:06:26+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://crypto.com/exchange/trade/spot/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Bybit",
                        "identifier": "bybit_spot",
                        "has_trading_incentive": false
                    },
                    "last": 1797.53,
                    "volume": 72287.75485,
                    "converted_last": {
                        "btc": 0.06400469,
                        "eth": 0.99934546,
                        "usd": 1799.07
                    },
                    "converted_volume": {
                        "btc": 4627,
                        "eth": 72240,
                        "usd": 130050518
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:43+00:00",
                    "last_traded_at": "2023-03-31T07:07:43+00:00",
                    "last_fetch_at": "2023-03-31T07:07:43+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bybit.com/trade/spot/ETH/USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 0.06409,
                    "volume": 92468.536,
                    "converted_last": {
                        "btc": 0.06409,
                        "eth": 1.000678,
                        "usd": 1801.47
                    },
                    "converted_volume": {
                        "btc": 5926,
                        "eth": 92531,
                        "usd": 166578840
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01156,
                    "timestamp": "2023-03-31T07:07:47+00:00",
                    "last_traded_at": "2023-03-31T07:07:47+00:00",
                    "last_fetch_at": "2023-03-31T07:07:47+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Huobi",
                        "identifier": "huobi",
                        "has_trading_incentive": false
                    },
                    "last": 1798,
                    "volume": 18712.79983474656,
                    "converted_last": {
                        "btc": 0.06402142,
                        "eth": 0.99960676,
                        "usd": 1799.54
                    },
                    "converted_volume": {
                        "btc": 1195,
                        "eth": 18666,
                        "usd": 33603542
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:21+00:00",
                    "last_traded_at": "2023-03-31T07:07:21+00:00",
                    "last_fetch_at": "2023-03-31T07:07:21+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.huobi.com/en-us/exchange/eth_usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Pionex",
                        "identifier": "pionex",
                        "has_trading_incentive": false
                    },
                    "last": 1796.93,
                    "volume": 65050.69646,
                    "converted_last": {
                        "btc": 0.06398332,
                        "eth": 0.99915239,
                        "usd": 1795.7
                    },
                    "converted_volume": {
                        "btc": 4155,
                        "eth": 64887,
                        "usd": 116616709
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011114,
                    "timestamp": "2023-03-31T07:09:20+00:00",
                    "last_traded_at": "2023-03-31T07:09:20+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.pionex.com/en/trade/ETH_USDT/Bot",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "LATOKEN",
                        "identifier": "latoken",
                        "has_trading_incentive": false
                    },
                    "last": 1797.87,
                    "volume": 13152.045065369353,
                    "converted_last": {
                        "btc": 0.06401679,
                        "eth": 0.99944633,
                        "usd": 1799.44
                    },
                    "converted_volume": {
                        "btc": 841.952,
                        "eth": 13145,
                        "usd": 23666293
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.020579,
                    "timestamp": "2023-03-31T07:06:12+00:00",
                    "last_traded_at": "2023-03-31T07:06:12+00:00",
                    "last_fetch_at": "2023-03-31T07:06:12+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://latoken.com/exchange/USDT-ETH",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Pionex",
                        "identifier": "pionex",
                        "has_trading_incentive": false
                    },
                    "last": 0.064084,
                    "volume": 11318.2311,
                    "converted_last": {
                        "btc": 0.064084,
                        "eth": 1.000725,
                        "usd": 1798.52
                    },
                    "converted_volume": {
                        "btc": 719.002,
                        "eth": 11228,
                        "usd": 20178873
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.026526,
                    "timestamp": "2023-03-31T07:09:20+00:00",
                    "last_traded_at": "2023-03-31T07:09:20+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.pionex.com/en/trade/ETH_BTC/Bot",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "JPY",
                    "market": {
                        "name": "bitFlyer",
                        "identifier": "bitflyer",
                        "has_trading_incentive": false
                    },
                    "last": 239526,
                    "volume": 6494.8829868,
                    "converted_last": {
                        "btc": 0.06408449,
                        "eth": 1.00076,
                        "usd": 1799.88
                    },
                    "converted_volume": {
                        "btc": 416.221,
                        "eth": 6500,
                        "usd": 11689984
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.051775,
                    "timestamp": "2023-03-31T07:08:40+00:00",
                    "last_traded_at": "2023-03-31T07:08:40+00:00",
                    "last_fetch_at": "2023-03-31T07:08:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://bitflyer.com/en-jp/ex/simpleex",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "GBP",
                    "market": {
                        "name": "Bitstamp",
                        "identifier": "bitstamp",
                        "has_trading_incentive": false
                    },
                    "last": 1451.8,
                    "volume": 181.44895859,
                    "converted_last": {
                        "btc": 0.06400443,
                        "eth": 0.99934151,
                        "usd": 1799.06
                    },
                    "converted_volume": {
                        "btc": 11.613538,
                        "eth": 181.329,
                        "usd": 326438
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.120989,
                    "timestamp": "2023-03-31T07:07:34+00:00",
                    "last_traded_at": "2023-03-31T07:07:34+00:00",
                    "last_fetch_at": "2023-03-31T07:07:34+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitstamp.net/markets/eth/gbp/",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "0XBA100000625A3754423978A60C9317C58A424E3D",
                    "target": "ETH",
                    "market": {
                        "name": "Balancer (v2)",
                        "identifier": "balancer",
                        "has_trading_incentive": false
                    },
                    "last": 0.00380063404819471,
                    "volume": 681443.656188245,
                    "converted_last": {
                        "btc": 0.06406,
                        "eth": 1.00035,
                        "usd": 1797.85
                    },
                    "converted_volume": {
                        "btc": 165.91,
                        "eth": 2591,
                        "usd": 4656287
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.602712,
                    "timestamp": "2023-03-31T07:03:25+00:00",
                    "last_traded_at": "2023-03-31T07:03:25+00:00",
                    "last_fetch_at": "2023-03-31T07:09:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://app.balancer.fi/#/ethereum/swap/0xba100000625a3754423978a60c9317c58a424e3d/ETH",
                    "token_info_url": null,
                    "coin_id": "balancer",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "LBank",
                        "identifier": "lbank",
                        "has_trading_incentive": false
                    },
                    "last": 1798.73,
                    "volume": 235798.6364,
                    "converted_last": {
                        "btc": 0.06406096,
                        "eth": 1.000136,
                        "usd": 1800.68
                    },
                    "converted_volume": {
                        "btc": 15105,
                        "eth": 235831,
                        "usd": 424597861
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:06:12+00:00",
                    "last_traded_at": "2023-03-31T07:06:12+00:00",
                    "last_fetch_at": "2023-03-31T07:06:12+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.lbank.info/exchange/eth/busd",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "TUSD",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 1797.94,
                    "volume": 3619.044561837992,
                    "converted_last": {
                        "btc": 0.06401518,
                        "eth": 0.99935408,
                        "usd": 1799.48
                    },
                    "converted_volume": {
                        "btc": 231.674,
                        "eth": 3617,
                        "usd": 6512410
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.035598,
                    "timestamp": "2023-03-31T07:04:19+00:00",
                    "last_traded_at": "2023-03-31T07:04:19+00:00",
                    "last_fetch_at": "2023-03-31T07:04:19+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_TUSD?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "true-usd"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Crypto.com Exchange",
                        "identifier": "crypto_com",
                        "has_trading_incentive": false
                    },
                    "last": 1797.66,
                    "volume": 29508.5194,
                    "converted_last": {
                        "btc": 0.06400559,
                        "eth": 0.99952753,
                        "usd": 1797.66
                    },
                    "converted_volume": {
                        "btc": 1889,
                        "eth": 29495,
                        "usd": 53046285
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.015575,
                    "timestamp": "2023-03-31T07:08:23+00:00",
                    "last_traded_at": "2023-03-31T07:08:23+00:00",
                    "last_fetch_at": "2023-03-31T07:08:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://crypto.com/exchange/trade/spot/ETH_USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "CBETH",
                    "target": "ETH",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 1.0133,
                    "volume": 4333.17373,
                    "converted_last": {
                        "btc": 0.06403,
                        "eth": 0.99960905,
                        "usd": 1799.69
                    },
                    "converted_volume": {
                        "btc": 281.143,
                        "eth": 4389,
                        "usd": 7902104
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.039475,
                    "timestamp": "2023-03-31T07:03:57+00:00",
                    "last_traded_at": "2023-03-31T07:03:57+00:00",
                    "last_fetch_at": "2023-03-31T07:03:57+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/CBETH-ETH",
                    "token_info_url": null,
                    "coin_id": "coinbase-wrapped-staked-eth",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Binance US",
                        "identifier": "binance_us",
                        "has_trading_incentive": false
                    },
                    "last": 1797.05,
                    "volume": 25047.397930912328,
                    "converted_last": {
                        "btc": 0.06398759,
                        "eth": 0.99921912,
                        "usd": 1795.82
                    },
                    "converted_volume": {
                        "btc": 1603,
                        "eth": 25028,
                        "usd": 44980591
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.027289,
                    "timestamp": "2023-03-31T07:09:08+00:00",
                    "last_traded_at": "2023-03-31T07:09:08+00:00",
                    "last_fetch_at": "2023-03-31T07:09:08+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.us/trade/pro/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 0.064062,
                    "volume": 7132.8238,
                    "converted_last": {
                        "btc": 0.064062,
                        "eth": 1.000102,
                        "usd": 1800.69
                    },
                    "converted_volume": {
                        "btc": 453.384,
                        "eth": 7078,
                        "usd": 12743983
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.012488,
                    "timestamp": "2023-03-31T07:05:06+00:00",
                    "last_traded_at": "2023-03-31T07:05:06+00:00",
                    "last_fetch_at": "2023-03-31T07:05:06+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Dcoin",
                        "identifier": "dcoin",
                        "has_trading_incentive": false
                    },
                    "last": 1797.75,
                    "volume": 60560,
                    "converted_last": {
                        "btc": 0.06401252,
                        "eth": 0.99937962,
                        "usd": 1799.32
                    },
                    "converted_volume": {
                        "btc": 3877,
                        "eth": 60522,
                        "usd": 108966709
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.052828,
                    "timestamp": "2023-03-31T07:06:17+00:00",
                    "last_traded_at": "2023-03-31T07:06:17+00:00",
                    "last_fetch_at": "2023-03-31T07:06:17+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.dcoin.com/currencyTrading/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "ApeX Pro",
                        "identifier": "apex_pro",
                        "has_trading_incentive": false
                    },
                    "last": 1796.9,
                    "volume": 6167.97,
                    "converted_last": {
                        "btc": 0.06398077,
                        "eth": 0.99913995,
                        "usd": 1796.96
                    },
                    "converted_volume": {
                        "btc": 393.827,
                        "eth": 6150,
                        "usd": 11061023
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.018347,
                    "timestamp": "2023-03-31T07:08:36+00:00",
                    "last_traded_at": "2023-03-31T07:08:36+00:00",
                    "last_fetch_at": "2023-03-31T07:08:36+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.apex.exchange/trade/ETH-USDC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 1800.34,
                    "volume": 7283.5448,
                    "converted_last": {
                        "btc": 0.0640645,
                        "eth": 0.99912944,
                        "usd": 1800.51
                    },
                    "converted_volume": {
                        "btc": 466.617,
                        "eth": 7277,
                        "usd": 13114074
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011666,
                    "timestamp": "2023-03-31T06:45:45+00:00",
                    "last_traded_at": "2023-03-31T06:45:45+00:00",
                    "last_fetch_at": "2023-03-31T06:45:45+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=ETH_BUSD",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 1649.62,
                    "volume": 5500.06007262,
                    "converted_last": {
                        "btc": 0.06398974,
                        "eth": 0.99911206,
                        "usd": 1798.65
                    },
                    "converted_volume": {
                        "btc": 351.947,
                        "eth": 5495,
                        "usd": 9892666
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010606,
                    "timestamp": "2023-03-31T07:07:24+00:00",
                    "last_traded_at": "2023-03-31T07:07:24+00:00",
                    "last_fetch_at": "2023-03-31T07:07:24+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/ETH-EUR",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "Tidex",
                        "identifier": "tidex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.9253979,
                    "volume": 3295.50701576,
                    "converted_last": {
                        "btc": 0.06403231,
                        "eth": 0.99994474,
                        "usd": 1798.41
                    },
                    "converted_volume": {
                        "btc": 211.019,
                        "eth": 3295,
                        "usd": 5926674
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:08:56+00:00",
                    "last_traded_at": "2023-03-31T07:08:56+00:00",
                    "last_fetch_at": "2023-03-31T07:08:56+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 0.0640623,
                    "volume": 193203.8232,
                    "converted_last": {
                        "btc": 0.0640623,
                        "eth": 1.000157,
                        "usd": 1800.72
                    },
                    "converted_volume": {
                        "btc": 12377,
                        "eth": 193234,
                        "usd": 347905495
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01476,
                    "timestamp": "2023-03-31T07:06:08+00:00",
                    "last_traded_at": "2023-03-31T07:06:08+00:00",
                    "last_fetch_at": "2023-03-31T07:06:08+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/eth_btc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 1794.72,
                    "volume": 8423.89144274,
                    "converted_last": {
                        "btc": 0.06409552,
                        "eth": 1.000904,
                        "usd": 1798.85
                    },
                    "converted_volume": {
                        "btc": 539.934,
                        "eth": 8432,
                        "usd": 15153299
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.027854,
                    "timestamp": "2023-03-31T07:09:43+00:00",
                    "last_traded_at": "2023-03-31T07:09:43+00:00",
                    "last_fetch_at": "2023-03-31T07:09:43+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/ETH-USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "MEXC Global",
                        "identifier": "mxc",
                        "has_trading_incentive": false
                    },
                    "last": 1797.86,
                    "volume": 5461.27553,
                    "converted_last": {
                        "btc": 0.06401644,
                        "eth": 0.99939106,
                        "usd": 1799.41
                    },
                    "converted_volume": {
                        "btc": 349.611,
                        "eth": 5458,
                        "usd": 9827081
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:05:13+00:00",
                    "last_traded_at": "2023-03-31T07:05:13+00:00",
                    "last_fetch_at": "2023-03-31T07:05:13+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.mexc.com/exchange/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "BigONE",
                        "identifier": "bigone",
                        "has_trading_incentive": false
                    },
                    "last": 1794.37,
                    "volume": 20554.92655,
                    "converted_last": {
                        "btc": 0.06408302,
                        "eth": 1.000709,
                        "usd": 1798.5
                    },
                    "converted_volume": {
                        "btc": 1317,
                        "eth": 20570,
                        "usd": 36967974
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.041226,
                    "timestamp": "2023-03-31T07:09:47+00:00",
                    "last_traded_at": "2023-03-31T07:09:47+00:00",
                    "last_fetch_at": "2023-03-31T07:09:47+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://big.one/trade/ETH-USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Txbit",
                        "identifier": "txbit",
                        "has_trading_incentive": false
                    },
                    "last": 0.06299499,
                    "volume": 942.6905,
                    "converted_last": {
                        "btc": 0.06299499,
                        "eth": 0.98358044,
                        "usd": 1770.69
                    },
                    "converted_volume": {
                        "btc": 59.385,
                        "eth": 927.212,
                        "usd": 1669209
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011587,
                    "timestamp": "2023-03-31T07:07:50+00:00",
                    "last_traded_at": "2023-03-31T07:07:50+00:00",
                    "last_fetch_at": "2023-03-31T07:07:50+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://txbit.io/Trade/ETH/BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "BitMart",
                        "identifier": "bitmart",
                        "has_trading_incentive": false
                    },
                    "last": 0.064031,
                    "volume": 17402.7008,
                    "converted_last": {
                        "btc": 0.064031,
                        "eth": 0.99992431,
                        "usd": 1798.37
                    },
                    "converted_volume": {
                        "btc": 1114,
                        "eth": 17401,
                        "usd": 31296558
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.014679,
                    "timestamp": "2023-03-31T07:08:07+00:00",
                    "last_traded_at": "2023-03-31T07:08:07+00:00",
                    "last_fetch_at": "2023-03-31T07:08:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=ETH_BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 1797.05,
                    "volume": 319.3113,
                    "converted_last": {
                        "btc": 0.06393183,
                        "eth": 0.99811983,
                        "usd": 1797.05
                    },
                    "converted_volume": {
                        "btc": 20.414155,
                        "eth": 318.711,
                        "usd": 573818
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.127847,
                    "timestamp": "2023-03-31T06:38:34+00:00",
                    "last_traded_at": "2023-03-31T06:38:34+00:00",
                    "last_fetch_at": "2023-03-31T07:06:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "Biconomy",
                        "identifier": "biconomy",
                        "has_trading_incentive": false
                    },
                    "last": 1798.12,
                    "volume": 7824.509,
                    "converted_last": {
                        "btc": 0.06402421,
                        "eth": 0.99965034,
                        "usd": 1799.62
                    },
                    "converted_volume": {
                        "btc": 500.958,
                        "eth": 7822,
                        "usd": 14081111
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011668,
                    "timestamp": "2023-03-31T07:07:20+00:00",
                    "last_traded_at": "2023-03-31T07:07:20+00:00",
                    "last_fetch_at": "2023-03-31T07:07:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.biconomy.com/exchange?coin=ETH_USDC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Dex-Trade",
                        "identifier": "dextrade",
                        "has_trading_incentive": false
                    },
                    "last": 1797.24,
                    "volume": 14872.36816832,
                    "converted_last": {
                        "btc": 0.06399436,
                        "eth": 0.99918423,
                        "usd": 1798.78
                    },
                    "converted_volume": {
                        "btc": 951.748,
                        "eth": 14860,
                        "usd": 26752071
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.152335,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 1797.01,
                    "volume": 44311.05614,
                    "converted_last": {
                        "btc": 0.06398617,
                        "eth": 0.99896825,
                        "usd": 1798.58
                    },
                    "converted_volume": {
                        "btc": 2835,
                        "eth": 44265,
                        "usd": 79696870
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011112,
                    "timestamp": "2023-03-31T06:38:34+00:00",
                    "last_traded_at": "2023-03-31T06:38:34+00:00",
                    "last_fetch_at": "2023-03-31T07:06:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "BitMart",
                        "identifier": "bitmart",
                        "has_trading_incentive": false
                    },
                    "last": 1797.94,
                    "volume": 116720.56728,
                    "converted_last": {
                        "btc": 0.06401928,
                        "eth": 0.99974137,
                        "usd": 1798.04
                    },
                    "converted_volume": {
                        "btc": 7472,
                        "eth": 116690,
                        "usd": 209868784
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.013339,
                    "timestamp": "2023-03-31T07:08:07+00:00",
                    "last_traded_at": "2023-03-31T07:08:07+00:00",
                    "last_fetch_at": "2023-03-31T07:08:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "BKEX",
                        "identifier": "bkex",
                        "has_trading_incentive": false
                    },
                    "last": 1795.89,
                    "volume": 49680.8538,
                    "converted_last": {
                        "btc": 0.0641373,
                        "eth": 1.001557,
                        "usd": 1800.02
                    },
                    "converted_volume": {
                        "btc": 3187,
                        "eth": 49770,
                        "usd": 89447692
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:09:51+00:00",
                    "last_traded_at": "2023-03-31T07:09:51+00:00",
                    "last_fetch_at": "2023-03-31T07:09:51+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bkex.com/trade/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "Bitrue",
                        "identifier": "bitrue",
                        "has_trading_incentive": false
                    },
                    "last": 1798.77,
                    "volume": 12065.2604,
                    "converted_last": {
                        "btc": 0.06406239,
                        "eth": 1.000158,
                        "usd": 1800.72
                    },
                    "converted_volume": {
                        "btc": 772.929,
                        "eth": 12067,
                        "usd": 21726155
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.022792,
                    "timestamp": "2023-03-31T07:07:00+00:00",
                    "last_traded_at": "2023-03-31T07:07:00+00:00",
                    "last_fetch_at": "2023-03-31T07:07:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitrue.com/trade/eth_busd",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "BTCEX",
                        "identifier": "btcex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.927,
                    "volume": 53643.31119,
                    "converted_last": {
                        "btc": 0.06401882,
                        "eth": 0.99973414,
                        "usd": 1798.03
                    },
                    "converted_volume": {
                        "btc": 3428,
                        "eth": 53539,
                        "usd": 96290957
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:08:11+00:00",
                    "last_traded_at": "2023-03-31T07:08:11+00:00",
                    "last_fetch_at": "2023-03-31T07:08:11+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.btcex.com/spot?target=ETH-USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "CoinTR Pro",
                        "identifier": "cointr",
                        "has_trading_incentive": false
                    },
                    "last": 1796.93,
                    "volume": 96393.6564,
                    "converted_last": {
                        "btc": 0.06398332,
                        "eth": 0.99915239,
                        "usd": 1795.7
                    },
                    "converted_volume": {
                        "btc": 6162,
                        "eth": 96230,
                        "usd": 172946727
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.060693,
                    "timestamp": "2023-03-31T07:09:15+00:00",
                    "last_traded_at": "2023-03-31T07:09:15+00:00",
                    "last_fetch_at": "2023-03-31T07:09:15+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.cointr.com/en-us/spot/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Phemex",
                        "identifier": "phemex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.88,
                    "volume": 4806.8166,
                    "converted_last": {
                        "btc": 0.06401715,
                        "eth": 0.99940217,
                        "usd": 1799.43
                    },
                    "converted_volume": {
                        "btc": 307.719,
                        "eth": 4804,
                        "usd": 8649537
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:05:54+00:00",
                    "last_traded_at": "2023-03-31T07:05:54+00:00",
                    "last_fetch_at": "2023-03-31T07:05:54+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://phemex.com/spot/trade/ETHUSDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Binance",
                        "identifier": "binance",
                        "has_trading_incentive": false
                    },
                    "last": 1655.95,
                    "volume": 12089.14351980253,
                    "converted_last": {
                        "btc": 0.06425475,
                        "eth": 1.003304,
                        "usd": 1805.49
                    },
                    "converted_volume": {
                        "btc": 776.785,
                        "eth": 12129,
                        "usd": 21826800
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.013623,
                    "timestamp": "2023-03-31T06:58:46+00:00",
                    "last_traded_at": "2023-03-31T06:58:46+00:00",
                    "last_fetch_at": "2023-03-31T06:58:46+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.binance.com/en/trade/ETH_EUR?ref=37754157",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "KuCoin",
                        "identifier": "kucoin",
                        "has_trading_incentive": false
                    },
                    "last": 1797.92,
                    "volume": 20336.53016259,
                    "converted_last": {
                        "btc": 0.06401857,
                        "eth": 0.99956228,
                        "usd": 1799.46
                    },
                    "converted_volume": {
                        "btc": 1302,
                        "eth": 20328,
                        "usd": 36594719
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:57+00:00",
                    "last_traded_at": "2023-03-31T07:07:57+00:00",
                    "last_fetch_at": "2023-03-31T07:07:57+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.kucoin.com/trade/ETH-USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "EXMO",
                        "identifier": "exmo",
                        "has_trading_incentive": false
                    },
                    "last": 0.06408372,
                    "volume": 8558.40932444,
                    "converted_last": {
                        "btc": 0.06408372,
                        "eth": 1.00072,
                        "usd": 1798.52
                    },
                    "converted_volume": {
                        "btc": 548.455,
                        "eth": 8565,
                        "usd": 15392442
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.070203,
                    "timestamp": "2023-03-31T07:09:30+00:00",
                    "last_traded_at": "2023-03-31T07:09:30+00:00",
                    "last_fetch_at": "2023-03-31T07:09:30+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://exmo.com/en/trade/ETH_BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Deepcoin",
                        "identifier": "deepcoin",
                        "has_trading_incentive": false
                    },
                    "last": 1796.8,
                    "volume": 37550.71499466,
                    "converted_last": {
                        "btc": 0.06397869,
                        "eth": 0.99908011,
                        "usd": 1795.57
                    },
                    "converted_volume": {
                        "btc": 2232,
                        "eth": 34862,
                        "usd": 62654450
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.012228,
                    "timestamp": "2023-03-31T07:09:13+00:00",
                    "last_traded_at": "2023-03-31T07:09:13+00:00",
                    "last_fetch_at": "2023-03-31T07:09:13+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.deepcoin.com/en/Spot?currentId=ETH",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 1798.22,
                    "volume": 1968.07311329,
                    "converted_last": {
                        "btc": 0.06402925,
                        "eth": 0.99972907,
                        "usd": 1799.76
                    },
                    "converted_volume": {
                        "btc": 126.014,
                        "eth": 1968,
                        "usd": 3542055
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.0217,
                    "timestamp": "2023-03-31T06:58:58+00:00",
                    "last_traded_at": "2023-03-31T06:58:58+00:00",
                    "last_fetch_at": "2023-03-31T07:07:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/ETH-USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Kanga",
                        "identifier": "kanga",
                        "has_trading_incentive": false
                    },
                    "last": 1649.34,
                    "volume": 0,
                    "converted_last": {
                        "btc": 0.06402986,
                        "eth": 0.99990651,
                        "usd": 1798.34
                    },
                    "converted_volume": {
                        "btc": 14.840728,
                        "eth": 231.757,
                        "usd": 416816
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.965049,
                    "timestamp": "2023-03-31T07:08:29+00:00",
                    "last_traded_at": "2023-03-31T07:08:29+00:00",
                    "last_fetch_at": "2023-03-31T07:08:29+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://trade.kanga.exchange/market/ETH-EUR",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "LBank",
                        "identifier": "lbank",
                        "has_trading_incentive": false
                    },
                    "last": 1798.43,
                    "volume": 213905.5715,
                    "converted_last": {
                        "btc": 0.06403525,
                        "eth": 0.9997345,
                        "usd": 1799.96
                    },
                    "converted_volume": {
                        "btc": 13697,
                        "eth": 213849,
                        "usd": 385020854
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.012224,
                    "timestamp": "2023-03-31T07:06:11+00:00",
                    "last_traded_at": "2023-03-31T07:06:11+00:00",
                    "last_fetch_at": "2023-03-31T07:06:11+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.lbank.info/exchange/eth/usdc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Coinbase Exchange",
                        "identifier": "gdax",
                        "has_trading_incentive": false
                    },
                    "last": 0.06406,
                    "volume": 1654.89838797,
                    "converted_last": {
                        "btc": 0.06406,
                        "eth": 1.000209,
                        "usd": 1800.62
                    },
                    "converted_volume": {
                        "btc": 106.013,
                        "eth": 1655,
                        "usd": 2979846
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.031196,
                    "timestamp": "2023-03-31T07:07:28+00:00",
                    "last_traded_at": "2023-03-31T07:07:28+00:00",
                    "last_fetch_at": "2023-03-31T07:07:28+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.coinbase.com/trade/ETH-BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "BNB",
                    "target": "ETH",
                    "market": {
                        "name": "LBank",
                        "identifier": "lbank",
                        "has_trading_incentive": false
                    },
                    "last": 0.17599088,
                    "volume": 3921.0559,
                    "converted_last": {
                        "btc": 0.06403,
                        "eth": 0.99965253,
                        "usd": 1799.81
                    },
                    "converted_volume": {
                        "btc": 44.185187,
                        "eth": 689.83,
                        "usd": 1241995
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.056802,
                    "timestamp": "2023-03-31T07:06:11+00:00",
                    "last_traded_at": "2023-03-31T07:06:11+00:00",
                    "last_fetch_at": "2023-03-31T07:06:11+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.lbank.info/exchange/bnb/eth",
                    "token_info_url": null,
                    "coin_id": "binancecoin",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Coinstore",
                        "identifier": "coinstore",
                        "has_trading_incentive": false
                    },
                    "last": 1796.83,
                    "volume": 28181.1068,
                    "converted_last": {
                        "btc": 0.06397976,
                        "eth": 0.99895629,
                        "usd": 1798.37
                    },
                    "converted_volume": {
                        "btc": 1800,
                        "eth": 28110,
                        "usd": 50604066
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.044526,
                    "timestamp": "2023-03-31T07:07:46+00:00",
                    "last_traded_at": "2023-03-31T07:07:46+00:00",
                    "last_fetch_at": "2023-03-31T07:07:46+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.coinstore.com/#/spot/ETHUSDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 1797.9,
                    "volume": 38406.471,
                    "converted_last": {
                        "btc": 0.06401786,
                        "eth": 0.99941329,
                        "usd": 1799.45
                    },
                    "converted_volume": {
                        "btc": 2454,
                        "eth": 38309,
                        "usd": 68974812
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.012781,
                    "timestamp": "2023-03-31T07:05:06+00:00",
                    "last_traded_at": "2023-03-31T07:05:06+00:00",
                    "last_fetch_at": "2023-03-31T07:05:06+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/eth_usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Cryptology",
                        "identifier": "cryptology",
                        "has_trading_incentive": false
                    },
                    "last": 1798.242,
                    "volume": 1404.32294821,
                    "converted_last": {
                        "btc": 0.06397423,
                        "eth": 0.99878189,
                        "usd": 1798.24
                    },
                    "converted_volume": {
                        "btc": 89.84,
                        "eth": 1403,
                        "usd": 2525313
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.040597,
                    "timestamp": "2023-03-31T07:06:07+00:00",
                    "last_traded_at": "2023-03-31T07:06:07+00:00",
                    "last_fetch_at": "2023-03-31T07:06:07+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://cryptology.com/app/next/trading/ETH_USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Nominex",
                        "identifier": "nominex",
                        "has_trading_incentive": false
                    },
                    "last": 1797.75,
                    "volume": 678.6961372854958,
                    "converted_last": {
                        "btc": 0.06401252,
                        "eth": 0.99946777,
                        "usd": 1799.29
                    },
                    "converted_volume": {
                        "btc": 43.44505,
                        "eth": 678.335,
                        "usd": 1221169
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:07:17+00:00",
                    "last_traded_at": "2023-03-31T07:07:17+00:00",
                    "last_fetch_at": "2023-03-31T07:07:17+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://nominex.io/en/markets/ETH/USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "BigONE",
                        "identifier": "bigone",
                        "has_trading_incentive": false
                    },
                    "last": 0.064064,
                    "volume": 3635.14018,
                    "converted_last": {
                        "btc": 0.064064,
                        "eth": 1.000412,
                        "usd": 1797.96
                    },
                    "converted_volume": {
                        "btc": 232.882,
                        "eth": 3637,
                        "usd": 6535848
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.243408,
                    "timestamp": "2023-03-31T07:09:48+00:00",
                    "last_traded_at": "2023-03-31T07:09:48+00:00",
                    "last_fetch_at": "2023-03-31T07:09:48+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://big.one/trade/ETH-BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Gate.io",
                        "identifier": "gate",
                        "has_trading_incentive": false
                    },
                    "last": 1798.75,
                    "volume": 1496.48244907,
                    "converted_last": {
                        "btc": 0.06399231,
                        "eth": 0.99906405,
                        "usd": 1798.75
                    },
                    "converted_volume": {
                        "btc": 95.508,
                        "eth": 1491,
                        "usd": 2684612
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.051134,
                    "timestamp": "2023-03-31T07:06:20+00:00",
                    "last_traded_at": "2023-03-31T07:06:20+00:00",
                    "last_fetch_at": "2023-03-31T07:06:20+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://gate.io/trade/ETH_USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "EUR",
                    "market": {
                        "name": "Txbit",
                        "identifier": "txbit",
                        "has_trading_incentive": false
                    },
                    "last": 1651.69999998,
                    "volume": 405.1773,
                    "converted_last": {
                        "btc": 0.06407042,
                        "eth": 1.000372,
                        "usd": 1800.91
                    },
                    "converted_volume": {
                        "btc": 25.959881,
                        "eth": 405.328,
                        "usd": 729690
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011208,
                    "timestamp": "2023-03-31T07:07:49+00:00",
                    "last_traded_at": "2023-03-31T07:07:49+00:00",
                    "last_fetch_at": "2023-03-31T07:07:49+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://txbit.io/Trade/ETH/EUR",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "TRY",
                    "market": {
                        "name": "CoinTR Pro",
                        "identifier": "cointr",
                        "has_trading_incentive": false
                    },
                    "last": 35210,
                    "volume": 3994.3075,
                    "converted_last": {
                        "btc": 0.06538268,
                        "eth": 1.021005,
                        "usd": 1834.97
                    },
                    "converted_volume": {
                        "btc": 260.557,
                        "eth": 4069,
                        "usd": 7312568
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.127954,
                    "timestamp": "2023-03-31T07:09:14+00:00",
                    "last_traded_at": "2023-03-31T07:09:14+00:00",
                    "last_fetch_at": "2023-03-31T07:09:14+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.cointr.com/en-us/spot/ETH_TRY",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "Gemini",
                        "identifier": "gemini",
                        "has_trading_incentive": false
                    },
                    "last": 1795.46,
                    "volume": 2850.717831,
                    "converted_last": {
                        "btc": 0.06397481,
                        "eth": 0.9990194,
                        "usd": 1795.46
                    },
                    "converted_volume": {
                        "btc": 182.374,
                        "eth": 2848,
                        "usd": 5118350
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.015039,
                    "timestamp": "2023-03-31T07:09:39+00:00",
                    "last_traded_at": "2023-03-31T07:09:39+00:00",
                    "last_fetch_at": "2023-03-31T07:09:39+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "KRW",
                    "market": {
                        "name": "Bithumb",
                        "identifier": "bithumb",
                        "has_trading_incentive": false
                    },
                    "last": 2375000,
                    "volume": 8251.15154224,
                    "converted_last": {
                        "btc": 0.06509366,
                        "eth": 1.016491,
                        "usd": 1826.86
                    },
                    "converted_volume": {
                        "btc": 537.098,
                        "eth": 8387,
                        "usd": 15073705
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.12621,
                    "timestamp": "2023-03-31T07:09:32+00:00",
                    "last_traded_at": "2023-03-31T07:09:32+00:00",
                    "last_fetch_at": "2023-03-31T07:09:32+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bithumb.com/trade/order/ETH_KRW",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Azbit",
                        "identifier": "azbit",
                        "has_trading_incentive": false
                    },
                    "last": 1798.37,
                    "volume": 64475.79709448,
                    "converted_last": {
                        "btc": 0.0640346,
                        "eth": 0.9996808,
                        "usd": 1799.82
                    },
                    "converted_volume": {
                        "btc": 4129,
                        "eth": 64455,
                        "usd": 116045018
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010556,
                    "timestamp": "2023-03-31T07:04:18+00:00",
                    "last_traded_at": "2023-03-31T07:04:18+00:00",
                    "last_fetch_at": "2023-03-31T07:04:18+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://azbit.com/exchange/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "LINK",
                    "target": "ETH",
                    "market": {
                        "name": "Bitforex",
                        "identifier": "bitforex",
                        "has_trading_incentive": false
                    },
                    "last": 0.00410107,
                    "volume": 283485.2457,
                    "converted_last": {
                        "btc": 0.06403,
                        "eth": 0.99965253,
                        "usd": 1799.81
                    },
                    "converted_volume": {
                        "btc": 74.441,
                        "eth": 1162,
                        "usd": 2092446
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.560351,
                    "timestamp": "2023-03-31T07:06:08+00:00",
                    "last_traded_at": "2023-03-31T07:06:08+00:00",
                    "last_fetch_at": "2023-03-31T07:06:08+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitforex.com/en/spot/link_eth",
                    "token_info_url": null,
                    "coin_id": "chainlink",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "XT.COM",
                        "identifier": "xt",
                        "has_trading_incentive": false
                    },
                    "last": 1798.43,
                    "volume": 2175.0682,
                    "converted_last": {
                        "btc": 0.06405028,
                        "eth": 1.000198,
                        "usd": 1797.58
                    },
                    "converted_volume": {
                        "btc": 139.017,
                        "eth": 2171,
                        "usd": 3901536
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.018349,
                    "timestamp": "2023-03-31T07:09:09+00:00",
                    "last_traded_at": "2023-03-31T07:09:09+00:00",
                    "last_fetch_at": "2023-03-31T07:09:09+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.xt.com/trade/eth_busd",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "OKX",
                        "identifier": "okex",
                        "has_trading_incentive": false
                    },
                    "last": 1798.51,
                    "volume": 8328.73151,
                    "converted_last": {
                        "btc": 0.0640381,
                        "eth": 0.99977897,
                        "usd": 1800.04
                    },
                    "converted_volume": {
                        "btc": 532.024,
                        "eth": 8306,
                        "usd": 14954571
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.01556,
                    "timestamp": "2023-03-31T07:06:38+00:00",
                    "last_traded_at": "2023-03-31T07:06:38+00:00",
                    "last_fetch_at": "2023-03-31T07:06:38+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.okx.com/trade-spot/eth-usdc",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Dcoin",
                        "identifier": "dcoin",
                        "has_trading_incentive": false
                    },
                    "last": 0.064067,
                    "volume": 10258,
                    "converted_last": {
                        "btc": 0.064067,
                        "eth": 1.00023,
                        "usd": 1800.85
                    },
                    "converted_volume": {
                        "btc": 657.199,
                        "eth": 10260,
                        "usd": 18473115
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.029655,
                    "timestamp": "2023-03-31T07:06:17+00:00",
                    "last_traded_at": "2023-03-31T07:06:17+00:00",
                    "last_fetch_at": "2023-03-31T07:06:17+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.dcoin.com/currencyTrading/ETH_BTC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "JPY",
                    "market": {
                        "name": "Bitbank",
                        "identifier": "bitbank",
                        "has_trading_incentive": false
                    },
                    "last": 239627,
                    "volume": 1791.6891,
                    "converted_last": {
                        "btc": 0.06411151,
                        "eth": 1.001182,
                        "usd": 1800.63
                    },
                    "converted_volume": {
                        "btc": 114.868,
                        "eth": 1794,
                        "usd": 3226178
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.010417,
                    "timestamp": "2023-03-31T07:09:00+00:00",
                    "last_traded_at": "2023-03-31T07:09:00+00:00",
                    "last_fetch_at": "2023-03-31T07:09:00+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://bitbank.cc/app/trade/ETH_JPY",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "LTC",
                    "target": "ETH",
                    "market": {
                        "name": "BitMart",
                        "identifier": "bitmart",
                        "has_trading_incentive": false
                    },
                    "last": 0.049594,
                    "volume": 3431.074,
                    "converted_last": {
                        "btc": 0.06406,
                        "eth": 1.000377,
                        "usd": 1799.19
                    },
                    "converted_volume": {
                        "btc": 10.900493,
                        "eth": 170.225,
                        "usd": 306151
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.018076,
                    "timestamp": "2023-03-31T07:08:05+00:00",
                    "last_traded_at": "2023-03-31T07:08:05+00:00",
                    "last_fetch_at": "2023-03-31T07:08:05+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitmart.com/trade/en?layout=basic&symbol=LTC_ETH",
                    "token_info_url": null,
                    "coin_id": "litecoin",
                    "target_coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "ExMarkets",
                        "identifier": "exmarkets",
                        "has_trading_incentive": false
                    },
                    "last": 1796.87,
                    "volume": 5446.18913,
                    "converted_last": {
                        "btc": 0.06398119,
                        "eth": 0.99897853,
                        "usd": 1798.41
                    },
                    "converted_volume": {
                        "btc": 348.454,
                        "eth": 5441,
                        "usd": 9794462
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.127363,
                    "timestamp": "2023-03-31T07:07:53+00:00",
                    "last_traded_at": "2023-03-31T07:07:53+00:00",
                    "last_fetch_at": "2023-03-31T07:07:53+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://exmarkets.com/trade/eth-usdt",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Dex-Trade",
                        "identifier": "dextrade",
                        "has_trading_incentive": false
                    },
                    "last": 0.064067,
                    "volume": 2505.0725408,
                    "converted_last": {
                        "btc": 0.064067,
                        "eth": 1.00023,
                        "usd": 1800.85
                    },
                    "converted_volume": {
                        "btc": 160.492,
                        "eth": 2506,
                        "usd": 4511259
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.110744,
                    "timestamp": "2023-03-31T07:06:24+00:00",
                    "last_traded_at": "2023-03-31T07:06:24+00:00",
                    "last_fetch_at": "2023-03-31T07:06:24+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 0.064086,
                    "volume": 1304.3794,
                    "converted_last": {
                        "btc": 0.064086,
                        "eth": 1.000527,
                        "usd": 1801.38
                    },
                    "converted_volume": {
                        "btc": 83.592,
                        "eth": 1305,
                        "usd": 2349688
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.330372,
                    "timestamp": "2023-03-31T06:40:43+00:00",
                    "last_traded_at": "2023-03-31T06:40:43+00:00",
                    "last_fetch_at": "2023-03-31T07:06:16+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDT",
                    "market": {
                        "name": "Coinsbit",
                        "identifier": "coinsbit",
                        "has_trading_incentive": false
                    },
                    "last": 1797.86476939,
                    "volume": 38760.19627479,
                    "converted_last": {
                        "btc": 0.06401661,
                        "eth": 0.99944342,
                        "usd": 1799.43
                    },
                    "converted_volume": {
                        "btc": 2481,
                        "eth": 38739,
                        "usd": 69746378
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.045203,
                    "timestamp": "2023-03-31T07:06:24+00:00",
                    "last_traded_at": "2023-03-31T07:06:24+00:00",
                    "last_fetch_at": "2023-03-31T07:06:24+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://coinsbit.io/trade/ETH_USDT",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "tether"
                },
                {
                    "base": "ETH",
                    "target": "KRW",
                    "market": {
                        "name": "Upbit",
                        "identifier": "upbit",
                        "has_trading_incentive": false
                    },
                    "last": 2380000,
                    "volume": 19752.56658439,
                    "converted_last": {
                        "btc": 0.0652307,
                        "eth": 1.018631,
                        "usd": 1830.71
                    },
                    "converted_volume": {
                        "btc": 1288,
                        "eth": 20121,
                        "usd": 36161159
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.12605,
                    "timestamp": "2023-03-31T07:07:49+00:00",
                    "last_traded_at": "2023-03-31T07:07:49+00:00",
                    "last_fetch_at": "2023-03-31T07:09:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-ETH",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "Kraken",
                        "identifier": "kraken",
                        "has_trading_incentive": false
                    },
                    "last": 1799.1,
                    "volume": 8471.53722498,
                    "converted_last": {
                        "btc": 0.06405911,
                        "eth": 1.000195,
                        "usd": 1800.6
                    },
                    "converted_volume": {
                        "btc": 542.679,
                        "eth": 8473,
                        "usd": 15253822
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.0189,
                    "timestamp": "2023-03-31T07:07:44+00:00",
                    "last_traded_at": "2023-03-31T07:07:44+00:00",
                    "last_fetch_at": "2023-03-31T07:07:44+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://pro.kraken.com/app/trade/ETH-USDC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "BUSD",
                    "market": {
                        "name": "P2B",
                        "identifier": "p2pb2b",
                        "has_trading_incentive": false
                    },
                    "last": 1798,
                    "volume": 3788.71212,
                    "converted_last": {
                        "btc": 0.06403496,
                        "eth": 0.99973005,
                        "usd": 1799.95
                    },
                    "converted_volume": {
                        "btc": 242.61,
                        "eth": 3788,
                        "usd": 6819489
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011112,
                    "timestamp": "2023-03-31T06:38:35+00:00",
                    "last_traded_at": "2023-03-31T06:38:35+00:00",
                    "last_fetch_at": "2023-03-31T07:06:40+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": null,
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "binance-usd"
                },
                {
                    "base": "ETH",
                    "target": "BTC",
                    "market": {
                        "name": "Bitget",
                        "identifier": "bitget",
                        "has_trading_incentive": false
                    },
                    "last": 0.064057,
                    "volume": 281.5305,
                    "converted_last": {
                        "btc": 0.064057,
                        "eth": 1.000074,
                        "usd": 1800.57
                    },
                    "converted_volume": {
                        "btc": 17.8772,
                        "eth": 279.103,
                        "usd": 502507
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.011561,
                    "timestamp": "2023-03-31T07:06:30+00:00",
                    "last_traded_at": "2023-03-31T07:06:30+00:00",
                    "last_fetch_at": "2023-03-31T07:06:30+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bitget.com/en/spot/ETHBTC_SPBL",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "bitcoin"
                },
                {
                    "base": "ETH",
                    "target": "USDC",
                    "market": {
                        "name": "BingX",
                        "identifier": "bingx",
                        "has_trading_incentive": false
                    },
                    "last": 1798.52,
                    "volume": 319.92061,
                    "converted_last": {
                        "btc": 0.06403845,
                        "eth": 0.9997348,
                        "usd": 1800.03
                    },
                    "converted_volume": {
                        "btc": 20.428949,
                        "eth": 318.926,
                        "usd": 574229
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.02057,
                    "timestamp": "2023-03-31T07:05:23+00:00",
                    "last_traded_at": "2023-03-31T07:05:23+00:00",
                    "last_fetch_at": "2023-03-31T07:05:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://bingx.com/en-us/spot/ETHUSDC",
                    "token_info_url": null,
                    "coin_id": "ethereum",
                    "target_coin_id": "usd-coin"
                },
                {
                    "base": "ETH",
                    "target": "USD",
                    "market": {
                        "name": "BIT",
                        "identifier": "bit_com",
                        "has_trading_incentive": false
                    },
                    "last": 1797.92,
                    "volume": 526.7093705871229,
                    "converted_last": {
                        "btc": 0.06401485,
                        "eth": 0.9996721,
                        "usd": 1797.92
                    },
                    "converted_volume": {
                        "btc": 33.717221,
                        "eth": 526.537,
                        "usd": 946981
                    },
                    "trust_score": "green",
                    "bid_ask_spread_percentage": 0.021692,
                    "timestamp": "2023-03-31T07:08:23+00:00",
                    "last_traded_at": "2023-03-31T07:08:23+00:00",
                    "last_fetch_at": "2023-03-31T07:08:23+00:00",
                    "is_anomaly": false,
                    "is_stale": false,
                    "trade_url": "https://www.bit.com/spot?pair=ETH-USD",
                    "token_info_url": null,
                    "coin_id": "ethereum"
                }
            ]
        },
        "dailyChart": [
            {
                "id": "daily",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "08:11:33 GMT",
                        "y": 1807.07
                    },
                    {
                        "x": "09:10:04 GMT",
                        "y": 1800.53
                    },
                    {
                        "x": "10:10:51 GMT",
                        "y": 1802.88
                    },
                    {
                        "x": "11:09:56 GMT",
                        "y": 1805.67
                    },
                    {
                        "x": "12:11:04 GMT",
                        "y": 1802.43
                    },
                    {
                        "x": "13:10:05 GMT",
                        "y": 1803.84
                    },
                    {
                        "x": "14:10:08 GMT",
                        "y": 1796.08
                    },
                    {
                        "x": "15:10:46 GMT",
                        "y": 1798.1
                    },
                    {
                        "x": "16:10:53 GMT",
                        "y": 1785.46
                    },
                    {
                        "x": "17:11:36 GMT",
                        "y": 1788.6
                    },
                    {
                        "x": "18:11:16 GMT",
                        "y": 1771.28
                    },
                    {
                        "x": "19:10:01 GMT",
                        "y": 1780.16
                    },
                    {
                        "x": "20:11:15 GMT",
                        "y": 1784.17
                    },
                    {
                        "x": "21:11:25 GMT",
                        "y": 1794.92
                    },
                    {
                        "x": "22:10:43 GMT",
                        "y": 1796.32
                    },
                    {
                        "x": "23:11:54 GMT",
                        "y": 1786.77
                    },
                    {
                        "x": "00:10:38 GMT",
                        "y": 1795.29
                    },
                    {
                        "x": "01:10:34 GMT",
                        "y": 1816.59
                    },
                    {
                        "x": "02:10:15 GMT",
                        "y": 1806.16
                    },
                    {
                        "x": "03:10:52 GMT",
                        "y": 1804.46
                    },
                    {
                        "x": "04:10:17 GMT",
                        "y": 1803.43
                    },
                    {
                        "x": "05:11:19 GMT",
                        "y": 1808.16
                    },
                    {
                        "x": "06:10:56 GMT",
                        "y": 1796.96
                    },
                    {
                        "x": "07:10:30 GMT",
                        "y": 1797.17
                    }
                ]
            }
        ],
        "monthlyChart": [
            {
                "id": "monthly",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "03 Jan 2023",
                        "y": 1214.38
                    },
                    {
                        "x": "07 Jan 2023",
                        "y": 1270.03
                    },
                    {
                        "x": "11 Jan 2023",
                        "y": 1336.02
                    },
                    {
                        "x": "15 Jan 2023",
                        "y": 1549.11
                    },
                    {
                        "x": "19 Jan 2023",
                        "y": 1516.56
                    },
                    {
                        "x": "23 Jan 2023",
                        "y": 1630.84
                    },
                    {
                        "x": "27 Jan 2023",
                        "y": 1602.85
                    },
                    {
                        "x": "31 Jan 2023",
                        "y": 1568.65
                    },
                    {
                        "x": "04 Feb 2023",
                        "y": 1665.43
                    },
                    {
                        "x": "08 Feb 2023",
                        "y": 1672.82
                    },
                    {
                        "x": "12 Feb 2023",
                        "y": 1541.97
                    },
                    {
                        "x": "16 Feb 2023",
                        "y": 1674.86
                    },
                    {
                        "x": "20 Feb 2023",
                        "y": 1680.38
                    },
                    {
                        "x": "24 Feb 2023",
                        "y": 1651.85
                    },
                    {
                        "x": "28 Feb 2023",
                        "y": 1633.98
                    },
                    {
                        "x": "04 Mar 2023",
                        "y": 1570.67
                    },
                    {
                        "x": "08 Mar 2023",
                        "y": 1563.81
                    },
                    {
                        "x": "12 Mar 2023",
                        "y": 1474.4
                    },
                    {
                        "x": "16 Mar 2023",
                        "y": 1658.07
                    },
                    {
                        "x": "20 Mar 2023",
                        "y": 1801.37
                    },
                    {
                        "x": "24 Mar 2023",
                        "y": 1824.96
                    },
                    {
                        "x": "28 Mar 2023",
                        "y": 1719.17
                    },
                    {
                        "x": "31 Mar 2023",
                        "y": 1803.99
                    }
                ]
            }
        ],
        "yearlyChart": [
            {
                "id": "yearly",
                "color": "hsl(155, 70%, 50%)",
                "data": [
                    {
                        "x": "14 Apr 2022",
                        "y": 3121.4
                    },
                    {
                        "x": "30 Apr 2022",
                        "y": 2817.49
                    },
                    {
                        "x": "16 May 2022",
                        "y": 2147.05
                    },
                    {
                        "x": "01 Jun 2022",
                        "y": 1944.08
                    },
                    {
                        "x": "17 Jun 2022",
                        "y": 1068.6
                    },
                    {
                        "x": "03 Jul 2022",
                        "y": 1068.54
                    },
                    {
                        "x": "19 Jul 2022",
                        "y": 1570.66
                    },
                    {
                        "x": "04 Aug 2022",
                        "y": 1621.34
                    },
                    {
                        "x": "20 Aug 2022",
                        "y": 1618.53
                    },
                    {
                        "x": "05 Sep 2022",
                        "y": 1578.95
                    },
                    {
                        "x": "21 Sep 2022",
                        "y": 1324.19
                    },
                    {
                        "x": "07 Oct 2022",
                        "y": 1351.43
                    },
                    {
                        "x": "23 Oct 2022",
                        "y": 1313.77
                    },
                    {
                        "x": "08 Nov 2022",
                        "y": 1569.99
                    },
                    {
                        "x": "24 Nov 2022",
                        "y": 1184.46
                    },
                    {
                        "x": "10 Dec 2022",
                        "y": 1264.48
                    },
                    {
                        "x": "26 Dec 2022",
                        "y": 1219.29
                    },
                    {
                        "x": "11 Jan 2023",
                        "y": 1336.02
                    },
                    {
                        "x": "27 Jan 2023",
                        "y": 1602.85
                    },
                    {
                        "x": "12 Feb 2023",
                        "y": 1541.97
                    },
                    {
                        "x": "28 Feb 2023",
                        "y": 1633.98
                    },
                    {
                        "x": "16 Mar 2023",
                        "y": 1658.07
                    },
                    {
                        "x": "31 Mar 2023",
                        "y": 1800.98
                    }
                ]
            }
        ],
        "yearlyRaw": [
            [
                1680245524000,
                1800.9798672325132
            ],
            [
                1680220800000,
                1792.9085783080432
            ],
            [
                1680134400000,
                1795.5369478273235
            ],
            [
                1680048000000,
                1776.0436393298319
            ],
            [
                1679961600000,
                1719.1709726748606
            ],
            [
                1679875200000,
                1776.867690456723
            ],
            [
                1679788800000,
                1753.982636507409
            ],
            [
                1679702400000,
                1751.2194078261725
            ],
            [
                1679616000000,
                1824.9566578949327
            ],
            [
                1679529600000,
                1747.6400281141143
            ],
            [
                1679443200000,
                1811.4112436682735
            ],
            [
                1679356800000,
                1744.4414599600184
            ],
            [
                1679270400000,
                1801.3674190114587
            ],
            [
                1679184000000,
                1769.4253269123851
            ],
            [
                1679097600000,
                1793.2988017342332
            ],
            [
                1679011200000,
                1679.7924762080895
            ],
            [
                1678924800000,
                1658.0701085663115
            ],
            [
                1678838400000,
                1708.300897366666
            ],
            [
                1678752000000,
                1678.915634393308
            ],
            [
                1678665600000,
                1588.1968020530471
            ],
            [
                1678579200000,
                1474.40324440156
            ],
            [
                1678492800000,
                1429.6031691041849
            ],
            [
                1678406400000,
                1440.1676618801841
            ],
            [
                1678320000000,
                1535.2602520971097
            ],
            [
                1678233600000,
                1563.8131822475007
            ],
            [
                1678147200000,
                1567.3501465252189
            ],
            [
                1678060800000,
                1563.2256620056303
            ],
            [
                1677974400000,
                1568.4956010562191
            ],
            [
                1677888000000,
                1570.668210599776
            ],
            [
                1677801600000,
                1647.6646669077718
            ],
            [
                1677715200000,
                1663.925777294461
            ],
            [
                1677628800000,
                1606.632639454843
            ],
            [
                1677542400000,
                1633.9766289833817
            ],
            [
                1677456000000,
                1640.5827101943062
            ],
            [
                1677369600000,
                1593.9519737908456
            ],
            [
                1677283200000,
                1608.1034936538365
            ],
            [
                1677196800000,
                1651.850006691427
            ],
            [
                1677110400000,
                1643.1733937453491
            ],
            [
                1677024000000,
                1656.582369571119
            ],
            [
                1676937600000,
                1700.1986814992663
            ],
            [
                1676851200000,
                1680.3786857000732
            ],
            [
                1676764800000,
                1692.518962831222
            ],
            [
                1676678400000,
                1697.0848665737892
            ],
            [
                1676592000000,
                1646.143501886728
            ],
            [
                1676505600000,
                1674.858207473528
            ],
            [
                1676419200000,
                1556.963484345393
            ],
            [
                1676332800000,
                1506.9162010135053
            ],
            [
                1676246400000,
                1515.3346311806397
            ],
            [
                1676160000000,
                1541.9688769412712
            ],
            [
                1676073600000,
                1515.5340268615535
            ],
            [
                1675987200000,
                1546.383768658398
            ],
            [
                1675900800000,
                1651.4083786023796
            ],
            [
                1675814400000,
                1672.8226777758136
            ],
            [
                1675728000000,
                1617.144163289206
            ],
            [
                1675641600000,
                1631.3725233636533
            ],
            [
                1675555200000,
                1667.2716925637008
            ],
            [
                1675468800000,
                1665.4278712238624
            ],
            [
                1675382400000,
                1648.6796840768716
            ],
            [
                1675296000000,
                1642.857168158598
            ],
            [
                1675209600000,
                1586.5395765836909
            ],
            [
                1675123200000,
                1568.64771349631
            ],
            [
                1675036800000,
                1646.5159900930198
            ],
            [
                1674950400000,
                1573.0634394330648
            ],
            [
                1674864000000,
                1598.4701935450053
            ],
            [
                1674777600000,
                1602.8469492523193
            ],
            [
                1674691200000,
                1614.6771850629295
            ],
            [
                1674604800000,
                1557.0597608721732
            ],
            [
                1674518400000,
                1632.9617267135266
            ],
            [
                1674432000000,
                1630.8448549407967
            ],
            [
                1674345600000,
                1625.9093109886562
            ],
            [
                1674259200000,
                1661.3349193405402
            ],
            [
                1674172800000,
                1550.5088875585636
            ],
            [
                1674086400000,
                1516.555475473704
            ],
            [
                1674000000000,
                1569.5308332272923
            ],
            [
                1673913600000,
                1577.725890482971
            ],
            [
                1673827200000,
                1551.324517175301
            ],
            [
                1673740800000,
                1549.111474081304
            ],
            [
                1673654400000,
                1453.3769102089225
            ],
            [
                1673568000000,
                1417.134908743914
            ],
            [
                1673481600000,
                1389.7716620941067
            ],
            [
                1673395200000,
                1336.017071771777
            ],
            [
                1673308800000,
                1321.676571173056
            ],
            [
                1673222400000,
                1284.5754041342987
            ],
            [
                1673136000000,
                1264.8369433837202
            ],
            [
                1673049600000,
                1270.028610178057
            ],
            [
                1672963200000,
                1250.7922522355914
            ],
            [
                1672876800000,
                1256.4366037834864
            ],
            [
                1672790400000,
                1214.760969419338
            ],
            [
                1672704000000,
                1214.3789459253508
            ],
            [
                1672617600000,
                1200.65921690107
            ],
            [
                1672531200000,
                1196.6130648084502
            ],
            [
                1672444800000,
                1199.1104971711857
            ],
            [
                1672358400000,
                1201.5431060594274
            ],
            [
                1672272000000,
                1188.7286638821608
            ],
            [
                1672185600000,
                1211.819562063861
            ],
            [
                1672099200000,
                1226.2534148310056
            ],
            [
                1672012800000,
                1219.286343216304
            ],
            [
                1671926400000,
                1221.3595303484499
            ],
            [
                1671840000000,
                1220.701744919786
            ],
            [
                1671753600000,
                1217.8525497108176
            ],
            [
                1671667200000,
                1213.3431612255224
            ],
            [
                1671580800000,
                1217.8888916641765
            ],
            [
                1671494400000,
                1166.9895905156618
            ],
            [
                1671408000000,
                1186.7779210362507
            ],
            [
                1671321600000,
                1189.4275215641987
            ],
            [
                1671235200000,
                1165.9737772823325
            ],
            [
                1671148800000,
                1263.7464240856877
            ],
            [
                1671062400000,
                1308.4001523403851
            ],
            [
                1670976000000,
                1319.413007743119
            ],
            [
                1670889600000,
                1275.332421155143
            ],
            [
                1670803200000,
                1264.317985551174
            ],
            [
                1670716800000,
                1264.7922793495136
            ],
            [
                1670630400000,
                1264.4773467215684
            ],
            [
                1670544000000,
                1281.210637067264
            ],
            [
                1670457600000,
                1233.6250483990402
            ],
            [
                1670371200000,
                1271.9354761263946
            ],
            [
                1670284800000,
                1259.7575748565346
            ],
            [
                1670198400000,
                1282.4164481394064
            ],
            [
                1670112000000,
                1243.0408423289737
            ],
            [
                1670025600000,
                1293.9480231782143
            ],
            [
                1669939200000,
                1276.6393714030964
            ],
            [
                1669852800000,
                1298.94077037352
            ],
            [
                1669766400000,
                1216.936420693739
            ],
            [
                1669680000000,
                1170.115741471507
            ],
            [
                1669593600000,
                1196.1962195659255
            ],
            [
                1669507200000,
                1205.6579602157142
            ],
            [
                1669420800000,
                1198.9755884889066
            ],
            [
                1669334400000,
                1204.2078028331202
            ],
            [
                1669248000000,
                1184.4617581029652
            ],
            [
                1669161600000,
                1135.175811894246
            ],
            [
                1669075200000,
                1110.2882130124592
            ],
            [
                1668988800000,
                1144.2531525085535
            ],
            [
                1668902400000,
                1218.8936571112463
            ],
            [
                1668816000000,
                1213.49631006335
            ],
            [
                1668729600000,
                1201.7898419641292
            ],
            [
                1668643200000,
                1217.7020892163014
            ],
            [
                1668556800000,
                1252.7067308366848
            ],
            [
                1668470400000,
                1241.997092728311
            ],
            [
                1668384000000,
                1223.0064433283683
            ],
            [
                1668297600000,
                1255.6010507578437
            ],
            [
                1668211200000,
                1293.9115948871518
            ],
            [
                1668124800000,
                1301.5538803074423
            ],
            [
                1668038400000,
                1095.1839771132936
            ],
            [
                1667952000000,
                1334.2879331082395
            ],
            [
                1667865600000,
                1569.9886360033397
            ],
            [
                1667779200000,
                1572.9477769721586
            ],
            [
                1667692800000,
                1626.8064304933644
            ],
            [
                1667606400000,
                1644.1928578089398
            ],
            [
                1667520000000,
                1531.112630741574
            ],
            [
                1667433600000,
                1520.6383643789845
            ],
            [
                1667347200000,
                1580.3787334402593
            ],
            [
                1667260800000,
                1572.979514885975
            ],
            [
                1667174400000,
                1591.0517734961002
            ],
            [
                1667088000000,
                1619.4295836277443
            ],
            [
                1667001600000,
                1555.0292135813938
            ],
            [
                1666915200000,
                1514.8635252533977
            ],
            [
                1666828800000,
                1568.7475855708392
            ],
            [
                1666742400000,
                1462.0489375629863
            ],
            [
                1666656000000,
                1343.334491985092
            ],
            [
                1666569600000,
                1364.4868713063736
            ],
            [
                1666483200000,
                1313.767778723105
            ],
            [
                1666396800000,
                1299.8019052506386
            ],
            [
                1666310400000,
                1282.0426467759612
            ],
            [
                1666224000000,
                1284.654933702257
            ],
            [
                1666137600000,
                1311.8067255158232
            ],
            [
                1666051200000,
                1333.4408776301655
            ],
            [
                1665964800000,
                1306.943118828839
            ],
            [
                1665878400000,
                1275.6937773947975
            ],
            [
                1665792000000,
                1297.6276053223842
            ],
            [
                1665705600000,
                1288.1640147020812
            ],
            [
                1665619200000,
                1294.2710513882173
            ],
            [
                1665532800000,
                1279.8833075472612
            ],
            [
                1665446400000,
                1291.0816596695552
            ],
            [
                1665360000000,
                1322.2697552193713
            ],
            [
                1665273600000,
                1315.857799905668
            ],
            [
                1665187200000,
                1324.8947380290601
            ],
            [
                1665100800000,
                1351.4273691979538
            ],
            [
                1665014400000,
                1352.5865243024869
            ],
            [
                1664928000000,
                1363.2371821945037
            ],
            [
                1664841600000,
                1323.5040179722914
            ],
            [
                1664755200000,
                1277.901345279672
            ],
            [
                1664668800000,
                1311.2633244162857
            ],
            [
                1664582400000,
                1329.1460320707963
            ],
            [
                1664496000000,
                1335.7389706335669
            ],
            [
                1664409600000,
                1340.0230594816517
            ],
            [
                1664323200000,
                1331.1501769338627
            ],
            [
                1664236800000,
                1335.1212051991713
            ],
            [
                1664150400000,
                1294.0750952797787
            ],
            [
                1664064000000,
                1318.099347021849
            ],
            [
                1663977600000,
                1329.558806730321
            ],
            [
                1663891200000,
                1330.7927929218301
            ],
            [
                1663804800000,
                1252.7745621685783
            ],
            [
                1663718400000,
                1324.1905646155858
            ],
            [
                1663632000000,
                1379.920704526258
            ],
            [
                1663545600000,
                1335.8525523850524
            ],
            [
                1663459200000,
                1471.2039553630448
            ],
            [
                1663372800000,
                1432.215807478607
            ],
            [
                1663286400000,
                1471.999592516298
            ],
            [
                1663200000000,
                1635.3682061921256
            ],
            [
                1663113600000,
                1573.2052136951713
            ],
            [
                1663027200000,
                1710.1642908515214
            ],
            [
                1662940800000,
                1761.317355880691
            ],
            [
                1662854400000,
                1779.5190288833046
            ],
            [
                1662768000000,
                1717.0769569840472
            ],
            [
                1662681600000,
                1635.9321760130483
            ],
            [
                1662595200000,
                1629.8832311636493
            ],
            [
                1662508800000,
                1564.5589540302462
            ],
            [
                1662422400000,
                1617.9354554854337
            ],
            [
                1662336000000,
                1578.9493013433012
            ],
            [
                1662249600000,
                1555.6740772078124
            ],
            [
                1662163200000,
                1575.1766307276075
            ],
            [
                1662076800000,
                1588.9803510869067
            ],
            [
                1661990400000,
                1552.5629662281337
            ],
            [
                1661904000000,
                1525.400116232047
            ],
            [
                1661817600000,
                1555.1774560415913
            ],
            [
                1661731200000,
                1438.7470503278116
            ],
            [
                1661644800000,
                1496.0554659420902
            ],
            [
                1661558400000,
                1510.1891114840514
            ],
            [
                1661472000000,
                1697.0769719636442
            ],
            [
                1661385600000,
                1657.7936424663385
            ],
            [
                1661299200000,
                1665.7919073919315
            ],
            [
                1661212800000,
                1622.30703457785
            ],
            [
                1661126400000,
                1624.149982884847
            ],
            [
                1661040000000,
                1579.4157230953704
            ],
            [
                1660953600000,
                1618.5325042633535
            ],
            [
                1660867200000,
                1850.1112910473696
            ],
            [
                1660780800000,
                1834.8264526426372
            ],
            [
                1660694400000,
                1880.6001012594395
            ],
            [
                1660608000000,
                1908.2776419059185
            ],
            [
                1660521600000,
                1936.7011636052605
            ],
            [
                1660435200000,
                1982.4118280514233
            ],
            [
                1660348800000,
                1959.3309247187408
            ],
            [
                1660262400000,
                1881.4274054352998
            ],
            [
                1660176000000,
                1852.8785552656473
            ],
            [
                1660089600000,
                1698.9661290126492
            ],
            [
                1660003200000,
                1775.7013555270828
            ],
            [
                1659916800000,
                1699.0064178886953
            ],
            [
                1659830400000,
                1693.2965918360276
            ],
            [
                1659744000000,
                1725.3826270211505
            ],
            [
                1659657600000,
                1612.4189067269824
            ],
            [
                1659571200000,
                1621.3413236364065
            ],
            [
                1659484800000,
                1638.3786826572205
            ],
            [
                1659398400000,
                1636.0185563573557
            ],
            [
                1659312000000,
                1682.011373614746
            ],
            [
                1659225600000,
                1696.7850982136515
            ],
            [
                1659139200000,
                1739.0421771356112
            ],
            [
                1659052800000,
                1723.5485206790597
            ],
            [
                1658966400000,
                1636.9491814677851
            ],
            [
                1658880000000,
                1438.9880382230651
            ],
            [
                1658793600000,
                1450.4822852139405
            ],
            [
                1658707200000,
                1601.2079670127046
            ],
            [
                1658620800000,
                1552.4964891908746
            ],
            [
                1658534400000,
                1536.124922238913
            ],
            [
                1658448000000,
                1576.8252394976823
            ],
            [
                1658361600000,
                1527.4139307593093
            ],
            [
                1658275200000,
                1542.6298214332235
            ],
            [
                1658188800000,
                1570.6589588642053
            ],
            [
                1658102400000,
                1344.7202840019017
            ],
            [
                1658016000000,
                1355.04564021949
            ],
            [
                1657929600000,
                1234.0991389763224
            ],
            [
                1657843200000,
                1191.1308371103116
            ],
            [
                1657756800000,
                1112.9207827012565
            ],
            [
                1657670400000,
                1040.7971455029597
            ],
            [
                1657584000000,
                1097.4494380477286
            ],
            [
                1657497600000,
                1169.012707661018
            ],
            [
                1657411200000,
                1216.8497068484603
            ],
            [
                1657324800000,
                1233.5146792602989
            ],
            [
                1657238400000,
                1240.3784056617153
            ],
            [
                1657152000000,
                1188.72564292538
            ],
            [
                1657065600000,
                1134.017069659217
            ],
            [
                1656979200000,
                1153.3483147880897
            ],
            [
                1656892800000,
                1074.6073175787587
            ],
            [
                1656806400000,
                1068.5415025999594
            ],
            [
                1656720000000,
                1068.8194401301964
            ],
            [
                1656633600000,
                1057.6309990608017
            ],
            [
                1656547200000,
                1098.9055176105344
            ],
            [
                1656460800000,
                1143.5335357209958
            ],
            [
                1656374400000,
                1194.2245084746116
            ],
            [
                1656288000000,
                1201.237790641909
            ],
            [
                1656201600000,
                1244.2862044953927
            ],
            [
                1656115200000,
                1229.3040854466553
            ],
            [
                1656028800000,
                1144.4807534808065
            ],
            [
                1655942400000,
                1051.0740681589236
            ],
            [
                1655856000000,
                1124.5613920165545
            ],
            [
                1655769600000,
                1132.0543935828048
            ],
            [
                1655683200000,
                1125.7540917942745
            ],
            [
                1655596800000,
                995.2525692707909
            ],
            [
                1655510400000,
                1087.8139244584365
            ],
            [
                1655424000000,
                1068.6035748646073
            ],
            [
                1655337600000,
                1230.3643353556051
            ],
            [
                1655251200000,
                1214.8662649132034
            ],
            [
                1655164800000,
                1205.5952855404787
            ],
            [
                1655078400000,
                1454.6867601728409
            ],
            [
                1654992000000,
                1530.0386174317211
            ],
            [
                1654905600000,
                1663.844367412088
            ],
            [
                1654819200000,
                1788.4182866616045
            ],
            [
                1654732800000,
                1794.539625671828
            ],
            [
                1654646400000,
                1818.3877119829308
            ],
            [
                1654560000000,
                1860.1813068416047
            ],
            [
                1654473600000,
                1805.3313949894373
            ],
            [
                1654387200000,
                1804.2616695112486
            ],
            [
                1654300800000,
                1776.979907458187
            ],
            [
                1654214400000,
                1833.089840845753
            ],
            [
                1654128000000,
                1828.8926546074292
            ],
            [
                1654041600000,
                1944.078766836179
            ],
            [
                1653955200000,
                1995.9364841552344
            ],
            [
                1653868800000,
                1814.9831598025937
            ],
            [
                1653782400000,
                1798.6948545788846
            ],
            [
                1653696000000,
                1724.8757340323443
            ],
            [
                1653609600000,
                1807.9694742881136
            ],
            [
                1653523200000,
                1944.8428445072448
            ],
            [
                1653436800000,
                1979.770545006472
            ],
            [
                1653350400000,
                1974.5811944790914
            ],
            [
                1653264000000,
                2046.6463496545232
            ],
            [
                1653177600000,
                1978.1471325624789
            ],
            [
                1653091200000,
                1963.9909395294865
            ],
            [
                1653004800000,
                2023.8482593608173
            ],
            [
                1652918400000,
                1915.1771232664505
            ],
            [
                1652832000000,
                2095.178884796724
            ],
            [
                1652745600000,
                2025.8886983912162
            ],
            [
                1652659200000,
                2147.047447880575
            ],
            [
                1652572800000,
                2064.229357512243
            ],
            [
                1652486400000,
                2010.214051125259
            ],
            [
                1652400000000,
                1966.6991711336661
            ],
            [
                1652313600000,
                2080.910243657776
            ],
            [
                1652227200000,
                2344.797715643986
            ],
            [
                1652140800000,
                2249.8909622207443
            ],
            [
                1652054400000,
                2517.8299224886478
            ],
            [
                1651968000000,
                2641.229106940243
            ],
            [
                1651881600000,
                2699.7072470893745
            ],
            [
                1651795200000,
                2753.936566546688
            ],
            [
                1651708800000,
                2942.052313122658
            ],
            [
                1651622400000,
                2786.0472478011084
            ],
            [
                1651536000000,
                2861.3723755560436
            ],
            [
                1651449600000,
                2832.513106895354
            ],
            [
                1651363200000,
                2738.1741359527714
            ],
            [
                1651276800000,
                2817.4898821916195
            ],
            [
                1651190400000,
                2932.455083612903
            ],
            [
                1651104000000,
                2889.5922230230817
            ],
            [
                1651017600000,
                2806.748835957046
            ],
            [
                1650931200000,
                3008.3363470853
            ],
            [
                1650844800000,
                2922.901865199808
            ],
            [
                1650758400000,
                2940.6879777714407
            ],
            [
                1650672000000,
                2967.085285238213
            ],
            [
                1650585600000,
                2987.4888760341605
            ],
            [
                1650499200000,
                3079.6764776018495
            ],
            [
                1650412800000,
                3104.688447526111
            ],
            [
                1650326400000,
                3061.8905711469047
            ],
            [
                1650240000000,
                2995.719421019825
            ],
            [
                1650153600000,
                3066.3580141449797
            ],
            [
                1650067200000,
                3045.42807480128
            ],
            [
                1649980800000,
                3023.417211885316
            ],
            [
                1649894400000,
                3121.399823462041
            ],
            [
                1649808000000,
                3038.209421996366
            ],
            [
                1649721600000,
                2992.7021064252435
            ],
            [
                1649635200000,
                3219.159553453764
            ],
            [
                1649548800000,
                3265.938067729151
            ],
            [
                1649462400000,
                3192.0250912893603
            ],
            [
                1649376000000,
                3232.834988999582
            ],
            [
                1649289600000,
                3171.371104498954
            ],
            [
                1649203200000,
                3422.9698837547116
            ],
            [
                1649116800000,
                3520.9671175043636
            ],
            [
                1649030400000,
                3521.5847247785246
            ],
            [
                1648944000000,
                3440.3362384891684
            ],
            [
                1648857600000,
                3451.1960908672754
            ],
            [
                1648771200000,
                3283.3028425717257
            ]
        ]
    }
}
let cache = {bitcoin, ethereum}
let coins = [
    {
        "_id": "64228d24070b53175f91fb19",
        "userId": "64211e27e309862615151ac6",
        "coinId": "bitcoin",
        "coinSymbol": "btc",
        "coinImage": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        "price": 25161.27,
        "amount": 1,
        "total": 25161.27,
        "date": 1679011200000,
        "type": "buy",
        "__v": 0
    },
    {
        "_id": "64228d27070b53175f91fb1d",
        "userId": "64211e27e309862615151ac6",
        "coinId": "bitcoin",
        "coinSymbol": "btc",
        "coinImage": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        "price": 25161.27,
        "amount": 12,
        "total": 301935.24,
        "date": 1679011200000,
        "type": "buy",
        "__v": 0
    },
    {
        "_id": "64228d35070b53175f91fb27",
        "userId": "64211e27e309862615151ac6",
        "coinId": "ethereum",
        "coinSymbol": "eth",
        "coinImage": "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
        "price": 1811.41,
        "amount": 1,
        "total": 1811.41,
        "date": 1679443200000,
        "type": "buy",
        "__v": 0
    },
    {
        "_id": "64228d36070b53175f91fb2b",
        "userId": "64211e27e309862615151ac6",
        "coinId": "ethereum",
        "coinSymbol": "eth",
        "coinImage": "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
        "price": 1811.41,
        "amount": 12,
        "total": 21736.920000000002,
        "date": 1679443200000,
        "type": "buy",
        "__v": 0
    },
    {
        "_id": "64228d3a070b53175f91fb2f",
        "userId": "64211e27e309862615151ac6",
        "coinId": "ethereum",
        "coinSymbol": "eth",
        "coinImage": "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
        "price": 1811.41,
        "amount": 2,
        "total": 3622.82,
        "date": 1679443200000,
        "type": "buy",
        "__v": 0
    }
] // these are transactions


const lineData = generateLineData(cache, uniqueCoinsUser, coins)

console.log(lineData)