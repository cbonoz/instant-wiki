<p align='center'>
    <img src="./img/instant_wiki_3_2.png">
</p>

# Instant Wiki

Forge Atlassian app that enables automatic insertion of a keywords section and a variety of relevant article links to the bottom of any page.

Search for the `instant-wiki` forge app

Invoke via `/Create wiki`

### Screenshots

<img src='./img/content.png' width=800>
<br/>
<img src='./img/raw.png' width=800>
<br/>
<img src='./img/rendered.png' width=800>
<br/>
<img src='./img/wiki.png' width=800>

### Running tests

- `yarn jest`

### Notes on Forge

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/index.tsx` file.

- Build and deploy your app by running:

```
forge deploy
```

- Install your app in an Atlassian site by running:

```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:

```
forge tunnel
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
