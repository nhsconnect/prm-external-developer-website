import React from "react"

export const PermenantMenu = props => (
  <nav
    className="nhsuk-contents-list permenant-menu"
    role="navigation"
    aria-label="Pages in this guide"
  >
    <h2 className="nhsuk-u-visually-hidden">Contents</h2>
    <ol className="nhsuk-list">
      {props.data.items.map((item, key) => (
        <li className="app-side-nav__item" key={key}>
          <a className="app-side-nav__link" href={item.url}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  </nav>
)
