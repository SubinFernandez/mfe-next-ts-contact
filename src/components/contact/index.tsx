import React from 'react'

import styles from './contact.module.scss'

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <h1>Contact Us</h1>
        <p>Hello, I&apos;m the <strong>contact</strong> module</p>
        <p>I&apos;m from https://mfe-next-ts-contact.vercel.app/</p>

        <div className={styles.contact_box}>
          <div className={styles.contact_box__icon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="32" height="32" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className={styles.contact_box__phone_number}>0800 800150</div>
        </div>
      </section>
    </div>
  )
}

export default Contact
