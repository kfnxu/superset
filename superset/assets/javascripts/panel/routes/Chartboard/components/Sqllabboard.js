import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import PageBase from '../../../components/PageBase';
import PropTypes from 'prop-types'
import SqllabboardViewPage from '../../../../SqlLab/view';

export const Sqllabboard = (props) => {
  const styles = {
    actionButton: {
      marginLeft: 5
    }
  }

  return (
  <PageBase>
  <div style={{ margin: '0 auto' }} >
     {<SqllabboardViewPage {...props} />}
  </div>
  </PageBase>

 )
}

Sqllabboard.propTypes = {
  sqllabboardDNode     : PropTypes.string.isRequired,
  dataAsync : PropTypes.func.isRequired,
  insertChartToTarger   : PropTypes.func.isRequired
}

export default Sqllabboard
