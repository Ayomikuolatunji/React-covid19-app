import React, { useEffect,useState } from 'react';
import { FormControl,NativeSelect } from '@material-ui/core';
import { countries } from '../../api';

export default function CountryPicker({handleCountryInfo}) {
  const [countriesArray, setcountriesArray] = useState([])
    useEffect(()=>{
        const fetchCountries=async()=>{
            try {
                const data=await countries()
                setcountriesArray(data)
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
        fetchCountries()
    },[setcountriesArray])
    return (
         <div className="formControl">
            <FormControl>
            <NativeSelect onChange={(e)=>handleCountryInfo(e.target.value)}>
                <option value="">Global</option>
                {
                    countriesArray.map((country,index)=><option key={country} value={country}>{index}.{country}</option>)
                }
            </NativeSelect>
          </FormControl>
         </div>
    )
}
