module.exports = {
  //// DONT TOUCH THIS LINE, use deploy script to set this instead//
    base: "/appup-docs/",///////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

    // Below is safe to edit
    title: "Appup Documentation",
    description: "Everything you need to deploy your first app!",
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Docs', link: '/docs/' },
        { text: 'Appup', link: 'https://appup.com' },
      ],
      sidebarDepth: 2,
      sidebar: {
        '/docs/': [
          {
            title: 'What is Appup?',
            collapsable: true,
            children: [
              ['/docs/what-is-appup/#what-is-appup', 'Appup Overview'],
              ['/docs/what-is-appup/#why-appup', 'Why Appup?'],
              ['/docs/what-is-appup/#why-you-should-build-your-own-apps', 'Why you should build your own Apps?'],
              ['/docs/what-is-appup/#why-visual-designer', 'Why Visual Designer?'],
              ['/docs/what-is-appup/#how-to-publish-the-apps-for-worldwide-use', 'How to Publish the Apps for Worldwide use?'],
            ]
          },
          {
            title: 'Backend',
            collapsable: true,
            children: [
              ['/docs/backend/', 'Backend Overview'],
              '/docs/backend/workflows/',
              '/docs/backend/triggers/',
              '/docs/backend/plugins/'
            ]
          },
          {
            title: 'Frontend',
            collapsable: true,
            children: [
              ['/docs/frontend/', 'Frontend Overview'],
              '/docs/frontend/framework/',
              '/docs/frontend/pages/',
              '/docs/frontend/blocks/',
              '/docs/frontend/handlers/'
            ]
          },
          {
            title: 'Publish',
            collapsable: true,
            children: [
              ['/docs/publish/', 'Publishing Overview'],
              '/docs/publish/docker/',
              '/docs/publish/kubernetes/',
              '/docs/publish/cname/'
            ]
          },
          {
            title: 'Examples',
            collapsable: true,
            children: [
              ['/docs/examples/', 'Common Examples'],
              '/docs/examples/google-oauth/',
              '/docs/examples/login-jwt/',
            ]
          },
          {
            title: 'Recommendations',
            collapsable: true,
            children: [
              ['/docs/recommendations/', 'Best Practices'],
            ]
          },
          {
            title: 'TrainingVideos',
            collapsable: true,
            children: [
              ['/docs/trainingvideos/', 'Overview'],
              
            ]
          }
        ]
      }
    }
  }
