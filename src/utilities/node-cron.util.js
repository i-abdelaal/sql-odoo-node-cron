const cron = require('node-cron');

/**
 * Node cron service
 *  
 * @param {string} taskName 
 * @param {string} interval 
 * @param {Promise<*>} task 
 * @return {void}
 */
const nodeCron = (taskName, interval, task) => {
    cron.schedule(interval, () => {
        console.log(`Node-cron for ${taskName} started at ${new Date()}`);
        task().then(() => {
            console.log(`Node-cron for ${taskName} ended at ${new Date()}`);
        });
    });
};

module.exports = Object.freeze({ nodeCron });
