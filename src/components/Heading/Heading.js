import React from 'react';
import PropTypes from 'prop-types';
import { Heading as HeadingM } from '@looker/components'

/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-button--docs
 */
function Heading(props) {
  return (
    <HeadingM {...props}>
      {props.children}
    </HeadingM>
  )
}

Heading.propTypes = {

  /**
   * The text of the heading.
   * @uxpinpropname text
   * */
  children: PropTypes.node,

  /**
  * Heading level from h1-h6
  * */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

  /**
  * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
  * */
  color: PropTypes.oneOf([
    "key",
    "critical",
    "neutral",
    "calculation",
    "dimension",
    "inform",
    "link",
    "measure",
    "positive",
    "warn"]),

  /**
  * Defines size of the headline
  * */
  fontSize: PropTypes.oneOf(["small", "xxsmall", "xsmall", "medium", "large", "xlarge", "xxlarge", "xxxlarge", "xxxxlarge"]),
  /**
  * Use a @looker/components FontWeights to set weight normal, medium, semiBold, bold
  * */
  fontWeight: PropTypes.oneOf(["normal", "medium", "semiBold", "bold"]),

  textAlign: PropTypes.oneOf(["left", "right", "center"]),

  textTransform: PropTypes.oneOf(["inherit", "none", "-moz-initial", "initial", "revert", "unset", "capitalize", "full-size-kana", "full-width", "lowercase",
    "uppercase"]),
  /**
  * Truncate text
  * */
  truncate: PropTypes.bool,
  /**
  * Truncate at a specified number of lines (whole number)
  * */
  truncateLines: PropTypes.number,
  /**
  * Should browser insert line breaks within words to prevent text from overflowing its content box
  * */
  breakword: PropTypes.bool,

  textDecoration: PropTypes.string,
}

export default Heading;