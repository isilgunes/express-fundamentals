const accessControl = (req, res, next) => {
    const access = true;
    if(!access){
        res.status(401).json({
            success: false,
            message: "You are not authorized to access this"
        })
    }
    //console.log("Middleware Access Control");
    next();
};

const defaultMiddleware =(req, res, next) => {
    console.log("Default Middleware");
    next();
}

module.exports ={
    accessControl,
    defaultMiddleware
};