function imprimirTablaDeMultiplicar(numero: number): void {
    for (let i: number = 1; i <= 10; i++) {
        const resultado: number = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

const numeroTabla: number = 5; 
imprimirTablaDeMultiplicar(numeroTabla);
