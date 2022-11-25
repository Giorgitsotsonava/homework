const countryCode = document.querySelector("#countryCode");
const probability = document.querySelector("#probability");

async function nationalize(value) {
  let responseData = await fetch(`https://api.nationalize.io/?name=${value}`)
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.log("Error occured", err);
    });
    
    console.log(responseData);
    countryCode.innerHTML = `countryCode: ${responseData.country[0].country_id}`;
    probability.innerHTML = `probability: ${responseData.country[0].probability}`;
}
function search() {
  let searchinputvalue = document.getElementById("searchinput").value;
  nationalize(searchinputvalue);
  console.log("search");
}

let searchButton = document.getElementById("search");

searchButton.addEventListener("click", search);
