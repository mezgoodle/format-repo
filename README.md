[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mezgoodle_share-repo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mezgoodle_share-repo)

# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: "Mona the Octocat"
```

# Links and examples

https://github.com/actions/javascript-action
https://github.com/actions/toolkit
https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions

`npm i -g @vercel/ncc`
