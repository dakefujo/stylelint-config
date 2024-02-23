export = {
    plugins: [
        'stylelint-scss'
    ],
    extends: ['stylelint-config-recommended-scss'],
    rules: {
        'scss/at-extend-no-missing-placeholder': [
            true,
            { 'severity': 'warning' }
        ],
        'scss/comment-no-empty': null
    }
}
