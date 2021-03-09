export const data = {
    languages: [
        {
            id: 'jp',
            name: '日本語',
            definition: '定義',
            example: '例文',
            formWordLabel: "新単語",
            formDefinitionLabel: "定義",
            formExampleLabel: "例文",
            formDefinitionHelp: '後でも追加可能です。',
            formExampleHelp: '後でも追加可能です。',
            words: [
                {
                    id: 0,
                    date: "2021-03-06",
                    title: '幸せ',
                    pronounce: 'しあわせ',
                    definitions: [
                        {
                            id: 'definition1',
                            value: 'とても気持ちいい',
                        },
                        {
                            id: 'definition2',
                            value: '嬉しいこと'
                        }
                    ],
                    examples: [
                        {
                            id: 'example1',
                            value: '私は幸せに感じています。'
                        },
                        {
                            id: 'example2',
                            value: '美味しいものを食べて幸せ！'
                        }
                    ]
                },
                {
                    id: 1,
                    date: "2021-03-02",
                    title: '成功する',
                    pronounce: 'せいこうする',
                    definitions: [
                        {
                            id: 'definition1',
                            value: '望んでいる結果を得ること'
                        }
                    ],
                    examples: [
                        {
                            id: 'example1',
                            value: '私は必ず成功するんだ！',
                        },
                        {
                            id: 'example2',
                            value: '成功した人々の共通点'
                        }
                    ]
                }
            ]
        },
        {
            id: 'en',
            name: 'English',
            definition: 'Definitions',
            example: 'Examples',
            formWordLabel: "New Word",
            formDefinitionLabel: "Definitions",
            formExampleLabel: "Examples",
            formDefinitionHelp: 'You can add more definitions later.',
            formExampleHelp: 'You can add more examples later.',
            words: [
                {
                    id: 0,
                    title: 'pretext',
                    pronounce: 'pri-tekst',
                    definitions: [
                        {
                            id: 'definition1',
                            value: 'a reason given in justification of a course of action that is not the real reason.'
                        }
                    ],
                    examples: [
                        {
                            id: 'example1',
                            value: 'the rebels had the perfect pretext for making their move',
                        },
                        {
                            id: 'example2',
                            value: 'That was just a pretext'
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'hard',
                    pronounce: 'ha-d',
                    definitions: [
                        {
                            id: 'definition1',
                            value: 'solid, firm, and rigid; not easily broken, bent, or pierced.',
                        },    
                        {
                            id: 'definition2',
                            value: 'done with a great deal of force or strength.'
                        },
                        {
                            id: 'definition3',
                            value: 'with a great deal of effort.'
                        },
                        {
                            id: 'definition4',
                            value: 'so as to be solid or firm.'
                        }],
                    examples: [
                        {
                            id: 'example1',
                            value: 'the rebels had the perfect pretext for making their move',
                        },
                        {
                            id: 'example2',
                            value: 'That was just a pretext'
                        },
                        {
                            id: 'example3',
                            value: 'the rebels had the perfect pretext for making their move',
                        },
                        {
                            id: 'example4',
                            value: 'That was just a pretext'
                        }
                    ]
                }
            ]
        },
    ]
};

export const meta = {
    jp: {
        newVocabFormLegend: "新単語追加",
        title: "単語",
        pronounce: "発音",
        definition: "定義",
        example: "例文",
        submit: "追加"
    },
    en: {
        newVocabFormLegend: "New Vocabulary",
        title: "vocabulary",
        pronounce: "pronounce",
        definition: "definition",
        example: "example",
        submit: "Add"
    }
}