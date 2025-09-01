class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
        
    }

    ligar(){
        if(!this.ligado) {
            console.log(this.nome + ' Já ligado')
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado')
            return;
        }

        this.ligado = true;
    }
}


class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor= cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temwifi){
        super(nome);
        this.temwifi = temwifi;
    }

    ligar(){
        console.log('Olha, você alterou o métedo ligar.')
    }

    falaOi(){
        console.log('Oi');
    }

}

const s1 = new Smartphone('Iphone', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();
t1.falaOi();