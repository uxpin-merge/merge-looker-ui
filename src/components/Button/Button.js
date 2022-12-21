import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonM } from '@looker/components'

/**
 * @uxpindocurl https://looker-open-source.github.io/components/latest/?path=/docs/docs-button--docs
 */
function Button(props) {
  return (
    <ButtonM {...props}>
      {props.children}
    </ButtonM>
  )
}

Button.propTypes = {

  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
  * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
  * */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

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
* Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
* */
  size: PropTypes.oneOf(["small", "xxsmall", "xsmall", "medium", "large"]),

  /**
* If true, the button's width will be set to 100%.
* */
  fullWidth: PropTypes.bool,
  /**
* Shows button as disabled.
* */
  disabled: PropTypes.bool,

}

export default Button;