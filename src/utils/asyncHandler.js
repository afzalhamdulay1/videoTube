const asyncHandler = (func) => {
    return (req,res,next) => {
        Promise.resolve(func(req,res,next)).catch((error)=> next(error))
    }
}

export default asyncHandler

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }