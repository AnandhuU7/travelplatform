import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_cF5nCIYH.mjs';
import { a as $$Callout } from './gridcall_Cb0YpSlO.mjs';
import 'clsx';

const frontmatter = {
  "title": "U.A.E Visit Visa",
  "subtitle": "",
  "author": "Houston",
  "slug": "post-13",
  "id": 13,
  "description": "Required",
  "link": "",
  "pubDate": "2024-02-06T00:00:00.000Z",
  "cardImage": "/src/assets/serviceimg/service32.jpg",
  "cardImageAlt": "Required",
  "stars": 3,
  "details": ["dgdfgh"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "96 Hours Transit Visa (Ticket required for onward journey to third country/final destination)"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "30 Days"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "60 Days"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "new",
      children: "Required Documents to apply"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "Guarantor’s passport and visa copies"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "Guarantor’s Emirates ID copy"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "visitor’s passport copy with White Background photo"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "visitor’s passport-size photograph"
    }), "\n", createVNode($$Callout, {
      icon: "",
      type: "warning",
      children: "Additional cash deposit (fully refundable) may be required for certain nationalities"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/services/post-13.mdx";
const file = "C:/Users/anand/OneDrive/Desktop/proje/travelplatform/src/content/services/post-13.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/anand/OneDrive/Desktop/proje/travelplatform/src/content/services/post-13.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
