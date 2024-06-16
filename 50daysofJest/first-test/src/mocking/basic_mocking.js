function fetchData(callback){
    setTimeout(()=>{
        callback('data');
    },1000)
}

const API = {
    fetchData : ()=>{
        return 'real data';
    }
}
module.exports = {fetchData,API};