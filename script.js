let imoveis = [];

do {
    let menu = `
    Lista de imovéis: ${imoveis.length}

    Escolha uma opção:
    1 - Salvar um novo imovél
    2 - Listar os imovéis
    3 - Sair
    `;

    let choice= prompt(${menu})

    switch (menu) {
        case '1':
            imoveis = {
            name: prompt('Escreva seu nome'),
            quartos: prompt('Quantos quartos tem seu imovél'),
            banheros: prompt('Quantos banheiros tem seu imovél'),
            garagem: confirm('Seu imovél possui caragem?')
        }
        case '2':
            alert(imoveis)
    }
} while (true)