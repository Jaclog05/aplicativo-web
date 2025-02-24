import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './ProgressBarComponent.module.css';

function ProgressBarComponent({questionId, questionsLength}) {
  const now = Math.ceil((questionId/questionsLength)*100);
  return <ProgressBar className={styles.customProgress} now={now} label={`${now}%`} />;
}

export default ProgressBarComponent