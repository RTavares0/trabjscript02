# trabjscript02

Fase 1:
A primeira fase é responsável por validar os campos da página do formulário que estão relacionados às informações pessoais do usuário, como nome, CPF, senha e confirmação de senha. 
A função utilizada para isso é a validarFase1().

Dentro desta função, são criadas constantes que recebem os valores dos campos da página através do método getElementById(). 
Para os campos "nome" e "cpf", é aplicado o método trim() para remover espaços em branco no início e no final do valor digitado.

Em seguida, é criada uma constante errosFase1 que recebe a referência do elemento do HTML que exibirá as mensagens de erro para o usuário, caso necessário.

Na sequência, é criada uma expressão regular regexNumeros, que valida se o CPF é composto por somente números e se possui 11 dígitos. 
Caso esta validação não seja atendida, uma mensagem de erro é exibida na página.

Também é verificado se a senha e a confirmação de senha digitadas pelo usuário são iguais. 
Caso não sejam iguais, uma mensagem de erro é adicionada à constante errosFase1.

Ao final, é verificado se a constante errosFase1 está vazia, ou seja, se não há mensagens de erro. 
Se não houver, o formulário da primeira fase é escondido e o formulário da segunda fase é exibido, juntamente com as informações digitadas pelo usuário para serem exibidas na próxima tela.

Fase 2:
A segunda fase é responsável por validar os campos da página do formulário que estão relacionados às informações profissionais do usuário, como profissão, estado e anos de experiência. 
A função utilizada para isso é a validarFase2().

Dentro desta função, são criadas constantes que recebem os valores dos campos da página através do método getElementById(). 
Também é criada uma constante errosFase2 que receberá as mensagens de erro, caso necessário.

Em seguida, é verificado se o estado selecionado pelo usuário é válido, ou seja, se algum estado foi selecionado. 
Caso nenhum estado seja selecionado, uma mensagem de erro é adicionada à constante errosFase2.

Ao final, é verificado se a constante errosFase2 está vazia, ou seja, se não há mensagens de erro. Se não houver, o formulário da segunda fase é escondido e o formulário da terceira fase é exibido, juntamente com as informações digitadas pelo usuário para serem exibidas na próxima tela.

Fase 3:
A terceira e última fase é responsável por enviar os dados do formulário para algum servidor ou serviço. 
A função utilizada para isso é a enviarDados().

Dentro desta função, é criado um objeto dados que recebe as informações digitadas pelo usuário nos campos do formulário, através do método getElementById().

Ao final da função, é feito um log no console do objeto dados.
Neste ponto, seria necessário realizar uma implementação adicional para que os dados fossem enviados para algum servidor ou serviço, por exemplo, utilizando uma requisição HTTP.

