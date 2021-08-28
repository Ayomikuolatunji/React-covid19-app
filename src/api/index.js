import axios from "axios"
const url="https://covid19.mathdro.id/api";

export const fetchData=async(country)=>{
  let changeableUrl=url;
  if(country){
      changeableUrl=`${url}/countries/${country}`
  }
   try {
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);

    const modifiedData={
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }  
    return modifiedData
   } catch (error) {
      if(error.request){
          console.log(error.request)
      } else if(error.request.response){
          console.log(error.request.response)
      }else{
          console.log(error.message)
      }
   } 
}

export const fetchDailyData=async()=>{
    try {
        const {data}= await axios.get(`${url}/daily`);
        const modifiedData=data.map(dailyData=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return modifiedData;      
    } catch (error) {
        if(error.request){
            console.log(error.request)
        } else if(error.request.response){
            console.log(error.request.response)
        }else{
            console.log(error.message)
        }
    }
}

export const countries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
        const countriesObj=countries.map(country=>country.name)
        return countriesObj;
    } catch (error) {
        if(error.request){
            console.log(error.request)
        } else if(error.request.response){
            console.log(error.request.response)
        }else{
            console.log(error.message)
        }
    }
}