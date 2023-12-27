function History({history, onChange}) {
  
    const historyItems = history.map((item, index)=> {
      return (
        <li key={index} className='history-item' onClick={() => onChange(index)}>
          This is step {index + 1}
        </li>
      )
    });
  
    return (
      <div>
        <h2 className='history-title'>History</h2>
        <p>点击查看历史回溯</p>
        <ul className='history-list'>{historyItems}</ul>
      </div>
    )
  }
  
  export default History;