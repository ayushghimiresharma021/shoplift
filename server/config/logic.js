const fs = require('fs')
const brcypt = require('bcrypt')

function renameTheAvatar(req){
    const { path, originalname, filename } = req.file
    const part = originalname.split('.')
    const ext = part[part.length - 1]
    const newPath = path + '.' + ext
    const newFilename = filename + '.' + ext
    fs.renameSync(path, newPath)
    return newFilename
}





module.exports = renameTheAvatar