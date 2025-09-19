export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1-sans.png","2-sans.png","3-sans.png","L246.gif","bible.png","favicon.png","fonts/Alice-Regular-webfont.woff","fonts/NotoNastaliqUrdu-Regular.ttf","fonts/NotoNastaliqUrdu-VariableFont_wght.ttf","fonts/me_quran.ttf","fonts/me_quran2.1.ttf","fonts/me_quran2.ttf","khateeb.png","logo.svg","quran.png","quranflow.png","seerah.png","sign-in.png","spinner.gif","springs.png","teacher.png","translations/english/eng-abdelhaleem.json","translations/english/urd-abulaalamaududi.json","whiteboard.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".woff":"font/woff",".ttf":"font/ttf",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.D6KmevPb.js",app:"_app/immutable/entry/app.b4UPIbnW.js",imports:["_app/immutable/entry/start.D6KmevPb.js","_app/immutable/chunks/Bhu3VMNA.js","_app/immutable/chunks/Dl-CPQHr.js","_app/immutable/chunks/Bw5yv6R4.js","_app/immutable/chunks/C1MhRY74.js","_app/immutable/entry/app.b4UPIbnW.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/Dl-CPQHr.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/35.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js')),
			__memo(() => import('../output/server/nodes/38.js')),
			__memo(() => import('../output/server/nodes/39.js')),
			__memo(() => import('../output/server/nodes/40.js')),
			__memo(() => import('../output/server/nodes/41.js')),
			__memo(() => import('../output/server/nodes/42.js')),
			__memo(() => import('../output/server/nodes/43.js')),
			__memo(() => import('../output/server/nodes/44.js')),
			__memo(() => import('../output/server/nodes/45.js')),
			__memo(() => import('../output/server/nodes/46.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/arabic/verbs",
				pattern: /^\/arabic\/verbs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bibleflow",
				pattern: /^\/bibleflow\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/chapters",
				pattern: /^\/chapters\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/chapters/[id]",
				pattern: /^\/chapters\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/content_playlists",
				pattern: /^\/content_playlists\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/content_playlists/[id]",
				pattern: /^\/content_playlists\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/games/iraaber",
				pattern: /^\/games\/iraaber\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/games/iraaber/[verse]",
				pattern: /^\/games\/iraaber\/([^/]+?)\/?$/,
				params: [{"name":"verse","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/games/[id]",
				pattern: /^\/games\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/games/[id]/edit",
				pattern: /^\/games\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/labs",
				pattern: /^\/labs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/labs/arabic/isms/nahw",
				pattern: /^\/labs\/arabic\/isms\/nahw\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/labs/arabic/sarf/forms",
				pattern: /^\/labs\/arabic\/sarf\/forms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/labs/arabic/sarf/verse_forms",
				pattern: /^\/labs\/arabic\/sarf\/verse_forms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/labs/arabic/sarf/verse_forms/interact/[code]",
				pattern: /^\/labs\/arabic\/sarf\/verse_forms\/interact\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/labs/arabic/verbs/conjugator",
				pattern: /^\/labs\/arabic\/verbs\/conjugator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/labs/greek/verbs/conjugator",
				pattern: /^\/labs\/greek\/verbs\/conjugator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/labs/hebrew/verbs/conjugator",
				pattern: /^\/labs\/hebrew\/verbs\/conjugator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/pager",
				pattern: /^\/pager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/planner",
				pattern: /^\/planner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/progress",
				pattern: /^\/progress\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/quranflow",
				pattern: /^\/quranflow\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/quranflow/sketcher",
				pattern: /^\/quranflow\/sketcher\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/quranflow/slides-maker",
				pattern: /^\/quranflow\/slides-maker\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/quranflow/[verses]",
				pattern: /^\/quranflow\/([^/]+?)\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/quranflow/[verses]/slides",
				pattern: /^\/quranflow\/([^/]+?)\/slides\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/quranflow/[verses]/[language]",
				pattern: /^\/quranflow\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false},{"name":"language","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/quranflow/[verses]/[language]/slides",
				pattern: /^\/quranflow\/([^/]+?)\/([^/]+?)\/slides\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false},{"name":"language","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/quranflow/[verses]/[language]/slides/notes",
				pattern: /^\/quranflow\/([^/]+?)\/([^/]+?)\/slides\/notes\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false},{"name":"language","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/quran/randomizer",
				pattern: /^\/quran\/randomizer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/quran/verses/[verses]",
				pattern: /^\/quran\/verses\/([^/]+?)\/?$/,
				params: [{"name":"verses","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/quran/words/synonyms",
				pattern: /^\/quran\/words\/synonyms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/rooms/[code]",
				pattern: /^\/rooms\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/schedule",
				pattern: /^\/schedule\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/springs",
				pattern: /^\/springs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/students",
				pattern: /^\/students\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/teachers",
				pattern: /^\/teachers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/testing",
				pattern: /^\/testing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/testing/dashboard",
				pattern: /^\/testing\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/whiteboard",
				pattern: /^\/whiteboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/whiteboard/v2",
				pattern: /^\/whiteboard\/v2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
