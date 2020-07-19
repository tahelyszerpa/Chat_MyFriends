var users = [{
        name: 'Sebastian',
        sexo: 'M',
        hobby: 'Deporte',
        avatar: 'images/avatar1.jpg'
    },
    {
        name: 'Maria Antonieta',
        sexo: 'F',
        hobby: 'Arte',
        avatar: 'images/avatar3.jpg'
    },
    {
        name: 'Jose david',
        sexo: 'M',
        hobby: 'Leer',
        avatar: 'images/avatar2.jpg'
    },
    {
        name: 'Lorena',
        sexo: 'F',
        hobby: 'Deporte',
        avatar: 'images/avatar6.jpg'
    },
    {
        name: 'Mariana',
        sexo: 'F',
        hobby: 'Tennis',
        avatar: 'images/avatar4.jpg'
    },
    {
        name: 'Fernanda',
        sexo: 'F',
        hobby: 'Fiesta',
        avatar: 'images/avatar5.jpg'
    }
];



     function search() {
        var resultados = document.getElementById('resultado');
        var searchBtn = document.getElementById('searchBtn');
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        //get sexo
        var sexoField = document.getElementById('sexo');
        var seleccionado = sexoField.selectedIndex;
        sexo = sexoField.options[seleccionado].value;
        console.log(sexo);


        var resultsHTML = '';
        var numUsers = users.length;
        console.log(users);
        for (var i = 0; i < numUsers; i++) {
            if (sexo == 'A' || sexo == users[i].sexo) {
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHTML += '<div class="persona-row">\
            <img src="' + users[i].avatar + '">\
            <div class="persona-info">\
                <div>' + users[i].name + '</div>\
                <div>' + users[i].hobby + '</div></div>\
            <button>Añadir Amigo</button></div>';
                }
            }

        }
       resultados.innerHTML = resultsHTML; 
    }
 
window.addEventListener('load', function () {
    var resultados = document.getElementById('resultado');
    var searchBtn = document.getElementById('searchBtn');

var results = document.getElementById('resultado');
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);
search();
});