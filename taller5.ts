const costoServicio: number = 500;
const monedasPermitidas: number[] = [500, 1000];
const billetesPermitidos: number[] = [2000, 5000];

function calcularDevolucion(pagoUsuario: number): number {
    const devolucion: number = pagoUsuario - costoServicio;
    return devolucion;
}

function procesarPago(pagoUsuario: number): void {
    if (monedasPermitidas.includes(pagoUsuario)) {
        const devolucion: number = calcularDevolucion(pagoUsuario);
        if (devolucion < 0) {
            console.log("Falta dinero. Por favor, inserta más monedas.");
        } else if (devolucion === 0) {
            console.log("Pago exitoso. ¡Gracias por usar nuestros servicios!");
        } else {
            console.log(`Pago exitoso. Tu devolución es de ${devolucion} pesos.`);
        }
    } else if (billetesPermitidos.includes(pagoUsuario)) {
        console.log("Aceptamos solo monedas como forma de pago. Por favor, usa monedas.");
    } else {
        console.log("Forma de pago no válida. Ingresa monedas de 500 o 1000.");
    }
}

const pagoUsuario: number = 1000;
procesarPago(pagoUsuario);

console.log("¡Vuelve pronto!");
