function getUsers(){
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            drawUsers(users.payload);
        })

}

function drawUsers(users){
    const usersRow = document.getElementById('users');
    let html = '';

    users.forEach(user => {
        html += `
        <div class="card" style="width: 100%;">
        <div class="card-header">
            ${user.name}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${user._id}</li>
                <li class="list-group-item">${user.email}</li>
            </ul>
        </div>`
    });

    usersRow.innerHTML = html;
}

function getBusiness(){
    fetch('/api/business')
        .then(response => response.json())
        .then(business => {
            drawBusiness(business.payload);
        })

}

function drawBusiness(business){
    const businessRow = document.getElementById('business');
    let html = '';

    business.forEach(business => {
        html += `
        <div class="card" style="width: 100%;">
        <div class="card-header">
            ${business.name}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${business._id}</li>
            </ul>
        </div>`
    });

    businessRow.innerHTML = html;
}

function generateOrder(){
    let orderInput = document.getElementById('forder').value;
    let userInput = document.getElementById('fuser').value;
    let businessInput = document.getElementById('fbusiness').value;

    let order = {
        user: userInput,
        business: businessInput,
        products: orderInput.split('\n'),
    }

    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(response => alert("Ya Realizamos tu pedido"))
        .catch(error => alert(error));

    
}

getUsers();
getBusiness();