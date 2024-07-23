export const contactos = [
    {
        id: 1,
        name: 'Matilda',
        numero: '351-4256873',
        estado: 'offline',
        thumbnail: './girl-curly.webp',
        mensajes:[
            {
                author: 'yo',
                text: 'Hola, a que hora salis del cole hoy?',
                estado: 'visto',
                day: 'hoy',
                hour: '13:15',
                id: 'valor_id'
            },
            {
                author: 'Matilda',
                text: 'Hola, a las 14:20, igual que todos los lunes',
                estado: 'visto',
                day: 'hoy',
                hour: '13:20',
                id: 'valor_id'
            }
        ],
    },
    {
        id: 2,
        name: 'Benito',
        numero: '351-6542879',
        estado: 'offline',
        thumbnail: './happy-3d-student-boy.webp',
        mensajes: [
            {
                author: 'yo',
                text: 'Hola, me podes responder?',
                estado: 'visto',
                day: 'ayer',
                hour: '18:30',
                id: 'valor_id'
            }
        ],
    }
]


export default contactos