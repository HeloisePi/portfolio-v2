
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\n\t\t<meta name=\"theme-color\"  content=\"#E8D7FF\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t<meta name=\"description\" content=\"Passionnée par le développement frontend depuis maintenant 1 an, je suis à la recherche d’une alternance dans ce domaine, et d’un stage pour le 15 avril.\" />\n\t\t<meta name=\"keywords\" content=\"Héloïse, Pingitore, Portfolio, Dev, développement, développement frontend, frontend, front, alternance, stage, svelte, fullstack, back\"/>\n\t\t<meta name=\"author\" content=\"Héloïse Pingitore\" />\n\t\t<meta name=\"title\" property=\"og:title\" content=\"Portfolio | Héloïse PINGITORE\">\n\t\t<meta name=\"copyright\" content=\"Héloïse Pingitore\" />\n\t\t<meta http-equiv=\"cache-control\" content=\"no-cache\"/>\n\t\t<meta property=\"og:image\" content=\"/images/portrait.webp\" />\n\t\t<meta name=\"twitter:image\" content=\"/images/portrait.webp\">\n\t\t<meta property=\"og:site_name\" content=\"Portfolio | Héloïse PINGITORE\">\n\t\t<meta property=\"og:url\" content=\"https://heloisepingitore.fr\">\n\t\t<meta property=\"og:type\" content=\"website\" />\n\t\t<meta name=\"robots\" content=\"app\"/>\n\t\t<meta name=\"image\" property=\"og:image\" content=\"/images/portrait.webp\">\n\t\t" + head + "\n\t\t<script src=\"src/lib/stores/blotter.min.js\"></script>\n    \t<script src=\"src/lib/stores/slidingDoorMaterial.js\"></script>\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n\t<script src=\"https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js\">\n\t\tconst lenis = new Lenis({\n\t\t// Valeur entre 0 et 1\n\t\t// Valeur par défaut : 0,1\n\t\t// Plus la valeur est faible, plus le scroll sera fluide\n\t\tlerp: 0.001,\n\t\t// Valeur par défaut : 1\n\t\t// Plus la valeur est haute, plus le défilement sera rapide \n\t\twheelMultiplier: 1,\n\t\t});\n\n\t\tfunction raf(time) {\n\t\tlenis.raf(time);\n\t\trequestAnimationFrame(raf);\n\t\t}\n\t\trequestAnimationFrame(raf);\n\n\t</script>\n</html>\n\n\n\n<style>\n\n\nhtml{\n      background-color: #ECECEC;\n    }\n</style>",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1n2d5n5"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
