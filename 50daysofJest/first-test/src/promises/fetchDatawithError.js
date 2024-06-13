

function fetchDataWithError(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('error');
        },1000)
    })
}
module.exports = fetchDataWithError;