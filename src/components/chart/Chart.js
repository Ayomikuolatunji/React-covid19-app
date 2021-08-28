import React,{useState,useEffect} from 'react';
import {Line,Bar} from "react-chartjs-2"
import { fetchDailyData} from '../../api';
import "./chart.css";

export default function Chart({data,country}) {
    const [dailyData,setDaiyData]=useState([])
    useEffect(() => {
       const dataFetch=async()=>{
         try {
            const fetchData=await fetchDailyData()
            setDaiyData(fetchData)
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
       dataFetch()
    },[])

    const lineChart=(
        dailyData.length
        ?(<Line
          data={{
              labels:dailyData.map(({date})=>date),
              datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"Infected",
                borderColor:"#333ff",
                fill:true
              },{
                data:dailyData.map(({deaths})=>deaths),
                label:"Deaths",
                borderColor:"rgba(255,0,0,0.5)",
                fill:true
              }]
          }}
        />
        )
        :
        null
    );
    const barChat=(
      data.confirmed
      ?(
        <Bar
          data={{
            labels:["Infected", "Recovered", "Deaths"],
             datasets:[{
               label:"People",
               backgroundColor:[
                "rgb(255, 238, 0)",
                "rgb(75, 221, 30)",
                "rgb(253, 0, 0)"
               ],
               data:[data.confirmed.value, data.recovered.value, data.deaths.value]
             }]
          }}
          options={{
            legend:{display:false},
            title:{display:true, text:`current state in ${country}`}
          }}
         
        />
      )
      :
      null
    )
    return (
        <div className="container">
           {country ? barChat : lineChart}
        </div>
    )
}
