module.exports = {
  SiteTitle: 'Uday Datar',
  Sitelogo: 'Uday Datar',
  SiteLogoText: 'Uday Datar',
  SiteAuthor: 'Uday Datar',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/datkarrr',
    github: 'https://github.com/udaydatar7?tab=repositories',
    linkedin: '@',
  },
  SiteAddress: {
    city: 'Gurgaon',
    region: 'Haryana ',
    country: 'India',
    zipCode: '122018',
  },
  SiteContact: {
    email: 'udaydatar7@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
