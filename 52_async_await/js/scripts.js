// Sintaxe

/*

    function primeiraFuncao() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Esperou isso aqui!");
                resolve();
            }, 1000);
        });
    }

    async function segundaFuncao() {
        console.log("Iniciou");

        await primeiraFuncao();

        console.log("Terminou");
    }

    segundaFuncao();

*/

// Prática

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err));
}

async function showUserName(id) {
    try {
        
    } catch (err) {
        console.log(`Erro: ${err}`);
    }

    const user = await getUser(id);

    console.log(`O nome do usuário é: ${user.data.first_name}`)
}

showUserName(3); 