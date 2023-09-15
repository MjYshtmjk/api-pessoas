export class Pessoa {
    //atributos da classe 
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor(
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number,) {

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
            public getNome() { 
                return this.nome;
            }
            
            /**
             * Atribui um valor ao atributo nome
             * 
             * @param _nome : nome da pessoa
             */
            public setNome(_nome: string) { 
                this.nome = _nome;
            }

            /**
             * Retorna o cpf da pessoa
             * 
             * @returns cpf: cpf da pessoa 
             */
            public getcpf() { 
                return this.cpf;
            }
            
            /**
             * Atribui um valor ao atributo cpf
             * 
             * @param _cpf : cpf da pessoa 
             */
            public setcpf(_cpf: string) { 
                this.cpf = _cpf;
            }

            /**
             * Retorna a data de nascimento da pessoa 
             * 
             * @returns data de nascimento: o dia em que a pesssoa nasceu/quando ela fará aniversário
             */
            public getdata_nascimento() { 
                return this.data_nascimento;
            }
            
            /**
             * Atribuiu um valor a data de nascimento da pessoa
             * 
             * @param _data_nascimento : o dia que a pessoa nasceu/quando a pessoa fará aniversário
             */
            public setdata_nascimento(_data_nascimento: Date) { 
                this.data_nascimento = _data_nascimento;
            }

            /**
             * Retorna o telefone da pessoa 
             * 
             * @returns telefone: o número de telefone da pessoa
             */
            public gettelefone() { 
                return this.telefone;
            }

            /**
             * Atribui um valor ao telefone da pessoa 
             * 
             * @param _telefone: número de telefone da pessoa 
             */
            public settelefone(_telefone: string) { 
                this.telefone = _telefone;
            }

            /**
             * Retorna o endereço da pessoa 
             * 
             * @returns endereço: onde a pessoa mora
             */
            public getendereco() { 
                return this.endereco;
            }
            

            /**
             * Atribui o endereço da pessoa 
             * 
             * @param _endereco: onde a pessoa mora 
             */
            public setendereco(_endereco: string) { 
                this.endereco = _endereco;
            }

            /**
             * Retorna a altura da pessoa 
             * 
             * @returns altura: a altura/tamanho da pessoa
             */
            public getaltura() { 
                return this.altura;
            }
            
            /**
             * Atribui um valor a altura da pessoa
             * 
             * @param _altura: a altura/tamanho da pessoa
             */
            public setaltura(_altura: number) { 
                this.altura = _altura;
            }

            /**
             * Retorna o peso da pessoa
             *
             * @returns peso: o quanto a pessoa pesa 
             */
            public getpeso() { 
                return this.peso;
            }

            /**
             * Atribui um valor ao peso da pessoa
             * 
             * @param _peso: o quanto a pessoa pesa 
             */
            public setpeso(_peso: number) { 
                this.peso = _peso;
            }

            public mostraPessoa() {
                console.log(`Nome: ${this.nome}
                             CPF: ${this.cpf}
                             Data: ${this.data_nascimento}
                             Telefone: ${this.telefone}
                             Endereço: ${this.endereco}
                             Altura: ${this.altura}
                             Peso: ${this.peso}`);
            }

            // implementar os métodos
            public falar():void {
                //lógica de negócio
                console.log(`${this.nome} está falando`);
            }

            public falarFrase(_frase: string): void {
                //lógica de negócio
                console.log(`${this.nome} fala: ${_frase}`);
            }

            public andar():void {
                console.log(`${this.nome} está andando`);
            }

            public andarkm(_quilometro: number): void {
               setTimeout(() => {
                console.log(`${this.nome} andou: ${_quilometro} quilometros`); 
               },3000);
            }

            public comer(): void {
                console.log(`${this.nome} está comendo`);
            }

            public comerpt(_prato: string): void {
                console.log(`${this.nome} comeu: ${_prato}`);
            }
}
