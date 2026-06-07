import multer from "multer"

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "/Public")
    },
    filename:(req, file, cb)=>{
        cb(null, )
    }
})