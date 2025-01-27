export default {
    extends: ['stylelint-config-recommended-vue'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            rules: {
                'at-rule-no-unknown': null
            }
        }
    ]
}
