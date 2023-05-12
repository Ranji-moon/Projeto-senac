//objeto de usuarios
const users = {
    nome: '',
    usuario: '',
    senha: '',
    login: false
}

//ARRAY DE OBJETOS DOS USUARIOS
    let usersArray = [];

function startApp() {
    let opcão = 999;

    while (opcão !== 0) { 

        let result;

        switch (opcão) {
            case 1:
               result = login();
                if(result) {
                    alert('cirari menu proincipal')
                } else {
                    alert('usuario ou senha incorretos')
                };
                break; 
            case 999:
                    alert('Voce precisa estar logado \n' + 'para acessar o menu principal \n\n' + 
                    'caso ainda não tenha usuario cadastrado, utilize a opção 2 do menu\n' 
                    + 'e faça seu registro') 
                break;
            case 2: 
                    result = register();
                    if (!result) {
                        alert('não foi possivel cadastrar');
                    } else{
                        alert('usuario cadastrado com sucesso 👻');
                    }
                break;  
            default:
                alert('Opção não encontrada')
                break;
        }

        opcão = Number(
            prompt(
                'Escolha uma opção:\n' + 
                '1 - login:\n' + 
                '2 - cadastrar:\n' +
                '3 - esqueci minhas credenciais:\n' +
                '0 - sair'
            )
        );
    } 
    
}

function login() {
    let usuario = prompt('insira seu usuario: ');
    let senha = prompt('insira sua senha: ');
    

   return validateLogin(usuario, senha);
}

function validateLogin(usuario, senha) {
        let result = false;
        for(let i = 0; i < usersArray.length; i++) {
            console.log(usersArray[i]);
            if(usersArray[i].usuario === usuario 
                && usersArray[i].senha === senha); {
                result = true;
                usersArray[i].logado = true
            }
    }
   return result;
}

function register() {
    let result = false;
    users.nome          = prompt('nome:')
    users.usuario       = prompt('usuario:')
    users.senha         = prompt("senha: ")

    if( users.nome !== '' && users.senha !== '') {
        usersArray.push(users);
        result = true
    } 
        return result
}

//iniciando o sistema
startApp();