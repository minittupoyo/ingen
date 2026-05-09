# Design System: みにっつ (ingen)

このドキュメントでは、「みにっつ」プロジェクトのデザイン規則と視覚的アイデンティティについて記述します。

## 1. デザインコンセプト
「超個人的忘備録」として、シンプルかつ清潔感があり、親しみやすい（Warm & Modern）デザインを目指しています。

## 2. カラーパレット

### アクセントカラー
- **Primary (Orange):** `orange-500` (#f97316)
  - アクションボタン（Blogボタン）、重要なテキスト、リンクのホバー状態などで使用。

### ベースカラー
- **Text (Main):** `zinc-900` / `slate-900`
- **Text (Secondary):** `zinc-700` / `zinc-500`
- **Background:** `white` (#ffffff)
- **Border/Shadow:** `zinc-200`

### カード・プレースホルダー (Blog Emoji Backgrounds)
ブログ投稿のサムネイル（絵文字背景）には、以下のパステルカラーがランダムに使用されます：
- `bg-orange-50`, `bg-emerald-50`, `bg-pink-50`, `bg-sky-50`, `bg-violet-50`, `bg-amber-50`, `bg-rose-50`, `bg-cyan-50`

## 3. タイポグラフィ

### フォント
- **欧文:** `Inter Variable`
- **和文:** `Noto Sans JP Variable`
- **フォールバック:** `sans-serif`

### フォントサイズ・ウェイト
- **Hero Title:** `text-4xl` (Mobile) / `text-6xl` (Desktop), `font-bold`
- **Section Heading:** `text-2xl`, `font-bold`
- **Post Title (Card):** `text-xl`, `font-bold`
- **Body:** `text-base` / `text-lg` (Hero subtext), `font-medium`

## 4. コンポーネント規則

### Hero Section (Index)
- **構造:** 中央揃え、垂直方向のゆとり（py-20〜36）。
- **装飾:** 
  - `border-zinc-200`
  - `rounded-lg`
  - `shadow-xl shadow-zinc-200`
- **インタラクション:**
  - プライマリボタン: 背景 `orange-500`, 文字 `white`, `rounded-full`
  - セカンダリボタン: 文字 `orange-500`, `rounded-full`

### Blog Post Card
- **構造:** 縦型カード、上部に `aspect-video` の絵文字エリア、下部にコンテンツ。
- **装飾:** `border-zinc-200`, `rounded-lg`, `shadow-zinc-200`
- **インタラクション:** 
  - ホバー時に `-translate-y-1`
  - ホバー時に `shadow-xl` への拡大

### リンクカード (Remark Link Card Plus)
- **構造:** 水平（Desktop）または垂直反転（Mobile）レイアウト。
- **装飾:** `border-zinc-200`, `rounded-lg`, `shadow-zinc-200`
- **ホバー:** `-translate-y-1`, `shadow-lg`

## 5. レイアウト・スペーシング

- **Container:** `max-w-7xl`, `mx-auto`, `px-6`
- **Section Spacing:** 基本的に `py-8` または `py-16` でセクションを区切る。
- **Grid:** 
  - 最近の投稿: `grid-cols-1` (Mobile) / `md:grid-cols-2` / `lg:grid-cols-3`
  - ギャップ: `gap-4`

## 6. ライティング・トーン
- 英語と日本語の併記（例: 最近の投稿 / Recent Posts）
- 親しみやすいが、技術的な正確さを失わない（例: `[Object, String]` のような遊び心のあるタグ）
