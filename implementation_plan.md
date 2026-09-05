# Fix Portfolio App Launch and Installation Issues

## Problem Description
The project fails during `npm i` on Node.js v24.17.0 with:
```
npm error gyp ERR! node -v v24.17.0
libsass_ldflags=" "--libsas
```
The root cause is:
1. `node-sass` (^9.0.0) is configured in `devDependencies`. `node-sass` relies on deprecated C++ bindings (LibSass) via `node-gyp` which cannot build on Node 24. Modern Angular uses Dart Sass (`sass`), which runs purely in JavaScript and does not require native compilation.
2. Obsolete packages such as `@angular/http` (^7.2.16) and deprecated tools like `tslint`, `codelyzer`, and `protractor` are present in `package.json`.
3. `angular.json` references outdated builder configurations (`browserTarget` instead of `buildTarget`, missing polyfills definition for `zone.js`, and removed options like `extractCss`).
4. `src/app/project/project.component.ts` contains an unused, invalid deep import from `@angular/core/src/render3/interfaces/view`.

## User Review Required
> [!NOTE]
> We will replace `node-sass` with modern `sass` (Dart Sass), clean up deprecated packages, update `angular.json` for Angular CLI compatibility, and run `npm install` and `npm start` (or `ng build`) to ensure the application compiles and launches.

## Proposed Changes

### Configuration & Dependencies

#### [MODIFY] [package.json](file:///c:/demoapps/angulardevelopment/portfolio-app/package.json)
- Remove `node-sass` and replace with `sass` (`^1.104.0`).
- Remove obsolete `@angular/http`.
- Remove legacy devDependencies (`tslint`, `codelyzer`, `protractor`, `@types/jasminewd2`).
- Move `@angular-devkit/build-angular` to `devDependencies`.
- Add `tslib` to dependencies.

#### [MODIFY] [angular.json](file:///c:/demoapps/angulardevelopment/portfolio-app/angular.json)
- Add `"polyfills": ["zone.js"]` to the `build` target.
- Update `serve` and `extract-i18n` to use `buildTarget` instead of deprecated `browserTarget`.
- Remove obsolete `extractCss: true` in the production configuration.
- Add `development` configuration for dev server.
- Remove obsolete `lint` and `temp2-e2e` targets.

#### [MODIFY] [tsconfig.json](file:///c:/demoapps/angulardevelopment/portfolio-app/tsconfig.json)
- Ensure TypeScript configuration has compatible `module: "es2022"`, `moduleResolution: "bundler"`, and proper ES targets.

### Source Code Clean-up

#### [MODIFY] [project.component.ts](file:///c:/demoapps/angulardevelopment/portfolio-app/src/app/project/project.component.ts)
- Remove unused private internal import `import { FLAGS } from '@angular/core/src/render3/interfaces/view';`.

## Verification Plan

### Automated Verification
1. Run `npm install` in `c:\demoapps\angulardevelopment\portfolio-app` and verify exit code 0.
2. Run `npm run build` or `npx ng build` to verify successful compilation without errors.
3. Verify that `npm start` launches the dev server without configuration or syntax errors.
