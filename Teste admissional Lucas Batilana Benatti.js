/*
1. A função recebe um inteiro entre 1 e 12 e retorna o mês correspondente por extenso. Caso o mês informado não esteja entre 1 e 12, deverá ser retornado "Mes Inexistente"
 * Ex: input: 1 	- output: "Janeiro"
 * Ex: input: 13 	- output: "Mês Desconhecido"
*/

function correspondingMonth(mes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (mes >= 1 && mes <= 12) {
    return meses[mes - 1];
  } else {
    return "Mes Inexistente";
  }
}

/*
2. A função deverá receber um array com pelo menos 3 itens e retornar a média simples de todos os itens do array.
 * Caso o array recebido possua menos que 3 itens, deverá ser retornado o boleano false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
*/

function mediaSimples(notas) {
  totalDeNotas = notas.length;
  if (totalDeNotas >= 3) {
    let total = 0;
    for (let i = 0; i < totalDeNotas; i++) {
      total += notas[i];
    }
    return total / totalDeNotas;
  } else {
    return false;
  }
}

/*
3. Recebe um array de inteiros maiores que zero e retorna a quantidade de números pares existentes no array
* Ex: input: [1,2,3,4,5] - output: 2
*/

function parOuImpar(numero) {
  let contadorPares = 0;
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0 && numero[i] > 0) {
      contadorPares++;
    }
  }
  return contadorPares;
}

/* 
4. A função deverá receber uma string e retornar a mesma invertida.
 * Ex: input: "bar" - output: "rab"
*/

function inverterString(string) {
  let invertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    invertida += string[i];
  }

  return invertida;
}

/*
5. A função deverá receber uma string e substituir todas as vogais da mesma pelo sinal '?'
* Ex: input: 'Bar' - output: 'B?r'
*/

function substituirCaracteres(string) {
  return string.replace(/[aeiouAEIOU]/g, "?");
}

/*
6. A função deverá receber um array de inteiros como parâmetro e deverá retornar o mesmo array ordenado em ordem crescente.
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
*/

function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

/*
7. A função irá receber um array de inteiros e retornar o primeiro elemento não repetido.
 * Ex: input: [2,2,3,1,1,6] - output: 3
*/

function primeiroValorNaoRepetido(array) {
  let contadorRepeticao = {};

  array.forEach((numero) => {
    contadorRepeticao[numero] = (contadorRepeticao[numero] || 0) + 1;
  });

  for (let i = 0; i < array.length; i++) {
    let repetido = array[i];
    if (contadorRepeticao[repetido] === 1) {
      return repetido;
    }
  }

  return "Não há números que não se repetem";
}

/*
8. A função deverá ler o arquivo data.dat e retornar o número de linhas que atende pelo menos uma das condições abaixo:
 * 1 - A quantidade de números zeros na linha é um multiplo de 3
 * 2 - A quantidade de números 1 é um multiplo de 2
*/

function manipulacaoArquivo() {
  let linhasAtendemCondicoes = 0;
  fetch("data.dat")
    .then((res) => res.text())
    .then((text) => {
      const divisaoEmLinhas = text.split("\n");

      for (let i = 0; i < divisaoEmLinhas.length; i++) {
        const array = divisaoEmLinhas[i].trim();

        if (array !== "") {
          const contagemZerosPorLinha = (array.match(/0/g) || []).length;
          const contagemUnsPorLinha = (array.match(/1/g) || []).length;

          if (
            (contagemZerosPorLinha % 3 === 0 && contagemZerosPorLinha > 0) ||
            (contagemUnsPorLinha % 2 === 0 && contagemUnsPorLinha > 0)
          ) {
            linhasAtendemCondicoes++;
          }
        }
      }

      return linhasAtendemCondicoes;
    });
}
/*
9. Descubra o número do cartão de crédito abaixo sabendo que o mesmo é um multiplo de 123457 e o digito de luhn é válido.
 * O Número do cartão deve ter o seguinte padrão: 543210******1234
*/

