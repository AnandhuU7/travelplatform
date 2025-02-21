import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CIkRzRWx.mjs';
import 'clsx';

const frontmatter = {
  "title": "Visa Change by Flight",
  "subtitle": "greer",
  "author": "Houston",
  "slug": "post-2",
  "id": 2,
  "description": "Visa Change by Flight. This service is only available for those who have a valid visa in their passport. The service is usually used to change the visa for a new one.",
  "link": "",
  "pubDate": "2024-02-06T00:00:00.000Z",
  "cardImage": "/src/assets/serviceimg/service21.jpg",
  "cardImageAlt": "service-image",
  "stars": 3,
  "publishedTime": "2024-11-02",
  "modifiedTime": "2024-11-02",
  "details": ["dgdfgh"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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

const url = "src/content/services/post-2.mdx";
const file = "C:/Users/anand/OneDrive/Desktop/proje/travelplatform/src/content/services/post-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/anand/OneDrive/Desktop/proje/travelplatform/src/content/services/post-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
