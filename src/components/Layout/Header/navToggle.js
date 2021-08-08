import styled from "styled-components";
import { colors } from "../../../styles/_variables";

// Settings
// ==================================================
const hamburgerPaddingX = 8;
const hamburgerPaddingY = 8;
const hamburgerLayerWidth = 20;
const hamburgerLayerHeight = 3;
const hamburgerLayerSpacing = 3;
const hamburgerLayerColor = colors.secondary;
const hamburgerLayerBorderRadius = 4;
// const hamburgerHoverOpacity = 1;
const hamburgerActiveLayerColor = hamburgerLayerColor;

const NavToggleInner = styled.span`
  display: block;
  top: 50%;
  margin-top: ${hamburgerLayerHeight / -2}px;

  &,
  &::before,
  &::after {
    width: ${hamburgerLayerWidth}px;
    height: ${hamburgerLayerHeight}px;
    background-color: ${hamburgerLayerColor};
    border-radius: ${hamburgerLayerBorderRadius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ${(hamburgerLayerSpacing + hamburgerLayerHeight) * -1}px;
  }

  &::after {
    bottom: ${(hamburgerLayerSpacing + hamburgerLayerHeight) * -1}px;
  }
`;

const NavToggleBox = styled.span`
  width: ${hamburgerLayerWidth}px;
  height: ${hamburgerLayerHeight * 3 + hamburgerLayerSpacing * 2}px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

const NavToggle = styled.button`
  padding: ${hamburgerPaddingY}px ${hamburgerPaddingX}px;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  line-height: 1;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &.is-active {
    ${NavToggleInner} {
      &,
      &::before,
      &::after {
        background-color: ${hamburgerActiveLayerColor};
      }
    }
  }
`;

const NavToggleSqueeze = styled(NavToggle)`
  ${NavToggleInner} {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }

    &::after {
      transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.is-active {
    ${NavToggleInner} {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
          transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
`;

export default function NavToggleButton({ menuOpen, navToggleClick }) {
  return (
    <NavToggleSqueeze
      className={`d-block d-md-none ${menuOpen ? "is-active" : ""}`}
      type="button"
      onClick={navToggleClick}
    >
      <NavToggleBox>
        <NavToggleInner></NavToggleInner>
      </NavToggleBox>
    </NavToggleSqueeze>
  );
}
