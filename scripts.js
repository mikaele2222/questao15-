
    let idade = parseFloat(prompt('digite a idade do nadador:'));

    if (idade >= 18) {
        
        alert('Categoria: adulto');

    } else if (idade >= 14) {

        alert('Categoria: juvenil');

    } else if (idade >= 9) {

        alert('Categoria: infantil');

    } else {

        alert('Categoria: mirim');
    }
