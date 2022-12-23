import { normalize, schema, denormalize } from 'normalizr';
import util from 'util';

const mensajes = {
    id: "250",
    nombre: "canal twitch",
    admin: {
        id: "1",
        email : "thom@gmail.com",
        nombre: "thom",
        apellido: "dargly",
        edad: 23,
        alias: "thomyy321dar",
        avatar: "http://2301asdaj2",
        texto: "Hola buenas noches y buenas tardes"
    },
    moderador: {
        id: "4",
        email: "grisli@gmail.com",
        nombre: "chris",
        apellido: "johnas",
        edad: 41,
        alias: "huehuehuehue",
        avatar: "http://2301214aj2",
        text: "Nunca, lo juro por la garrita"
    },
    usuarios: [
        {
            id: "1",
            email : "thom@gmail.com",
            nombre: "thom",
            apellido: "dargly",
            edad: 23,
            alias: "thomyy321dar",
            avatar: "http://2301asdaj2",
            texto: "Hola buenas noches y buenas tardes"
        },
        {
            id: "2",
            email: "quety@gmail.com",
            nombre: "jeff",
            apellido: "incleston",
            edad: 37,
            alias: "jeffcleston",
            avatar: "http://2asaga231sdnb",
            text: "PERO MUY BIEN Y USTED ?"
        },
        {
            id: "3",
            email: "micri@gmail.com",
            nombre: "mani",
            apellido: "alterego",
            edad: 17,
            alias: "manialter",
            avatar: "http://5641asdaasd",
            text: "Al zoologico ?"
        },
        {
            id: "4",
            email: "grisli@gmail.com",
            nombre: "chris",
            apellido: "johnas",
            edad: 41,
            alias: "huehuehuehue",
            avatar: "http://2301214aj2",
            text: "Nunca, lo juro por la garrita"
        },
        {
            id: "5",
            email: "vini321@gmail.com",
            nombre: "vini",
            apellido: "vini2",
            edad: 51,
            alias: "claricol",
            avatar: "http://2sad2223",
            text: "No te rias por favor"
        },
        {
            id: "6",
            email: "claribel@gmail.com",
            nombre: "clari",
            apellido: "belgmail",
            edad: 81,
            alias: "holasi",
            avatar: "http://2sadwi32d2223",
            text: "Soy yo, recuerda el verano"
        },
        {
            id: "7",
            email: "traninz@gmail.com",
            nombre: "trani",
            apellido: "bilo",
            edad: 25,
            alias: "thelord2",
            avatar: "http://2sa2146tdsvxzvsxv223",
            text: "Claro pero estoy saliendo del hogar, los platos estaban sucios"
        }
    ]
}


const textos = new schema.Entity('textos');

const esquema = new schema.Entity('esquema', {
    admin: textos,
    moderador: textos,
    usuarios: [textos]
});

function print(obj) {
    console.log(util.inspect(obj, false, null, true));
};

console.log('-------- Normalize');
const mensajesNormalizados = normalize(mensajes, esquema);
print(mensajesNormalizados);

console.log('longitud original: ' + JSON.stringify(mensajes).length);
console.log('longitud normalizada: ' + JSON.stringify(mensajesNormalizados).length);


console.log('-----------   Desnormalizado:');
const mensajesDesnormalizados = denormalize(mensajesNormalizados.result, esquema, mensajesNormalizados.entities);
print(mensajesDesnormalizados);