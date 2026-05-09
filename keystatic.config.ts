import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "local"
    },
    collections: {
        blog: collection({
            label: "ブログ",
            path: "content/blog/*",
            slugField: "title",
            format: { contentField: 'content' },
            entryLayout: 'content',
            schema: {
                title: fields.slug({ name: { label: "タイトル" } }),
                description: fields.text({ label: "説明", multiline: false }),
                date: fields.datetime({ label: "公開日", defaultValue: { kind: "now" } }),
                emoji: fields.text({ label: '絵文字', defaultValue: '😎' }),
                tags: fields.array(fields.text({ label: 'タグ' }), {
                    label: 'タグ一覧',
                    itemLabel: (props) => props.value,
                }),
                draft: fields.checkbox({ label: '下書き', defaultValue: false }),
                content: fields.mdx({
                    label: '本文',
                    extension: "md",
                    options: {
                        image: {
                            directory: 'content/blog/images',
                            publicPath: './images/',
                            transformFilename(originalFilename) {
                                const date = new Date().toISOString().replace(/[:.]/g, '-');
                                const random = Math.random().toString(36).substring(2, 7);
                                return `${date}-${random}-${originalFilename}`;
                            },
                        }
                    }
                })
            },
            columns: ['title','date']
        })
    }
})