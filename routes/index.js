const express = require("express");
const needle = require("needle");
const apiCache = require("apicache");


const router = express.Router()

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;


let cache = apiCache.middleware

router.get('/', cache('2 minutes'), async(req, res) => {
    try{
        const apiRes = await needle("get", `${API_BASE_URL}${API_KEY}`);
        const data = apiRes.body;

        return res.status(500).json({
            data
        })
    } 
    catch(err){
        return res.status(500).json({
            error : "Routes index",
            errMesage : err
        })
    }
})

module.exports = router;
