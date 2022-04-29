const apiDataService = require('../services/getDataMovieService')


let helloWorld = async (req, res) => {
    try {
        return res.json({
            data: [
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
            ]
        })
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
        let bannerData = await apiDataService.getDataBannerService(0);
        return res.status(200).json({
            status: 0,
            data: bannerData
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