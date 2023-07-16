const eventBus = require("./eventBus");



const collect = (data) => {

    console.log('Reporting service ' + data.method);

}


eventBus.subscribe('Request', collect)
