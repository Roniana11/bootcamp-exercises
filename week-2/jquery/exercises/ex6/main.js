const commentOnWeather =(temp)=> `It's ${determineWeather(temp)}`

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  console.log(commentOnWeather(30))
  console.log(commentOnWeather(22)) 