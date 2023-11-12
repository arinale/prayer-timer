let params = {
  country: "PSE",
  city: "Haifa",
  method: "4",
};
axios
  .get("http://api.aladhan.com/v1/timingsByCity", {
    params: params,
  })
  .then((response) => {
    let datan = response.data.data.timings;
    console.log(datan);
    let j = datan.Fajr;
    document.getElementById("fajr").innerHTML += `${j}`;
  });
