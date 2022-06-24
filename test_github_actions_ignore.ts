import { parseGcloudIgnore } from "@google-github-actions/actions-utils"
import ignore from "ignore"
import glob from "glob"

async function main() {
  // https://github.com/google-github-actions/deploy-cloud-functions/blob/d044b1f88c0d8cbbfd2a174d491366592a6c190d/src/util.ts#L58-L64
  const ignores = await parseGcloudIgnore(".gcloudignore")
  const ignorer = ignore().add(ignores)

  glob("**/*", (error, files) => {
    const targetFiles = files.filter((file) => !ignorer.ignores(file))
    targetFiles.forEach((file) => console.log(file))
  })
}

main()
