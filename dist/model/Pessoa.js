"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome,
            this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    //GETTERS = recuperar(não tem parâmetro mas tem retorno)
    //SETTERS = atribui(tem parâmetro e não tem retonro)
    /**
     * Retorna o nome da pessoa
     *
     * @returns nome : nome da pessoa
     */
    getNome() {
        return this.nome;
    }
    /**
     * Atribui um valor ao atributo nome
     *
     * @param _nome : nome da pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     * Retorna o cpf da pessoa
     *
     * @returns cpf: cpf da pessoa
     */
    getcpf() {
        return this.cpf;
    }
    /**
     * Atribui um valor ao atributo cpf
     *
     * @param _cpf : cpf da pessoa
     */
    setcpf(_cpf) {
        this.cpf = _cpf;
    }
    /**
     * Retorna a data de nascimento da pessoa
     *
     * @returns data de nascimento: o dia em que a pesssoa nasceu/quando ela fará aniversário
     */
    getdata_nascimento() {
        return this.data_nascimento;
    }
    /**
     * Atribuiu um valor a data de nascimento da pessoa
     *
     * @param _data_nascimento : o dia que a pessoa nasceu/quando a pessoa fará aniversário
     */
    setdata_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    /**
     * Retorna o telefone da pessoa
     *
     * @returns telefone: o número de telefone da pessoa
     */
    gettelefone() {
        return this.telefone;
    }
    /**
     * Atribui um valor ao telefone da pessoa
     *
     * @param _telefone: número de telefone da pessoa
     */
    settelefone(_telefone) {
        this.telefone = _telefone;
    }
    /**
     * Retorna o endereço da pessoa
     *
     * @returns endereço: onde a pessoa mora
     */
    getendereco() {
        return this.endereco;
    }
    /**
     * Atribui o endereço da pessoa
     *
     * @param _endereco: onde a pessoa mora
     */
    setendereco(_endereco) {
        this.endereco = _endereco;
    }
    /**
     * Retorna a altura da pessoa
     *
     * @returns altura: a altura/tamanho da pessoa
     */
    getaltura() {
        return this.altura;
    }
    /**
     * Atribui um valor a altura da pessoa
     *
     * @param _altura: a altura/tamanho da pessoa
     */
    setaltura(_altura) {
        this.altura = _altura;
    }
    /**
     * Retorna o peso da pessoa
     *
     * @returns peso: o quanto a pessoa pesa
     */
    getpeso() {
        return this.peso;
    }
    /**
     * Atribui um valor ao peso da pessoa
     *
     * @param _peso: o quanto a pessoa pesa
     */
    setpeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                             CPF: ${this.cpf}
                             Data: ${this.data_nascimento}
                             Telefone: ${this.telefone}
                             Endereço: ${this.endereco}
                             Altura: ${this.altura}
                             Peso: ${this.peso}`);
    }
    // implementar os métodos
    falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    andarkm(_quilometro) {
        setTimeout(() => {
            console.log(`${this.nome} andou: ${_quilometro} quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    comerpt(_prato) {
        console.log(`${this.nome} comeu: ${_prato}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map