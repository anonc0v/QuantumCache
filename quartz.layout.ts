import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
const homepageTitle = "Lomana's archive"
const recentNotesConfig = { 
  showTags: false, 
  title: "Recently edited notes:", 
  showDate: true,
  linkToMore: "meta/" + modifiedListTitle as SimpleSlug,
  excludeTags: ["recents-exclude"],
  filter: (f: QuartzPluginData) => !f.slug!.startsWith("tags/")
}
const modifiedListTitle = "All-files-chronologically-modified"
const mapTitle = "Map"
const backlinksConfig = {
  excludeTags: ["backlinks-exclude"]
}
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: [homepageTitle, mapTitle] },
      Component.RecentNotes(recentNotesConfig)
    ), ],
    // Component.OnlyFor(
    //   {titles: ["Eilleen's (online!) Everything Notebook"] }, 
    //   Component.MobileOnly(Component.Backlinks())
    // ) this part is to show example of a second component working w backlinks too
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
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.OnlyFor({titles: [mapTitle]}, Component.Explorer(explorerConfig))
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.RecentNotes(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
