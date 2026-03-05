import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.PageTitle(),
    Component.ArticleTitle(),
    //Component.ContentMeta(),
    //Component.TagList(),
    Component.ConditionalRender({
      component: Component.RecentNotes({ title: "Articles", limit: 100 }),
      condition: (page) => page.fileData.slug === "index",
    }),
    /*Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),*/

  ],
  left: [
    // Component.PageTitle(),
    /*Component.Explorer({
      title: "Articles"
    }),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }), */
    
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
  Component.PageTitle(),
  Component.ArticleTitle(),
  Component.ContentMeta(),
  Component.TagList(),
  Component.ConditionalRender({
    component: Component.FolderContent({ showFolderCount: false }),
    condition: (page) => page.fileData.slug === "index",
  }),
],
  left: [
    
    Component.MobileOnly(Component.Spacer()),
    /*Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),*/
    // Component.Explorer(),
  ],
  right: [],
}
