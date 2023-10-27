// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import { github, javascript, IgnoreFileOptions, GitOptions, LoggerOptions, ProjectType, ProjenrcJsonOptions, typescript, SampleReadmeProps, ReleasableCommits, release, RenovatebotOptions, GroupRunnerOptions } from 'projen';
import { yarn } from '../';

/**
 * TypeScriptWorkspaceOptions
 */
export interface TypeScriptWorkspaceOptions {
  /**
   * Allow the project to include `peerDependencies` and `bundledDependencies`.
   * This is normally only allowed for libraries. For apps, there's no meaning
   * for specifying these.
   * @default true
   */
  readonly allowLibraryDependencies?: boolean;
  /**
   * A directory which will contain build artifacts.
   * @default "dist"
   */
  readonly artifactsDirectory?: string;
  /**
   * Author's e-mail.
   */
  readonly authorEmail?: string;
  /**
   * Author's name.
   */
  readonly authorName?: string;
  /**
   * Is the author an organization.
   */
  readonly authorOrganization?: boolean;
  /**
   * Author's URL / Website.
   */
  readonly authorUrl?: string;
  /**
   * Enable and configure the 'auto approve' workflow.
   * @default - auto approve is disabled
   */
  readonly autoApproveOptions?: github.AutoApproveOptions;
  /**
   * Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).
   * Throw if set to true but `autoApproveOptions` are not defined.
   * @default - true
   */
  readonly autoApproveUpgrades?: boolean;
  /**
   * Enable automatic merging on GitHub.
   * Has no effect if `github.mergify`
   * is set to false.
   * @default true
   */
  readonly autoMerge?: boolean;
  /**
   * Configure options for automatic merging on GitHub.
   * Has no effect if
   * `github.mergify` or `autoMerge` is set to false.
   * @default - see defaults in `AutoMergeOptions`
   */
  readonly autoMergeOptions?: github.AutoMergeOptions;
  /**
   * Binary programs vended with your module.
   * You can use this option to add/customize how binaries are represented in
   * your `package.json`, but unless `autoDetectBin` is `false`, every
   * executable file under `bin` will automatically be added to this section.
   */
  readonly bin?: Record<string, string>;
  /**
   * The email address to which issues should be reported.
   */
  readonly bugsEmail?: string;
  /**
   * The url to your project's issue tracker.
   */
  readonly bugsUrl?: string;
  /**
   * Define a GitHub workflow for building PRs.
   * @default - true if not a subproject
   */
  readonly buildWorkflow?: boolean;
  /**
   * Build workflow triggers.
   * @default "{ pullRequest: {}, workflowDispatch: {} }"
   */
  readonly buildWorkflowTriggers?: github.workflows.Triggers;
  /**
   * List of dependencies to bundle into this module.
   * These modules will be
   * added both to the `dependencies` section and `bundledDependencies` section of
   * your `package.json`.
   *
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   */
  readonly bundledDeps?: Array<string>;
  /**
   * Options for `Bundler`.
   */
  readonly bundlerOptions?: javascript.BundlerOptions;
  /**
   * Add a `clobber` task which resets the repo to origin.
   * @default - true, but false for subprojects
   */
  readonly clobber?: boolean;
  /**
   * Options for npm packages using AWS CodeArtifact.
   * This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact
   * @default - undefined
   */
  readonly codeArtifactOptions?: javascript.CodeArtifactOptions;
  /**
   * Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.
   * @default false
   */
  readonly codeCov?: boolean;
  /**
   * Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.
   * @default - if this option is not specified, only public repositories are supported
   */
  readonly codeCovTokenSecret?: string;
  /**
   * Whether to commit the managed files by default.
   * @default true
   */
  readonly commitGenerated?: boolean;
  /**
   * License copyright owner.
   * @default - defaults to the value of authorName or "" if `authorName` is undefined.
   */
  readonly copyrightOwner?: string;
  /**
   * The copyright years to put in the LICENSE file.
   * @default - current year
   */
  readonly copyrightPeriod?: string;
  /**
   * Use dependabot to handle dependency upgrades.
   * Cannot be used in conjunction with `depsUpgrade`.
   * @default false
   */
  readonly dependabot?: boolean;
  /**
   * Options for dependabot.
   * @default - default options
   */
  readonly dependabotOptions?: github.DependabotOptions;
  /**
   * Runtime dependencies of this module.
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   * @default []
   */
  readonly deps?: Array<string | yarn.TypeScriptWorkspace>;
  /**
   * Use tasks and github workflows to handle dependency upgrades.
   * Cannot be used in conjunction with `dependabot`.
   * @default true
   */
  readonly depsUpgrade?: boolean;
  /**
   * The description is just a string that helps people understand the purpose of the package.
   * It can be used when searching for packages in a package manager as well.
   * See https://classic.yarnpkg.com/en/docs/package-json/#toc-description
   */
  readonly description?: string;
  /**
   * Add a VSCode development environment (used for GitHub Codespaces).
   * @default false
   */
  readonly devContainer?: boolean;
  /**
   * Build dependencies for this module.
   * These dependencies will only be
   * available in your build environment but will not be fetched when this
   * module is consumed.
   *
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   * @default []
   */
  readonly devDeps?: Array<string | yarn.TypeScriptWorkspace>;
  /**
   * Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).
   * @default false
   */
  readonly disableTsconfig?: boolean;
  /**
   * Do not generate a `tsconfig.dev.json` file.
   * @default false
   */
  readonly disableTsconfigDev?: boolean;
  /**
   * Docgen by Typedoc.
   * @default false
   */
  readonly docgen?: boolean;
  /**
   * Docs directory.
   * @default "docs"
   */
  readonly docsDirectory?: string;
  /**
   * Module entrypoint (`main` in `package.json`).
   * Set to an empty string to not include `main` in your package.json
   * @default "lib/index.js"
   */
  readonly entrypoint?: string;
  /**
   * The .d.ts file that includes the type declarations for this module.
   * @default - .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
   */
  readonly entrypointTypes?: string;
  /**
   * Setup eslint.
   * @default true
   */
  readonly eslint?: boolean;
  /**
   * Eslint options.
   * @default - opinionated default options
   */
  readonly eslintOptions?: javascript.EslintOptions;
  /**
   * Dependencies that should be excluded from upgrades.
   * @default []
   */
  readonly excludeDepsFromUpgrade?: Array<string>;
  /**
   * Enable GitHub integration.
   * Enabled by default for root projects. Disabled for non-root projects.
   * @default true
   */
  readonly github?: boolean;
  /**
   * Options for GitHub integration.
   * @default - see GitHubOptions
   */
  readonly githubOptions?: github.GitHubOptions;
  /**
   * Additional entries to .gitignore.
   */
  readonly gitignore?: Array<string>;
  /**
   * Configuration options for .gitignore file.
   */
  readonly gitIgnoreOptions?: IgnoreFileOptions;
  /**
   * Configuration options for git.
   */
  readonly gitOptions?: GitOptions;
  /**
   * Add a Gitpod development environment.
   * @default false
   */
  readonly gitpod?: boolean;
  /**
   * Package's Homepage / Website.
   */
  readonly homepage?: string;
  /**
   * Setup jest unit tests.
   * @default true
   */
  readonly jest?: boolean;
  /**
   * Jest options.
   * @default - default options
   */
  readonly jestOptions?: javascript.JestOptions;
  /**
   * Version requirement of `publib` which is used to publish modules to npm.
   * @default "latest"
   */
  readonly jsiiReleaseVersion?: string;
  /**
   * Keywords to include in `package.json`.
   */
  readonly keywords?: Array<string>;
  /**
   * Typescript  artifacts output directory.
   * @default "lib"
   */
  readonly libdir?: string;
  /**
   * License's SPDX identifier.
   * See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
   * Use the `licensed` option if you want to no license to be specified.
   * @default "Apache-2.0"
   */
  readonly license?: string;
  /**
   * Indicates if a license should be added.
   * @default true
   */
  readonly licensed?: boolean;
  /**
   * Configure logging options such as verbosity.
   * @default {}
   */
  readonly logging?: LoggerOptions;
  /**
   * Major version to release from the default branch.
   * If this is specified, we bump the latest version of this major version line.
   * If not specified, we bump the global latest version.
   * @default - Major version is not enforced.
   */
  readonly majorVersion?: number;
  /**
   * Minimum node.js version to require via `engines` (inclusive).
   * @default - no max
   */
  readonly maxNodeVersion?: string;
  /**
   * Whether mergify should be enabled on this repository or not.
   * @default true
   * @deprecated use `githubOptions.mergify` instead
   */
  readonly mergify?: boolean;
  /**
   * Options for mergify.
   * @default - default options
   * @deprecated use `githubOptions.mergifyOptions` instead
   */
  readonly mergifyOptions?: github.MergifyOptions;
  /**
   * Minimal Major version to release.
   * This can be useful to set to 1, as breaking changes before the 1.x major
   * release are not incrementing the major version number.
   *
   * Can not be set together with `majorVersion`.
   * @default - No minimum version is being enforced
   */
  readonly minMajorVersion?: number;
  /**
   * Minimum Node.js version to require via package.json `engines` (inclusive).
   * @default - no "engines" specified
   */
  readonly minNodeVersion?: string;
  /**
   * Automatically update files modified during builds to pull-request branches.
   * This means
   * that any files synthesized by projen or e.g. test snapshots will always be up-to-date
   * before a PR is merged.
   *
   * Implies that PR builds do not have anti-tamper checks.
   * @default true
   */
  readonly mutableBuild?: boolean;
  /**
   * This is the name of your project.
   * @default $BASEDIR
   */
  readonly name: string;
  /**
   * Access level of the npm package.
   * @default - for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.
   */
  readonly npmAccess?: javascript.NpmAccess;
  /**
   * The npmDistTag to use when publishing from the default branch.
   * To set the npm dist-tag for release branches, set the `npmDistTag` property
   * for each branch.
   * @default "latest"
   */
  readonly npmDistTag?: string;
  /**
   * Additional entries to .npmignore.
   * @deprecated - use `project.addPackageIgnore`
   */
  readonly npmignore?: Array<string>;
  /**
   * Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.
   * @default true
   */
  readonly npmignoreEnabled?: boolean;
  /**
   * Configuration options for .npmignore file.
   */
  readonly npmIgnoreOptions?: IgnoreFileOptions;
  /**
   * The host name of the npm registry to publish to.
   * Cannot be set together with `npmRegistryUrl`.
   * @deprecated use `npmRegistryUrl` instead
   */
  readonly npmRegistry?: string;
  /**
   * The base URL of the npm package registry.
   * Must be a URL (e.g. start with "https://" or "http://")
   * @default "https://registry.npmjs.org"
   */
  readonly npmRegistryUrl?: string;
  /**
   * GitHub secret which contains the NPM token to use when publishing packages.
   * @default "NPM_TOKEN"
   */
  readonly npmTokenSecret?: string;
  /**
   * Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).
   * @default true
   */
  readonly package?: boolean;
  /**
   * The Node Package Manager used to execute scripts.
   * @default NodePackageManager.YARN_CLASSIC
   */
  readonly packageManager?: javascript.NodePackageManager;
  /**
   * The "name" in package.json.
   * @default - defaults to project name
   */
  readonly packageName?: string;
  /**
   * The parent `yarn.Monorepo` project.
   */
  readonly parent: yarn.Monorepo;
  /**
   * Options for `peerDeps`.
   */
  readonly peerDependencyOptions?: javascript.PeerDependencyOptions;
  /**
   * Peer dependencies for this module.
   * Dependencies listed here are required to
   * be installed (and satisfied) by the _consumer_ of this library. Using peer
   * dependencies allows you to ensure that only a single module of a certain
   * library exists in the `node_modules` tree of your consumers.
   *
   * Note that prior to npm@7, peer dependencies are _not_ automatically
   * installed, which means that adding peer dependencies to a library will be a
   * breaking change for your customers.
   *
   * Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
   * enabled by default), projen will automatically add a dev dependency with a
   * pinned version for each peer dependency. This will ensure that you build &
   * test your module against the lowest peer version required.
   * @default []
   */
  readonly peerDeps?: Array<string | yarn.TypeScriptWorkspace>;
  /**
   * The version of PNPM to use if using PNPM as a package manager.
   * @default "7"
   */
  readonly pnpmVersion?: string;
  /**
   * Steps to execute after build as part of the release workflow.
   * @default []
   */
  readonly postBuildSteps?: Array<github.workflows.JobStep>;
  /**
   * Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").
   * @default - normal semantic versions
   */
  readonly prerelease?: string;
  /**
   * Setup prettier.
   * @default false
   */
  readonly prettier?: boolean;
  /**
   * Prettier options.
   * @default - default options
   */
  readonly prettierOptions?: javascript.PrettierOptions;
  /**
   * Make this a private package.
   * @default false
   */
  readonly private?: boolean;
  /**
   * Which type of project this is (library/app).
   * @default ProjectType.UNKNOWN
   * @deprecated no longer supported at the base project level
   */
  readonly projectType?: ProjectType;
  /**
   * The shell command to use in order to run the projen CLI.
   * Can be used to customize in special environments.
   * @default "npx projen"
   */
  readonly projenCommand?: string;
  /**
   * Choose a method of providing GitHub API access for projen workflows.
   * @default - use a personal access token named PROJEN_GITHUB_TOKEN
   */
  readonly projenCredentials?: github.GithubCredentials;
  /**
   * Indicates of "projen" should be installed as a devDependency.
   * @default true
   */
  readonly projenDevDependency?: boolean;
  /**
   * Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.
   * @default - true if projenrcJson is false
   */
  readonly projenrcJs?: boolean;
  /**
   * Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.
   * @default false
   */
  readonly projenrcJson?: boolean;
  /**
   * Options for .projenrc.json.
   * @default - default options
   */
  readonly projenrcJsonOptions?: ProjenrcJsonOptions;
  /**
   * Options for .projenrc.js.
   * @default - default options
   */
  readonly projenrcJsOptions?: javascript.ProjenrcOptions;
  /**
   * Use TypeScript for your projenrc file (`.projenrc.ts`).
   * @default false
   */
  readonly projenrcTs?: boolean;
  /**
   * Options for .projenrc.ts.
   */
  readonly projenrcTsOptions?: typescript.ProjenrcOptions;
  /**
   * The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.
   * This token needs to have the `repo`, `workflows`
   * and `packages` scope.
   * @default "PROJEN_GITHUB_TOKEN"
   * @deprecated use `projenCredentials`
   */
  readonly projenTokenSecret?: string;
  /**
   * Version of projen to install.
   * @default - Defaults to the latest version.
   */
  readonly projenVersion?: string;
  /**
   * Instead of actually publishing to package managers, just print the publishing command.
   * @default false
   */
  readonly publishDryRun?: boolean;
  /**
   * Define publishing tasks that can be executed manually as well as workflows.
   * Normally, publishing only happens within automated workflows. Enable this
   * in order to create a publishing task for each publishing activity.
   * @default false
   */
  readonly publishTasks?: boolean;
  /**
   * Include a GitHub pull request template.
   * @default true
   */
  readonly pullRequestTemplate?: boolean;
  /**
   * The contents of the pull request template.
   * @default - default content
   */
  readonly pullRequestTemplateContents?: Array<string>;
  /**
   * The README setup.
   * @default - { filename: 'README.md', contents: '# replace this' }
   */
  readonly readme?: SampleReadmeProps;
  /**
   * Find commits that should be considered releasable Used to decide if a release is required.
   * @default ReleasableCommits.everyCommit()
   */
  readonly releasableCommits?: ReleasableCommits;
  /**
   * Defines additional release branches.
   * A workflow will be created for each
   * release branch which will publish releases from commits in this branch.
   * Each release branch _must_ be assigned a major version number which is used
   * to enforce that versions published from that branch always use that major
   * version. If multiple branches are used, the `majorVersion` field must also
   * be provided for the default branch.
   * @default - no additional branches are used for release. you can use
`addBranch()` to add additional branches.
   */
  readonly releaseBranches?: Record<string, release.BranchOptions>;
  /**
   * Automatically release new versions every commit to one of branches in `releaseBranches`.
   * @default true
   * @deprecated Use `releaseTrigger: ReleaseTrigger.continuous()` instead
   */
  readonly releaseEveryCommit?: boolean;
  /**
   * Create a github issue on every failed publishing task.
   * @default false
   */
  readonly releaseFailureIssue?: boolean;
  /**
   * The label to apply to issues indicating publish failures.
   * Only applies if `releaseFailureIssue` is true.
   * @default "failed-release"
   */
  readonly releaseFailureIssueLabel?: string;
  /**
   * CRON schedule to trigger new releases.
   * @default - no scheduled releases
   * @deprecated Use `releaseTrigger: ReleaseTrigger.scheduled()` instead
   */
  readonly releaseSchedule?: string;
  /**
   * Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.
   * Note: this prefix is used to detect the latest tagged version
   * when bumping, so if you change this on a project with an existing version
   * history, you may need to manually tag your latest release
   * with the new prefix.
   * @default "v"
   */
  readonly releaseTagPrefix?: string;
  /**
   * Automatically release to npm when new versions are introduced.
   * @default false
   */
  readonly releaseToNpm?: boolean;
  /**
   * The release trigger to use.
   * @default - Continuous releases (`ReleaseTrigger.continuous()`)
   */
  readonly releaseTrigger?: release.ReleaseTrigger;
  /**
   * DEPRECATED: renamed to `release`.
   * @default - true if not a subproject
   * @deprecated see `release`.
   */
  readonly releaseWorkflow?: boolean;
  /**
   * The name of the default release workflow.
   * @default "Release"
   */
  readonly releaseWorkflowName?: string;
  /**
   * A set of workflow steps to execute in order to setup the workflow container.
   */
  readonly releaseWorkflowSetupSteps?: Array<github.workflows.JobStep>;
  /**
   * Use renovatebot to handle dependency upgrades.
   * @default false
   */
  readonly renovatebot?: boolean;
  /**
   * Options for renovatebot.
   * @default - default options
   */
  readonly renovatebotOptions?: RenovatebotOptions;
  /**
   * The repository is the location where the actual code for your package lives.
   * See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository
   */
  readonly repository?: string;
  /**
   * Generate one-time sample in `src/` and `test/` if there are no files there.
   * @default true
   */
  readonly sampleCode?: boolean;
  /**
   * Options for privately hosted scoped packages.
   * @default - fetch all scoped packages from the public npm registry
   */
  readonly scopedPackagesOptions?: Array<javascript.ScopedPackagesOptions>;
  /**
   * npm scripts to include.
   * If a script has the same name as a standard script,
   * the standard script will be overwritten.
   * Also adds the script as a task.
   * @default {}
   * @deprecated use `project.addTask()` or `package.setScript()`
   */
  readonly scripts?: Record<string, string>;
  /**
   * Typescript sources directory.
   * @default "src"
   */
  readonly srcdir?: string;
  /**
   * Package's Stability.
   */
  readonly stability?: string;
  /**
   * Auto-close of stale issues and pull request.
   * See `staleOptions` for options.
   * @default false
   */
  readonly stale?: boolean;
  /**
   * Auto-close stale issues and pull requests.
   * To disable set `stale` to `false`.
   * @default - see defaults in `StaleOptions`
   */
  readonly staleOptions?: github.StaleOptions;
  /**
   * Jest tests directory. Tests files should be named `xxx.test.ts`.
   * If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
   * then tests are going to be compiled into `lib/` and executed as javascript.
   * If the test directory is outside of `src`, then we configure jest to
   * compile the code in-memory.
   * @default "test"
   */
  readonly testdir?: string;
  /**
   * Custom TSConfig.
   * @default - default options
   */
  readonly tsconfig?: javascript.TypescriptConfigOptions;
  /**
   * Custom tsconfig options for the development tsconfig.json file (used for testing).
   * @default - use the production tsconfig options
   */
  readonly tsconfigDev?: javascript.TypescriptConfigOptions;
  /**
   * The name of the development tsconfig.json file.
   * @default "tsconfig.dev.json"
   */
  readonly tsconfigDevFile?: string;
  /**
   * TypeScript version to use.
   * NOTE: Typescript is not semantically versioned and should remain on the
   * same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).
   * @default "latest"
   */
  readonly typescriptVersion?: string;
  /**
   * Custom configuration used when creating changelog with standard-version package.
   * Given values either append to default configuration or overwrite values in it.
   * @default - standard configuration applicable for GitHub repositories
   */
  readonly versionrcOptions?: Record<string, any>;
  /**
   * Enable VSCode integration.
   * Enabled by default for root projects. Disabled for non-root projects.
   * @default true
   */
  readonly vscode?: boolean;
  /**
   * Workflow steps to use in order to bootstrap this repo.
   * @default "yarn install --frozen-lockfile && yarn projen"
   */
  readonly workflowBootstrapSteps?: Array<github.workflows.JobStep>;
  /**
   * Container image to use for GitHub workflows.
   * @default - default image
   */
  readonly workflowContainerImage?: string;
  /**
   * The git identity to use in workflows.
   * @default - GitHub Actions
   */
  readonly workflowGitIdentity?: github.GitIdentity;
  /**
   * The node version to use in GitHub workflows.
   * @default - same as `minNodeVersion`
   */
  readonly workflowNodeVersion?: string;
  /**
   * Enable Node.js package cache in GitHub workflows.
   * @default false
   */
  readonly workflowPackageCache?: boolean;
  /**
   * Github Runner selection labels.
   * @default ["ubuntu-latest"]
   */
  readonly workflowRunsOn?: Array<string>;
  /**
   * Github Runner Group selection options.
   */
  readonly workflowRunsOnGroup?: GroupRunnerOptions;
  /**
   * The workspace scope the package is located in.
   * @default "packages"
   */
  readonly workspaceScope?: string;
}
