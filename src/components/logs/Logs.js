import React, { useEffect} from 'react'
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions'

const Logs = ({ log2: {logs, loading}, getLogs }) => {

    useEffect(() => {
       getLogs();
    }, [getLogs])

    if(loading || logs === null){
        return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No Logs to show...</p>) : (
                logs.map(log => <LogItem log={log} key={log.id}/>)
            )}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    log2: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs)
