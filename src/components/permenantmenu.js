import React from "react"
import classNames from "classnames"

export const PermenantMenu = props => (
  <nav
    className="nhsuk-contents-list permenant-menu"
    role="navigation"
    aria-label="Pages in this guide"
  >
    <h2 className="nhsuk-u-visually-hidden">Contents</h2>
    <ul className="nhsuk-list">
      {props.data.items.map((item, key) => {
        let linkClasses = classNames({
          "app-side-nav__item": true,
          "app-side-nav__item--current": item.selected,
        })
        return (
          <li className={linkClasses} key={key}>
            <a className="app-side-nav__link" href={item.url}>
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
)
