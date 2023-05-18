let tables = document.getElementById("tablaEventos");

let dataS;
let infoDeApi;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
        dataS = data;
        infoDeApi = data.events;

        let eventsPasado = infoDeApi.filter((event) => event.date <= dataS.currentDate);

        let eventsFuture = infoDeApi.filter((event) => event.date >= dataS.currentDate);

        let categoriaPast = Array.from(new Set(eventsPasado.map((event) => event.category)));

        let categoriaUpcoming = Array.from(new Set(eventsFuture.map((event) => event.category)));

        //mayor porcentaje de asistencia
        function mayorAsistencia(events) {
            let porcentaje = 0;
            let nombre = " ";
            events.forEach((event) => {
                let valor = (event.assistance / event.capacity) * 100;

                if (valor > porcentaje) {
                    porcentaje = valor;
                    nombre = event.name;
                }
            });
            return ` ${nombre} , ${porcentaje.toFixed(2)}%`;
        }

        // menor porcentaje de asistencia
        function menorAsistencia(events) {
            let porcentaje = 100;
            let nombre = " ";
            events.forEach((event) => {
                let valor = (event.assistance / event.capacity) * 100;

                if (valor < porcentaje) {
                    porcentaje = valor;
                    nombre = event.name;
                }
            });
            return ` ${nombre} , ${porcentaje.toFixed(2)}%`;
        }

        //  mayor capacidad

        function mayorCapacidad(events) {
            let capacidad = 0;
            let nombre = " ";
            events.forEach((event) => {
                if (event.capacity > capacidad) {
                    capacidad = event.capacity;
                    nombre = event.name;
                }
            });
            return ` ${nombre} , ${capacidad}`;
        }

        let tableUna = document.createElement("table");
        tableUna.innerHTML = `<caption colspan="3" class="event1 text-center caption-top"><strong>Event statistics</strong></caption>
    <thead>

      <tr class="text-center fw-semibold bg-primary fs-6" >
        <th>Events with the highest percentage of attendance</th>
        <th>Events with the lowest percentage of attendance</th>
        <th>Event with larger capacity</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td> ${mayorAsistencia(eventsPasado)} </td>
            <td> ${menorAsistencia(eventsPasado)} </td>
            <td> ${mayorCapacidad(eventsPasado)} </td>
        </tr>
    </tbody>`;

        ////////////////////////////  UPCOMING //////////////////////////////////////////////////////////

        function infoTablafuturo(categorias, events) {
            let resultado = [];

            console.log(resultado);

            // Iterar por cada categoría
            categorias.map((category) => {
                // Filtrar eventos por categoría
                let categoriaEvents = events.filter(
                    (event) => category == event.category
                );
                console.log(categoriaEvents);

                let revenues = calcularRevenues(categoriaEvents);

                let attendance = Attendance(categoriaEvents);

                resultado.push({
                    category,
                    revenues,
                    attendance: attendance / categoriaEvents.length,
                });
            });

            return resultado;
        }

        // Función para calcular los ingresos totales
        function calcularRevenues(events) {
            let total = 0;
            events.forEach((event) => {
                total += event.price * (event.estimate || event.assistance);
            });
            return total;
        }

        // Función para calcular el porcentaje de asistencia promedio
        function calcularAttedance(events) {
            let totalAttendance = 0;
            events.forEach((event) => {
                totalAttendance +=
                    ((event.assistance || event.estimate) / event.capacity) * 100;
            });
            return totalAttendance;
        }

        const infoTablafuturoConst = infoTablafuturo(
            categoriaUpcoming,
            eventsFuture
        );

        //Tabla Upcoming 

        let tablaDos = document.createElement("table");
        let tBody = document.createElement("tbody");
        tablaDos.innerHTML = `<caption class="event1 text-center caption-top"><strong>Upcoming events statistics by category</strong></caption>
    <thead>
      <tr>
        <th>Categories</th>
        <th>Revenues</th>
        <th>Percentage of attendance</th>
      </tr>
    </thead>`;

        infoTablafuturoConst.forEach((eventos) => {
            let crearTr = document.createElement("tr");
            crearTr.innerHTML = `<td>${eventos.category}</td>
      <td> $ ${eventos.revenues.toLocaleString()}</td>
      <td>${eventos.attendance.toFixed(2)} %</td>`;
            tBody.appendChild(crearTr);
        });

        tablaDos.appendChild(tBody);

        /////////////////////////////// PAST EVENTS ////////////////////////////////////////////////////

        // Funciones 

        function tablaEventosPasado(categorias, events) {
            let resultado = [];

            console.log(resultado);


            categorias.map((category) => {

                let categoriaEvents = events.filter((event) => category == event.category);
                console.log(categoriaEvents);

                let revenues = calcularRevenues(categoriaEvents);
                console.log(revenues);

                let attendance = calcularAttedance(categoriaEvents);
                console.log(attendance);

                //  ****************
                resultado.push({
                    category,
                    revenues,
                    attendance: attendance / categoriaEvents.length,
                });
            });

            return resultado;
        }


        function calcularRevenues(events) {
            let total = 0;
            events.forEach((event) => {
                total += event.price * (event.estimate || event.assistance);
            });
            return total;
        }


        function Attendance(events) {
            let totalAttendance1 = 0;
            events.forEach((event) => {
                totalAttendance1 +=
                    ((event.assistance || event.estimate) / event.capacity) * 100;
            });
            return totalAttendance1;
        }

        const tablaPasadoUp = tablaEventosPasado(
            categoriaPast,
            eventsPasado
        );

        //Tabla Upcoming - 

        let tablaTres = document.createElement("table");
        let tBodyTres = document.createElement("tbody");
        tablaTres.className = "inf2 m-1";
        tablaTres.innerHTML = `<caption class="event1 text-center caption-top"><strong>Upcoming events statistics by category</strong></caption>
    <thead>
      <tr>
        <th>Categories</th>
        <th>Revenues</th>
        <th>Percentage of attendance</th>
      </tr>
    </thead>`;

        tablaPasadoUp.forEach((eventos) => {
            let crearTr = document.createElement("tr");
            crearTr.innerHTML = `<td>${eventos.category}</td>
      <td> $ ${eventos.revenues.toLocaleString()}</td>
      <td>${eventos.attendance.toFixed(2)} %</td>`;
            tBodyTres.appendChild(crearTr);
        });

        tablaTres.appendChild(tBodyTres);

        //print tablas

        tables.append(tableUna, tablaDos, tablaTres);
    })
    .catch((error) => console.log(error));
