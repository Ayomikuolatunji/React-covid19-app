import React, { Component } from 'react';
import {Cards,Chart,CountryPicker} from "../components"
import "./App.css";
import {fetchData} from "../api";
import image from "../images/covid.jpg"



class App extends Component {
    state={
        data:{},
        country:""
    }

    async componentDidMount(){
        const data=await fetchData()
        this.setState({data});
    }
    handleCountryInfo=async(country)=>{
        const fetched=await fetchData(country);
           this.setState({
               data:fetched,
               country:country
           })
       }
    render() {
        const {data,country}=this.state
        return (
            <div className="container">
               <div className="w-75 mx-auto my-3 image-container">
                  <img src={image} alt="covid-19" className="w-100 img-fluid my-3"/>
               </div>
                <Cards data={data}/>
                <CountryPicker  handleCountryInfo={this.handleCountryInfo}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;