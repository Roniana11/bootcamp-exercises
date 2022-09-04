const add = function(a, b){
    return a + b
}


const calculateHyp = function(a, b){
    return Math.sqrt(a*a +b*b);
}

const clearLowPriority = function(arr){
    return arr.filter(obj => obj.priority === 'HIGH')
}

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

module.exports = {PictureManager,add,calculateHyp,clearLowPriority}