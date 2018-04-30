var notas = {
		notas_2: 50,
		notas_5: 40,
       	notas_10: 30,
       	notas_20: 25,
 		notas_50: 20,
       	notas_100: 10
}

function sacar(){
	document.getElementById("saida").innerHTML = "";
	document.getElementById("help").innerHTML = "Digite a quantia para saque:";

	if(document.getElementById("operacao").style.display == "none"){
 		document.getElementById("operacao").style.display = "block";
	}
	if(document.getElementById("botaoConsulta").style.display == "block"){
 		document.getElementById("botaoConsulta").style.display = "none";
	}
	if(document.getElementById("botaoSaque").style.display == "none"){
 		document.getElementById("botaoSaque").style.display = "block";
	}

}

function botaoSacar(){
	var valorOp = document.getElementById("num");
	sacarDinheiro(valorOp.value);
	document.getElementById("formu").reset();
}

function consultar(){
	document.getElementById("saida").innerHTML = "";
	document.getElementById("help").innerHTML = "Digite qual nota você deseja consultar:";

	if(document.getElementById("operacao").style.display == "none"){
 		document.getElementById("operacao").style.display = "block";
	}
	if(document.getElementById("botaoSaque").style.display == "none"){
 		document.getElementById("botaoSaque").style.display = "block";
	}
	if(document.getElementById("botaoConsulta").style.display == "none"){
 		document.getElementById("botaoConsulta").style.display = "block";
	}
}

function botaoConsultar(){
	var valorOp = document.getElementById("num");
	mostrarQuantiaDisponivel(valorOp.value);
	document.getElementById("formu").reset();
}

function limpar(){
	document.getElementById("help").innerHTML = "";
	document.getElementById("saida").innerHTML = "";
	document.getElementById("formu").reset();
	if(document.getElementById("operacao").style.display == "block"){
 		document.getElementById("operacao").style.display = "none";
	}
}

function sacarDinheiro(quantia){
	var saque = "Retire suas notas.";
	if(quantia > 1 && ((quantia%10==0) || (quantia%5==0))){
		alert('Processando...');
		while(quantia !== 0){

			if(quantia >= 100 && notas.notas_100 > 0){
				quantia -= 100;
				notas.notas_100--;

			} else if(quantia >= 50 && notas.notas_50 > 0){
				quantia -= 50;
				notas.notas_50--;

			} else if(quantia >= 20 && notas.notas_20 > 0){
				quantia -= 20;
				notas.notas_20--;

			} else if(quantia >= 10 && notas.notas_10 > 0){
				quantia -= 10;
				notas.notas_10--;

			} else if(quantia >= 5 && notas.notas_5 > 0){
				quantia -= 5;
				notas.notas_5--;

			} else if(quantia >= 2 && notas.notas_2 > 0){
				quantia -= 2;
				notas.notas_2--;

			} else {
				saque = "Caixa sem notas para o saque desejado.";
				break;
			}
		}
	} else {
		alert('Valor inválido para saque.');
		saque = "Execute a operação novamente.";
	}
	document.getElementById("saida").innerHTML = "";
	document.getElementById("saida").innerHTML = saque;
}

function mostrarQuantiaDisponivel(money){

	var quantidade = "";

	if(money == 100){
		quantidade = "O caixa contém " + notas.notas_100 + " notas de R$" + money + ",00.";

	} else if(money == 50){
		quantidade = "O caixa contém " + notas.notas_50 + " notas de R$" + money + ",00.";

	} else if(money == 20){
		quantidade = "O caixa contém " + notas.notas_20 + " notas de R$" + money + ",00.";

	} else if(money == 10){
		quantidade = "O caixa contém " + notas.notas_10 + " notas de R$" + money + ",00.";

	} else if(money == 5){
		quantidade = "O caixa contém " + notas.notas_5 + " notas de R$" + money + ",00.";

	} else if(money == 2){
		quantidade = "O caixa contém " + notas.notas_2 + " notas de R$" + money + ",00.";

	} else {
		alert("Nota inexistente.");
		quantidade = "Execute a operação novamente.";

	}
	document.getElementById("saida").innerHTML = "";
	document.getElementById("saida").innerHTML = quantidade;
}