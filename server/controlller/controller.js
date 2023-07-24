
const Data = require("../modals/data")
const func =  async(req, res)=>{
    console.log("before fething the data")
    const data = await Data.find();
    res.status(200).json({string:"before fething the data",data})
}

module.exports = {
    func,
}