const isTest = String(process.env.NODE_ENV) === 'test';

const plugins = [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
];

if (process.env.NODE_ENV !== 'production' && !isTest) {
    plugins.push('react-refresh/babel');
}

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: isTest ? 'commonjs' : false,
                useBuiltIns: 'usage',
                corejs: { version: 3.9 },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins,
};
