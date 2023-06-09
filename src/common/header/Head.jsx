import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +99451-123-45-67</label>
            <i className='fa fa-envelope'></i>
            <label> example@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>AZE</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
