function getOrders(){
    fetch('/api/orders')
        .then(response => response.json())
        .then(orders => {
            drawOrders(orders.payload);
        });
}

function drawOrders(orders){
    const ordersRow = document.getElementById('orders');
    let html = '';

    orders.forEach(order => {
        html += `
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-header">
                        ${order.business}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Orden Numero: ${order.number}</h5>
                        <p class="card-text">Este pedido fue realizado por el usuario ${order.user} y contiene los siguientes
                            productos:</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${order.products.map(product => `<li class="list-group-item">${product}</li>`).join('')}
                    </ul>
                    <div class="card-footer text-body-secondary">
                        $ ${order.totalPrice}
                    </div>
                </div>
            </div>
        `;
    });

    ordersRow.innerHTML = html;
}

getOrders();