import React from 'react'
import styles from './OptionButton.module.css'
import ThumbUpIcon from '../../assets/thumb-up-icon.svg'
import ThumbDownIcon from '../../assets/thumb-down-icon.svg'

function OptionButton({option, value}) {
  function showIcon(option) {
    if(option == 'Si' || option == 'Bueno' || option == 'Es agradable') {
      return <img src={ThumbUpIcon} alt='thumb-up-icon' className={styles.icon}/>
    }else if(option == 'No' || option == 'Malo' || option == 'No me agrada') {
      return <img src={ThumbDownIcon} alt='thumb-down-icon' className={styles.icon}/>
    }else {
      return;
    }
  }
  return (
    <button type="button" key={option} className={styles.options} value={value}>
      { showIcon(option) }
      {option}
    </button>
  )
}

export default OptionButton