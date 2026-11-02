import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import PoemFooter from "./quartz/components/PoemFooter"

const config = await loadQuartzConfig()
export const layout = await loadQuartzLayout()

// The poem footer on every page type. Page types copy the footer before overrides apply, so set each one,
// and swap in a dispatcher built from this layout: the config loader's own dispatcher never sees quartz.ts.
const footer = [PoemFooter()]
layout.defaults.footer = footer
for (const pageType of Object.values(layout.byPageType)) pageType.footer = footer
const at = config.plugins.emitters.findIndex((e) => e.name === "PageTypeDispatcher")
config.plugins.emitters[at] = PageTypes.PageTypeDispatcher(layout)

export default config
