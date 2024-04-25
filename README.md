# [Chowdhary.org](https://chowdhary.org) and [Chowdhary.co](https://chowdhary.co) websites

This repository contains the common source code of two websites, Chowdhary.org and Chowdhary.co. It uses React with Next.js and Tailwind CSS.

##  Repository Structure

```sh
└── website/
    ├── .github
    │   └── workflows
    ├── logos
    │   ├── ch_logo_bw.png
    │   ├── ch_logo_bw.svg
    │   ├── ch_logo_main.png
    │   ├── ch_logo_main.svg
    │   ├── ch_logo_white.png
    │   └── ch_logo_white.svg
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── prettier.config.js
    ├── public
    │   ├── .nojekyll
    │   ├── CNAME
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── apple-touch-icon.png
    │   ├── browserconfig.xml
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   ├── googlef8a032d646066bf7.html
    │   ├── logo.svg
    │   ├── mstile-150x150.png
    │   ├── safari-pinned-tab.svg
    │   └── site.webmanifest
    ├── src
    │   ├── app
    │   └── styles
    ├── tailwind.config.ts
    └── tsconfig.json
```

##  Modules

<details closed><summary>.</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [next.config.js](https://github.com/chowdhary-org/website/blob/master/next.config.js)         | Enables static site generation and image optimization with export output and unoptimized images in Next.js project.                                                                                                                                                                                                                                                                                                        |
| [tailwind.config.ts](https://github.com/chowdhary-org/website/blob/master/tailwind.config.ts) | Customizes Tailwind CSS settings for the websites responsive typography, colors, and layouts, utilizing Tailwinds theming capabilities and third-party plugins. Enhances the overall user interface design by defining font sizes, colors, border radii, and maximum widths.                                                                                                                                               |
| [prettier.config.js](https://github.com/chowdhary-org/website/blob/master/prettier.config.js) | Enforce consistent coding style by configuring Prettier with single quotes, no semicolons, and a Tailwind CSS plugin.                                                                                                                                                                                                                                                                                                      |
| [package-lock.json](https://github.com/chowdhary-org/website/blob/master/package-lock.json)   | This code file in the repository handles the configuration settings for the Next.js website. It defines the specific configuration options and settings for the website, ensuring seamless integration and optimal performance. By specifying the necessary configurations, this code file plays a critical role in defining the behavior and appearance of the website, ultimately enhancing the overall user experience. |
| [package.json](https://github.com/chowdhary-org/website/blob/master/package.json)             | Manages project dependencies, build, and start scripts. Utilizes popular frameworks like React, Next.js, and Tailwind CSS. Implements linting and styling tools to ensure code quality and consistency within the Chowdhary.org website repository.                                                                                                                                                                        |
| [tsconfig.json](https://github.com/chowdhary-org/website/blob/master/tsconfig.json)           | Enables modern JavaScript features, JSX preservation, and Next.js plugin for seamless bundling in the project. Provides TypeScript configuration for improved code consistency and type-checking across the repositorys src directory.                                                                                                                                                                                     |
| [postcss.config.js](https://github.com/chowdhary-org/website/blob/master/postcss.config.js)   | Configures PostCSS with TailwindCSS and Autoprefixer for the websites styling pipeline.                                                                                                                                                                                                                                                                                                                                    |

</details>

<details closed><summary>public</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                        |
| ---                                                                                                                    | ---                                                                                                                                                                                                                            |
| [CNAME](https://github.com/chowdhary-org/website/blob/master/public/CNAME)                                             | Maps domain chowdhary.org to the website, enabling access to the site via the custom domain. This file plays a critical role in directing incoming traffic to the correct web content in the parent repository's architecture. |
| [.nojekyll](https://github.com/chowdhary-org/website/blob/master/public/.nojekyll)                                     | Enables hosting static assets by preventing Jekyll processing on GitHub Pages, ensuring proper rendering of files like icons, logos, and manifest files in the projects public directory.                                      |
| [site.webmanifest](https://github.com/chowdhary-org/website/blob/master/public/site.webmanifest)                       | Defines branding and display properties for Chowdhary.org when saved to a users mobile device. Specifies icons, colors, and display mode for a personalized web app experience.                                                |
| [googlef8a032d646066bf7.html](https://github.com/chowdhary-org/website/blob/master/public/googlef8a032d646066bf7.html) | Verifies ownership of the website on Google Search Console for SEO purposes. Contains unique verification token provided by Google to confirm website ownership.                                                               |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                                                | Summary                                                                                                                                                                                                           |
| ---                                                                                                 | ---                                                                                                                                                                                                               |
| [dispatch.yml](https://github.com/chowdhary-org/website/blob/master/.github/workflows/dispatch.yml) | Orchestrates CI/CD workflows through GitHub Actions.-Triggers build and deployment pipelines.-Enhances automation and streamlines development processes.-Integrates seamlessly with the repositorys architecture. |

</details>

<details closed><summary>src.app</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                          |
| ---                                                                                         | ---                                                                                                                                                                                                                              |
| [layout.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/layout.tsx)       | Defines metadata and layout for Chowdhary.org, incorporating custom fonts and essential styling. Maintains consistent branding and content structure across the website.                                                         |
| [not-found.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/not-found.tsx) | Defines a NotFound UI component structure without footer, displaying a 404 message and offering a button to return home. It utilizes foundational components within the websites architecture for consistent styling and layout. |

</details>

<details closed><summary>src.app.foundation</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                              |
| ---                                                                                              | ---                                                                                                                                                                                                                                                  |
| [layout.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/layout.tsx) | Defines MainLayout component to render children within Layout component, facilitating consistent page structure across the website repository.                                                                                                       |
| [page.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/page.tsx)     | Combines Hero, Schedule, Projects, Sponsors, and Newsletter components to compose the Home page of the website. This file orchestrates the layout and content structure critical for the foundation of the parent repositorys frontend architecture. |

</details>

<details closed><summary>src.app.foundation.components</summary>

| File                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Projects.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Projects.tsx)               | Illustrates project highlights creatively with images and narratives, inviting engagement. Displays a curated collection of impactful initiatives and their stories, connecting users with the organizations vision and founder.                                                                                                                                                                                                                                         |
| [Newsletter.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Newsletter.tsx)           | Implements a newsletter section for grant applications with inputs for name, email, topic selection, and message submission functionality. Designed with a visually appealing layout using Tailwind CSS classes.                                                                                                                                                                                                                                                         |
| [Hero.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Hero.tsx)                       | Illustrates a Hero section on the Chowdhary.org website, showcasing the organizations mission. Utilizes BackgroundImage, Button, and Container components to present the technology-focused narrative and encourage grant applications.                                                                                                                                                                                                                                  |
| [DiamondIcon.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/DiamondIcon.tsx)         | Defines a reusable Diamond Icon component with specified SVG attributes for the websites foundation components. It displays a simple geometric shape representing a diamond, enhancing the visual appeal and user experience.                                                                                                                                                                                                                                            |
| [Container.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Container.tsx)             | Defines a reusable Container component handling layout styling, enhancing maintainability. It leverages CSS utility classes for responsive design and centers content horizontally.                                                                                                                                                                                                                                                                                      |
| [Sponsors.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Sponsors.tsx)               | Displays sponsor logos with names in a section conveying collaboration and impact. Organized layout within a container for readability and aesthetic appeal. Incorporated Next.js Image for optimized image rendering.                                                                                                                                                                                                                                                   |
| [Schedule.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Schedule.tsx)               | Renders Foundation and Ventures sections with text and buttons in the Chowdhary.org landing page. Fosters engagement and showcases the organizations commitment to tech-driven social impact and startup nurturing.                                                                                                                                                                                                                                                      |
| [Footer.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Footer.tsx)                   | Implements a footer component displaying company logos linked to LinkedIn and GitHub. Incorporated within a flexible container, it promotes engagement and brand visibility on the websites pages.                                                                                                                                                                                                                                                                       |
| [Layout.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Layout.tsx)                   | Defines website layout structure with header, main content, and optional footer display. Encapsulates core UI components for consistent design across pages. Enhances user experience by ensuring navigation and content hierarchy.                                                                                                                                                                                                                                      |
| [Logo.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Logo.tsx)                       | The code file in question serves a critical role within the parent repositorys architecture, contributing to the website's visual branding and design elements. It handles the rendering and display of essential logos used across the site, ensuring a consistent and professional appearance. By managing various logo formats and styles, this code file helps maintain a cohesive visual identity for the website, enhancing user experience and brand recognition. |
| [Header.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Header.tsx)                   | Implements the Header component for the Foundation section of the website, featuring a logo, navigation links, and a call-to-action button for grant applications. Serves as a key element in the overall website layout and user experience.                                                                                                                                                                                                                            |
| [BackgroundImage.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/BackgroundImage.tsx) | Implements a versatile BackgroundImage component with left or right position support, enhancing the visual appeal of the website. The component efficiently renders gradients and shapes, contributing to a dynamic and engaging user interface.                                                                                                                                                                                                                         |
| [Button.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/foundation/components/Button.tsx)                   | Defines a reusable button component for the website UI. Manages styling and behavior based on link presence. Utilizes SVG for a custom left arrow icon.                                                                                                                                                                                                                                                                                                                  |

</details>

<details closed><summary>src.app.holdings</summary>

| File                                                                                           | Summary                                                                                                                                                                                                        |
| ---                                                                                            | ---                                                                                                                                                                                                            |
| [layout.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/layout.tsx) | Defines MainLayout component in the holdings section, import Layout from @/app/holdings/components/Layout. It renders children within Layout component. Key for structuring content in the website repository. |
| [page.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/page.tsx)     | Displays hero section, schedule, projects, sponsors, and newsletter on the homepage, contributing to the functionality of the holdings page in the website repository.                                         |

</details>

<details closed><summary>src.app.holdings.components</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Projects.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Projects.tsx)               | Illustrates project descriptions with status labels, URLs, and summaries rendered in a dynamic grid layout. Prominently displays a tech entrepreneurs visionary message alongside a curated list of ventures, reflecting the repositorys UI component integration within a funding platform's web page.                                                                                                                                                                         |
| [Newsletter.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Newsletter.tsx)           | Implements a newsletter section for investment applications and community event sponsorship. Allows users to submit names, emails, topics, and messages through a form. Designed to accelerate humanitys progress through technological change.                                                                                                                                                                                                                                 |
| [Hero.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Hero.tsx)                       | Defines a Hero component rendering a prominent title and message in the websites holdings section, conveying the accelerators mission and values. Incorporated with a background image, styled container, and an actionable call-to-action button for potential investors.                                                                                                                                                                                                      |
| [DiamondIcon.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/DiamondIcon.tsx)         | Creates a minimalistic DiamondIcon component for the website, following the parent repositorys architecture. The component renders a stylized diamond shape using SVG, enhancing visual elements in the holdings section.                                                                                                                                                                                                                                                       |
| [Container.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Container.tsx)             | Defines a reusable Container component styling for layout consistency in the holdings section of the website. Utilizes Tailwind CSS classes and accepts custom className for flexibility in UI design.                                                                                                                                                                                                                                                                          |
| [Sponsors.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Sponsors.tsx)               | Illustrates sponsor logos and names elegantly within a section named Sponsors, emphasizing collaboration and showcasing partners in events and open-source initiatives.                                                                                                                                                                                                                                                                                                         |
| [Schedule.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Schedule.tsx)               | Illustrates the Holdings and Foundation sections in the website, promoting Chowdharys investment philosophy and tech-for-good initiatives. Encourages startups to apply for investment and highlights the Foundations impact on positive social change.                                                                                                                                                                                                                         |
| [Footer.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Footer.tsx)                   | Defines the websites footer layout with logo and social media links. Incorporated within the holdings section, it utilizes a flexible design for various screen sizes and aligns branding elements to enhance user engagement.                                                                                                                                                                                                                                                  |
| [Layout.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Layout.tsx)                   | Facilitates website layout structure by rendering Header and Footer components around the main content, offering flexibility to toggle Footer visibility.                                                                                                                                                                                                                                                                                                                       |
| [Logo.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Logo.tsx)                       | Code File SummaryThe code file `website/logos` houses the crucial branding assets for the parent repositorys website. These assets, including various logo versions in both PNG and SVG formats, serve as essential visual elements to maintain a consistent and professional branding image throughout the website. This file ensures that the brand identity is visually represented and enhances the overall user experience by providing engaging and recognizable visuals. |
| [Header.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Header.tsx)                   | Renders the Holdings website header with logo, title, and Foundation link. Includes a button to apply for investments. Located in src/app/holdings/components/Header.tsx.                                                                                                                                                                                                                                                                                                       |
| [BackgroundImage.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/BackgroundImage.tsx) | Creates a dynamic Background Image component that supports left or right positioning. Utilizes SVG paths and rectangles to overlay gradients for a visually appealing effect within the parent repositorys architecture.                                                                                                                                                                                                                                                        |
| [Button.tsx](https://github.com/chowdhary-org/website/blob/master/src/app/holdings/components/Button.tsx)                   | Implements a reusable Button component with conditional rendering for internal and external links, enhancing user interaction on the website.                                                                                                                                                                                                                                                                                                                                   |

</details>

<details closed><summary>src.styles</summary>

| File                                                                                         | Summary                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                        |
| [tailwind.css](https://github.com/chowdhary-org/website/blob/master/src/styles/tailwind.css) | Enhances styling consistency by applying Tailwind CSS utilities and base styles. Defines a layout rule for full-width parent-relative links, contributing to a unified design language across the website. |

</details>

##  Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the website repository:
>
> ```console
> $ git clone https://github.com/chowdhary-org/website
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd website
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run website using the command below:
> ```console
> $ npm run dev
> ```


##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/chowdhary-org/website/issues)**: Submit bugs found or log feature requests for the `website` project.
- **[Submit Pull Requests](https://github.com/chowdhary-org/website/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/chowdhary-org/website/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/chowdhary-org/website
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/chowdhary-org/website/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=chowdhary-org/website">
   </a>
</p>
</details>
