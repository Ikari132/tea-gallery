import './Home.css.proxy.js';
/* src/pages/Home.svelte generated by Svelte v3.29.7 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from "../../web_modules/svelte/internal.js";

import { _ } from "../../web_modules/svelte-i18n.js";
import { navigate } from "../../web_modules/svelte-routing.js";
import TeaCard from "../components/TeaCard.js";
import LinkButton from "../components/LinkButton.js";
import { currentTeaStore } from "../stores/currentTeaStore.js";
import { galleryStore } from "../stores/galleryStore.js";
import { CATEGORIES_COLOR } from "./constants.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (47:14) {#each teaGroup.list as tea}
function create_each_block_1(ctx) {
	let teacard;
	let t;
	let current;
	teacard = new TeaCard({ props: { tea: /*tea*/ ctx[2] } });
	teacard.$on("select", /*handleTeaSelect*/ ctx[1]);

	return {
		c() {
			create_component(teacard.$$.fragment);
			t = space();
		},
		m(target, anchor) {
			mount_component(teacard, target, anchor);
			insert(target, t, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(teacard.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(teacard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(teacard, detaching);
			if (detaching) detach(t);
		}
	};
}

// (38:8) {#each gallery as teaGroup}
function create_each_block(ctx) {
	let div2;
	let h2;
	let div0;
	let t0;
	let t1_value = /*teaGroup*/ ctx[4].name + "";
	let t1;
	let t2;
	let div1;
	let t3;
	let current;
	let each_value_1 = /*teaGroup*/ ctx[4].list;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div2 = element("div");
			h2 = element("h2");
			div0 = element("div");
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			attr(div0, "class", "w-4 rounded-full");
			set_style(div0, "background-color", CATEGORIES_COLOR[/*teaGroup*/ ctx[4].name.toUpperCase()]);
			attr(h2, "class", "bg-gray-100 rounded-xl shadow p-4");
			attr(div1, "class", "flex flex-row");
			attr(div2, "class", "flex flex-col my-4");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, h2);
			append(h2, div0);
			append(h2, t0);
			append(h2, t1);
			append(div2, t2);
			append(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			append(div2, t3);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*gallery, handleTeaSelect*/ 3) {
				each_value_1 = /*teaGroup*/ ctx[4].list;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let div2;
	let h1;
	let t1;
	let div1;
	let h2;
	let t3;
	let div0;
	let current;
	let each_value = /*gallery*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div3 = element("div");
			div2 = element("div");
			h1 = element("h1");
			h1.textContent = "Hi, User";
			t1 = space();
			div1 = element("div");
			h2 = element("h2");
			h2.textContent = "Tea gallery";
			t3 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(h1, "class", "ps-4 p-4 flex font-xl font-bold");
			attr(h2, "class", "font-md font-bold");
			attr(div0, "class", "flex flex-col");
			attr(div1, "class", "bg-white rounded-xl shadow p-4");
			attr(div2, "class", "wrapper flex flex-col svelte-1uayu20");
			attr(div3, "class", "flex flex-col items-center justify-center");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, h1);
			append(div2, t1);
			append(div2, div1);
			append(div1, h2);
			append(div1, t3);
			append(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*gallery, handleTeaSelect, CATEGORIES_COLOR*/ 3) {
				each_value = /*gallery*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $galleryStore;
	component_subscribe($$self, galleryStore, $$value => $$invalidate(3, $galleryStore = $$value));
	const gallery = $galleryStore;
	let tea = gallery[0]?.list[0];

	// let tea = (gallery as any)["Зеленый"]?.teaList[0];
	console.log("tea", tea, gallery);

	// let currentTea;
	// const unsubscribeCurrentTeaStore = currentTeaStore.subscribe((val) => {
	//   currentTea = val;
	// });
	// $: {
	//   console.log("tea", tea);
	//   currentTeaStore.update((val) => tea);
	// }
	function handleTeaSelect(e) {
		const tea = e.detail;
		console.log("tea select", tea);
		currentTeaStore.update(val => tea);
		navigate("/brew/method");
	}

	return [gallery, handleTeaSelect, tea];
}

class Home extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Home;