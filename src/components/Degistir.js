import React, { Component } from "react";
import Celcius from "./Celcius"
import Fahrenheit from "./Fahrenheit"
import Kelvin from "./Kelvin"
export default class Degistir extends Component 
{


    constructor() 
    {
        super();
        this.state = {
            currentCelcius: 0,
            currentFahrenheit: 32,
            currentKelvin: 273.15,
        }
    }


    render() {
        let DONUSTUR = () => {
            this.setState({
                currentCelcius: this.state.currentCelcius + 1,
                currentFahrenheit: this.state.currentCelcius * 1.8 + 32,
                currentKelvin: this.state.currentCelcius + 273.15,
            })
        }

        return ( 
            <div className = "container-fluid bg-info text-dark align-items-center" >

            <div className = "container text-center  bg-info text-dark  " >

            <h1>
            HAVA DURUMU 
            </h1> 

            </div>

            <div>

            <h2> 
                Mevcut sıcaklık: { this.state.currentCelcius }
                birim 
            </h2>   
            
            </div> 
            <div className = "row justify-content-center m-2" >

            <button className = "btn btn-outline-light fw-bold"
            onClick = {
                () => DONUSTUR()
            } >
            Sıcaklık Artır
            
            </button>

            </div>
            

            <div className = "row fw-bold justify-content-center text-center m-2" >

            <div className = "col-lg-3 col-sm-12 m-3" > < Celcius CelciusValue = { this.state.currentCelcius }/></div >

            <div className = "col-lg-3 col-sm-12 m-3" > < Fahrenheit FahrenheitValue = { this.state.currentFahrenheit }/></div >

            <div className = "col-lg-3 col-sm-12 m-3" > < Kelvin KelvinValue = { this.state.currentKelvin }/></div >

              
            </div > 
            </div>
        );
    }
}