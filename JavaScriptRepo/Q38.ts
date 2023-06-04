function describe_city(cityName: string = "Lahore", country: string = "Pakistan") {
    console.log(`${cityName} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Amsterdam", "Netherlands");
describe_city();