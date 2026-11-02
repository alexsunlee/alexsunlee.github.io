import { QuartzComponentConstructor } from "./types"

// The poem at the bottom of the right sidebar, with 坐井说天阔 linking to the YouTube channel.
function Poem() {
  return (
    <div class="poem-side">
      <p>本是后山人，偶作前堂客。</p>
      <p>
        醉舞经阁半卷书，
        <a
          class="poem-link"
          href="https://www.youtube.com/@alexsunrise1984"
          target="_blank"
          rel="noopener"
          title="我的 YouTube 频道"
        >
          坐井说天阔
        </a>
        。
      </p>
      <p>大志戏功名，海斗量福祸。</p>
      <p>论到囊中羞涩时，怒指乾坤错。</p>
    </div>
  )
}

export default (() => Poem) satisfies QuartzComponentConstructor
