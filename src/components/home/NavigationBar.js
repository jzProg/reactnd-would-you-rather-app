function NavigationBar({ component: Component, extraData, ...props }) {
  const { selected, categories, onToggle, navColor } = props;

  function calculateStyle() {
    let itemsNum = categories.length;
    if (extraData) { // if extra component
      itemsNum++;
    }
    return 12/itemsNum;
  }

  return (
    <div className="container"
         style={{ backgroundColor: navColor.color, width: '100%', fontFamily: 'Open Sans' }}>
      <div className="row">
        {categories.map((item, index) => (
         <div className={`col-md-${calculateStyle()} navItem`}
              style={{  backgroundColor: index === selected ? navColor.selectionColor : '' }}
              key={index}
              onClick={() => onToggle(index)}>
           <b>{ item.text }</b>
         </div>
        ))}
        <Component data={extraData} />
      </div>
    </div>
  )
}

export default NavigationBar;
