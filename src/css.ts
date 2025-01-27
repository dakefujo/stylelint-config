export default {
    rules: {
        'at-rule-no-unknown': null,
        'at-rule-disallowed-list': [
            ['extend', 'import'],
            { severity: 'warning' }
        ],
        'color-function-notation': 'legacy',
        'custom-property-empty-line-before': 'never',
        'declaration-no-important': [true, { severity: 'warning' }],
        'function-no-unknown': null,
        'function-name-case': 'lower',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': ['always', { except: ['empty'] }],
        'length-zero-no-unit': true,
        'no-duplicate-selectors': [true, { severity: 'warning' }],
        'rule-empty-line-before': [
            'always-multi-line',
            { ignore: ['after-comment', 'inside-block'] }
        ],
        'selector-pseudo-element-colon-notation': 'double',
        'selector-attribute-quotes': 'always',
        'selector-type-case': 'lower'
    }
}
