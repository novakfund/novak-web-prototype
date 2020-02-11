exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    //This will match anything with /account in path and create it
    //via the account route
    if (page.path.match(/^\/account/)) {
      page.matchPath = "/account/*"
  
      // Update the page.
      createPage(page)
    }
  }