for (let i: number = 1; i <= 10; i++) {
    let asteriscos: string = "* ".repeat(5); 
    let igual: string = "=";

    if (i % 2 === 0) {
        asteriscos += " ";
    }

    console.log(asteriscos + igual.repeat(25));
}

console.log("=".repeat(43));

