import Fastify from 'fastify';

async function start() {
    try{
        //try this part but if error occurs, it jumps to the catch part
        const fastify = Fastify({logger: true}); //initialize fastify
        fastify.get('/', async (request,reply) => {
            return {success : true};
        });
        const addr = await fastify.listen({
            port: '8080'
        })

        console.log(`Listening on ${addr}`);
    }catch (error){
        console.error(error); //prints error code
        process.exit(1); //exits the program
    }
}

start();