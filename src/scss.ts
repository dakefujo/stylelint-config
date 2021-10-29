const scss = {
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        'scss/at-extend-no-missing-placeholder': [
            true,
            { 'severity': 'warning' }
        ],
        'scss/comment-no-empty': null
    }
}

export = scss
