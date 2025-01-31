import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {readFileSync} from "node:fs";

export default async function MarkdownToHtml(filePath: string) {

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeStringify)

    const content = readFileSync(filePath, 'utf-8');
    return await processor.process(content);
}