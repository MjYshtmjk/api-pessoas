import { Pessoa } from "../model/Pessoa"

let pessoa = new Pessoa('Gol D Rogers',
                        '11111111111',
                        new Date(2000,9,15),
                        '00000000000',
                        'Rua Número 1',
                        170,
                        70);

pessoa.falar();
pessoa.falarFrase("Querem meu tesouro fiquem a vontade para procura-lo!Procurem!!")

pessoa.andar();
pessoa.andarkm(6000);

pessoa.comer();
pessoa.comerpt("Lasanha")

let nomePessoa = pessoa