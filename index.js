axios
  .get(
    "http://api.aladhan.com/v1/calendarByCity/2023/11?city=Telaviv&country=isreal&method=4"
  )
  .then((response) => {
    let datan = response.data.data[0].timings;
    console.log(datan);
    let j = datan.Fajr;
    document.getElementById("fajr").innerHTML += `${j}`;
  });
