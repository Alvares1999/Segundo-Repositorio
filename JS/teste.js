class Car {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 150;
    return `Velocidade: ${this.velocidade} km/h`;
  }

  frear() {
    this.velocidade -= 100;
    if (this.velocidade < 0) this.velocidade = 0;
    return `Velocidade: ${this.velocidade} km/h`;
  }
}

const meuCarro = new Car('Chevrolet', 'Omega', 1994);
console.log(meuCarro.acelerar()); // Velocidade: 150 km/h
console.log(meuCarro.frear()); // Velocidade: 100 km/h





