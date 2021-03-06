<p align='center'>
    <img src="./img/instant_wiki_3_2.png">
</p>

# Instant Wiki

Use NLP to extract an automatic and dynamically updated references and keywords section to the end of any Confluence article.

Search for the `instant-wiki` forge app

Invoke via `/Create wiki`

Built on Atlassian Forge.

## Inspiration

- Many times you may be writing documentation for items where additional content/references might be relevent.
- These sections are useful but often folks might not take or have the time to put these together.
- Extracting keywords can help a reader get a quick feel for the gist of a long article, and improve potential search results
- Content that dynamically changes - similar to the acronym. Not everyone might be familiar with all the key concepts being used.

## What it does

- Instant Wiki is a macro that automatically adds an appendix section to any Confluence article
- Uses basic NLP to extract core phrases and topics out of an article
- Generates automatic wikipedia links for additional information on any of the extracted key phrases from the article.

## Installation

- Download the forge CLI using the instructions <a href="https://developer.atlassian.com/platform/forge/getting-started/" target="_blank">here</a>.
- `forge login`
- `forge install`

You should now be able to find the /Create wiki command available in any confluence article as shown in the screenshots below.

## How I built it

- Macro parses out the paragraph (body) content of the article.
- Content is run through a modern NLP javascript engine from retextjs (https://github.com/retextjs/retext) and finds core elements.
- The core themes and keywords are separated out from the current article and rendered into a simple to understand appendix section for your article

## Challenges I ran into

- There wasn't a formal API for extracting the plain text out of a confluence article. I had to build a processing function to enable parsing through the formatted confluence markdown to get the relevant content.

## What's next for Instant Wiki

The goal of the Instant Wiki would be to save any potential time needed to generate an appendix of content for an article.

- Add more configurable options for the wiki footer content
- Link to other sources beyond Wikipedia. Recommend additional content suggestions based on the parsed text and body from the Confluence page.
- Parse through the user's Confluence space to find other articles that might be relevant to the current one being read.

### Screenshots

<img src='./img/content.png' width=800>
<br/>
<img src='./img/raw.png' width=800>
<br/>
<img src='./img/rendered.png' width=800>
<br/>
<img src='./img/wiki.png' width=800>
