const html = require('@rollup/plugin-html');
const nodeResoulve = require('@rollup/plugin-node-resolve');

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
    input: ['./src/index.js'],
    output: {
        dir: './dist',
        format: 'iife'
    },
    plugins: [
        nodeResoulve({
            exportConditions: ['development']
        }),
        html()
    ]
};

module.exports = options;
