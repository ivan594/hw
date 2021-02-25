// Цели
let targets = ["goblin", "ork", "pirate"]; 
let target = "goblin";

class Enemy {
    constructor(range, demage, color, name, hp) {
        this.range = range;
        this.demage = demage;
        this.color = color;
        this.name = name;
        this.hp = hp;       
    }

    attack(target, range) {
        this.target = target;
        this.range = range;
    }

    getDamage(damage) {
        this.hp;
        this.damage;
    }

    battleCry() {
        console.log(`${this.name} атакует своих врагов!`);
    }

}

class Knight extends Enemy {
    constructor(range, damage, color) {
        super(range, damage, color);
    }

    attackAll(targets, demage) {
        this.targets = targets;
        this.demage = demage;
        console.log("К рыцарю лучше не подходить толпой!");
    }

}

    let knight = new Knight(20, 20, "red");
    console.log(knight, Object.getPrototypeOf(knight));
    knight.attackAll(targets, 30);
    console.log(knight, Object.getPrototypeOf(knight));

class Elf extends Enemy {
    constructor(range, damage, color, spellName) {
        super(range, damage, color);
        this.spellName = spellName;
    }

    magicAttack(demage, range, spellName) {
        this.demage = demage;
        this.range = range;
        this.spellName = spellName;
        console.log(`Эльф применил заклинание ${this.spellName}`);
    }
}

    let elf = new Elf(40, 15, "blue");
    console.log(elf, Object.getPrototypeOf(elf));
    elf.magicAttack(50, 30, "magicAttack!")
    console.log(elf, Object.getPrototypeOf(elf));


class Dwarf extends Enemy {
    constructor(range, damage, color) {
        super(range, damage, color);
        
    }
    throwAxe(target, demage, range) {
        this.target = target;
        this.demage = demage;
        this.range = range;
        console.log("Звучит свист топоров!")
    }
}

    let dwarf = new Dwarf(10, 30, "gray");
    console.log(dwarf, Object.getPrototypeOf(dwarf));
    dwarf.throwAxe(target, 50, 30);
    console.log(dwarf, Object.getPrototypeOf(dwarf));