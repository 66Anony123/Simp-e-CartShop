import React from 'react'
import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiAction } from '../store/ui-slice'
function Notification({type,message}) {
const notification = useSelector((state)=>state.ui.notification)
const dispatch = useDispatch();
function handleClose()
{
dispatch(uiAction.showNotification({
    open : false
}))
}
    return (
        <div>
   {notification.open &&  <div><Alert onClose={handleClose} severity={type} />{message}</div>}
   </div>
  )
}

export default Notification