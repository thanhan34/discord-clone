import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice';
import './SidebarChannel.css'
function SidebarChannel({ id, channel }) {
    const dispath = useDispatch();
    return (
        <div className="sidebarChannel" onClick={() => dispath(setChannelInfo({
            channelId: id,
            channelName: channel
        }))}>
            <h4><span className="sidebarChannel__hash">#</span>{channel}</h4>
        </div>
    )
}

export default SidebarChannel
