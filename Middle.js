var jwt = require("jsonwebtoken");

function Middle(token) {
    var token1 = jwt.verify(token,"seckret_key")
    
    if (token1 === "pralhad@navgurukul.org"){
        return (true)
    }
    else{
        return(false)
    }
}

module.exports = Middle;