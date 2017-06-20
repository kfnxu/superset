import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'
//import ExploreViewPage from '../../../../explore/view';
import DashboardViewPage from '../../../../dashboard/view';

export const Chartboard = (props) => {
  const styles = {
    actionButton: {
      marginLeft: 5
    }
  }

  return (

  <div style={{ margin: '0 auto' }} >
     {/*{<ExploreViewPage {...props} />}*/}
     {<DashboardViewPage {...props} />}
  </div>

 )
}

Chartboard.propTypes = {
  chartboardDNode     : PropTypes.string.isRequired,
  dataAsync : PropTypes.func.isRequired,
  insertChartToTarger   : PropTypes.func.isRequired
}

export default Chartboard
