const {envs} = require('./config/env')
const {startServer} = require('./server/server')




const main = () =>{
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}

// Función autoconvocada
// Agnóstica sin nombre
// ejecutada por los paréntesis del final
(async()=>
{
    main()
})()
