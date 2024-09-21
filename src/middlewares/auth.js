 const adminAuth = (req,res,next) => {
    console.log("Admin auth is getting checked out!!!!")
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized) {
        res.send("All Data Sent")
    }
    else{
        next()
    }
}

 const userAuth = (req,res,next) => {
    console.log("user auth is getting checked out!!!!")
    const token = "xyzabc"
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized) {
        res.send("Unauthorized request")
    }
    else{
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}