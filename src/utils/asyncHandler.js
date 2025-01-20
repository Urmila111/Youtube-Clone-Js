const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}


// const asyncHandler = ()=> {}
// const asyncHandler = (function)=> () =>{}
// const asyncHandler = (func)  => async () => {}

// const asyncHandler = (fn) => async(req, resizeBy, next) => {
//     try{

//     } catch (error){
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }
