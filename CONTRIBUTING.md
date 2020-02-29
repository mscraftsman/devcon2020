# Contributing to the Developers Conference 2020 website

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to DevCon2020. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Goals

- A website that has useful information about the conference.
- A sessions schedule interface that is easy to use.

# 1. Before you start, READ SECTION 1.1

## 1.1 Technology Stack

- HTML/CSS 😜
- Vuejs + Vuex
- TailwindCSS 
- Github
- Netlify CI
- Google Spreadsheet as a CMS(sponsors and stats)

## 1.2 Design

We don't have a design ! Just a theme. The discussions for this is taking place in the MSCC slack. Please join us over there!

# 2. Where to begin

- The first part of the project will be mostly Front-end Development(VueJS)
- Take a look at the [Project Board](https://github.com/mscraftsman/devcon2020/projects/1)
- It is likely there are open [issues](https://github.com/mscraftsman/devcon2020/issues) that you can help with.

# 3. How to contribute

1. [Pick an Issue](https://github.com/mscraftsman/devcon2020/issues) or Create an issue to help with
2. Comment on the issue and let everyone know you'll be helping on this. (to avoid duplicates)
3. Clone the `develop` branch and resolve the issue locally.
4. Make a merge request to the `develop` branch
5. One of the maintainers will review the PR and merge, else there will be comments if adjustments are required.

# 4. Deployment to Staging

We're using Netlify as a our 'staging' server during development.

You should be able to see the sites here :

Netlify Staging : https://devcon2020.netlify.com/

Once a maintainer merges new changes in the branch `develop`, netlify will
automatically trigger a new build pipeline and after a few minutes the changes will be shown on the staging website.

[Click here to view the staging website &raquo; ](https://devcon2020.netlify.com/)
