async function getOrders(){
    const response = await fetch('/api/orders');
    return await response.json();
}

async function drawOrders(){
    const ordersRow = document.getDocumentById('orders');
    const orders = await getOrders();
    let html = '';

    orders.forEach(order => {
        html += `
            <div class="col-4">
                <div class="card text-center">
                    <div class="card-header">
                        El vendedor Feliz
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Orden Numero: ${order.number}</h5>
                        <p class="card-text">Este pedido fue realizado por el usuario PatoJAD y contiene los siguientes
                            productos:</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">1</li>
                        <li class="list-group-item">6</li>
                    </ul>
                    <div class="card-footer text-body-secondary">
                        $ 4500
                    </div>
                </div>
            </div>
        `;
    });
}