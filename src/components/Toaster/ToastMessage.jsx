import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { TOAST_TYPE } from "../../Constants/constant";
import { clearToastMessage } from "../../store/actions/general.actions";
import { getToastMessage } from "../../store/selector/general.selector";

const ToastMessage = (props) => {
  const dispatch = useDispatch();
  const message = useSelector(getToastMessage);
  useEffect(() => {
    if (message) {
      if (message.type === TOAST_TYPE.SUCCESS) {
        toast.success(message.title);
      } else if (message.type === TOAST_TYPE.ERROR) {
        toast.error(message.title);
      } else {
        toast(message.title);
      }
    }
    dispatch(clearToastMessage());
  }, [message]);
  return <></>;
};

export default ToastMessage;
