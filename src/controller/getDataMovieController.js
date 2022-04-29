const apiDataService = require('../services/getDataMovieService')
'use strict'

let helloWorld = async (req, res) => {
    try {
        return res.json([
            {
                "categoryId": 1,
                "movieId": 15155,
                "name": "Sh**ting Stars",
                "mainImage": "https://img.netpop.app/cover/20220419/1650339394862_995ad2131de498328ce6eb23decf89d9流星_15155_竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 16820,
                "name": "Again My Life[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220426/1650938143054_513b5c84ced6ef9a684940678ef9cba9c0xkumbQcInSXSYjJVIm7SnQ9H5.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 13175,
                "name": "Tomorrow",
                "mainImage": "https://img.netpop.app/cover/20220303/1646301780365_1089b1fd910c67351c42bd8b3b5b9de6明日13175竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 16819,
                "name": "Love All Play[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220426/1650937491248_7d4597d8714704ec303e81829984a157c0xkumbQcInSXSYjJVIm7SnQ9H5.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 13780,
                "name": "Crazy Love[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220311/1646978416440_ce56d5a746dd1310268c2aae7cddf2e77.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 13215,
                "name": "Pachinko",
                "mainImage": "https://img.netpop.app/cover/20220302/1646205032292_a1854ff4b91a50b35d3dae3afdd8a3b5uNln8vI1gX5mQYbxjSXu5KHthEZ.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 13281,
                "name": "Cunning Single Lady[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220303/1646299925127_e3f96e026e7de8e9f89c914e94c070e14URIdeUdwaQV1QDLlXH6cyssqI.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 13159,
                "name": "Military Prosecutor Do Bae Man",
                "mainImage": "https://img.netpop.app/cover/20220301/1646125434689_1766fa2e41229c1ba7903ee1fac6d73aon92r7LE0hMWNeMNeFmeGZjxTgp.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 12342,
                "name": "A Business Proposal",
                "mainImage": "https://img.netpop.app/cover/20220302/1646191353055_a23d39417b8682046f7e1ac682ea2aa197a6f5e9-e844-4579-8c55-b53ae929d540.png"
            },
            {
                "categoryId": 1,
                "movieId": 13607,
                "name": "My Liberation Notes",
                "mainImage": "https://img.netpop.app/cover/20220310/1646891927812_0c56d90d13904b857393ebf7cd8b7948我的解放日记13607竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 14670,
                "name": "Soundtrack #1[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220324/1648111328154_7c8047603154cb2c5bba8e064e39ba087.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 15967,
                "name": "Tracer",
                "mainImage": "https://img.netpop.app/cover/20220418/1650271036008_6dca738ec43dbd0d5d231f0bf974d715追踪者竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 11133,
                "name": "Love Revolution",
                "mainImage": "https://img.netpop.app/cover/20220121/1642744621036_353cf899dfd0f747ffeb982246e181deifn7yLH7W69MdrEEkNzCyO8rTmL.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 10399,
                "name": "Twenty-Five Twenty-One",
                "mainImage": "https://img.netpop.app/cover/20220228/1646037892088_a54822708dbb6acf83e937a408766ebe二十五二十一 竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 11089,
                "name": "Forecasting Love and Weather",
                "mainImage": "https://img.netpop.app/cover/20220228/1646037987317_d5b0e9fe706c647455ab1e47e1de90aa气象厅的人们：社内恋爱残酷史篇 竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 10576,
                "name": "Rookie Cops",
                "mainImage": "https://img.netpop.app/cover/20220208/1644314319691_df9f1afc4c574bddb2bc413c3e9fb193你和我的警察课堂10576竖版.png"
            },
            {
                "categoryId": 1,
                "movieId": 13781,
                "name": "Kill Heel[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220311/1646978778427_3706e3c59bc6460ee816d08bb02cdfaf7.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 10403,
                "name": "All of Us Are Dead",
                "mainImage": "https://img.netpop.app/cover/20220126/1643194387146_57f14c449cd4696e4ebb853ea90c884b8jUlLqqPVkO7tRtZsGYjWteJJeR.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 12355,
                "name": "True Beauty[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220216/1644989914067_f4e147adcdb4e40d1f446d2d96d9ec3013.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 12258,
                "name": "Work Later, Drink Now[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220214/1644808495730_3e1fb8479ca5e3fe50fded11f21fb4ec2FWDfMtRXnxxw8GEy3TA9GieoJN.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 12798,
                "name": "Something In The Rain[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220223/1645585370150_34c4ff7809906b6001ed486a161bd5a66.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 11468,
                "name": "Start Up[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220126/1643164419689_75deca39c674f2cd6763897c1d8735bf4.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 12434,
                "name": "I’ll Go To You When The Weather Is Nice[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220217/1645085645032_c6f612b7557951502c3a84d6beb17ec82FWDfMtRXnxxw8GEy3TA9GieoJN.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 11440,
                "name": "Yumi’s Cells[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220125/1643100540078_1ded57d7373482a3976b24a2acec2fc5yzGZ8ALwiAKdGQCJZlvtpgInl6Z.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 11377,
                "name": "Shadow Beauty[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220125/1643082817134_ea3713d1ef3d9ecf623f70f54dc39c70uak5mmFJNumfc8uQm1SktvluEAD.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 6712,
                "name": "Our Beloved Summer",
                "mainImage": "https://img.netpop.app/cover/20211122/1637549647068_b5448d1220c2a7d66a39c3e8f79246b8那年，我们.png"
            },
            {
                "categoryId": 1,
                "movieId": 11241,
                "name": "Be My Boyfriend[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220124/1643004772532_967919f6f065c3300443afaed7442e85yQAocOGBuXSRPFJcZyjTshs1Jiv.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 6846,
                "name": "Snowdrop",
                "mainImage": "https://img.netpop.app/cover/20211201/1638341034381_fa3e7363ac7f97109e91df18cbf21d53雪降.png"
            },
            {
                "categoryId": 1,
                "movieId": 11344,
                "name": "School 2021[Vietsub]",
                "mainImage": "https://img.netpop.app/cover/20220125/1643076862333_1f12034f60fdeb3a68ca57b57557044duak5mmFJNumfc8uQm1SktvluEAD.jpg"
            },
            {
                "categoryId": 1,
                "movieId": 5705,
                "name": "Happiness",
                "mainImage": "https://img.netpop.app/cover/20211108/1636353296522_7bb36652909d1bd4ecbe8dd177225c9e8EnkVJwDP2QSJqOKte9EUjYKu4C.jpg"
            }
        ])
    } catch (error) {
        console.log("Error in getListMovieController: " + error);
    }
}

