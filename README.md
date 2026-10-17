# MP-3: TK Poothong's React Resume

A standalone React and TypeScript version of MP-1, using styled-components, React Router, and custom hooks. All source code, fixed resume content, and assets are inside `mp-3`.

## Run and check

From `mp-3`:

```sh
npm install
npm run dev
npm run build
npm run lint
npm test
```

Open the URL printed by Vite. The build command runs TypeScript checks and creates `dist/`. Use `npm run preview` to preview that production build.

## Assignment structure

- `index.html` is the only source HTML document. `dist/index.html` is generated output.
- `main.tsx` mounts `App`. `App.tsx` renders global styles and `RouterProvider`, defines routes, and assembles the shared layout.
- Header, navigation, main content, and footer are separate React components. `Main` renders an `Outlet` for the selected page.
- Each component file contains one logical UI component. Its styled elements and prop types stay in the same file.
- Repeated UI uses `PageSection`, `ResumeEntry`, `ProjectCard`, `ActivityRow`, `ReferenceTable`, and `NumberInput`.
- Fixed content is written directly in each page as JSX or component props. There is no separate resume-data module.
- `useCalculator` manages inputs, results, and errors with `useState`. Its file also exports the pure `calculate()` function for arithmetic tests.

## Folder structure

```text
src/
  App.tsx                 Routes, shared layout, and GlobalStyle
  main.tsx                React entry point
  components/
    Header.tsx
    Navigation.tsx
    Main.tsx
    Footer.tsx
    PageSection.tsx        Page heading and title hook
    ResumeEntry.tsx        Education or experience entry
    ProjectCard.tsx        Project title, screenshot, and description
    ActivityRow.tsx        One activity table row
    ReferenceTable.tsx     One group of references
    Calculator.tsx        Calculator inputs, buttons, and output
    NumberInput.tsx        Reusable controlled input
  pages/
    Home.tsx
    Education.tsx
    Experiences.tsx
    Projects.tsx
    References.tsx
    Activities.tsx
    Credits.tsx
    NotFound.tsx
  customHooks/
    useCalculator.ts      Input state, arithmetic, validation, and clear
    usePageTitle.ts        Document title, scroll, and main-content focus
public/
  images/                 Profile, activities, and project screenshots
  fonts/                  Original bundled font asset
tests/
  calculator.test.mjs
vercel.json                SPA fallback for direct route visits
```

To update content, edit the corresponding file under `src/pages/`. The original professional-reference placeholder (`ssdd` / `Contact`) and masked phone numbers are preserved.

## Styling and MP-1 behavior

Styles use styled-components, with no application CSS imports. `GlobalStyle` in `App.tsx` contains page defaults and shared keyboard-focus styles. Component-specific styles and media queries stay beside their component.

The shared pink colors, grey text, font stack, desktop width, main layout breakpoints, heading levels, and content order follow MP-1. The calculator appears before the project list. The original font stack is preserved; the bundled Lemon Slice asset is not applied because MP-1 did not apply it.

Bug fixes retained from the React conversion include wrapping navigation on small screens, responsive images and tables, accessible calculator input names, a working Credits route, consistent document titles, and invalid-number handling. A visual comparison in a browser is still needed to confirm the final appearance at desktop and mobile sizes.

## Routes and calculator

Routes: `/`, `/education`, `/experiences`, `/projects`, `/references`, `/activity`, and `/credits`. Unknown routes show a page with a link home.

The calculator supports `+`, `-`, `*`, `/`, `**`, and Clear. Negative results appear in red; other numeric results appear in black. Clear resets both inputs and the output. Invalid input, division by zero, and non-finite results produce an error.

Powers use a for loop and support positive, zero, and negative integer exponents. Fractional or unsafe integer exponents produce an explanation. The existing arithmetic suite covers 21 cases.

## Submission steps

Local build settings for Vercel:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `.` when this folder's contents are the repository root; use `mp-3` only if the repository contains the parent workspace
- `vercel.json` rewrites route requests to `index.html`

Task 2 of the assignment still requires:

1. Initialize and commit this folder to Git, then publish a GitHub repository named `mp-3`.
2. Import that repository into Vercel and deploy.
3. Check all routes, direct refreshes, responsive layouts, and the calculator on the deployed site.
4. Submit both the GitHub repository URL and Vercel URL to Gradescope.

No GitHub repository, Vercel deployment, or Gradescope submission is created by the local build. Follow the assignment's restriction on repository changes after the deadline.
