const { Server } = require('socket.io');
const { getCount } = require('../utils/comman')



global.ioInstance = null


async function initialize(server) {
    global.ioInstance = new Server(server, {
        cors: {
            origin: ['http://localhost:4200'],
            METHODS: ['GET', 'POSt'],
            credentials: true,
        }
    })

    global.ioInstance.on('connection', (socket) => {
        console.log('new connection-------->>>>>>>>>>>> ', socket.id);
        socket.on('formClient', (data) => {
            console.log('formClient event', data);
        })

        socket.on('updateCount', async (data) => {
            console.log('updateCount event catched in first', data);
            global.NotificationCount++
            console.log('using the getCount------->>>', await getCount());
            global.ioInstance.emit('updatedCount', await getCount());

        })

        socket.on('updateCountDes', async (data) => {
            console.log('updateCountDes event catched', data);
            global.NotificationCount--
            console.log('global iin des ', global.NotificationCount);
            global.ioInstance.emit('updatedCount', await getCount());
        })

        socket.on('getCount', async (data) => {
            console.log('getCount event catched', data);
            console.log('using the getCount------->>>', await getCount());
            global.ioInstance.emit('updatedCount', await getCount());
        })
 
    })

}


module.exports = { initialize, getCount };