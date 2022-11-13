const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes"


function getQuotes(e) {
    e.preventDefault();

    if (number.value.length == 0) {
        return alert("Please enter a number")
    }
    else {
        fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            data = shuffle(data);
            
            let output = "";

            for (let i = 0; i < data.length; i++) {
                if (i ==number.value) {break;}
                output += `
                    <li>Quote: ${data[i].text}</li>
                    <li>Authur: ${data[i].author}</li>
                    ------------------------------
                `;
            }

            document.querySelector(".quotes").innerHTML = output;
        })
    }
}





// function to shuffle the quotes

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

    // while elements exists in the array

    while (CI >0)  {
        randomIndex = Math.floor(Math.random() * CI);
        //Decrease CI by 1

        CI--;
        //swap the last element with CI

        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes
}