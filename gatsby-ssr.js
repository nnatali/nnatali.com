const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  // <script key="my-script" src="https://gatsby.dev/my-script" />
]

const BodyAttributes = {
  // className: "my-body-class"
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}