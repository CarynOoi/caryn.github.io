$(document).ready(function () {
    // Reference the button element
    var generateButton = $("#generateFoodButton");
    // Reference the display div
    var display = $("#food_generator");

    // Attach a click event handler to the button
    generateButton.click(function () {
        var url = "https://www.themealdb.com/api/json/v1/1/random.php";

        // Clear the display before fetching new data
        display.empty();

        $.getJSON(url, function (data) {
            console.log(data);
            var output = data.meals;

            for (var i = 0; i < output.length; i++) {
                display.append(
                    `<img src="${output[i].strMealThumb}" alt="${output[i].strMeal}"> <br>
                    ${output[i].strMeal} <br>
                    Category:  ${output[i].strCategory} <br>
                    Source: <a href="${output[i].strSource}">${output[i].strSource}</a><br><br>`
                );
            }
        });
    });
});
