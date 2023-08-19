
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination :function(req,res,cb){
        cb(null,path.join(__dirname, 'uploads/'))
    },
    filename :function(req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const {path,filename,originalname} = file.originalname.split('.')[0] ;
        const fileName = originalname.split('.')
        const filetype = originalname[originalname.length-1]
        const newpath  = path+'.'+filetype
        fs.renameSync(path, newpath)

        console.log(file)
        cb(null,filename+='-'+uniqueSuffix+filetype) ;

    }
})
const upload = multer({storage: storage})

module.exports  = upload