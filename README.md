[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mezgoodle_share-repo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mezgoodle_share-repo)
[![codecov](https://codecov.io/gh/mezgoodle/share-repo/branch/main/graph/badge.svg?token=UTFT25WNFD)](https://codecov.io/gh/mezgoodle/share-repo)
[![Test action](https://github.com/mezgoodle/share-repo/actions/workflows/blank.yml/badge.svg)](https://github.com/mezgoodle/share-repo/actions/workflows/blank.yml)

# Format repo

Hello! This is my project for [GitHub + DEV 2023 Hackathon](https://dev.to/devteam/announcing-the-github-dev-2023-hackathon-4ocn). I created an action that formats the code in Python and JavaScript and automatically pushes the corrected code to the repository.

## Inputs

### `githubToken`

**Required** The GitHub Token with `repo:scope`.

### `python`

**Not required** Flag to format python code.

### `javascript`

**Not required** Flag to format javascript code.

### `projectFolder`

**Not required** Path to the project folder.

## Example usage

```yaml
- name: Run the action
  uses: mezgoodle/format-repo@v1.0.0
  with:
    python: true
    javascript: true
    gitHubToken: ${{ secrets.TOKEN }}
    projectFolder: 'src/'
```
