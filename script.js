function predictPurchase() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let income = Number(document.getElementById("income").value);
    let score = Number(document.getElementById("score").value);
    let purchase = Number(document.getElementById("purchase").value);
    let membership = document.getElementById("membership").value;

    let output = document.getElementById("output");
    let message = document.getElementById("message");
    let confidence = document.getElementById("confidence");
    let category = document.getElementById("category");
    let resultBox = document.getElementById("resultBox");
    let icon = document.querySelector(".icon");

    resultBox.classList.remove("high");
    resultBox.classList.remove("low");

    if (
        name == "" ||
        age == 0 ||
        income == 0 ||
        score == 0 ||
        purchase == 0
    ) {

        output.innerHTML = "Incomplete Details";
        output.style.color = "#2563eb";

        message.innerHTML =
            "Please enter all customer details before prediction.";

        confidence.innerHTML = "--";
        category.innerHTML = "--";

        icon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        icon.style.color = "#2563eb";

        return;
    }

    // Prediction Logic

    if (
        income >= 60000 &&
        score >= 70 &&
        purchase >= 10 &&
        membership == "Premium"
    ) {

        resultBox.classList.add("high");

        icon.innerHTML =
            '<i class="fa-solid fa-crown"></i>';

        icon.style.color = "#16a34a";

        output.innerHTML = "HIGH PURCHASE CUSTOMER";
        output.style.color = "#16a34a";

        message.innerHTML =
            "<b>" + name + "</b> is classified as a high-value customer with strong purchasing behavior and high engagement.";

        confidence.innerHTML = "95%";
        category.innerHTML = "Premium Customer";

    }

    else {

        resultBox.classList.add("low");

        icon.innerHTML =
            '<i class="fa-solid fa-user"></i>';

        icon.style.color = "#dc2626";

        output.innerHTML = "LOW PURCHASE CUSTOMER";
        output.style.color = "#dc2626";

        message.innerHTML =
            "<b>" + name + "</b> is classified as a regular customer with moderate or low purchasing behavior.";

        confidence.innerHTML = "89%";
        category.innerHTML = "Regular Customer";

    }

}
