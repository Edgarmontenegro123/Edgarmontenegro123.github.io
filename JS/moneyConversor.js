// Create money conversor
function result() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let res = price * quantity;

    // Reemplazo alert() por una librería llamada sweet alert 2.
    Swal.fire({
        text: `Hi ${name}, the result is: $${res}`,
        icon: "success"
    });
}
