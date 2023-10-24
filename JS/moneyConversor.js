// Create money conversor
function result() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let res = price * quantity;
    
    // Replace alert() to sweet alert 2 library.
    // Add validations too.
    if(!name || !price || !quantity) {
        Swal.fire({
            text: `Hey! We need you to complete all the fields!`,
            icon: 'warning'
        })
    }
    else if(price < 0 || quantity < 0) {
        Swal.fire({
            text: `I'm sorry, the values should be bigger than zero ☹️`,
            icon: 'error'
        })
    }
    else{
        Swal.fire({
            text: `Hi ${name}, the result is: $${res}`,
            icon: 'success'
        })
    }
}
