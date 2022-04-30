class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
		this.cards = null;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
		this.numCartes = numCards.numCartes;
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
		if (this.numCartes <=2) { //si hi ha 2 cartes
			let arraycards = ['co', 'sb', 'co', 'sb'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[0]);
			this.add.image(350, 300, arraycards[1]);
			this.add.image(450, 300, arraycards[2]);
			this.add.image(550, 300, arraycards[3]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
		} else if (this.numCartes == 3) { //si hi ha 3
			let arraycards = ['co', 'cb', 'sb', 'co', 'cb', 'sb'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[0]);
			this.add.image(350, 300, arraycards[1]);
			this.add.image(450, 300, arraycards[2]);
			this.add.image(550, 300, arraycards[3]);
			this.add.image(450, 300, arraycards[4]);
			this.add.image(550, 300, arraycards[5]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(750, 300, 'back');

		} else if (this.numCartes == 4) { //si hi ha 4
			let arraycards = ['co', 'cb', 'sb', 'so', 'co', 'cb', 'sb', 'so'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[0]);
			this.add.image(350, 300, arraycards[1]);
			this.add.image(450, 300, arraycards[2]);
			this.add.image(550, 300, arraycards[3]);
			this.add.image(450, 300, arraycards[4]);
			this.add.image(550, 300, arraycards[5]);
			this.add.image(550, 300, arraycards[6]);
			this.add.image(550, 300, arraycards[7]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(750, 300, 'back');
			this.cards.create(850, 300, 'back');
			this.cards.create(950, 300, 'back');
			
		} else if (this.numCartes == 5) { //si hi ha 5
			let arraycards = ['co', 'cb', 'sb', 'so', 'tb', 'co', 'cb', 'sb', 'so', 'tb'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[0]);
			this.add.image(350, 300, arraycards[1]);
			this.add.image(450, 300, arraycards[2]);
			this.add.image(550, 300, arraycards[3]);
			this.add.image(450, 300, arraycards[4]);
			this.add.image(550, 300, arraycards[5]);
			this.add.image(550, 300, arraycards[6]);
			this.add.image(550, 300, arraycards[7]);
			this.add.image(550, 300, arraycards[8]);
			this.add.image(550, 300, arraycards[9]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(250, 700, 'back');
			this.cards.create(350, 700, 'back');
			this.cards.create(450, 700, 'back');
			this.cards.create(550, 700, 'back');
			this.cards.create(650, 700, 'back');
		} else if (this.numCartes == 6) { //si hi ha 6 (MAX.)
			let arraycards = ['co', 'cb', 'sb', 'so', 'tb', 'to', 'co', 'cb', 'sb', 'so', 'tb', 'to'];
			this.cameras.main.setBackgroundColor(0xBFFCFF);
			
			this.add.image(250, 300, arraycards[0]);
			this.add.image(350, 300, arraycards[1]);
			this.add.image(450, 300, arraycards[2]);
			this.add.image(550, 300, arraycards[3]);
			this.add.image(450, 300, arraycards[4]);
			this.add.image(550, 300, arraycards[5]);
			this.add.image(550, 300, arraycards[6]);
			this.add.image(550, 300, arraycards[7]);
			this.add.image(550, 300, arraycards[8]);
			this.add.image(550, 300, arraycards[9]);
			this.add.image(550, 300, arraycards[10]);
			this.add.image(550, 300, arraycards[11]);
			
			this.cards = this.physics.add.staticGroup();
			
			this.cards.create(250, 300, 'back');
			this.cards.create(350, 300, 'back');
			this.cards.create(450, 300, 'back');
			this.cards.create(550, 300, 'back');
			this.cards.create(650, 300, 'back');
			this.cards.create(750, 300, 'back');
			this.cards.create(250, 700, 'back');
			this.cards.create(350, 700, 'back');
			this.cards.create(450, 700, 'back');
			this.cards.create(550, 700, 'back');
			this.cards.create(650, 700, 'back');
			this.cards.create(750, 700, 'back');

		}
		
		
		let i = 0;
		this.cards.children.iterate((card)=>{
			card.card_id = arraycards[i];
			i++;
			card.setInteractive();
			card.on('pointerup', () => {
				card.disableBody(true,true);
				if (this.firstClick){
					if (this.firstClick.card_id !== card.card_id){
						this.score -= 20;
						this.firstClick.enableBody(false, 0, 0, true, true);
						card.enableBody(false, 0, 0, true, true);
						if (this.score <= 0){
							alert("Game Over");
							loadpage("../");
						}
					}
					else{
						this.correct++;
						if (this.correct >= 2){
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

