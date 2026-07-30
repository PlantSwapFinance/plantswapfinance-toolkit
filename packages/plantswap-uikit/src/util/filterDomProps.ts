import isPropValid from "@emotion/is-prop-valid";

/**
 * styled-components v6 dropped the automatic prop filtering that v5 did out of the box, so every
 * prop is now forwarded to the underlying element. Pass this to `.withConfig()` on styled host
 * elements (`styled.div`, `styled.button`, ...) that accept custom props, otherwise props such as
 * `variant`, `scale` or `isPushed` are rendered as invalid HTML attributes.
 */
const filterDomProps = {
  shouldForwardProp: (prop: string): boolean => isPropValid(prop),
};

export default filterDomProps;
