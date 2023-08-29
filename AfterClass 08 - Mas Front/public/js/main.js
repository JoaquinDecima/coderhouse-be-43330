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
    ordersRow.innerHTML = '';

    orders.forEach(order => {
        html += `
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-header">
                        ${order.business} - ${order.status}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Orden Numero: ${order.number}</h5>
                        <p class="card-text">Este pedido fue realizado por el usuario ${order.user} y contiene los siguientes
                            productos:</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${order.products.map(product => `<li class="list-group-item">${product}</li>`).join('')}
                        <hr>
                        <li class="list-group-item">Total: $ ${order.totalPrice}</li>
                    </ul>
                    ${order.status === 'pending' ? `
                    <div class="card-footer text-body-secondary">
                        <button class="btn btn-success" onclick="acceptOrder('${order._id}')">Aceptar</button>
                        <button class="btn btn-danger" onclick="rechazarOrder('${order._id}')">Rechazar</button>
                    </div>` : ''}
                </div>
            </div>
        `;
    });

    ordersRow.innerHTML = html;
}

function acceptOrder(id){
    updateStatusOrder(id, 'accepted');
}

function rechazarOrder(id){
    updateStatusOrder(id, 'rejected');
}

function updateStatusOrder(id, status){
    fetch(`/api/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    })
        .then(getOrders())
        .catch(err => alert(err));
}

getOrders();