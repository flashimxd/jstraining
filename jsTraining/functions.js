
//function Fabric example

function createPessoa(nome, idade){
    return {
        nome: nome,
        idade: idade
    }
}
/*
console.log("--- Begin fabric--")
console.log(createPessoa("Jose", 29));
console.log(createPessoa("Jose Flash", 18));
console.log("--- End fabric--")
*/
//function Constructor example

var Pessoa = function(nome, idade){
    this.nome = nome;
    this. idade = idade;
}

var michele = {};
/*
console.log("--- Begin Constructor--")
console.log(new Pessoa("Bruno", 80));
console.log("--- End Constructor--")

console.log("--- Begin Using Call--");
//console.log(createPessoa.call(michele, "Michele", 33));
var Michele = createPessoa.call(michele, "Michele", 33)
console.log(Michele);
*/
//Module partner + auto invocation

var soccerTeam = function(){
    var team = "Atlético";
    var nick = "Galo"
    return {
        nameTeam: function(){
            return team;
        },
        nickNameTeam: function(){
            return nick;
        }
    }
}

var Team = function(name, nick){
    this.name = name;
    this.nick = nick;
        this.getName = function(){
            return this.name;
        };
        this.getNickName =  function(){
            return this.nick;
        }
}

var team = function(name, nick){
    //console.log(arguments); debugger;
    var name = name;
    var nick = nick;
    return {
        getName: function(){
            return name;
        },
        getNickName: function(){
            return nick;
        }
    }
}

/*
var time = team("Cruzeiro", "Maria");
console.log(time.getName());
console.log(time.getNickName());
var team = soccerTeam();
console.log(team.nameTeam());
console.log(team.nickNameTeam());
console.log("--- End Galão--");
*/
var maria = new Team("Cruzeiro", "Maria");
console.log(maria.getName());
console.log(maria.getNickName());

var butterRobot = (function(){
    var propose = 'you pass butter!';
    return {
        yourPropose: function(){
            return propose;
        }
    }
    
})();

//var robot = butterRobot();
console.log(butterRobot.yourPropose());