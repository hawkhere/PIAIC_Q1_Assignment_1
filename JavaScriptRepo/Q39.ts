function city_country(cityName: string = "Lahore", country: string = "Pakistan") {
    let returnValue = `${cityName}, ${country}`;
    return returnValue;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Amsterdam", "Netherlands"));
console.log(city_country());