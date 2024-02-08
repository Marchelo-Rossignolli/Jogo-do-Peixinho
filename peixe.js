var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var tuba

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
    this.load.image('masterChief', 'assets/peixes/master_chief.png');
}


function create () {
    this.add.image(400, 300, 'mar');
    this.add.image(100, 525, 'logo').setScale(0.5);
    this.add.image(700, 500, 'masterChief').setScale(0.20);

    
    tuba = this.add.image(400, 300, 'peixe'); 


    tuba.setFlip(true, false);
}


function update() {


    tuba.x = this.input.x;
    tuba.y = this.input.y;
}
