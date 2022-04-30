class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
		this.cards = null;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
		this.limitCartes = 2; //limit de cartes correctes per guanyar
		this.numCartes = numCards.numCartes();
		this.dificultat = dificultat.dificultat();
    }

    preload (){	
		this.load.image('back', '../resources/back.png');
		this.load.image('cb', '../resources/cb.png');
		this.load.image('co', '../resources/co.png');
		this.load.image('sb', '../resources/sb.png');
		this.load.image('so', '../resources/so.png');
		this.load.image('tb', '../resources/tb.png');
		this.load.image('to', '../resources/to.png');
	}
	
    create (){
		//GENERACIO ALEATORIA DE CARTES
		var arr = [];
			while(arr.length < this.numCartes*2){
				var r = Math.floor(Math.random() * this.numCartes*2);
				if(arr.indexOf(r) === -1) arr.push(r);
		}
		if (this.numCartes <=2) { //si hi ha 2 cartes
			this.limitCartes = 2;
			var arraycards = ['co', 'sb', 'co', 'sb'];
			console.log(arr);
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[arr[0]]);
			this.add.image(350, 300, arraycards[arr[1]]);
			this.add.image(450, 300, arraycards[arr[2]]);
			this.add.image(550, 300, arraycards[arr[3]]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
		} else if (this.numCartes == 3) { //si hi ha 3
			this.limitCartes = 3;
			var arraycards = ['co', 'cb', 'sb', 'co', 'cb', 'sb'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[arr[0]]);
			this.add.image(350, 300, arraycards[arr[1]]);
			this.add.image(450, 300, arraycards[arr[2]]);
			this.add.image(250, 450, arraycards[arr[3]]);
			this.add.image(350, 450, arraycards[arr[4]]);
			this.add.image(450, 450, arraycards[arr[5]]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(250, 450, 'back');
			this.cards.create(350, 450, 'back');
			this.cards.create(450, 450, 'back');

		} else if (this.numCartes == 4) { //si hi ha 4
			this.limitCartes = 4;
			var arraycards = ['co', 'cb', 'sb', 'so', 'co', 'cb', 'sb', 'so'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[arr[0]]);
			this.add.image(350, 300, arraycards[arr[1]]);
			this.add.image(450, 300, arraycards[arr[2]]);
			this.add.image(550, 300, arraycards[arr[3]]);
			this.add.image(250, 450, arraycards[arr[4]]);
			this.add.image(350, 450, arraycards[arr[5]]);
			this.add.image(450, 450, arraycards[arr[6]]);
			this.add.image(550, 450, arraycards[arr[7]]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(250, 450, 'back');
			this.cards.create(350, 450, 'back');
			this.cards.create(450, 450, 'back');
			this.cards.create(550, 450, 'back');
			
		} else if (this.numCartes == 5) { //si hi ha 5
			this.limitCartes = 5;
			var arraycards = ['co', 'cb', 'sb', 'so', 'tb', 'co', 'cb', 'sb', 'so', 'tb'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[arr[0]]);
			this.add.image(350, 300, arraycards[arr[1]]);
			this.add.image(450, 300, arraycards[arr[2]]);
			this.add.image(550, 300, arraycards[arr[3]]);
			this.add.image(650, 300, arraycards[arr[4]]);
			this.add.image(250, 450, arraycards[arr[5]]);
			this.add.image(350, 450, arraycards[arr[6]]);
			this.add.image(450, 450, arraycards[arr[7]]);
			this.add.image(550, 450, arraycards[arr[8]]);
			this.add.image(650, 450, arraycards[arr[9]]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(250, 450, 'back');
			this.cards.create(350, 450, 'back');
			this.cards.create(450, 450, 'back');
			this.cards.create(550, 450, 'back');
			this.cards.create(650, 450, 'back');
		} else if (this.numCartes == 6) { //si hi ha 6 (MAX.)
			this.limitCartes = 6;
			var idCartes = ['co', 'cb', 'sb', 'so', 'tb', 'to', 'co', 'cb', 'sb', 'so', 'tb', 'to'];
			var arraycards = idCartes.sort();

			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[arr[0]]);
			this.add.image(350, 300, arraycards[arr[1]]);
			this.add.image(450, 300, arraycards[arr[2]]);
			this.add.image(550, 300, arraycards[arr[3]]);
			this.add.image(650, 300, arraycards[arr[4]]);
			this.add.image(750, 300, arraycards[arr[5]]);
			this.add.image(250, 450, arraycards[arr[6]]);
			this.add.image(350, 450, arraycards[arr[7]]);
			this.add.image(450, 450, arraycards[arr[8]]);
			this.add.image(550, 450, arraycards[arr[9]]);
			this.add.image(650, 450, arraycards[arr[10]]);
			this.add.image(750, 450, arraycards[arr[11]]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(750, 300, 'back');
			this.cards.create(250, 450, 'back');
			this.cards.create(350, 450, 'back');
			this.cards.create(450, 450, 'back');
			this.cards.create(550, 450, 'back');
			this.cards.create(650, 450, 'back');
			this.cards.create(750, 450, 'back');

		}
		
		
		let i = 0;
		this.cards.children.iterate((card)=>{
			card.card_id = arraycards[arr[i]];
			i++;
			card.setInteractive();
			card.on('pointerup', () => {
				card.disableBody(true,true);
				if (this.firstClick){
					if (this.firstClick.card_id !== card.card_id){ //fas un error
						/* MOSTRAR TOTES LES CARTES 1 SEGON */
						/*
						girarCartes();
						setTimeout(tornarNormalitat(), 1000);

						tornarNormalitat: function(i){
							for (var i = 0; i < this.current_card.length; i++){
								Vue.set(this.current_card, i, {done: false, texture: back});
							}
						},
						bloquejarCartes: function(i){ //funcio que paralitza les cartes una estona i les gira
							Vue.set(this.current_card, i, {done: false, texture: back});
							Vue.set(this.current_card, i_front, {done: false, texture: back});
						}
						//
						*/
						if (this.dificultat=="easy") {
							this.score -= 10;
						} else if (this.dificultat=="normal") {
							this.score -= 20;
						} else {
							this.score -= 30;
						}
						this.firstClick.enableBody(false, 0, 0, true, true);
						card.enableBody(false, 0, 0, true, true);
						if (this.score <= 0){
							alert("Game Over");
							loadpage("../");
						}
					}
					else{
						this.correct++;
						if (this.correct >= this.limitCartes){
							alert("You Win with " + this.score + " points.");
							loadpage("../");
						}
					}
					this.firstClick = null;
				}
				else{
					this.firstClick = card;
				}
			}, card);
		});
	}
	
	update (){	}
}

