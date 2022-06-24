```
$ gcloud meta list-files-for-upload
test_github_actions_ignore.ts
README.md
package-lock.json
package.json
tsconfig.json
build/index.js
```

```
$ npm run test_github_actions_ignore

> gcloudignore-issue@1.0.0 test_github_actions_ignore
> ts-node test_github_actions_ignore.ts

package-lock.json
package.json
README.md
test_github_actions_ignore.ts
tsconfig.json
```
