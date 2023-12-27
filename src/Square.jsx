function Square({ value, index, onClick }){
    return (
        <div className='square' onClick={ ()=>onClick(index)}>{value}</div>
    )
}

export default Square