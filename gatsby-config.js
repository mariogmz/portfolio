module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.mariogmz.com`,
        siteName: `Mario Gómez`,
        siteShortName: `MG`,
        siteDescription: `This cool App contains information about my work experience as a software engineer.`,
        siteKeywords: `Software Engineer, Ruby, Software Developer, Full Stack Developer, Ruby on Rails`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#02040f`, link: `/` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#002642`,
            link: `/experience`,
          },
          { name: `skills`, title: `Skills`, color: `#840032`, link: `/skills` },
          { name: `aboutMe`, title: `About Me`, color: `#e59500`, link: `/about-me` },
        ],
        email: `mariogomezmtz@gmail.com`,
        social: {
          // Usernames
          twitter: `mariogomezmtz`,
          gitHub: `mariogmz`,
          stackOverflow: ``,
          linkedIn: `in/mariogomezmtz/`,
          resumeInPdf: `https://www.slideshare.net/slideshow/embed_code/key/1MCuW7khwccUTw`, // url or local link
        },
        homePage: {
          availableToHire: false,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hello! I'm Mario Gómez`,
          h2Text: `I'm a 🍺 Driven Engineer since 2012, most of my engineering time you will find me writting some Ruby or frontend code, talking at a local meetup or helping communities`,
          typewriter: [
            `Writing fast, friendly and simple code is one of my passions 😎`,
            `I'm a 🍺 🍕 🍷 🐕 lover`,
            `Tho I'm not self-considered a Full Stack Engineer, I feel comfortable coding both Backend and Frontend`,
            `Ruby is my favorite programming language`,
            `I think one of my strongest skills is <strong> empathy </strong> 🥳`,
            `I enjoy talking/sharing at meetups and conferences 💬`,
            `I've been a Mexican 🇲🇽 Folk Dancer for almost 13 years`,
            `I've been a remote worker since 2016`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#840032", hover: "#02040f" },
          shape1: {
            color: `#e5dada`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}