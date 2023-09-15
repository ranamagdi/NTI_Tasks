const fs = require("fs")
class DealWithJson{
    static readFromJSON = (fileName = "models/products.json") => {
        let result
        try{
            result = JSON.parse(fs.readFileSync(fileName))
            if(!Array.isArray(result)) result = []
        }
        catch(e){
            result = []
        }
        return result
    }
    static writeToJSON = (data , fileName = "models/products.json" ) => {
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
}

module.exports = DealWithJson
