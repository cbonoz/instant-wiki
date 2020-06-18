import { extractKeywords } from "./helper";

// const html =
//   '<p>A&nbsp;<strong>computer network</strong>&nbsp;is a set of&nbsp;<strong>computers</strong>&nbsp;connected together for the purpose of sharing resources. The most common resource shared today is connection to the Internet. Other shared resources can include a printer or a file server. The Internet itself can be considered a&nbsp;<strong>computer network</strong>.</p><ac:adf-extension><ac:adf-node type="extension"><ac:adf-attribute key="extension-type">com.atlassian.ecosystem</ac:adf-attribute><ac:adf-attribute key="extension-key">xen:macro</ac:adf-attribute><ac:adf-attribute key="parameters"><ac:adf-parameter key="local-id">6f527f5a-72af-41fa-8611-d7925142a2b9</ac:adf-parameter><ac:adf-parameter key="extension-id">ari:cloud:ecosystem::extension/700d03ee-addc-47b3-92f5-050feaa85a9d/a3fcf019-5cb1-4b2c-b85f-079fd17ad882/static/instant-wiki-hello-world</ac:adf-parameter><ac:adf-parameter key="extension-title">Create Wiki (Development)</ac:adf-parameter></ac:adf-attribute><ac:adf-attribute key="text">Create Wiki (Development) - Forge Extension</ac:adf-attribute><ac:adf-attribute key="layout">default</ac:adf-attribute></ac:adf-node><ac:adf-fallback><ac:adf-node type="extension"><ac:adf-attribute key="extension-type">com.atlassian.ecosystem</ac:adf-attribute><ac:adf-attribute key="extension-key">xen:macro</ac:adf-attribute><ac:adf-attribute key="parameters"><ac:adf-parameter key="local-id">6f527f5a-72af-41fa-8611-d7925142a2b9</ac:adf-parameter><ac:adf-parameter key="extension-id">ari:cloud:ecosystem::extension/700d03ee-addc-47b3-92f5-050feaa85a9d/a3fcf019-5cb1-4b2c-b85f-079fd17ad882/static/instant-wiki-hello-world</ac:adf-parameter><ac:adf-parameter key="extension-title">Create Wiki (Development)</ac:adf-parameter></ac:adf-attribute><ac:adf-attribute key="text">Create Wiki (Development) - Forge Extension</ac:adf-attribute><ac:adf-attribute key="layout">default</ac:adf-attribute></ac:adf-node></ac:adf-fallback></ac:adf-extension><p />';
// const text = htmlToText.fromString(html, {
//   baseElement: ["p"], // collect human readable items
// });

// it("basic keywords", () => {
// const text =
//   "Terminology mining, term extraction, term recognition, or glossary extraction, is a subtask of information extraction.";
// extractKeywords(text).then((res) => {
//   expect(res.keywords).toContain("glossary");
//   expect(res.keyphrases).toContain("term extraction");
// });
// });
