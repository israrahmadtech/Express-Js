
export function roleMiddleware(req, res, next){
    const role = req.user.role

    if(role !== "admin") return res.status(403).json({message: "Admin access only"})

    next()
}
