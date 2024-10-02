import React from 'react'
import styles from './Gridsystem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Gridsystem({ children }) {
  return (
    <div className={cx('layout-grid')}>
      <div className={cx('item')}>
        {children}
      </div>
    </div>
  )
}

export default Gridsystem