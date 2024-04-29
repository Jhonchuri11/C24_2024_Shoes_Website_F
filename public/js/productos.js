let url = 'http://localhost:5000/api/productos';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Desempaquetamos el array anidado
    const productos = data[0];

    // Creamos arrays  nombres y el stock de los productos
    const nombresProductos = [];
    const stockProductos = [];

    // Iteramos sobre los productos y agregamos sus datos al arrays
    productos.forEach(producto => {
      nombresProductos.push(producto.nombre);
      stockProductos.push(producto.stock);
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nombresProductos, // Eje x Nombre de productos
        datasets: [{
          label: 'Stock de productos',
          data: stockProductos, // Eje y Stock de productos
          backgroundColor: ['#6bf1ab','#63d69f', '#438c6c', '#509c7f', '#1f794e', '#34444c', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#0D47A1'],
          borderColor: ['black'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    var ctxDoughnut = document.getElementById('myDoughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: {
        labels: nombresProductos, // Eje x Nombre de productos
        datasets: [{
          label: 'Stock de productos',
          data: stockProductos, // Eje y Stock de productos
          backgroundColor: ['#6bf1ab','#63d69f', '#438c6c', '#509c7f', '#1f794e', '#34444c', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#0D47A1'],
          borderColor: ['black'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false // Ocultar la leyenda
          }
        },
        layout: {
          padding: {
            top: 20, // Ajusta el espacio superior del gráfico
            bottom: 20 // Ajusta el espacio inferior del gráfico
          }
        },
        maintainAspectRatio: false, // Permitir que el gráfico se ajuste al tamaño del contenedor
        responsive: true, // Hacer que el gráfico sea responsive
        aspectRatio: 1 // Establece la relación de aspecto del gráfico (1 significa un círculo perfecto)
      }
    });
    

  })
  .catch(error => console.error('Error:', error));
