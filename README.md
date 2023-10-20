# Teste-admissional-B5s
Teste realizada como exame de admissão para estágio na empresa B5s Tecnologia

Teste composto de 11 questões, dentre elas 10 para resolução de problemas com código e 1 dissetativa.


 * The function should recive an integer between 1 and 12 (inclusive) and return the corresponding string value. If the informed integger is not between 1 and 12, the function should return 'Unknown Month'
 * Ex: input: 1 - output: "January"
 * Ex: input: 13 - output: "Unknown Month"
 *
 * A função recebe um inteiro entre 1 e 12 e retorna o mês correspondente por extenso. Caso o mês informado não esteja entre 1 e 12, deverá ser retornado "Mes Inexistente"
 * Ex: input: 1 	- output: "Janeiro"
 * Ex: input: 13 	- output: "Mês Desconhecido"
 *
 * @param int $month
 * @return string
 */
function correspondingMonth(int $month):string{}
function mesCorrespondente(int $mes):string{}

/**
 * The function should recive an array with at least 3 itens and return the arithmetic average of all the itens.
 * If the recived array contains less then 3 itens, the function should return the boolean false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * A função deverá receber um array com pelo menos 3 itens e retornar a média simples de todos os itens do array.
 * Caso o array recebido possua menos que 3 itens, deverá ser retornado o boleano false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 *
 * @param array $notas
 * @return int|bool
 */
function arithmeticAverage(array $integers){}
function mediaSimples(array $notas){}

/**
 * The function should expect an array containing integers greater than zero and return the amount of even values contained in it.
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * Recebe um array de inteiros maiores que zero e retorna a quantidade de números pares existentes no array
 * Ex: input: [1,2,3,4,5] - output: 2
 *
 * @param array $array
 * @return int
 */
function oddOrEven(int $number):bool{}
function parOuImpar(int $numero):bool{}

/**
 * The function should expect a string and return it backwards.
 * Ex: input: "foo" - output: "oof"
 *
 * A função deverá receber uma string e retornar a mesma invertida.
 * Ex: input: "bar" - output: "rab"
 *
 * @param string $string
 * @return string
 */
function reverseString(string $string):string{}
function inverterString(string $string):string{}

/**
 * The function must replace all the vowels with '?' and return the result string
 * Ex: input: 'Foo' - output: 'F??'
 *
 * A função deverá receber uma string e substituir todas as vogais da mesma pelo sinal '?'
 * Ex: input: 'Bar' - output: 'B?r'
 *
 * @param string $string
 * @return string
 */
function replaceWowels(string $string):string{}
function substituirCaracteres(string $string):string{}

/**
 * The function must expect an array of integers and sort it in ascending order
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * A função deverá receber um array de inteiros como parâmetro e deverá retornar o mesmo array ordenado em ordem crescente.
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 *
 * @param array $array - Array a ser ordenado
 * @return array
 */
function arraySort(array $array):array{}
function ordenarArray(array $array):array{}

/**
 * The function must expect an array of integers and return the first non-repeated value.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
 * A função irá receber um array de inteiros e retornar o primeiro elemento não repetido.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 *
 * @param array $array - Array contendo inteiros
 * @return int
 */
function firstNonRepeatedValue(array $array):int{}
function primeiroValorNaoRepetido(array $array):int{}

/**
 * Your function need to read the file data.dat and return how many lines there are where the number of 0's is a multiple of 3 or the numbers of 1s is a multiple of 2.
 *
 * A função deverá ler o arquivo data.dat e retornar o número de linhas que atende pelo menos uma das condições abaixo:
 * 1 - A quantidade de números zeros na linha é um multiplo de 3
 * 2 - A quantidade de números 1 é um multiplo de 2
 *
 * @return int
 */
function fileHandler():int{}
function manipulacaoArquivo():int{}

/**
 * The function must return the full credit card number. The card number is a multiple of 123457 and the Luhn check digit is valid.
 * The Card Number must have the following pattern: 543210******1234
 *
 * Descubra o número do cartão de crédito abaixo sabendo que o mesmo é um multiplo de 123457 e o digito de luhn é válido.
 * O Número do cartão deve ter o seguinte padrão: 543210******1234
 *
 * @return string
 */
function creditCardNumber():string{}
function encontrarNumeroCartao():string{}

/**
 * The function should work like an ATM machine. it will recive an integer value representing the amount that will be withdrown and an array containing the avaliable bank notes.
 * Your function will have to return an array informing the minimum amount of bank notes as possible for the withdrown. Consider that the amount of each note are infinity.
 *
 * A função será utilizada em um sistema de caixa.
 * Ela receberá um valor inteiro, representando o valor a ser sacado e um array contendo quais tipos de cédulas ela tem disponível.
 * O array de cédulas disponiveis indica quais valores de cédulas existirão no caixa, a quantidade das mesmas é ilimitada. No caso do input [2,5,50], o caixa terá quantidades ilimitadas de notas de 2, 5 e 50 para devolver ao cliente.
 * A função deverá retornar o mínimo de cédulas necessarias possivel para o saque em formato de um array, cuja chave seja o valor da cédula e o valor a quantidade daquela cédula que será sacada.
 *
 * Ex: input: 150 & [5, 50, 100] 	- output: ["100"=>1, "50"=>1].
 * Ex: input: 150 e [2, 5, 10] 		- output: ["10"=>15].
 *
 * @param int   $valor
 * @param array $cedulas
 *
 * @return array
 */
function atmMachine(int $value, array $bankNotes):array{}
function menorNumeroNotas(int $valor, array $cedulas):array{}

/**
 * In the context of object orientation, write the diferences between classes, objects, instances and interfaces:
 *
 * Escreva a diferença entre interfaces, instancias, objetos e classes no contexto de orientação a objeto:
 *
 */
