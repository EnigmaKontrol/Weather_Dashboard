//WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// Collecting user input and display from search history
function addResult(){

    inputCity = document.getElementById("userInput").value;  
    historyList = getInfo();
    var searchCity =$("<div>") 
    searchCity.attr('id',inputCity) 
    searchCity.text(inputCity) 
    searchCity.addClass("h4")

    
    if (historyList.includes(inputCity) === false){
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style","display:inline")
    addInfo(inputCity);
    
}; 

// Event listener for history search
$(".history").on('click', function(event){
    event.preventDefault();
    $(".subtitle").attr("style","display:inline")
     document.getElementById("myInput").value =  event.target.id;
    getResult(); 
});

// Event listener for button search
document.getElementById("searchButton").addEventListener("click", addResult);
document.getElementById("searchButton").addEventListener('click', getResult);

function getResult();