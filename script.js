async function request1() {
    let animal = document.getElementById("b").value;
    const res = await fetch("https://api.api-ninjas.com/v1/animals?name=" + animal, { headers: { 'X-Api-Key': 'e6xSyxoN0C0EGvljTxnuVA==TYVez0dtzgh4x8tV' } });
    const json = await res.json();
    const table = document.getElementById("table");
    table.innerHTML = "";
    
    const first_row = "<tr><th>" + "Location" + "</th><th>" + "Name" + "</th><th>" + "Family" + "</th><th>" + "Speed" + "</th><th>" + "Weight" + "</th></tr>"
    table.innerHTML += first_row;

    for (let i = 0; i < json.length; i++) {
        const row = "<tr><td>" + json[i].locations + "</td><td>" + json[i].name + "</td><td>" + json[i].taxonomy.family + "</td><td>" + json[i].characteristics.top_speed + "</td><td>" + json[i].characteristics.weight + "</td></tr>";
        table.innerHTML += row;
    }
}