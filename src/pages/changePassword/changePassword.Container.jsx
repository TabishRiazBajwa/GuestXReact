import { connect } from "react-redux";
import ChangePassword from "./changePassword";
import { resetPasswordRequest } from "../../store/actions/auth.actions";
import { changePasswordErrorSelector, changePasswordLoadingSelector, changePasswordSuccessSelector } from "../../store/selector/auth.selector";
const mapDispatchToProps = {
  resetPasswordRequest
};

const mapStateToProps = (state) => {
  const changePasswordError = changePasswordErrorSelector(state);
  const changePasswordLoading = changePasswordLoadingSelector(state);
  const changePasswordSuccess = changePasswordSuccessSelector(state);



  return {
    changePasswordError,
    changePasswordLoading,
    changePasswordSuccess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