let getListMovieController = async (req, res) => {
    try {
        let respond = await apiDataService.getApiHomeDataService(req.query.page);
        return res.status(200).json({
            status: 0,
            data: respond
        })
    } catch (error) {
        console.log("Error in getListMovieController: " + error);
    }
}

let getBannerController = async (req, res) => {
    try {
        var bytes = require('utf8-length')
        let bannerData = await apiDataService.getDataBannerService(0);
        const size = bytes(JSON.stringify(bannerData))
        return res.status(200).json({
            status: 0,
            data: bannerData,
            size
        })
    } catch (error) {
        console.log("Error in getBannerController: " + error);
    }
}

let getDetailMovieController = async (req, res) => {
    try {
        let respond = await apiDataService.getDetailMovieService(req.query.id, req.query.category);
        return res.status(200).json({
            status: 0,
            data: respond
        })
    } catch (error) {
        console.log("Error in getDetailMovieController: " + error);
    }
}

let getMovieMediaController = async (req, res) => {
    try {
        let respond = await apiDataService.getMovieMediaService(
            req.query.category,
            req.query.contentId,
            req.query.episodeId,
            req.query.definition
        );
        return res.status(200).json({
            status: 0,
            data: respond
        })
    } catch (error) {
        console.log("Error in getMovieMediaController: " + error);
    }
}
let apiSearchWithKeyWordController = async (req, res) => {
    try {
        let respond = await apiDataService.apiSearchWithKeyWordService(
            req.query.searchKeyWord,
        );
        return res.status(200).json({
            status: 0,
            data: respond
        })
    } catch (error) {
        console.log("Error in apiSearchWithKeyWordController: " + error);
    }
}


module.exports = {
    getListMovieController: getListMovieController,
    getBannerController: getBannerController,
    getDetailMovieController: getDetailMovieController,
    getMovieMediaController: getMovieMediaController,
    apiSearchWithKeyWordController: apiSearchWithKeyWordController,
    helloWorld: helloWorld
}