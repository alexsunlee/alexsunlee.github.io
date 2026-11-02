import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import Poem from "./quartz/components/Poem"

const config = await loadQuartzConfig()
export const layout = await loadQuartzLayout()

// The poem at the bottom of the right sidebar on every page type, then a dispatcher built from this layout:
// the config loader's own dispatcher never sees quartz.ts.
const poem = Poem()
layout.defaults.right = [...(layout.defaults.right ?? []), poem]
for (const pageType of Object.values(layout.byPageType)) {
  if (pageType.right) pageType.right = [...pageType.right, poem]
}
const at = config.plugins.emitters.findIndex((e) => e.name === "PageTypeDispatcher")
config.plugins.emitters[at] = PageTypes.PageTypeDispatcher(layout)

export default config
