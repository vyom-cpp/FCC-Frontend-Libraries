const projectName = "markdown-previewer";

marked.setOptions({
  breaks: true,
});

const markdownInitialText = `
# H1
## H2
### H3
#### H4

**Strong text** or *italicized text* your choice


> Wow a blockquote - it is just check the markup


do you like the organised way
1. Vroommmm
2. Vohooh

or non orgranised way
- I don't
- like
- doing this

<br />

\`console.log('Haishhh');\`

<br />

\`\`\`\


function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHelloTo);
}


\`\`\`

I guess I need a aadi liti
_______________________________________________
`;
