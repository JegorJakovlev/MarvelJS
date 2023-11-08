const Spinner = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', background: 'none', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(50,50)">
          <g transform="rotate(0)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="1">
              <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="1s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>
      </svg>
    );
  };
  
  export default Spinner;
  