function encontrarNumeroCartao() {
  let numeroCartaoInicial = 5432100000001234;
  let numeroVariavelCartao = 0;
  while (true) {
    let stringNumeroCartaoInicial = numeroCartaoInicial.toString();
    let tentativaNumeroValido =
      stringNumeroCartaoInicial.substr(0, 6) +
      String(numeroVariavelCartao).padStart(6, "0") +
      stringNumeroCartaoInicial.substr(12);
    if (
      tentativaNumeroValido % 123457 === 0 &&
      testeDigitoLuhn(tentativaNumeroValido)
    ) {
      return tentativaNumeroValido;
    }
    numeroVariavelCartao++;
  }
}

function testeDigitoLuhn(numeroParaTeste) {
  let soma = 0;

  for (let i = 0; i <= numeroParaTeste.length - 1; i += 2) {
    let digitoAnalisado = parseInt(numeroParaTeste[i]);
    if (digitoAnalisado * 2 > 9) {
      const somaMaiorQueNove = ((digitoAnalisado * 2) % 10) + 1;

      soma += Number(somaMaiorQueNove);
    } else {
      soma += digitoAnalisado * 2;
    }
  }

  for (let i = 1; i <= numeroParaTeste.length; i += 2) {
    let digitoAnalisado = parseInt(numeroParaTeste[i]);

    soma += digitoAnalisado;
  }
  return soma % 10 === 0;
}

/*
10. A função será utilizada em um sistema de caixa.
 * Ela receberá um valor inteiro, representando o valor a ser sacado e um array contendo quais tipos de cédulas ela tem disponível.
 * O array de cédulas disponiveis indica quais valores de cédulas existirão no caixa, a quantidade das mesmas é ilimitada. No caso do input [2,5,50], o caixa terá quantidades ilimitadas de notas de 2, 5 e 50 para devolver ao cliente.
 * A função deverá retornar o mínimo de cédulas necessarias possivel para o saque em formato de um array, cuja chave seja o valor da cédula e o valor a quantidade daquela cédula que será sacada.
 *
 * Ex: input: 150 & [5, 50, 100] 	- output: ["100"=>1, "50"=>1].
 * Ex: input: 150 e [2, 5, 10] 		- output: ["10"=>15].
*/

function menorNumeroNotas(int, array) {
  const arrayOrdenada = array.sort((a, b) => b - a);
  let numeroNotas = [];

  for (i = 0; i < array.length; i++) {
    let nota = arrayOrdenada[i];
    let quantidadeNotas = parseInt(int / arrayOrdenada[i]);
    int = int % arrayOrdenada[i];
    if (quantidadeNotas > 0) {
      numeroNotas.push({ nota: nota, quantidadeNotas: quantidadeNotas });
      return numeroNotas;
    }
  }
}

/*
11. Escreva a diferença entre interfaces, instancias, objetos e classes no contexto de orientação a objeto:
*/

/*
Classes são representações de entidades do mundo real, também são um conjunto de elementos que possuem as mesmas característias, e essa  
  semelhança em características é o que permite a definição de métodos e atributos gerais, quais sejam atributos seriam propriedades da classe e método seriam as funcionalidade.

Objetos são as representações do que a classe define, eles têm atributos próprios podem ser diferentes entre si, por mais que venham da 
  mesma classe, objetos são criados a partir de instâncias de classe.

Assim a instância de uma classe pode ser chamada de objeto, a Instância é o que permite a existência de um objeto na memória.

Interfaces existem para garantir as regras de implementação de uma classe, classes que implementam interfaces têm por garantia que todos
  seus métodos sejam implementados, é diferente de uma classe abstrata, uma vez que a classe abstrata é um padrão de projeto e têm um código comum entre outras classes, a classe abstrata permite isolar apenas a parte comum de suas filhas, não sendo necessário que todos seus métodos e atributos sejam herdadeos.
*/
