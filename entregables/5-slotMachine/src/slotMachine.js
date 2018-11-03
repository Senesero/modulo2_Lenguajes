function SlothMachine() {
    this.monedas = 0;
    this.reiniciar = () => {
        this.monedas = 0
        this.mostrarMonedas();
    };
    this.reiniciarBoton = () => {
        this.reiniciar();
        document.getElementById('labelRuleta1').innerHTML = '-----';
        document.getElementById('labelRuleta2').innerHTML = '-----';
        document.getElementById('labelRuleta3').innerHTML = '-----';
        document.getElementById('labelResultado').innerHTML = '';
    }
    this.sumarMonedas = () => this.monedas++;
    this.mostrarMonedas = () => {
        if (this.monedas === 0) {
            document.getElementById('labelMonedas').innerHTML = `No hay bote`;
        } else if (this.monedas === 1) {
            document.getElementById('labelMonedas').innerHTML = `Bote de ${this.monedas} moneda`;
        } else {
            document.getElementById('labelMonedas').innerHTML = `Bote de ${this.monedas} monedas`;
        }
    }
    this.obtenerAleatorio = () => Math.random() >= 0.5;
    this.ganador = () => document.getElementById('labelResultado').innerHTML = `Enhorabuena!!!. Has ganado ${this.monedas} monedas!!`;
    this.perdedor = () => document.getElementById('labelResultado').innerHTML = `Suerte la próxima vez!!`;
    this.play = () => {
        this.sumarMonedas();
        let ruleta1 = this.obtenerAleatorio();
        document.getElementById('labelRuleta1').innerHTML = ruleta1;
        let ruleta2 = this.obtenerAleatorio();
        document.getElementById('labelRuleta2').innerHTML = ruleta2;
        let ruleta3 = this.obtenerAleatorio();
        document.getElementById('labelRuleta3').innerHTML = ruleta3;
        if (ruleta1 && ruleta2 && ruleta3) {
            this.ganador();
            this.reiniciar();
        } else {
            this.perdedor();
            this.mostrarMonedas();
        }
    };
}

const machine = new SlothMachine();